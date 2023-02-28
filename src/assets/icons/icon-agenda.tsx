type PropsType = {
  color?: string;
  variantColor?: string;
  toVariantColor?: boolean;
};

export const AgendaIcon = ({
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
      className="icon_agenda"
    >
      <path d="M0,19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10H0Zm17-4.5A1.5,1.5,0,1,1,15.5,16,1.5,1.5,0,0,1,17,14.5Zm-5,0A1.5,1.5,0,1,1,10.5,16,1.5,1.5,0,0,1,12,14.5Zm-5,0A1.5,1.5,0,1,1,5.5,16,1.5,1.5,0,0,1,7,14.5Z" />
      <path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V8H24V7A5.006,5.006,0,0,0,19,2Z" />
    </svg>
  );
};