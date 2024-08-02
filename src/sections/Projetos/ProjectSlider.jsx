import React from 'react';
import {Project1, Project2 ,StyledContainer, Project3} from './CardsProjetos/StyledCardsProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function ProjectsSlider() {
  return (
    
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledContainer>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:'center'
        }}
      >
         <SwiperSlide><Project1></Project1></SwiperSlide> 
         <SwiperSlide><Project2/></SwiperSlide> 
         <SwiperSlide><Project3/></SwiperSlide> 
        </Swiper>
      </StyledContainer>
    </section>
  );
}
export default ProjectsSlider;
