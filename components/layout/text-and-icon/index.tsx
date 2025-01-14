import styled from "@emotion/styled";

export type TextAndIconProps = {
  src: string;
  text: string;
  iconSize?: string;
  iconSizeMobile?: string;
  fontSize?: string;
  fontSizeMobile?: string;
};
const TextAndIcon = ({
  src,
  text,
  iconSize = "24px",
  iconSizeMobile,
  fontSize = "16px",
  fontSizeMobile,
}: TextAndIconProps) => {
  const sizeProps = { iconSize, iconSizeMobile: iconSizeMobile || iconSize };

  return (
    <Wrap className="text-and-icon" {...sizeProps}>
      <Icon src={src} {...sizeProps} />
      <Text
        fontSize={fontSize}
        fontSizeMobile={fontSizeMobile || fontSize}
        className="icon-text"
      >
        {text}
      </Text>
    </Wrap>
  );
};

const Wrap = styled("div", {
  shouldForwardProp: (prop) => !["iconSize", "iconSizeMobile"].includes(prop),
})<{ iconSize: string; iconSizeMobile: string }>(
  ({ theme, iconSize, iconSizeMobile }) => ({
    display: "grid",
    gridTemplateColumns: `${iconSize} 1fr`,
    alignItems: "center",
    gap: 8,
    width: "100%",

    [theme.breakpoints.mobile]: {
      gridTemplateColumns: `${iconSizeMobile} 1fr`,
    },
  }),
);

const Icon = styled("img", {
  shouldForwardProp: (prop) => !["iconSize", "iconSizeMobile"].includes(prop),
})<{ iconSize: string; iconSizeMobile: string }>(
  ({ theme, iconSize, iconSizeMobile }) => ({
    width: iconSize,
    height: iconSize,

    [theme.breakpoints.mobile]: {
      width: iconSizeMobile,
      height: iconSizeMobile,
    },
  }),
);

const Text = styled("div", {
  shouldForwardProp: (prop) => !["fontSize", "fontSizeMobile"].includes(prop),
})<{ fontSize: string; fontSizeMobile: string }>(
  ({ theme, fontSize, fontSizeMobile }) => ({
    color: theme.colors.blue,
    fontSize: fontSize,
    overflow: "hidden",
    textWrap: "nowrap",
    textOverflow: "ellipsis",

    [theme.breakpoints.mobile]: {
      fontSize: fontSizeMobile,
    },
  }),
);

export default TextAndIcon;
