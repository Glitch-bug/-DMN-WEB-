// import React, { createContext, useState, useEffect } from "react";

// // create context
// const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   // products state
//   const [store, setStore] = useState([]);
//   // fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       // const response = await fetch("https://fakestoreapi.com/products");
//       const response = await fetch("https://web-production-b2f4.up.railway.app/store");
//       const data = await response.json();
//       setStore(data);
//       console.log(data);
//     };
//     fetchProducts();
//   }, []);
//   return (
//     <ProductContext.Provider value={{ store }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useProductContext = () => React.useContext(ProductContext);
// export default ProductProvider;


import React, { createContext, useState, useEffect } from "react";

// create context
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://web-production-b2f4.up.railway.app/store");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStore(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or component
  }

  return (
    <ProductContext.Provider value={{ store }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => React.useContext(ProductContext);
export default ProductProvider;
