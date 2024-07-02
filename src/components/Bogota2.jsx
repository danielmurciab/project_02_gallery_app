import bogota2 from "../assets/img/bogota2.jpg";
import PropTypes from "prop-types";

export const Bogota2 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={bogota2} alt="Bogota" className="image" />
    </div>
  )
}

Bogota2.propTypes = {
  className: PropTypes.string
};