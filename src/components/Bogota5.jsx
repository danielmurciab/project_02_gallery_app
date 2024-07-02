import bogota5 from "../assets/img/bogota5.jpg";
import PropTypes from "prop-types";

export const Bogota5 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={bogota5} alt="Bogota" className="image" />
    </div>
  )
}

Bogota5.propTypes = {
  className: PropTypes.string
};