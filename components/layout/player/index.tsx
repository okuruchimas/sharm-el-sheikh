import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import styled from "@emotion/styled";

type PlayerProps = {
  videoId: string;
};

const YouTubePlayer = ({ videoId }: PlayerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <PlayerWrapper>
      {isClient ? (
        <YouTube videoId={videoId} opts={opts} className="youtube-player" />
      ) : (
        <Placeholder />
      )}
    </PlayerWrapper>
  );
};

const PlayerWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "520px",
  borderRadius: "30px",
  overflow: "hidden",
  position: "relative",

  [theme.breakpoints.mobile]: {
    borderRadius: "20px",
    height: "234px",
  },

  "& .youtube-player": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

const Placeholder = styled("div")({
  width: "100%",
  height: "100%",
  backgroundColor: "#000000B2",
});

export default YouTubePlayer;
