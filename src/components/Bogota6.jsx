import bogota6 from "../assets/img/bogota6.jpg";
import PropTypes from "prop-types";

export const Bogota6 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={bogota6} alt="Bogota" className="image" />
    </div>
  )
}

Bogota6.propTypes = {
  className: PropTypes.string
};