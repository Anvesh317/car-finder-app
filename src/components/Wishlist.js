import React from 'react';

export default function Wishlist({ wishlist }) {
  return (
    <div className="card p-3 mb-3">
      <h5>Wishlist</h5>
      {wishlist.length === 0 ? <p>No cars wishlisted.</p> :
        wishlist.map(car => (
          <div key={car.id}>{car.brand} - ${car.price}</div>
        ))
      }
    </div>
  );
}
