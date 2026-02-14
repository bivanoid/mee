import "../styles/canDo.css"
import { FileBracesCorner, PanelsTopLeft, VectorSquare } from 'lucide-react';
export default function CanDo() {
    return (
        <div className="section-3">
            <div className='title-swiper'>
                <h1>mY <span>eXPERTISE.</span></h1>
            </div>

            <div className="section-3-content">
                <div className="box-i-can-do">
             
                        <FileBracesCorner className="icon"/>
       
                    <h2><span>Web</span><br />Development</h2>
                    <p>website development and maintenance</p>
                </div>
                <div className="box-i-can-do">
            
                        <PanelsTopLeft className="icon"/>
             
                    <h2>UI / UX <span><br />Designer</span></h2>
                    <p>designing the initial design for the website/application</p>
                </div>
                <div className="box-i-can-do">
        
                        <VectorSquare className="icon"/>

                    <h2><span>Graphic</span><br />design</h2>
                    <p>creating a poster or graphic asset</p>
                </div>
            </div>
        </div>
    )
}