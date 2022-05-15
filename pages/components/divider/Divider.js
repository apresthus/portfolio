import { Divider as DividerStyle  } from "./styles/divider"
import { VerticalDivider } from "./styles/divider"
export default function Divider ({color, orientation ="horizontal",height}) {
return (
    
    orientation === "horizontal"?<DividerStyle color={color}/> : <VerticalDivider height={height}/>)
}