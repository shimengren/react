import React from 'react';
import CSSModules from 'react-css-modules';
import tabStyle from './tab.styl';
import {Link} from 'react-router-dom';
@CSSModules(tabStyle)

// styleName="footer-classify"
class Tab extends React.Component{
    render(){
        return (
            <div styleName='footer'>
                <Link to='/'><div><img src='public/image/footer-home.svg'/></div></Link>
                <Link to='/classify'><div><img src='public/image/footer-classify.svg'/></div></Link>
                {/*<Link to='/shopping'><div><img src='public/image/footer-shopping.svg'/></div></Link>*/}
                <Link to='/me'><div><img src='public/image/footer-me.svg'/></div></Link>
            </div>
        )
    }

}

export default Tab;


