import React from "react"

export function DataDisplay({ label, data }) {
  return (
    <div className="bg-grey-light font-mono rounded overflow-hidden ml-2">
      <div className="bg-grey p-2 font-bold">{label}</div>
      <div className="p-2 text-xs">{data}</div>
    </div>
  )
}
