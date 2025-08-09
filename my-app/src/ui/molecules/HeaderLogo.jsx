import { LogoIcon } from "../atoms/LogoIcon"
import { LogoText } from "../atoms/LogoText"
export const HeaderLogo=()=>{
    return(
        <div className="d-flex align-items-center">
        <LogoIcon/>
        <LogoText text="Lobe"/>
        </div>
    )
}