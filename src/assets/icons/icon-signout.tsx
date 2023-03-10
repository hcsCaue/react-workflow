type PropsType = {
  color?: string;
  variantColor?: string;
  toVariantColor?: boolean;
};

export const SignOutIcon = ({
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={colorIcon}
      xmlns="http://www.w3.org/2000/svg"
      className="icon_signout"
    >
      <path d="M15,3.849h0a1.02,1.02,0,0,0,.629.926A9,9,0,0,1,21,13.292,9,9,0,0,1,3,13,9,9,0,0,1,8.371,4.776,1.023,1.023,0,0,0,9,3.848H9a1,1,0,0,0-1.374-.929,11,11,0,1,0,8.751,0A1,1,0,0,0,15,3.849Z" />
      <rect x="11" width="2" height="8" rx="1" />
    </svg>
  );
};
