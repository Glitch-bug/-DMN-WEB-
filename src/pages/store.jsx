// import React, {useContext} from 'react';
// // import product context
// import { ProductContext, useProductContext } from '../contexts/ProductContext';
// import Product from '../tools/components/Product';
// // import components

// const Store = () => {
//   // get products from product context
//   const { store } = useProductContext();
//   console.log("store here", [store])
//   console.log("store categories here", [store.categories[1]])
//   // get only men's & women's clothing category
//   const filteredProducts = store.categories.filter(item => {
//     console.log("item here", item)
//     return (
//       item.categories === "Accessories" || item.categories ===
//     "Decor"
//     );
//   });

//   return <div>
//     <section className='py-16'>
//       <div className='container mx-auto'>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols- xl:grid-cols-3 gap-10 max-w-sm
//         mx-auto md:max-w-none md:mx-0'>
//           {filteredProducts.map((store, index) => {
//             return <div key={index}>
//               <Product store={store} key={store.id} />
//             </div>;
//           })}
//         </div>
//       </div>
//     </section>
//   </div>;
// };

// export default Store;
import React from "react";
import Product from "../tools/components/Product";
import { useProductContext } from "../contexts/ProductContext";
import Hero from "../tools/components/Hero";

const Store = () => {
  const { store } = useProductContext();
  console.log(store, "store");

  const data = {
    categories: store.categories,
    products: store.products,
    images: store.images,
  };

  const showCategory = (productCategory) => {
    console.log(productCategory, "pC");
    return data.categories.filter(
      (category) => productCategory === category.id
    )[0]?.name;
  };
  const filteredProducts = data.products.filter((product) => {
    return product.category === 1 || product.category === 2;
  });
  const filteredCategory = data.categories.filter((category, id) => {
    return category.id === id;
  });
  return (
    <div>
      <section className="pb-16">
        <Hero />
        <div className="container mx-auto">
          <div
            className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-sm
         mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <Product
                  product={product}
                  pics={data.images}
                  categoryName={(id) => showCategory(id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
