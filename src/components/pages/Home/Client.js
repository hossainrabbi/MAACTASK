import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { client } from '../../../data';

export default function Client() {
  return (
    <Container
      sx={{
        padding: '100px 0',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          textAlign: 'center',
          color: '#0052CC',
          fontSize: '32px',
          fontWeight: 500,
          marginBottom: '50px',
        }}
      >
        5,000+ high-impact teams rely on Fieldx
      </Typography>
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
            slidesPerView: 4,
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
