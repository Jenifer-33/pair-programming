import { GreenButton } from "../src/atoms/GreenButton"
import { TinyText } from "../atoms/TinyText"

export const AboutLobe=()=>{
    return(
          <div className="d-flex justify-content-center align-items-center gap-5">
        <TinyText text="Overview"/>
        <TinyText text="Example"/>
        <TinyText text="Tour"/>
        <TinyText text="Blog"/>
        <TinyText text="Help"/>
        <GreenButton/>
        </div>
    )
}