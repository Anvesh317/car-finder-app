const cars = [
  { id: 1, brand: "Toyota Camry", price: 25000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/cYPuKD5x3nhPhx4joUYsKsJnawPqiWLDR2h39pDuZ30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/VG95b3RhL0NhbXJ5/LzExMzQ0LzE3MzM5/MTY0NTEyNjkvZnJv/bnQtbGVmdC1zaWRl/LTQ3LmpwZz9pbXdp/ZHRoPTg5MCZpbXBv/bGljeT1yZXNpemU" },
  { id: 2, brand: "Honda Civic", price: 22000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/j-e9Z1cNLukoLt1T6uaKsTlXhFmn4WNyUvcEdtICUP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pYy5j/YXJpZC5jb20vaW5z/cGlyYXRpb24vaG9u/ZGEvY2l2aWMvOS8x/XzcuanBn" },
  { id: 3, brand: "Ford Explorer", price: 32000, fuel: "Diesel", seats: 7, image: "https://imgs.search.brave.com/EjGeOKhblDs56iB3tKx1IX_2213Vfp50eWv8jXWdSyU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/MzE0MzQ3Ni9waG90/by9mb3JkLWV4cGxv/cmVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1tSjNiUy1D/b2RiOUVZNndOOTJO/LUYtT0ROWTE5WnhY/MWo3WG9GNTU5RjRF/PQ" },
  { id: 4, brand: "Hyundai Elantra", price: 21000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/KzstF147jnDp6P7m3C7mjQ5R6OytOgv1Jwh82YWhn2Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/SHl1bmRhaS9FbGFu/dHJhLzc4ODgvMTYz/Njk3NTg4OTI4Ni9m/cm9udC1sZWZ0LXNp/ZGUtNDcuanBnP2lt/d2lkdGg9ODkwJmlt/cG9saWN5PXJlc2l6/ZQ" },
  { id: 5, brand: "Kia Seltos", price: 24000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/JEbdAZesYXILBsXe3rBmu72zI3X4eXeOe24STya2usw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/S2lhL1NlbHRvcy0y/MDIzLzg3MDkvMTY4/ODQ2NTY4NDAyMy9m/cm9udC1sZWZ0LXNp/ZGUtNDcuanBnP2lt/d2lkdGg9ODkwJmlt/cG9saWN5PXJlc2l6/ZQ" },
  { id: 6, brand: "Chevrolet Trailblazer", price: 28000, fuel: "Diesel", seats: 7, image: "https://imgs.search.brave.com/gLHzdJcbxHD3ekjbNdgw5_wMiz__C2-nTfQdakqygVs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kaS11/cGxvYWRzLXBvZDI1/LmRlYWxlcmluc3Bp/cmUuY29tL3JpY2to/ZW5kcmlja2NpdHlj/aGV2eS91cGxvYWRz/LzIwMjMvMDgvbWxw/LWltZy1leHQtMjAy/NC10cmFpbGJsYXpl/ci5qcGc" },
  { id: 7, brand: "Nissan Altima", price: 23000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/pCP5pwFN4P4VN3NpkDMitSovunvPy-41t2kLZ4ZZANs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL3dhY2tr/LWltYWdlcy1wcm9k/dWN0aW9uLTRmMjA0/YWIvbGd3MXJmejAw/aXVsMnZ0MXI1bTNv/eGN1dDZzaw" },
  { id: 8, brand: "BMW 3 Series", price: 40000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/pFFUrdkvBcaqbPTZn-5R6kLyh4kI2fGVJB3FUYQDd8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56aWdjZG4uY29t/L21lZGlhL21vZGVs/LzIwMjIvRGVjL3Jl/YXItMy00LXJpZ2h0/LTE1NjUzMjQ2NF85/MzB4NjIwLmpwZw" },
  { id: 9, brand: "Audi A4", price: 42000, fuel: "Diesel", seats: 5, image: "https://imgs.search.brave.com/LTpw4J9j7sbTDgbU_Iog7ftfgUOuPfdhsA6d3LOeWxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/QXVkaS9BNC8xMDU0/OC8xNzMyMjU3MDc4/OTM1L2Zyb250LWxl/ZnQtc2lkZS00Ny5q/cGc_aW13aWR0aD04/OTAmaW1wb2xpY3k9/cmVzaXpl" },
  { id: 10, brand: "Mercedes-Benz C-Class", price: 45000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/i2yAVKh6yDcloWC7h78BsaXvlHl1Ch72j6QPybM316s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/TWVyY2VkZXMtQmVu/ei9NZXJjZWRlcy1C/ZW56LU5ldy1DLUNs/YXNzLzY1OTkvMTU1/NjI1NTQzNTM5MS9m/cm9udC1sZWZ0LXNp/ZGUtNDcuanBnP2lt/d2lkdGg9ODkwJmlt/cG9saWN5PXJlc2l6/ZQ" },
  { id: 11, brand: "Tata Nexon", price: 18000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/a3BxvHT22MThuZFje2yH6fd9wIYzuMsJTPQKg-b1Ufw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/VGF0YS9OZXhvbi85/Njc1LzE3NDMwNjA0/MzE4NDkvZnJvbnQt/d2lwZXItOTYuanBn" },
  { id: 12, brand: "Mahindra XUV700", price: 30000, fuel: "Diesel", seats: 7, image: "https://imgs.search.brave.com/9iIgrfqVat3uLgd-B76nPMlHYIzhSry3SKpcW9WsWyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TWFoaW5kcmEvWFVW/NzAwLzEwNzg5LzE3/MDUzODg0Nzc5NTQv/ZnJvbnQtbGVmdC1z/aWRlLTQ3LmpwZz90/cj13LTY2NA" },
  { id: 13, brand: "Volkswagen Polo", price: 20000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/C0oxzOLAk7Kiy1OI6OpsCNgReJk23mJ66IxECMDAPnY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC9jL2Iv/Yi8xNjkzNzI4LTE5/MjB4MTA4MC1kZXNr/dG9wLTEwODBwLXZv/bGtzd2FnZW4tcG9s/by13YWxscGFwZXIt/aW1hZ2UuanBn" },
  { id: 14, brand: "Renault Kwid", price: 15000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/-Fmbr7Jx6Bx-0x16JIVasVUzgBLzJGvKZxW_3P6vpWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56aWdjZG4uY29t/L21lZGlhL21vZGVs/LzIwMjQvSnVsL2Zy/b250LTEtNC1sZWZ0/LTEzNTc1MzQ2OTlf/OTMweDYyMC5qcGc" },
  { id: 15, brand: "Skoda Slavia", price: 26000, fuel: "Petrol", seats: 5, image: "https://imgs.search.brave.com/wkkqShhzig_Q-csa1ZGQfsZvff-HPVuL2mCq2IYU8oU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2tvZGEtc3Rvcnli/b2FyZC5jb20vMjAy/MS8xMS8wMV9TS09E/QV9TTEFWSUEtNzY4/eDUxMi5qcGc" },
];

export const fetchCars = async (filters) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...cars];
      const { brand, fuel, minPrice, maxPrice, seats } = filters;

      if (brand) filtered = filtered.filter(car => car.brand.toLowerCase().includes(brand.toLowerCase()));
      if (fuel) filtered = filtered.filter(car => car.fuel === fuel);
      if (minPrice) filtered = filtered.filter(car => car.price >= Number(minPrice));
      if (maxPrice) filtered = filtered.filter(car => car.price <= Number(maxPrice));
      if (seats) filtered = filtered.filter(car => car.seats === Number(seats));

      resolve(filtered);
    }, 500);
  });
};
