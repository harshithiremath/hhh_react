import React from "react";
import AudioPlayer from "../../components/AudioPlayer";
import { Helmet } from "react-helmet";
import songs from "./SongsData";

export default function WebPlayer() {
  return (
    <div className="containerPlayer">
      <Helmet>
        <title>AudioPlayer | HHH</title>
      </Helmet>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <h1>HHH AudioPlayer</h1>
      <AudioPlayer songs={songs} />
    </div>
  );
}
