import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "./api/search";
import { AiOutlineSearch } from "react-icons/ai";
import Loading from "./components/Loading";
import useSearchValue from "./hooks/useSearchValue";
import SearchField from "./components/SearchField";
import usePlayList from "./hooks/usePlayList";
import TrackItem from "./components/TrackItem";
import Player from "./components/Player";
import "./App.css";

function App() {
  const { value, search, setValue } = useSearchValue("");
  const { data, isLoading } = useQuery(["search", search], searchQuery);
  const { currentTrack, setCurrentTrack, nextTrack, prevTrack } =
    usePlayList(data);

  return (
    <div className="App">
      <header className="header">
        <SearchField
          label={<AiOutlineSearch />}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </header>
      {isLoading ? <Loading /> : null}
      {Array.isArray(data)
        ? data.map((track) => (
            <TrackItem
              onClickPlay={(track) => setCurrentTrack(track)}
              key={track.trackId}
              {...track}
            />
          ))
        : null}
      <Player
        track={currentTrack}
        onClickNext={nextTrack}
        onClickPrev={prevTrack}
      />
    </div>
  );
}

export default App;
