import React, { useEffect, useState } from 'react';
import { fetchCars } from './api/mockCars';
import { getWishlist, toggleWishlist } from './utils/localStorageUtils';
import Filters from './components/Filters';
import CarCard from './components/CarCard';
import Wishlist from './components/Wishlist';
import CarModal from './components/CarModal';
import 'bootstrap/dist/css/bootstrap.min.css';


const PER_PAGE = 10;

function App() {
  const [filters, setFilters] = useState({ brand: '', fuel: '', minPrice: '', maxPrice: '', seats: '' });
  const [cars, setCars] = useState([]);
  const [wishlist, setWishlist] = useState(getWishlist());
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      const result = await fetchCars(filters);
      setCars(result);
      setCurrentPage(1);
      setLoading(false);
    };
    loadCars();
  }, [filters]);

  const paginatedCars = cars.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
  const totalPages = Math.ceil(cars.length / PER_PAGE);

  const handleWishlistToggle = (car) => {
    toggleWishlist(car);
    setWishlist(getWishlist());
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">🚗 Car Finder</h2>
      <div className="row">
        <div className="col-md-4">
          <Filters filters={filters} setFilters={setFilters} />
          <Wishlist wishlist={wishlist} />
        </div>
        <div className="col-md-8">
          {loading ? <p>Loading cars...</p> :
            <>
              <div className="d-flex flex-wrap gap-3">
                {paginatedCars.map(car => (
                  <CarCard
                    key={car.id}
                    car={car}
                    isWishlisted={wishlist.some(w => w.id === car.id)}
                    onWishlist={handleWishlistToggle}
                    onViewDetails={setSelectedCar}
                  />
                ))}
              </div>
              <nav className="mt-3">
                <ul className="pagination">
                  {Array.from({ length: totalPages }, (_, idx) => (
                    <li className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`} key={idx}>
                      <button className="page-link" onClick={() => setCurrentPage(idx + 1)}>{idx + 1}</button>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          }
        </div>
      </div>
      {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </div>
  );
}

export default App;
