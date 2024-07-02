import bogota1 from "../assets/img/bogota1.jpg";
import PropTypes from "prop-types";

export const Bogota1 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={bogota1} alt="Bogota" className="image" />
    </div>
  )
}

Bogota1.propTypes = {
  className: PropTypes.string
};