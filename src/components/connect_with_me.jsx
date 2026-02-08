import { useState } from "react"
import "../styles/connect_with_me.css"
import { ReactComponent as Indonesia } from "../assets/svg/indonesia.svg"

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
        
        // Membuat mailto link
        const mailtoLink = `mailto:abivandyafirdhan@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`
        
        // Membuka email client
        window.location.href = mailtoLink
        
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
                    <Indonesia/>
                    <h2>
                        Surakarta <span>:.</span> Central Java <span>:.</span> Indonesia
                    </h2>
                </div>

                <form className="con-contactme" onSubmit={handleSubmit}>
                    <h3>Write Me a Message.</h3>
                    <div className="form-group">
                        <input
                            type="email"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Your email"
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
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}