import os
import math
import json
import tempfile

import cv2
import requests
from flask import Flask, request

MOCK = True if os.environ.get('MOCK', '') else False
SAVEIMG = True if os.environ.get('SAVEIMG', '') else False

def forest_cover(fname):
    return forest_cover_img(cv2.imread(fname))

def forest_cover_img(img):
    if SAVEIMG: cv2.imwrite("img-orig.jpg", img)
    
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    mask = cv2.inRange(hsv, (40, 0, 0), (80, 255,255))

    if SAVEIMG: cv2.imwrite("img-mask.jpg", mask)

    width,height,channel = img.shape

    total = width*height

    forest = cv2.countNonZero(mask)

    return forest/total


app = Flask(__name__)

R = 6371

@app.route('/')
def hello_world():
    return 'okay'

@app.route('/forest-cover')
def get_forest_cover():
    width = int(request.args.get('width', '256'))
    height = int(request.args.get('height', '256'))
    bbox = request.args.get('bbox', '')
    coords = list(map(float, bbox.split(",")))

    lat1, lat2 = coords[0] * math.pi / 180, coords[2] * math.pi / 180
    lon1, lon2 = coords[1] , coords[3]
    
    area = (math.pi/180) * R * R * abs(math.sin(lat1) - math.sin(lat2)) * abs(lon1 - lon2)

    if area < 1:
        area = 1

    cost = area * 100
    
    url = "https://worldwind25.arc.nasa.gov/wms?service=WMS&request=GetMap&version=1.3.0&transparent=TRUE&layers=BlueMarble-200405,esat&styles=&format=image/jpeg&width=%d&height=%d&crs=EPSG:4326&bbox=%s" % (width, height, bbox)

    if MOCK:
        cover = forest_cover("img-orig.jpg")
    else:
        with tempfile.NamedTemporaryFile(dir='/tmp') as tmpfile:
            f = tmpfile.name

        r = requests.get(url, allow_redirects=True)
        open(f, 'wb').write(r.content)
        cover = forest_cover(f)

    area, cost = int(area * cover), int(cover * cost)
    cover = float("%.2f" % (100 * cover))
    
    result = {"cover": cover, "area": area, "cost": cost, "url": url}

    print(result)

    if not MOCK: os.unlink(f)

    return json.dumps(result)
