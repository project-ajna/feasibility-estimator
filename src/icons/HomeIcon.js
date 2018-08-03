import React from "react"

export function HomeIcon({ scale = 1, color = "#000" }) {
  return (
    <svg
      width={17 * scale}
      height={15 * scale}
      viewBox="0 0 17 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-326 -170)" fill={color}>
          <polygon points="332.25 185 328.421875 185 328.421875 177.5 326 177.5 334.125 170 342.25 177.5 339.828125 177.5 339.828125 185 336 185 336 180 332.25 180" />
        </g>
      </g>
    </svg>
  )
}
