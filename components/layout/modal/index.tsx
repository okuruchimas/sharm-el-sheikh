import styled from "@emotion/styled";
import type View from "../header/children/type";
import { useRef, type MouseEvent } from "react";
import { css, Global } from "@emotion/react";

type ModalProps = {
  children: View;
  width?: string;
  mWidth?: string;
  maxWidth?: string;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({
  isOpen,
  children,
  width = "60%",
  mWidth = "90%",
  maxWidth,
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
        <ModalWindow
          ref={modalRef}
          width={width}
          mWidth={mWidth}
          maxWidth={maxWidth}
          className="modal-window"
        >
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
  shouldForwardProp: (prop) => !["width", "mWidth", "maxWidth"].includes(prop),
})<{ width: string; mWidth: string; maxWidth?: string }>(
  ({ width, mWidth, maxWidth, theme }) => ({
    width: width,
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0px 1px 3px 1px #00000026",
    position: "relative",
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "95dvh",
    scrollbarWidth: "none",
    ...(maxWidth ? { maxWidth } : {}),

    "&::-webkit-scrollbar": {
      display: "none",
    },

    [theme.breakpoints.mobile]: {
      position: "fixed",
      top: 20,
      width: mWidth,
      padding: "16px",
    },
  }),
);
