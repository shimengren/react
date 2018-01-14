import PropTypes from 'prop-types';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <input type='text'/>
                <button onclick={props.addTodo}></button>
            </div>
        )
    }
}
Header.propTypes={
    addTodo: PropTypes.func.isRequired,
}
export default Header;