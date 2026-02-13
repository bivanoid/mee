import { useState } from "react"
import "../styles/connectMe.css"
import Indonesia from "../assets/svg/indonesia.svg?react"
import { Send } from "lucide-react"
import { Forward } from "lucide-react"

export default function ConectWithMe() {
    const [formData, setFormData] = useState({
        name: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        window.location.href = `mailto:abivandyafirdhan@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`
        
        // Reset form
        setFormData({
            name: "",
            message: ""
        })
    }

    return (
        <div className="section-4">
            <div className='title-swiper'>
                <h1 className="title-feedback">Contact<span> Me.</span> 
                {/* <span className="noice-title">.</span> */}
                </h1>
            </div>

            <div className="section-4-content">
                <div className="con-indonesia">
                    <Indonesia className="indo-svg" />
                    <h2>
                        Surakarta <span>:.</span> Central Java <span>:.</span> Indonesia
                    </h2>
                </div>

                <form className="con-contactme" onSubmit={handleSubmit}>
                    <h3>Write Me a Message.</h3>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            rows="5"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit <Forward/>
                    </button>
                </form>
            </div>
        </div>
    )
}