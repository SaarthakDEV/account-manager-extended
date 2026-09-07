import React from 'react'

const HorizontalRule = ({ classes }: { classes?: string }) => {
  return (
    <div className={`w-full h-0.5 rounded bg-white ${classes}`} />
  )
}

export default HorizontalRule