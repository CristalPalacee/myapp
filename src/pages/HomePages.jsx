import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../assets/img/hero.png"
import { kelasTerbaru, dataSwiper } from "../data"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const HomePages = () => {
  let navigate = useNavigate()
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
              <Row className="header-box d-flex align-items-center pt-lg">
                <Col lg="6">
                <h1 className="mb-4">WECOME <br /> <span>TO</span> <br />MY WEBSITE</h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo labore debitis delectus quas non a distinctio.</p>
                <button className="btn btn-outline-danger btn-lg rounded">LIHAT PROJECT</button>
              
                </Col>
              <Col lg="6" className="pt-lg-0 pt-5">  <img src={HeroImage} alt="" />
              </Col>
              </Row>
        </Container>
      </header>
        <div className="kelas w-100 min-vh-100">
          
        <Container>
          <Row>
            <Col><h1 className="text-center fw-bold">My Skill</h1></Col>
            <p className="text-center fw-bold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat consectetur enim tempora </p>
          </Row>
          <Row>
         
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id}>
                  <img src={kelas.image} alt="" />
                  <h5 className="px-3">{kelas.title}</h5>
                </Col>
              )
            })}
          </Row> 
          <Row>  
          <Col className="text-center mt-3">
            <button className="btn btn-outline-primary rounded-5 btn-lg" onClick={() => navigate("/SemuaGambar")}>LIHAT SEMUA
            <i className="fa-solid fa-chevron-right"></i></button>
            </Col>     
            </Row>
        </Container>
    </div>
    <div className="testimonial">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center fw-bold py-5">
            MY GAME
            </h1></Col>
        </Row>
        <Row>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {dataSwiper.map((data) => {
        return ( <SwiperSlide key={data.id} className="shadow">
            <div className="people"><img src={data.image} alt="" /></div>
        <div><h5 className="mb-1">{data.name}</h5>
        <p className="m-0 fw-bold">{data.skill}</p>
        </div>
        </SwiperSlide>
        )
        
       })}
      </Swiper>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default HomePages