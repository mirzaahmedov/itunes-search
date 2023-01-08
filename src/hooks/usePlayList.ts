import { useCallback, useState } from "react";
import { Track } from "../common/types";

const usePlayList = (tracks: Track[] | undefined) => {
  const [currentTrack, setCurrentTrack] = useState<Partial<Track>>();

  const nextTrack = useCallback(() => {
    if (!tracks) {
      return;
    }
    const i = tracks.findIndex((v) => v.trackId === currentTrack?.trackId);

    if (i + 1 >= tracks.length) {
      setCurrentTrack(tracks[0]);
    }

    setCurrentTrack(tracks[i + 1]);
  }, [tracks, currentTrack]);
  const prevTrack = useCallback(() => {
    if (!tracks) {
      return;
    }
    const i = tracks.findIndex((v) => v.trackId === currentTrack?.trackId);

    if (i - 1 < 0) {
      setCurrentTrack(tracks[tracks.length - 1]);
    }

    setCurrentTrack(tracks[i - 1]);
  }, [tracks, currentTrack]);

  return { currentTrack, setCurrentTrack, nextTrack, prevTrack };
};

export default usePlayList;
