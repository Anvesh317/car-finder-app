const KEY = "wishlist";

export const getWishlist = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const toggleWishlist = (car) => {
  let wishlist = getWishlist();
  const exists = wishlist.find(c => c.id === car.id);
  if (exists) {
    wishlist = wishlist.filter(c => c.id !== car.id);
  } else {
    wishlist.push(car);
  }
  localStorage.setItem(KEY, JSON.stringify(wishlist));
};
