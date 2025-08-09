import { General } from "../atoms/General"
import { Resources } from "../atoms/Resources"
import {About} from "../atoms/About"

export const FooterContent=()=>{
    return(
    <div className="d-flex justify-content-center">
    <div className="d-flex justify-content-between align-items-center" style={{width:"388px"}}>
    <About/>
    <General/>
    <div className="d-flex align-items-start gap-3">
    <Resources/>
    </div>  
    </div>
    </div>
    )
}