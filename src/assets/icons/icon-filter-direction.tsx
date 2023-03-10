type PropsType = {
  colorDominant?: string;
  variantColor?: string;
  toVariantColor?: boolean;
};

export const FilterDirectionIcon = ({
  colorDominant = "white",
  variantColor = "white",
  toVariantColor = true,
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon_filter_direction"
    >
      <g>
        <path
          d="M22.5,15.5H4.267l1.612-1.64a1.5,1.5,0,1,0-2.14-2.1L.993,14.552a3.515,3.515,0,0,0,0,4.9l2.746,2.793a1.5,1.5,0,0,0,2.14-2.1L4.267,18.5H22.5a1.5,1.5,0,0,0,0-3Z"
          fill={toVariantColor ? variantColor : colorDominant}
        />
        <path
          d="M1.5,8.5H19.733l-1.612,1.64a1.5,1.5,0,1,0,2.14,2.1l2.746-2.793a3.515,3.515,0,0,0,0-4.9L20.261,1.758a1.5,1.5,0,0,0-2.14,2.1L19.733,5.5H1.5a1.5,1.5,0,0,0,0,3Z"
          fill={!toVariantColor ? variantColor : colorDominant}
        />
      </g>
    </svg>
  );
};
