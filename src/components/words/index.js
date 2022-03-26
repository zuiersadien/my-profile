import React from "react";
import { Minword } from "../minwords";
import { WordsDiv ,H2} from "./styles";

export const Words = () => {
  return (
    <WordsDiv>
      <div>
        <H2>
        Some Things I’ve Built
        </H2>
      </div>
      <div>
        <Minword
          title="Halcyon Theme"
          variant=""
          key="1"
          textp="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more. "
          tecnologias={["VS Code", "Sublime ", "Atom", "iTerm2", "Hyper"]}
          img="https://brittanychiang.com/static/3936989a99991beb6d649d7a7039df60/f47db/demo.avif"
        />

        <Minword
          title="Halcyon Theme"
          variant="bold"
          key="2"
          textp="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more. "
          tecnologias={["VS Code", "Sublime ", "Atom", "iTerm2", "Hyper"]}
          img="https://brittanychiang.com/static/3936989a99991beb6d649d7a7039df60/f47db/demo.avif"
        />
        <Minword
          title="Halcyon Theme"
          variant=""
          key="3"
          textp="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more. "
          tecnologias={["VS Code", "Sublime ", "Atom", "iTerm2", "Hyper"]}
          img="https://brittanychiang.com/static/3936989a99991beb6d649d7a7039df60/f47db/demo.avif"
        />
      </div>
    </WordsDiv>
  );
};
