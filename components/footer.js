import PropTypes from 'prop-types';

function Footer(props){
    const footerItems = props.filterConditions.map((item) =>{
        return (
            <li>item</li>
        )
    });
     return (
         <div>
             {footerItems}
         </div>
     )
}
Footer.propTypes = {
    filterConditions: PropTypes.array.isRequired,
};

export default Footer;
