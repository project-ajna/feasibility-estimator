import os
import json
import tempfile

import cv2
import requests
from flask import Flask, request

MOCK = False
SAVEIMG = True

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

    percentage = (forest/total)*100

    return percentage


app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'okay'

@app.route('/forest-cover')
def get_forest_cover():
    width = int(request.args.get('width', '256'))
    height = int(request.args.get('height', '256'))
    bbox = request.args.get('bbox', '')
    
    url = "https://worldwind25.arc.nasa.gov/wms?service=WMS&request=GetMap&version=1.3.0&transparent=TRUE&layers=BlueMarble-200405,esat&styles=&format=image/jpeg&width=%d&height=%d&crs=EPSG:4326&bbox=%s" % (width, height, bbox)

    if MOCK:
        cover = float("%.2f" % forest_cover("img-orig.jpg"))
    else:
        with tempfile.NamedTemporaryFile(dir='/tmp') as tmpfile:
            f = tmpfile.name

        r = requests.get(url, allow_redirects=True)
        open(f, 'wb').write(r.content)
        cover = float("%.2f" % forest_cover(f))
    
    result = {"cover": cover, "url": url}

    if not MOCK: os.unlink(f)

    return json.dumps(result)
