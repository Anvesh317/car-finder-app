import React from 'react';

export default function Filters({ filters, setFilters }) {
  return (
    <div className="card p-3 mb-3">
      <h5>Filters</h5>
      <input placeholder="Brand" className="form-control mb-2"
        value={filters.brand}
        onChange={e => setFilters(prev => ({ ...prev, brand: e.target.value }))} />
      <select className="form-select mb-2"
        value={filters.fuel}
        onChange={e => setFilters(prev => ({ ...prev, fuel: e.target.value }))}>
        <option value="">Fuel Type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
      </select>
      <input type="number" className="form-control mb-2" placeholder="Min Price"
        value={filters.minPrice}
        onChange={e => setFilters(prev => ({ ...prev, minPrice: e.target.value }))} />
      <input type="number" className="form-control mb-2" placeholder="Max Price"
        value={filters.maxPrice}
        onChange={e => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))} />
      <input type="number" className="form-control mb-2" placeholder="Seating Capacity"
        value={filters.seats}
        onChange={e => setFilters(prev => ({ ...prev, seats: e.target.value }))} />
    </div>
  );
}
