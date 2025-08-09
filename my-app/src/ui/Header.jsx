import { AboutLobe } from "../molecules/AboutLobe"
import { MainHeading } from "../molecules/MainHeading"
import { Statement } from "../molecules/Statement"
import { BodyHeading } from "../molecules/BodyHeading"
import { HeaderLogo } from "../molecules/HeaderLogo"
export const Header=()=>{
return(
<div>
<AboutLobe/>
      <MainHeading/>
      <Statement/>
      <BodyHeading/>
      <HeaderLogo/>
      </div>
)
}
