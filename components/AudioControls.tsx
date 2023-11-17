import { useRef, useState } from "react";

import PauseSVG from "./svgs/Pause";
import PlaySVG from "./svgs/Play";

export default function AudioControls() {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<HTMLAudioElement>(null);
  return (
    <>
      {playing ? (
        <PauseSVG
          onClick={() => {
            setPlaying(false);
            playerRef.current?.pause();
          }}
        />
      ) : (
        <PlaySVG
          onClick={() => {
            setPlaying(true);
            return playerRef.current?.play();
          }}
        />
      )}
      <audio ref={playerRef} src="/audio/light-piano.mp3" />
    </>
  );
}
