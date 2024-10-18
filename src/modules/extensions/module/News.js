import { useEffect } from 'react';
import './styles/news.scss'
import { Link } from 'react-router-dom';
const News = (props) => {

    const info = props.info
    useEffect(() => {
        const toggleFlexClass = () => {
            const elements = document.querySelectorAll('.section-news-item');
            elements.forEach(element => {
                if (window.innerWidth < 992) {
                    element.classList.add('flex-column-reverse');
                } else {
                    element.classList.remove('flex-column-reverse');
                }
            });
        };
        toggleFlexClass();
        window.addEventListener('resize', toggleFlexClass);
        return () => {
            window.removeEventListener('resize', toggleFlexClass);
        };
    }, []);

    return (
        <div className="container mt-5">

            {info.news?.map((item, index) => (
                <div
                    className={`row ${index % 2 !== 0 ? 'flex-row-reverse' : ''} g-0 section-news-item`}>
                    <div className="col-lg-6 col-12 d-flex justify-content-center" style={{ backgroundColor: '#F3EFEA' }}>
                        <div className="section-content text-center">
                            <span className="d-block" style={{ fontSize: '1.5rem', }}>{item.short_description}</span>
                            <div className="d-flex justify-content-center">
                                <Link to="" className="mt-4 btn-detail btn-app">Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="overflow-hidden">
                            <Link to="" className="feature-image_link">
                                <div
                                    className="lazyload position-relative feature-image"
                                    style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', paddingTop: '63%' }}
                                >
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default News