import { publicRoute } from '../routes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
    initial: { opacity: 0, x: '100vw' },  // Trang xuất hiện từ bên phải
    in: { opacity: 1, x: 0 },             // Trang di chuyển vào trung tâm
    out: { opacity: 0, x: '-100vw' },     // Trang rời khỏi qua bên trái
};

const pageTransition = {
    type: 'tween',
    duration: 0.2,
};
const Login = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className='container'>
                <div className='d-flex justify-content-between py-4'>
                    {/* <button onClick={() => navigate(-1)} className='border-0 bg-transparent'>Thoát</button> */}
                    <Link to={publicRoute.login.path} className='border-0 bg-transparent'>Thoát</Link>
                    <div className='d-flex align-items-center'>
                        <span>Tìm kiếm</span>
                        <i class="fas fa-search ms-2"></i>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: 'red' }}>
                <div className='container'>
                    kkládlflasdlflasdflasldfalsdf
                </div>
            </div>
        </motion.div>
    )
}

export default Login