import AboutMe from "./aboutme"
import Biodata from "./biodata"
import CanDo from "./canDo"
import HorizontalSlider from "./horizontalslider"
import "../styles/home/homeContent.css"
import Feedback from "./feedback"
import ConectWithMe from "./contactMe"
import { useEffect, useState } from "react"

export default function HomeContent({ setShowAddFb }) {

    // Pindahkan setState ke dalam useEffect
    // useEffect(() => {
    //     setShowAddFb(triggerToHomeContent);
    // }, [triggerToHomeContent, setShowAddFb]);

    return (
        <div className="wrapper-components-home">
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