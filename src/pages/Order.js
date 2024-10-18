
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import './styles/order.scss'
import { publicRoute } from '../routes';

const pageVariants = {
    initial: {
        opacity: 0,          // Bắt đầu mờ
        scale: 0.9,          // Kích thước nhỏ hơn một chút
    },
    in: {
        opacity: 1,          // Hiển thị hoàn toàn
        scale: 1,            // Kích thước bình thường
    },
    out: {
        opacity: 0,          // Mờ dần
        scale: 1.1,          // Phóng to một chút
    },    // Trang rời khỏi qua bên trái
};

const pageTransition = {
    type: 'tween',
    duration: 0.2,
    stiffness: 300,
    damping: 30,
};

const Order = () => {

    const navigate = useNavigate()



    const categories = [
        { name: 'Food & Beverage', image: 'https://cdn-icons-png.flaticon.com/128/1695/1695521.png' },
        { name: 'Healthcare', image: 'https://cdn-icons-png.flaticon.com/128/2957/2957990.png' },
        { name: 'Lifestyle', image: 'https://cdn-icons-png.flaticon.com/128/9746/9746529.png' },
    ]

    const tabs = [
        { name: 'Bánh canh' },
        { name: 'Bún' },
        { name: 'Mì lúa nổi' },
        { name: 'Cafe' },
    ]
    const products = [
        { name: 'Bánh canh cá lóc', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/22f4c4fe-9935-4c80-9518-683b34986f40.jpg', price: '58.000đ' },
        { name: 'Bánh canh cua', image: 'https://www.cleanipedia.com/images/5iwkm8ckyw6v/6ZzmagCQkHADBgZ1QvYO4F/3f6ceffac0e9f93f3667a3be7d23b835/dG9uZy1ob3AtMy1jYWNoLW5hdS1iYW5oLWNhbmgtY3VhLW5nb24tYmF0LWJhaS1jdWMtaGFwLWRhbi10YWktbmhhLmpwZw/1200w/b%C3%A1t-s%C3%BAp-h%E1%BA%A3i-s%E1%BA%A3n-v%E1%BB%9Bi-cua%2C-m%E1%BB%B1c%2C-v%C3%A0-c%C3%A1c-lo%E1%BA%A1i-th%E1%BB%B1c-ph%E1%BA%A9m-kh%C3%A1c..jpg', price: '58.000đ' },
        { name: 'Bánh canh tôm', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/9dc5d508-abc8-4c69-8c1d-9c594158dda6.jpg', price: '58.000đ' },
        { name: 'Bánh canh cá lóc', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/22f4c4fe-9935-4c80-9518-683b34986f40.jpg', price: '58.000đ' },
        { name: 'Bánh canh cua', image: 'https://www.cleanipedia.com/images/5iwkm8ckyw6v/6ZzmagCQkHADBgZ1QvYO4F/3f6ceffac0e9f93f3667a3be7d23b835/dG9uZy1ob3AtMy1jYWNoLW5hdS1iYW5oLWNhbmgtY3VhLW5nb24tYmF0LWJhaS1jdWMtaGFwLWRhbi10YWktbmhhLmpwZw/1200w/b%C3%A1t-s%C3%BAp-h%E1%BA%A3i-s%E1%BA%A3n-v%E1%BB%9Bi-cua%2C-m%E1%BB%B1c%2C-v%C3%A0-c%C3%A1c-lo%E1%BA%A1i-th%E1%BB%B1c-ph%E1%BA%A9m-kh%C3%A1c..jpg', price: '58.000đ' },
        { name: 'Bánh canh tôm', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/9dc5d508-abc8-4c69-8c1d-9c594158dda6.jpg', price: '58.000đ' },
        { name: 'Bánh canh cá lóc', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/22f4c4fe-9935-4c80-9518-683b34986f40.jpg', price: '58.000đ' },
        { name: 'Bánh canh cua', image: 'https://www.cleanipedia.com/images/5iwkm8ckyw6v/6ZzmagCQkHADBgZ1QvYO4F/3f6ceffac0e9f93f3667a3be7d23b835/dG9uZy1ob3AtMy1jYWNoLW5hdS1iYW5oLWNhbmgtY3VhLW5nb24tYmF0LWJhaS1jdWMtaGFwLWRhbi10YWktbmhhLmpwZw/1200w/b%C3%A1t-s%C3%BAp-h%E1%BA%A3i-s%E1%BA%A3n-v%E1%BB%9Bi-cua%2C-m%E1%BB%B1c%2C-v%C3%A0-c%C3%A1c-lo%E1%BA%A1i-th%E1%BB%B1c-ph%E1%BA%A9m-kh%C3%A1c..jpg', price: '58.000đ' },
        { name: 'Bánh canh tôm', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/9dc5d508-abc8-4c69-8c1d-9c594158dda6.jpg', price: '58.000đ' },
        // { name: 'Espresso', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/9e47338f-2653-466b-b7ef-7e7449c00ddd.jpg', price: '58.000đ' },
        // { name: 'Cappuccino', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/9a4b22c6-319c-4a28-b921-211748a23b49.jpg', price: '58.000đ' },
        // { name: 'Latte', image: 'https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/ef51112c-2ef0-41e5-ada5-f1c935de0ea0.jpg', price: '58.000đ' },
        // { name: 'Cortado', image: 'https://gregoryscoffee.com/cdn/shop/files/cortado-gregorys-coffee-226017.jpg?v=1717580420&width=400', price: '58.000đ' },
        // { name: 'Hall Oats', image: 'https://gregoryscoffee.com/cdn/shop/files/hall-oats-gregorys-coffee-923958.jpg?v=1717580426&width=400', price: '58.000đ' },
        // { name: 'Iced Matcha Latte GF-V', image: 'https://gregoryscoffee.com/cdn/shop/files/iced-matcha-latte-gf-v-gregorys-coffee-593321.jpg?v=1717580429&width=400', price: '58.000đ' },
        // { name: 'Nitro Cold Brew', image: 'https://gregoryscoffee.com/cdn/shop/files/nitro-cold-brew-gregorys-coffee-350331.jpg?v=1717580434&width=400', price: '58.000đ' },
    ]

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ backgroundColor: '#f6f6f6' }}
        >
            <div className='container'>
                <div className='d-flex justify-content-between py-4'>
                    <button onClick={() => navigate(-1)} className='border-0 bg-transparent'>Thoát</button>
                    {/* <Link to={publicRoute.login.path} className='border-0 bg-transparent'>Thoát</Link> */}
                    <div className='d-flex align-items-center'>
                        <span>Tìm kiếm</span>
                        <i className="fas fa-search ms-2"></i>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#be9007' }} className='py-3'>
                <div className='container'>
                    <Swiper
                        slidesPerView={10}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed={1000}
                        // autoplay={{ delay: 2500, disableOnInteraction: false }}
                        modules={[]}
                        className='swiper-container'
                    >
                        {
                            categories.map((category, index) => (
                                <SwiperSlide key={index}>
                                    <div className='d-flex flex-column align-items-center' key={index} style={{ margin: '0 20px' }}>

                                        <div className='category-item'>
                                            <img
                                                style={{ width: '100%', height: '100%' }}
                                                src={category.image}
                                            />
                                        </div>
                                        <span className='text-white text-center'>{category.name}</span>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
            <div className='container'>
                <div className='d-flex align-items-center mt-3' style={{borderBottom: '1px solid #ccc'}}>
                    <h2 className='fw-bold me-5 mb-0' >Food & Beverage</h2>
                    <div className='d-flex' style={{margin: '0 -10px'}}>
                                {tabs.map((tab, index) => (
                                        <div className={`text-center py-2 tab ${index == 0 ? 'tab-focus' : ''}`}>
                                            <span className='text-center'>{tab.name}</span>
                                        </div>
                                ))}
                              
                    </div>
                </div>


            </div>
            <div className='container'>
                <div className='container--list-product'>
                    {products.map((product, index) => (
                        <div className='container--product-cart'>
                            <ProductCard key={index} info={product} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}


const ProductCard = (props) => {
    const info = props.info
    return (
        <Link to={publicRoute.orderDetail.path}>
            <div
                className="lazyload"
                style={{
                    backgroundImage: `url(${info.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    paddingTop: '100%'
                }}
            />
            <div className='p-3'>
                <span className='fw-bold'>{info.name}</span>
                <span className='product-grid-item__price price mt-1'>{info.price}</span>
            </div>
        </Link>

    )
}

export default Order