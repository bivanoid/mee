import RevealUp from "../animation/reveal"
import "../styles/contactme.css"

export default function ContactMe() {


    return (
        <div className="section3">
            <div className='title-swiper'>
                    <RevealUp threshold={0.5} reverse={false} distance={100}>
                      <h1>What's i <span>Can Do</span></h1>
                    </RevealUp>
                    <RevealUp direction='vertical' delay={500} distance={20}>
                      <p>individual or collective projects.</p>
                    </RevealUp>
                  </div>
        </div>
    )
}