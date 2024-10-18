import './styles/aboutUs.scss'
const AboutUs = (props) => {
    const info = props.info
    return (
        <div class="container wrap-modue-aboutus">
    <div class="row">
        <div class="col-12 col-lg-6" data-aos="fade-right">
            <div class="overflow-hidden rounded ">
                <a href="" class="feature-image_link ">
                  <div 
                    class="lazyload position-relative feature-image" 
                    style={{backgroundImage: `url(${info.image})` ,backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', paddingTop: '67%'}}
                  >
                  </div>
                </a>
              </div>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center inner-content"  data-aos="fade-left">
            <div class="ms-2">
                <h1 class="fw-bold mb-0">{info.name}</h1>
                <span class="d-block mt-3" style={{fontSize: '18px', letterSpacing: '0.025rem'}}>{info.description}</span>
            </div>
            <div class="d-flex mt-3">
                <a href="" class="btn-app rounded btn-learn-more">Tìm hiểu thêm</a>
            </div>
            
        </div>
    </div>
   
</div>
    )
}

export default AboutUs