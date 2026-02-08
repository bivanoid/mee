import AboutMe from "./aboutme"
import Biodata from "./biodata"
import CanDo from "./canDo"

import HorizontalSlider from "./horizontalslider"
import "../styles/home/homeContent.css"
import Feedback from "./feedback"
import ConectWithMe from "./connect_with_me"
export default function HomeContent() {
    return (
        <div className="wrapper-components-home">
            <Biodata />
            <div className="wrapper-componen-vertical">
                <AboutMe/>
                <CanDo/>
                <HorizontalSlider/>
                <Feedback/>
                <ConectWithMe/>
                </div>
        </div>
    )
}