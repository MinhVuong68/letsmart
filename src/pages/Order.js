
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
            style={{ backgroundColor: '#f6f6f6',minHeight: '100vh'}}
        >
            <div>
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
                <CategoryNavigationBar
                    data={categories}
                    onSelect={async (data) => {
                        setCategory(data)
                        if (data?.children.length == 0) {
                            getProductCategoryInfo(data.id)
                        }
                    }}
                />
                <TabCategory data={category} getProductCategoryInfo={getProductCategoryInfo}/>
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

                    <NoneOfResult/>
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
                    </div>
                </div>
            </div>
        </Modal>
    )
})

export default Order