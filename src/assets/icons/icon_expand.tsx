type PropsType = {
  color?: string;
  variantColor?: string;
  toVariantColor?: boolean;
};

export const ExpandIcon = ({
  color = "white",
  variantColor,
  toVariantColor,
}: PropsType) => {
  const colorIcon =
    variantColor !== undefined
      ? toVariantColor
        ? variantColor
        : color
      : color;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      scale={1.2}
      viewBox="0 0 512 512"
      fill={colorIcon}
      width="24"
      height="24"
    >
      <g>
        <path d="M85.333,0h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,234.667,0,196.462,0,149.333v-64C0,38.205,38.205,0,85.333,0z" />
        <path d="M362.667,0h64C473.795,0,512,38.205,512,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,38.205,315.538,0,362.667,0z" />
        <path d="M85.333,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,512,0,473.795,0,426.667v-64C0,315.538,38.205,277.333,85.333,277.333z" />
        <path d="M362.667,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64C512,473.795,473.795,512,426.667,512h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,315.538,315.538,277.333,362.667,277.333z" />
      </g>
    </svg>
  );
};
