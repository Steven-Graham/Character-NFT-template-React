import React from 'react'

import { Helmet } from 'react-helmet'

import './air-jordan.css'

const AirJordan = (props) => {
  return (
    <div className="air-jordan-container">
      <Helmet>
        <title>Air-Jordan - Character NFT template</title>
        <meta
          property="og:title"
          content="Air-Jordan - Character NFT template"
        />
      </Helmet>
      <div className="air-jordan-cover">
        <img
          alt="image1410"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d11fc99c-0e92-4a45-b350-b08e158400c2/e213b8f1-9493-48dd-bcab-bf4c653b0f8f?org_if_sml=11623006"
          className="air-jordan-image1"
        />
      </div>
    </div>
  )
}

export default AirJordan
