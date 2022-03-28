import React from "react"
import "./VideoFooter.css"
import { Avatar, Button } from "@mui/material"
import {
  MusicNote,
  Favorite,
  ModeComment,
  Send,
  MoreHoriz,
} from "@mui/icons-material"
import Ticker from "react-ticker"
const VideoFooter = ({ channel, shares, song, likes, avatarSrc }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} . <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNote className="videoFooter__icon" />
        <Ticker mode="smooth">{({ index }) => <h1>{song}</h1>}</Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <Favorite fontSize="large" />
          <ModeComment fontSize="large" />
          <Send fontSize="large" />
          <MoreHoriz fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <Favorite />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeComment />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoFooter
