import React, { useState, useRef } from "react"
import "./VideoCard.css"
import VideoHeader from "./VideoHeader"
import VideoFooter from "./VideoFooter"

const VideoCard = ({ url, likes, shares, avatarSrc, channel, song }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  // useRef Hook is used to point to video tag

  const videoRef = useRef(null)

  const onvideoChange = () => {
    if (isVideoPlaying) {
      //stop video
      videoRef.current.pause()
      setIsVideoPlaying(false)
    } else {
      //play video
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className="videoCard">
      {/* video header Component */}
      <VideoHeader />

      <video
        ref={videoRef}
        onClick={onvideoChange}
        className="videoCard__player"
        src={url}
        alt="reel video"
        loopS
      />

      {/* video footer Component */}
      <VideoFooter
        channel={channel}
        song={song}
        avatarSrc={avatarSrc}
        likes={likes}
        shares={shares}
      />
    </div>
  )
}

export default VideoCard
