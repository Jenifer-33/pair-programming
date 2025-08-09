import { FooterContent } from "../molecules/FooterContent"
import {Icons} from "../atoms/Icons"
import {Row,Col} from 'react-bootstrap'

export const FooterSection=()=>{
    return(
        <div className="container py-4">
         <Row className="align-items-start">
             <Col sm={10}>
                <FooterContent/>
              </Col>
             <Col sm="1" className="d-flex justify-content-end gap-4 align-items-start">
               <Icons/>
             </Col>
         </Row>
        </div>
    )
}