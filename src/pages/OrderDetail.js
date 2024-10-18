import { motion, transform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './styles/orderDetail.scss'
import { useNavigate } from 'react-router-dom';
const OrderDetail = () => {

    const boxRef = useRef()
    const [toado, setToado] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (boxRef.current) {
            const rect = boxRef.current.getBoundingClientRect(); // Lấy tọa độ
            const centerX = rect.left + rect.width / 2; // Tính toán tọa độ trung tâm X
            const centerY = rect.top + rect.height / 2; // Tính toán tọa độ trung tâm Y
            setToado({ centerX, centerY })
        }
    }, []);

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

    const handleClick = () => {
        console.log(123);
    }

    const boxCartRef = useRef(null)
    const boxNotiRef = useRef(null)
    const [delta, setDelta] = useState({})


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
                navigate(-1)
            }
        };

        requestAnimationFrame(animate); // Bắt đầu hoạt động
    }

    // const handleNoti = () => {
    


    //     const cartElement = boxCartRef.current;
    //     const notiElement = boxNotiRef.current;

    //     const initialWidth = 300; // Chiều rộng ban đầu
    //     const initialHeight = 300; // Chiều cao ban đầu
    //     const finalWidth = 60; // Chiều rộng cuối cùng
    //     const finalHeight = 60; // Chiều cao cuối cùng

    //     notiElement.style.width = `${initialWidth}px`;
    //     notiElement.style.height = `${initialHeight}px`;
    //     notiElement.style.opacity = '1'; // Độ mờ ban đầu
    //     notiElement.style.transition = 'ease 0.1s '; // Độ mờ ban đầu



    
    //     // Lấy kích thước của container-cart
    //     const cartRect = cartElement.getBoundingClientRect();

    //     // Tính toán vị trí chính giữa của container-cart
    //     const centerX = cartRect.left  + cartRect.width/2;
    //     const centerY = cartRect.top + cartRect.height/2;



    //     // Di chuyển notiElement đến vị trí trung tâm
    //     notiElement.style.position = 'absolute';
    //     notiElement.style.left = `${centerX}px`;
    //     notiElement.style.top = `${centerY}px`;
    //     notiElement.style.width = `${finalWidth}px`;
    //     notiElement.style.height = `${finalHeight}px`;
        

    

    // }


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
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: '100%', height: '100vh' }}
            className=' position-relative'
        >
            <div className='row g-0' style={{ height: '100%' }}>
                <div className='col-6 '>
                    <div className='p-5'>

                        <h2 className='fw-bold'>Bánh canh cá lóc</h2>
                        <h5 className='price'>58.000đ</h5>
                        <div className='w-100 container--input-control mb-4'>
                            <div className='form-group mb-3'>

                                <div className='d-flex align-items-center justify-content-center'>
                                    Quantity <i className="fas fa-sort-down ms-1"></i>
                                </div>
                                <input type='number' className='form-control mt-2'/>
                            </div>
                            
                        </div>
                        <button className='btn-app btn-add-cart' onClick={openModal}>ADD TO CART</button>
                    </div>
                </div>
                <div className='col-6'>
                    <img style={{ width: '100%', height: '100%' }} src="https://tenant-670664e14e3de.baohanhaz.com/tenancy/670664e14e3de/uploads/2024-10-18/22f4c4fe-9935-4c80-9518-683b34986f40.jpg" />
                    <div ref={boxCartRef} className='container-cart'>
                        <img src='https://cdn-icons-png.flaticon.com/128/253/253298.png' width={35} height={35} />
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div ref={boxNotiRef} className='container-noti__added'>
            </div>
            <img ref={boxNotiRef} className='container-noti__added' src='https://static-00.iconduck.com/assets.00/alert-success-icon-2048x2048-1wwc85qm.png' />



        </motion.div>
    )
}

export default OrderDetail