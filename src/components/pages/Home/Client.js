import { Box, Container } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { client } from '../../../data';
import { ClientTitle } from '../../styles';

export default function Client() {
  return (
    <Container
      sx={{
        padding: '100px 0',
      }}
    >
      <ClientTitle variant="h3" component="h3">
        5,000+ high-impact teams rely on Fieldx
      </ClientTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {client.map((item) => (
          <SwiperSlide key={item.id}>
            <Box component="img" src={item.image} alt={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
