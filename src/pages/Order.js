
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import './styles/order.scss'
import { publicRoute } from '../routes';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Image, Modal } from 'antd';
import { ProductTodos } from '../apis';
import { CategoryNavigationBar, NoneOfResult, TabCategory } from './components';


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

    const orderDetailRef = useRef(null)

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({})
    const [result, setResult] = useState({})

    useEffect(() => {
        const getProductCategoryStructure = async () => {
            const response = await ProductTodos.getProductCategoryStructure()
            if (response.length > 0) {
                setCategory(response[0])
                setCategories(response)
            }
        }
        getProductCategoryStructure()
    }, [])

    const getProductCategoryInfo = async (id) => {
        const response = await ProductTodos.getProductCategoryInfo(id)
        setResult(response)
    }


    console.log(result);



    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ backgroundColor: '#f6f6f6', minHeight: '100vh' }}
        >
            <div>
                <div className='container'>
                    <div className='d-flex justify-content-between py-4'>
                        {/* <button onClick={() => navigate(-1)} className='border-0 bg-transparent'>Thoát</button> */}
                        {/* <Link to={publicRoute.login.path} className='border-0 bg-transparent'>Thoát</Link> */}
                        <div className='d-flex align-items-center'>
                            <span>Tìm kiếm</span>
                            <i className="fas fa-search ms-2"></i>
                        </div>
                    </div>
                </div>
                <CategoryNavigationBar
                    data={categories}
                    onSelect={async (data) => {
                        setCategory(data)
                        if (data?.children.length == 0) {
                            getProductCategoryInfo(data.id)
                        }
                    }}
                />
                <TabCategory data={category} getProductCategoryInfo={getProductCategoryInfo} />
                {result.products?.length > 0 ? (
                    <div className='container'>
                        <div className='container--list-product'>
                            {result.products?.map((product, index) => (
                                <div className='container--product-cart'>
                                    <ProductCard key={index} info={product} onClick={() => { orderDetailRef.current?.showModal(product) }} />
                                </div>
                            ))}
                        </div>
                    </div>

                ) : (

                    <NoneOfResult />
                )}
                <OrderDetail ref={orderDetailRef} />



            </div>
        </motion.div>
    )
}


const ProductCard = (props) => {
    const { info, onClick } = props
    return (
        <Link onClick={onClick}>
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
                <span className='product-grid-item__price price mt-1'>{info.price_format}</span>
            </div>
        </Link>

    )
}

const OrderDetail = React.forwardRef((props, ref) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data, setData] = useState({})

    const boxCartRef = useRef(null)
    const boxNotiRef = useRef(null)

    useImperativeHandle(ref, () => ({
        showModal
    }), [])

    const showModal = (data) => {
        setData(data)
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const handleNoti = () => {
        const cartRect = boxCartRef.current.getBoundingClientRect();
        const notiElement = boxNotiRef.current;

        console.log(cartRect);


        // Lưu trữ thông số ban đầu
        const initialWidth = 300; // Chiều rộng ban đầu
        const initialHeight = 300; // Chiều cao ban đầu
        const finalWidth = 30; // Chiều rộng cuối cùng
        const finalHeight = 30; // Chiều cao cuối cùng
        const duration = 400; // Thời gian di chuyển (3 giây)
        const startTime = performance.now(); // Thời điểm bắt đầu

        // Đặt kích thước ban đầu cho noti
        notiElement.style.width = `${initialWidth}px`;
        notiElement.style.height = `${initialHeight}px`;
        notiElement.style.opacity = '1'; // Độ mờ ban đầu
        notiElement.style.transition = 'ease 0.1s'; // Độ mờ ban đầu


        // Tính toán vị trí trung tâm của cart
        const centerX = cartRect.left + cartRect.width / 2 + 25
        const centerY = cartRect.top + cartRect.height / 2 + 25

        // Hàm di chuyển
        const animate = (currentTime) => {
            // Tính toán thời gian trôi qua
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Tỉ lệ di chuyển

            // Tính toán kích thước mới với easing linear
            const newWidth = initialWidth - (initialWidth - finalWidth) * progress;
            const newHeight = initialHeight - (initialHeight - finalHeight) * progress;

            // Cập nhật vị trí sao cho tâm của noti trùng với tâm của cart
            notiElement.style.left = `${centerX - newWidth / 2}px`;
            notiElement.style.top = `${centerY - newHeight / 2}px`;

            // Cập nhật kích thước và độ mờ
            notiElement.style.width = `${newWidth}px`;
            notiElement.style.height = `${newHeight}px`;
            notiElement.style.opacity = `${1 - progress}`; // Mờ dần đều

            // Tiếp tục nếu chưa hoàn thành
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Đảm bảo độ mờ và kích thước là 0 khi hoàn thành
                notiElement.style.opacity = '0';
                notiElement.style.width = `${finalWidth}px`;
                notiElement.style.height = `${finalHeight}px`;

                // Xóa phần tử khỏi DOM
                notiElement.style.width = '300px'
                notiElement.style.height = '300px'
                notiElement.style.left = '50%'
                notiElement.style.top = '50%'
                notiElement.style.transform = 'translate(-50%, -50%)'
                notiElement.style.display = 'none'
                // navigate(-1)
            }
        };

        requestAnimationFrame(animate); // Bắt đầu hoạt động
    }

    const openModal = () => {
        const notiElement = boxNotiRef.current;
        notiElement.style.display = 'block'; // Hiển thị phần tử
        notiElement.style.opacity = '0'; // Bắt đầu với độ mờ 0
        notiElement.style.transform = 'translate(-50%, -50%) scale(0)'; // Bắt đầu với kích thước 0

        // Đặt hiệu ứng chuyển tiếp ngay từ đầu
        notiElement.style.transition = 'transform 0.5s ease, opacity 0.5s ease'; // Thêm hiệu ứng chuyển tiếp

        // Sử dụng requestAnimationFrame để đảm bảo các thay đổi CSS được áp dụng
        requestAnimationFrame(() => {
            notiElement.style.left = '50%'
            notiElement.style.top = '50%'
            notiElement.style.opacity = '1'; // Đặt độ mờ thành 1
            notiElement.style.transform = 'translate(-50%, -50%) scale(1)'; // Mở rộng đến kích thước bình thường
        });
        setTimeout(() => {
            handleNoti()
        }, 1000)
    }

    return (
        <Modal
            className='container--order-detail'
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            closable={false}
            style={{ height: '100vh' }}
            centered={false}
        >
            <div className='position-relative h-100'>
                <div className='row g-0 h-100'>
                    <div className='col-6 content--order-detail' style={{ height: '100%' }}>
                        <div className='container'>
                            <div className='wrap--btn-back'>
                                <button className='btn-back' onClick={handleCancel}>
                                    <i class="fas fa-arrow-left"></i>
                                </button>

                            </div>
                            <div className='p-5'>

                                <h2 className='fw-bold'>{data.name}</h2>
                                <h5 className='price'>{data.price_format}</h5>
                                <div className='w-100 container--input-control mb-4'>
                                    <div className='form-group mb-3'>

                                        <div className='d-flex align-items-center justify-content-center'>
                                            Quantity <i className="fas fa-sort-down ms-1"></i>
                                        </div>
                                        <input type='number' className='form-control mt-2' />
                                    </div>

                                </div>
                                <button className='btn-app btn-add-cart' onClick={openModal}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img
                            width="100%"

                            src={data.image}
                            style={{
                                objectFit: 'cover',  // Sửa lỗi đánh máy
                                maxHeight: '100vh',
                                height: '100%'     // Giới hạn chiều cao để không vượt quá modal
                            }}
                        />
                        <div ref={boxCartRef} className='container-cart'>
                            <img src='https://cdn-icons-png.flaticon.com/128/253/253298.png' width={35} height={35} />
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div ref={boxNotiRef} className='container-noti__added'></div>
                <img ref={boxNotiRef} className='container-noti__added' src='https://static-00.iconduck.com/assets.00/alert-success-icon-2048x2048-1wwc85qm.png' />
            </div>
        </Modal>
    )
})

export default Order