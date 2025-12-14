// src/components/horizontalslider.js
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/scrollhorizontal.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import riyadh from '../assets/riyadhmckp.png';
import bicture from '../assets/bicturemckp.png';
import kasir from '../assets/Casier.png';
import calc from '../assets/calc.png';
import Bynaa from "../assets/byna's-shop.png";
import Logo from './logo';
import FadeContent from './FadeContent';
import AnimatedContent from './AnimatedContent';
import ShareSvg from '../iconSvg/shareic';

export default function HorizontalSlider() {
  const gambarRefs = useRef([]);

  const projects = [
    {
      img: riyadh,
      alt: "Alquran Website",
      type: "collective",
      title: "Alquran Website",
      tags: ["PHP", "CSS", "MYSQL"],
      link: "https://github.com/Vandyaaa/Riyadh-Al-quran"
    },
    {
      img: bicture,
      alt: "Bicture",
      type: "individual",
      title: "Gallery Photo",
      tags: ["JAVA", "XML", "FIREBASE"],
      link: "https://bivanoid.site/article/73"
    },
    {
      img: calc,
      alt: "Calculator",
      type: "individual",
      title: "Calculator",
      tags: ["JAVASCRIPT", "CSS"],
      link: "https://vandyaaa.github.io/calculablew/"
    },
    {
      img: Bynaa,
      alt: "bynna's shop",
      type: "individual",
      title: "Bynna's shop",
      tags: ["JAVASCRIPT", "CSS", "PHP"],
      link: "https://bynnaaa.lovestoblog.com/"
    },
    {
      img: kasir,
      alt: "Cashier",
      type: "individual",
      title: "Cashier",
      tags: ["PHP", "BOOTSTRAP", "MYSQL"]
    }
  ];

  useEffect(() => {
    const slides = document.querySelectorAll('.swiper-slide');
    if (!slides.length) return;

    const setEqualHeights = () => {
      let maxHeight = 0;
      slides.forEach(slide => {
        slide.style.height = 'auto';
        maxHeight = Math.max(maxHeight, slide.offsetHeight);
      });
      slides.forEach(slide => {
        slide.style.height = `${maxHeight}px`;
      });
    };

    // Jalankan pertama kali
    setEqualHeights();

    // Update kalau window diresize
    window.addEventListener('resize', setEqualHeights);

    // Cleanup saat unmount
    return () => {
      window.removeEventListener('resize', setEqualHeights);
    };
  }, []);

  return (
    <div className='con-swiper' id='sc3'>

      <div className='title-swiper'>
        <AnimatedContent
          distance={50}
          direction="vertical"
          config={{ tension: 100, friction: 30 }}
          initialOpacity={0}
          animateOpacity
          threshold={1}
          delay={500}
        >
          <h1>Highlight <span>Projects</span></h1>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          config={{ tension: 100, friction: 30 }}
          initialOpacity={0}
          animateOpacity
          threshold={0}
          delay={1000}
        >
          <p>individual or collective projects.</p>
        </AnimatedContent>
      </div>

      <FadeContent blur={false} delay={1000} duration={1500} easing="ease-out" initialOpacity={0}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          loop={false}
          navigation={{
            nextEl: ".next-hz",
            prevEl: ".prev-hz",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 1 },
            768: { slidesPerView: 2, spaceBetween: 1 },
            1024: { slidesPerView: 2.5, spaceBetween: 1 },
            1424: { slidesPerView: 3.5, spaceBetween: 1 },
          }}
          className="mySwiper"
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              <div className='gambar' ref={(el) => (gambarRefs.current[index] = el)}>
                <img src={proj.img} alt={proj.alt} />
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <ShareSvg/>
                  </a>
                )}
              </div>
              <h2 className='gambar-h2'>{proj.type}</h2>
              <h1 className='gambar-h1'>{proj.title}</h1>
              <div className='tag-language'>
                {proj.tags.map((tag, i) => (
                  <div key={i} className='taglang'>{tag}</div>
                ))}
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className='see-more-project'>
            <div className='more-btn'><Logo /></div>
            <p>That's all for now</p>
          </SwiperSlide>
        </Swiper>
      </FadeContent>

      <div className='con-swiper-button-hz'>
        <div className='prev prev-hz'>Prev</div>
        <div className='next next-hz'>Next</div>
      </div>
    </div>
  );
}
