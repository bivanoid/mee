import AboutMe from "./aboutme"
import Biodata from "./biodata"
import CanDo from "./canDo"
import HorizontalSlider from "./horizontalslider"
import "../styles/home/homeContent.css"
import Feedback from "./feedback"
import ConectWithMe from "./contactMe"

export default function HomeContent({ setShowAddFb }) {
    return (
        <div className="wrapper-components-home" id='sc2'>
            <Biodata />
            <div className="wrapper-componen-vertical">
                <AboutMe />
                <CanDo />
                <HorizontalSlider />
                <Feedback setShowAddFb={setShowAddFb}/>
                <ConectWithMe />
            </div>
        </div>
    )
}