
import { HeaderLogo } from "../molecules/HeaderLogo"
import { AboutLobe } from "../molecules/AboutLobe"
export const Header=()=>{
return(
<div className="d-flex align-items-center px-4 py-2" style={{ justifyContent: "space-between" }}>
         <HeaderLogo/>
      <div className="d-flex justify-content-center flex-grow-1"> 
        <AboutLobe />
      </div>
      </div>
)
}
