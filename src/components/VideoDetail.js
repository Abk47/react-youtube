import React, { Fragment } from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h3>No video Played!</h3>
  } else {
    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <Fragment>
        <div className='ui embed'>
          <iframe src={videoURL} title={video.snippet.title} allowFullScreen allow='accelerometer' />
        </div>
        <div className='ui segment'>
          <h4 className='ui header'>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </Fragment>
    )
  }
}

export default VideoDetail
