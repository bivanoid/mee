"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import FadeContent from "./FadeContent"
import { Link } from "react-router-dom"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "../styles/feedback.css"
import Alert from "../iconSvg/alertIc"
import RevealUp from "../animation/reveal"

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
const ohNo = 'Oh noo! '

// Fungsi untuk mengonversi rating ke emoji
function getEmojiFromRating(rating) {
  switch (rating) {
    case 1:
      return "rating-1"
    case 2:
      return "rating-2"
    case 3:
      return "rating-3"
    case 4:
      return "rating-4"
    case 5:
      return "rating-5"
    default:
      return "rating-unknown"
  }
}

function Feedback() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {

    async function loadLatestUsers() {

      const { data, error } = await supabase
        .from("users")
        .select("*") // Pastikan kolom 'rating' ada di tabel
        .order("created_at", { ascending: false })
        .limit(10) // Increased limit for better carousel experience

      if (error) {
        console.error("Error loading users:", error)
        setError(error)

      } else {
        setUsers(data)
      }
      setLoading(false)
    }

    loadLatestUsers()
  }, [])

  return (
    <div className="feedback" id="sc4">
      <div className='title-swiper'>
        <RevealUp threshold={0.5} reverse={false} distance={100}>
          <h1 className="title-feedback">Their <span>Feedback</span> </h1>
        </RevealUp>

        <RevealUp direction='vertical' delay={500} distance={20}>
          <p className="subtitle-feedback">their opinion of me. </p>
        </RevealUp>
      </div>


      {loading && <p className="loading-feedback">Loading...</p>}
      {error && (
        <div className="error-title">
          <Alert />
          <p className="error-sub">{ohNo + error.message}</p>
          {!loading && users.length === 0 && <p className="error-fetch">No feedback yet.</p>}
        </div>
      )}


      <FadeContent blur={false} duration={1500} delay={1000} easing="ease-out" initialOpacity={0}>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-fb",
              prevEl: ".prev-fb",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
            }}
            loop = {users.length > 3}
            className="feedback-swiper"
          >
            {users.map((user) => {
              const date = user.created_at ? new Date(user.created_at).toISOString().split("T")[0] : "Unknown date"

              const emoji = getEmojiFromRating(user.rating)

              return (
                <SwiperSlide key={user.id}>
                  <div className="user-feedback swiper-slide-content">
                    <div className="feedback-quote">
                      <i className="fi fi-rs-quote-right"></i>
                    </div>
                    <div className="con-userfeedback">
                      <div className="con-usertext">
                        <p className="usertext">"{user.email}"</p>
                      </div>
                    </div>
                    <div className="con-btm-fd">
                      <div className="con-username">
                        <p className="fromuser">from</p>
                        <p className="username">{user.name}</p>
                      </div>
                      <div className="con-feedback-btm">
                        <div className="userrating">
                          <div className={emoji}></div>
                        </div>
                        <p className="userdate">{date}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className='con-swiper-button-fb' >
            <div className='prev prev-fb'>Prev</div>
            {/* Custom Pagination */}
            {/* <div className="swiper-pagination-custom"></div> */}
            <div className='next next-fb'>Next</div>
          </div>


        </div>
      </FadeContent>

      <Link className="link-to-addfeedback" to="/addfb">
        <div className="link-to-addfeedback-title1">
          <i className="fi fi-rs-plus"></i> Add Feedback
        </div>
      </Link>
    </div>
  )
}

export default Feedback
