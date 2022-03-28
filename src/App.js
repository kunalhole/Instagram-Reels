import "./App.css"
import VideoCard from "./VideoCard"
import { useState, useEffect } from "react"
import { db } from "./firebase"
import { collection, onSnapshot, doc } from "firebase/firestore"
function App() {
  const [reels, setReels] = useState([])

  // const reelRef = collection(db, "reels")

  useEffect(() => {
    onSnapshot(collection(db, "reels"), (snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    //BEM naming convention
    <div className="app">
      <div className="app__top">
        {/* Image at top-logs */}
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/225px-Instagram_logo_2016.svg.png"
          alt="instalogo"
        />

        {/* Reels Text */}
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {/* scrollable  Reels/Videos container */}

        {/* videos Components */}
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  )
}

export default App
