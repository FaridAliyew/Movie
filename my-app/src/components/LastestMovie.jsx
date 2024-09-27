import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const LastestMovie = () => {
    const baseUrl = 'https://btsdjmkresicezlbutpm.supabase.co';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0c2RqbWtyZXNpY2V6bGJ1dHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyODkzNTIsImV4cCI6MjAzODg2NTM1Mn0.EbVl62cSHhz3K0NFOW8LJMPrjjHJXPhVtAJMO_PmvlU';


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/rest/v1/my_table?select=*`, {
                    headers: {
                        apikey: apiKey,
                        Authorization: `Bearer ${apiKey}`
                    }
                });
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [baseUrl, apiKey]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="carusel-container mt-5">
    <Container className='lastestMovie'>
        <Row>
        <Swiper
        slidesPerView={4}
        
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }}
      >

        {data.map((item) => (
            <div className="sliderContainer">
                <SwiperSlide key={item.id} className='slideMovie'>
                    <img src={item.image_url} alt="Movie" className="slider-img" />
                    <h4>{item.title}</h4>
                    <h5>{item.text}</h5>
                </SwiperSlide>
            </div>
        ))}
            </Swiper>
        </Row>
    </Container>
</div>
);

}

export default LastestMovie
