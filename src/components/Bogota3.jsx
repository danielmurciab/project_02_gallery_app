import bogota3  from "../assets/img/bogota3.jpg";
import PropTypes from "prop-types";

export const Bogota3 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={bogota3} alt="Bogota" className="image" />
    </div>
  )
}

Bogota3.propTypes = {
  className: PropTypes.string
};