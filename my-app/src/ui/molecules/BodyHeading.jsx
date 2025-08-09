import { HeadingText } from "../atoms/HeadingText";
import { GreenButton } from "../atoms/GreenButton";
export const BodyHeading=()=>{
    return(
        <div  className="text-center" >
          <HeadingText text="Train your app"/>
          <HeadingText text="with Lobe"/>
        <GreenButton />
        </div>
    )
}