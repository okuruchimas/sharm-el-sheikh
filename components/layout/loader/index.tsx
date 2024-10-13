import styled from "@emotion/styled";

const Loader = () => {
  return <LoadingImg src={"/icons/loader.svg"} className="loader" />;
};

const LoadingImg = styled("img")({
  height: "80px",
  width: "80px",
  margin: "auto",

  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  animation: "rotate 2s linear infinite",
});

export default Loader;
