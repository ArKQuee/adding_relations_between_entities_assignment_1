import React from "react";
import PropTypes from "prop-types";

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-img" />
      <div className="card-content">
        <h2>{destination.name}</h2>
        <p className="location">{destination.location}</p>
        <p>{destination.description}</p>
        <p className="price">{destination.price}</p>
      </div>
    </div>
  );
};
DestinationCard.propTypes = {
  destination: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default DestinationCard;

