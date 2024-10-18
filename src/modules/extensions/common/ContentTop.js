import React, {Component} from 'react';
import { renderModule } from '../../../utils';
class ContentTop extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    const Modules =
      this.props.info != null && this.props.info.modules != null
        ? this.props.info.modules
        : [];
    return (
      <div {...this.props}>
        {(Array.isArray(Modules) ? Modules : []).map((module, key) => {
          return renderModule(module);
        })}
      </div>
    );
  }
}
export default ContentTop;
