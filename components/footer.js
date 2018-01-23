import PropTypes from 'prop-types';
import React from 'react';

var listStyle = {
      listStyleType:'none',
      display:'inline-block',
      marginTop: '50px',
      marginRight: '20px',
};
var activeColor = {
     color:'red',
};
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tabIndex: 0,
        };
        this.setActive = this.setActive.bind(this);
    }
    changeStyle(index,item){
      this.setState({
            tabIndex: index,
        });
      this.props.setFilter(item);
    }
    setActive(index) {
        if (index === this.state.tabIndex) {
            return Object.assign({},listStyle,activeColor);
        }
        return listStyle;
    }

    render(){
        const footerItems = this.props.filterConditions.map((item, index) =>{
            return (
                <li key={index} style={this.setActive(index)} onClick={this.changeStyle.bind(this, index,item)}>{item}</li>
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

