type SvgIconProps = {
  // id:  "github" | "moon" | "sun" | "system",
  id: string,
  [x: string]: any
}

const SvgIcon = ({ id, ...props }: SvgIconProps) => (
  <svg aria-hidden focusable="false" { ...props }>
    <use href={`/icons.svg#${id}`} />
  </svg>
)

export default SvgIcon;
