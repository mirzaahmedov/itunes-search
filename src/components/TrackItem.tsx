import { Track } from "../common/types";
import { AiOutlinePlayCircle } from "react-icons/ai";
import styles from "./track_item.module.css";

type Props = {
  onClickPlay: (track: Partial<Track>) => void;
};

const TrackItem = ({
  artworkUrl60,
  artworkUrl100,
  trackId,
  trackName,
  trackViewUrl,
  artistName,
  artistViewUrl,
  previewUrl,
  collectionName,
  collectionViewUrl,
  onClickPlay,
}: Track & Props) => {
  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLElement).tagName === "A") {
          return;
        }
        onClickPlay({ trackId, previewUrl, trackName, artworkUrl100 });
      }}
      className={styles.container}
    >
      <img
        className={styles.track__artwork}
        src={artworkUrl60}
        alt={artistName}
      />
      <div className={styles.track__info}>
        <h6 className={styles.track__name}>
          <a href={trackViewUrl}>{trackName}</a>
        </h6>
        <ul className={styles.track__info__list}>
          <li>
            <i>by</i>{" "}
            <a className={styles.track__artist} href={artistViewUrl}>
              {artistName}
            </a>
          </li>
          ·
          <li>
            <a className={styles.track__collection} href={collectionViewUrl}>
              {collectionName}
            </a>
          </li>
        </ul>
      </div>
      <button className={styles.playBtn}>
        <AiOutlinePlayCircle />
      </button>
    </div>
  );
};

export default TrackItem;
