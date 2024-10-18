import { renderModule } from '../../../utils';
import React,{Component} from 'react';



class ContentBottom extends Component{
  constructor(props){
    super();
  }
  render(){
    const Modules = this.props.info!=null && this.props.info.modules!=null ? this.props.info.modules : [];
    return(
      <div {...this.props}>
      {(Array.isArray(Modules)?Modules:[]).map((module, key) => {
        return renderModule(module)
      })}
      </div>
    )
  }
}
export default ContentBottom;
