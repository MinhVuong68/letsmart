import AboutUs from "./extensions/module/AboutUs";
import News from "./extensions/module/News";
import ProductCategory from "./extensions/module/ProductCategory";
import SlideShow from "./extensions/module/SlideShow";

const Modules = {
    render: (module = {}) => {
      if (module.code === 'SlideShow') {
        return <SlideShow info={module}/>
      }
      else if (module.code === 'ProductCategory') {
        return <ProductCategory info={module}/>
      }
      
      else if (module.code === 'News') {
        return <News info={module}/>
      } 
      else if (module.code === 'AboutUs') {
        return <AboutUs info={module}/>
      }
      return <div />;
    },
    
  };

export default Modules