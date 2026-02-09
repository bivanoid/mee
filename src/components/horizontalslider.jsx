// src/components/horizontalslider.js
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/scrollhorizontal.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import riyadh from '../assets/riyadhmckp.webp';
import bicture from '../assets/bicturemckp.webp';
import ppkpt from '../assets/ppkpt (1).webp';
import Bynaa from "../assets/bynnashop.webp";
import LoomnYarn from "../assets/loomnyarn.webp";
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
      link: "https://github.com/bivanoid/Riyadh-Al-quran"
    },
    {
      img: bicture,
      alt: "Bicture",
      type: "individual",
      title: "Gallery Photo",
      tags: ["JAVA", "XML", "FIREBASE"],
      link: "https://bivanoid.site/article/77"
    },
    {
      img: ppkpt,
      alt: "PPKPT Website",
      type: "collective",
      title: "PPKPT Website",
      tags: ["HTML", "CSS", "JAVASCRIPT", "FIGMA"],
      link: "https://ppkptupitra.my.id/"
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
      img: LoomnYarn,
      alt: "Loom&Yarn",
      type: "individual",
      title: "Loom&Yarn",
      tags: ["JAVASCRIPT", "CSS", "PHP"],
      link: "https://loomnyarn.lovestoblog.com/"
    },
    
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

    setEqualHeights();
    window.addEventListener('resize', setEqualHeights);
    return () => {
      window.removeEventListener('resize', setEqualHeights);
    };
  }, []);

  return (
    <div className='con-swiper' id='sc3'>

      <div className='title-swiper'>
          <h1>Highlight <span>Projects.</span></h1>
      </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={4}
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
            640: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 1, spaceBetween: 0 },
            1024: { slidesPerView: 3, spaceBetween: 0 },
            1424: { slidesPerView: 3.5, spaceBetween: 0 },
          }}
          className="mySwiper"
        >
          {projects.map((proj, index) => (
            
            <SwiperSlide key={index}>
              <div className='gambar' ref={(el) => (gambarRefs.current[index] = el)}>
                <img src={proj.img} alt={proj.alt} loading="lazy"  />
                {proj.link && (
                  <a aria-label={`${proj.title} link`} href={proj.link} target="_blank" rel="noopener noreferrer">
                    <ShareSvg/>
                  </a>
                )}
              </div>
              <h2 className='gambar-h2'>{proj.type}</h2>
              <h1 className='gambar-h1'>{proj.title}</h1>
              <div className='tag-language'>
                {proj.tags.map((tag, i) => (
                  <div key={i} className='box-skill'>{tag}</div>
                ))}
              </div>
            </SwiperSlide>
            
          ))}
          <SwiperSlide className='see-more-project'>
            <a href="https://github.com/bivanoid">
              <div className='more-btn'><i className="fi fi-brands-github"></i></div>
              <p>See more</p>
            </a>
          </SwiperSlide>
        </Swiper>

      <div className='con-swiper-button-hz'>
        <div className='prev prev-hz'>Prev</div>
        <div className='next next-hz'>Next</div>
      </div>
    </div>
  );
}
