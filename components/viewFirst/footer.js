import PropTypes from 'prop-types';
import React from 'react';
import CSSModule from 'react-css-modules';
import FooterStyle from './footer.styl';
@CSSModule(FooterStyle,{allowMultiple: true})

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tabIndex: 0,
        };
    }
    changeStyle(index,item){
      this.setState({
            tabIndex: index,
        });
      this.props.setFilter(item);
    }
    render(){
        const footerItems = this.props.filterConditions.map((item, index) =>{
            return (
                <li key={index} styleName={`listStyle ${index === this.state.tabIndex ? 'activeStyle': ''}`} onClick={this.changeStyle.bind(this, index,item)}>{item}</li>
            )
        });
        return (
            <div>
                {footerItems}
            </div>
        )
    }
}

Footer.propTypes = {
    filterConditions: PropTypes.array.isRequired,
};

export default Footer;

