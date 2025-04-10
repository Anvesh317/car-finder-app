import React from 'react';

export default function CarCard({ car, isWishlisted, onWishlist, onViewDetails }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={car.image} className="card-img-top" alt={car.brand} style={{ height: '180px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{car.brand}</h5>
        <p className="card-text">
          Price: ${car.price} <br />
          Fuel: {car.fuel} <br />
          Seats: {car.seats}
        </p>
        <button className="btn btn-primary me-2" onClick={() => onViewDetails(car)}>
          View
        </button>
        <button className="btn btn-warning" onClick={() => onWishlist(car)}>
          {isWishlisted ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
