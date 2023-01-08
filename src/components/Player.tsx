import { useEffect, useRef, useState } from "react";
import { Track } from "../common/types";
import {
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineFastForward,
  AiOutlineFastBackward,
} from "react-icons/ai";
import styles from "./player.module.css";

const Player = ({
  track,
  onClickNext,
  onClickPrev,
}: {
  track: Partial<Track> | undefined;
  onClickNext: () => void;
  onClickPrev: () => void;
}) => {
  const audio = useRef(new Audio());

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.current.onpause = function () {
      setIsPlaying(false);
    };
    audio.current.onplay = function () {
      setIsPlaying(true);
    };
  }, []);
  useEffect(() => {
    if (track?.previewUrl) {
      audio.current.src = track.previewUrl;
      audio.current.play();
    }
  }, [track]);

  return track ? (
    <div className={styles.container}>
      <img
        className={styles.player__image}
        src={track.artworkUrl100}
        alt={track.trackName}
      />
      <h3 className={styles.player__trackName}>{track.trackName}</h3>
      <div className={styles.player__controls}>
        <button onClick={onClickPrev} className={styles.player__control}>
          <AiOutlineFastBackward />
        </button>
        <button
          className={styles.player__control}
          onClick={() => {
            if (isPlaying) {
              audio.current.pause();
            } else {
              audio.current.play();
            }
          }}
        >
          {isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
        </button>
        <button onClick={onClickNext} className={styles.player__control}>
          <AiOutlineFastForward />
        </button>
      </div>
    </div>
  ) : null;
};

export default Player;
