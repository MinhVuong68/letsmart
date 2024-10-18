import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import iconChevronRight from '../../../assets/icon-chevron-right.png'
// Import Swiper styles
import 'swiper/css';
import './styles/slideShow.scss'
const SlideShow = (props) => {
    const info = props.info
    return (
        <div>
            <Swiper
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                speed={1000}
                // autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Navigation, Autoplay, Pagination]}
                className='swiper-container'
            >
                {
                    info?.banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    paddingTop: '31%'
                                }}></div>
                        </SwiperSlide>
                    ))
                }
                {/* <div className="swiper-button-prev btn-dicrection-swiper">
                    <img style={{transform: 'rotate(180deg)'}} src={iconChevronRight} alt="" width="15"/>
                </div>
                <div className="swiper-button-next btn-dicrection-swiper">
                    <img src={iconChevronRight} alt="" width="15"/>
                </div> */}
            </Swiper>
            <div class="text-center section-intro" style={{backgroundColor: '#F38C11'}}>
                <div class="wrapper-intro">
                    <h3 class="text-uppercase mb-3 fw-bold text-white">Món ăn đa màu sắc và không gian cảm hứng</h3>
                    <p style={{fontSize: '1.2rem'}} class="text-white">Chúng tôi nhìn nhận cà phê theo cách khác và nghĩ rằng bạn cũng vậy. Nhóm của chúng tôi làm việc không mệt mỏi để chọn lọc cà phê và phát triển các cấu hình rang mang lại những gì tốt nhất cho mỗi hạt cà phê. Chúng tôi biết điều đó được thực hiện đúng vì chúng tôi tự làm điều đó.</p>
                </div>
            </div>
        </div>
    )
}

export default SlideShow