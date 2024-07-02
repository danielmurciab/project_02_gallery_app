import bogota4 from "../assets/img/bogota4.jpg";
import PropTypes from "prop-types";

export const Bogota4 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={bogota4} alt="Bogota" className="image" />
    </div>
  )
}

Bogota4.propTypes = {
  className: PropTypes.string
};