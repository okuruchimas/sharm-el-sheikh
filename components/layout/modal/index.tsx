import styled from "@emotion/styled";
import type View from "../header/children/type";
import { useRef, type MouseEvent } from "react";
import { css, Global } from "@emotion/react";

type ModalProps = {
  children: View;
  width?: string;
  mWidth?: string;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({
  isOpen,
  children,
  width = "60%",
  mWidth,
  onClose,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return isOpen ? (
    <>
      <Backdrop onClick={handleBackdropClick}>
        <ModalWindow ref={modalRef} width={width} mWidth={mWidth || width}>
          {children}
        </ModalWindow>
      </Backdrop>
      {isOpen ? <Global styles={hiddenOverflow} /> : null}
    </>
  ) : null;
};

const hiddenOverflow = css`
  body {
    overflow: hidden;
  }
`;

export default Modal;

const Backdrop = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(19, 33, 61, 0.4)",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,

  [theme.breakpoints.mobile]: {
    backgroundColor: "rgba(19, 33, 61, 0.6)",
  },
}));

const ModalWindow = styled("div", {
  shouldForwardProp: (prop) => !["width", "mWidth"].includes(prop),
})<{ width: string; mWidth?: string }>(({ theme, width, mWidth }) => ({
  width: width,
  backgroundColor: theme.colors.white,
  borderRadius: "16px",
  padding: "24px",
  boxShadow: theme.shadows[2],
  position: "relative",
  overflowY: "scroll",
  overflowX: "hidden",
  maxHeight: "95dvh",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  [theme.breakpoints.mobile]: {
    borderRadius: "12px",
    width: mWidth,
    padding: "16px",
  },
}));
