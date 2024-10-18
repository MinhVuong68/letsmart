import { useMemo } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import { ProductItem } from '../../../components'

import './styles/productCategory.scss'
import { Link } from "react-router-dom";
import { publicRoute } from "../../../routes"

const ProductCategory = (props) => {
    const info = props.info

    const _render = useMemo(() => {
        switch (info.layout) {
            case 'default':
            case undefined:
            case null:
                return (
                    <div className="mt-5">
                        <h5 className="text-center heading__title mb-0 fw-bold text-dark">{info.name}</h5>
                        <div className="section-products__layout-default">
                            <div className="container">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    speed={1000}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 2,
                                            spaceBetween: 10
                                        },

                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 10
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        }
                                    }}
                                    // autoplay={{ delay: 2500, disableOnInteraction: false }}
                                    modules={[Navigation, Autoplay, Pagination]}
                                    className='swiper-container'
                                >
                                    {
                                        info?.products.map((product, index) => (
                                            <SwiperSlide key={index}>
                                                <ProductItem product={product} />
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                                <div class="d-flex justify-content-center mt-4">
                                    <Link to={publicRoute.productCategoryInfo.path.replace(":tag", info.category?.slug)} class="btn-app btn-more">Xem thêm</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            case "1": 
                return (
                    <div className="mt-5">
                        <h5 className="text-center heading__title mb-0 fw-bold text-dark">{info.name}</h5>
                        <div className="mt-5 section-products__layout-1">
                            <div className="container">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    speed={1000}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 2,
                                            spaceBetween: 10
                                        },

                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 10
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 20
                                        }
                                    }}
                                    // autoplay={{ delay: 2500, disableOnInteraction: false }}
                                    modules={[Navigation, Autoplay, Pagination]}
                                    className='swiper-container'
                                >
                                    {
                                        info?.products.map((product, index) => (
                                            <SwiperSlide key={index}>
                                                <ProductItem product={product} />
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                                <div class="d-flex justify-content-center mt-4">
                                    <Link to={publicRoute.productCategoryInfo.path.replace(":tag", info.category?.slug)} class="btn-app btn-more">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }, [])


    return (
        _render
    )
}

export default ProductCategory