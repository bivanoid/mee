import "../styles/canDo.css"

export default function CanDo() {
    return (
        <div className="section-3">
            <div className='title-swiper'>
                <h1>What i <span>can Do.</span></h1>
            </div>

            <div className="section-3-content">
                <div className="box-i-can-do">
                    <div className="icon">
                        <i className="fi fi-rs-display-code"></i>
                    </div>
                    <h2><span>Web</span><br />Development</h2>
                    <p>website development and maintenance</p>
                </div>
                <div className="box-i-can-do">
                    <div className="icon">
                        <i className="fi fi-rs-ux-browser"></i>
                    </div>
                    <h2>UI / UX <span><br />Designer</span></h2>
                    <p>designing the initial design for the website/application</p>
                </div>
                <div className="box-i-can-do">
                    <div className="icon">
                        <i className="fi fi-rs-vector-polygon"></i>
                    </div>
                    <h2><span>Graphic</span><br />design</h2>
                    <p>creating a poster or graphic asset</p>
                </div>
            </div>
        </div>
    )
}