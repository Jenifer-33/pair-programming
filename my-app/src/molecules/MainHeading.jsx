import { HeadingText } from "../atoms/HeadingText";
export const MainHeading=()=>{
    return(
        <div className="d-flex justify-content-center align-items-center gap-2">
            <HeadingText text="Lobe"/>
            <HeadingText text="Tour" color="#04ddb2"/>
        </div>
    )
}