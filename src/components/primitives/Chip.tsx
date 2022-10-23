import { ChipStyle } from "../../styles/components/Chip"

export const Chip = (prop: any) => {
  return (
    <span sx={ ChipStyle }>{ prop.label }</span>
  )
}
