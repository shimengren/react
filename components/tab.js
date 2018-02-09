import React from 'react';
import CSSModules from 'react-css-modules';
import tabStyle from './tab.styl';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
@CSSModules(tabStyle, {allowMultiple: true})


class Tab extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const linkMenu = [
            {
                path: '/home',
                styleName: 'footerHome',
            },
            {
                path: '/classify',
                styleName: 'footerClassify',
            },
            {
                path: '/me',
                styleName: 'footerMe',
            }
        ];
        return (
            <div styleName='footer'>
                {linkMenu.map((item, i) =>
                {return (<Link to={item.path}  key={i} styleName={ this.props.match.path === item.path ? `${item.styleName} activeStyle`:item.styleName}></Link>)})}
            </div>
        )
    }

}

export default withRouter(Tab);


