// import React, { useContext } from 'react';
// // import link
// import { Link } from 'react-router-dom';
// // import icons
// import { BsPlus, BsEyeFill } from 'react-icons/bs'
// // import cart context
// import { CartContext } from '../../contexts/CartContext';


// const Product = ({ store }) => {
//   const { addToCart } = useContext(CartContext);
//   // destructure product
//   const { id, image, category, title, price } = store; 
//   return (
//     <div>
//     <div className='border border-[#e4e4e4] h-[300px] mb-4 relative
//     overflow-hidden group transition'>
//       <div className='w-full h-full flex justify-center items-center'>
//         {/* image */}
//             <div className='w-[200px] mx-auto flex justify-center items-center'>
//               <img src={image} alt="..." />
//             </div> 
//         {/* buttons */}
//         <div className='absolute top-6 right-11 group-hover:right-5 bg-red-500/40
//          p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all
//          duration-300'>
//           <button onClick={() => addToCart(store, id)}>
//             <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
//               <BsPlus className='text-3xl' />
//             </div>
//           </button>
//           <Link to={`/product/${id}`}  
//           className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
//           >
//             <BsEyeFill />
//           </Link>
//           </div>
//       </div>
//     </div>
//     {/* category & title & price */}
//     <div>
//       <div className='text-sm capitalize text-gray-500
//       mb-1'>{category}</div>
//       <Link to={`/product/${id}`}> 
//       <h2 className='font-semibold mb-1'>{title}</h2>
//       </Link>
//       <div className='font-semibold'>$ {price}</div>
//     </div>
//   </div>
//   );
// };

// export default Product;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../../contexts/CartContext';

const Product = ({ product, pics, categoryName }) => {
  const { addToCart } = useContext(CartContext);
  const { id, images, name, price } = product; // Assuming your product properties are id, image, category, name, and price
  // const {, } = pics

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={images} alt={name} />
          </div>
          {/* buttons */}
          <div className='absolute top-6 right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button onClick={() => addToCart(product, id)}>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{categoryName(id)}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{name}</h2>
        </Link>
        <div className='font-semibold'>GHS {price}</div>
      </div>
    </div>
  );
};

export default Product;

