// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import api from "../../config/axiosConfig";

// const GetAddedProducts = () => {
//   const [products, setProducts] = useState([]);

//   const getSellerAddedProduct = async () => {
//     try {
//       const response = await api.get("/seller/get-products");
//       console.log(response.data);
//       setProducts(response.data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     getSellerAddedProduct();
//   }, []);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#f1f5f9",
//         padding: "30px",
//       }}
//     >
//       {/* HEADING */}

//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "36px",
//           fontWeight: "bold",
//           color: "#0f172a",
//           marginBottom: "30px",
//         }}
//       >
//         Your Added Products
//       </h1>

//       <div
//         style={{
//           display: "flex",
//           gap: "25px",
//         }}
//       >
//         {/* FILTER SECTION */}

//         <div
//           style={{
//             width: "22%",
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "14px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//             height: "fit-content",
//           }}
//         >
//           <h2
//             style={{
//               marginBottom: "20px",
//               color: "#1e293b",
//             }}
//           >
//             Filters
//           </h2>

//           {/* SORT */}

//           <label
//             style={{
//               fontWeight: "600",
//               color: "#475569",
//             }}
//           >
//             Sort
//           </label>

//           <br />

//           <select
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginTop: "8px",
//               marginBottom: "20px",
//               borderRadius: "8px",
//               border: "1px solid #cbd5e1",
//               outline: "none",
//             }}
//           >
//             <option>Ascending</option>
//             <option>Descending</option>
//           </select>

//           {/* PRICE RANGE */}

//           <label
//             style={{
//               fontWeight: "600",
//               color: "#475569",
//             }}
//           >
//             Price Range
//           </label>

//           <br />

//           <input
//             type="number"
//             placeholder="Min Price"
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginTop: "8px",
//               marginBottom: "10px",
//               borderRadius: "8px",
//               border: "1px solid #cbd5e1",
//               outline: "none",
//             }}
//           />

//           <input
//             type="number"
//             placeholder="Max Price"
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginBottom: "20px",
//               borderRadius: "8px",
//               border: "1px solid #cbd5e1",
//               outline: "none",
//             }}
//           />

//           <button
//             style={{
//               width: "100%",
//               padding: "12px",
//               backgroundColor: "#2563eb",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontWeight: "600",
//               fontSize: "15px",
//             }}
//           >
//             Apply Filters
//           </button>
//         </div>

//         {/* PRODUCTS SECTION */}

//         <div
//           style={{
//             width: "78%",
//           }}
//         >
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//               gap: "20px",
//             }}
//           >
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 style={{
//                   backgroundColor: "white",
//                   borderRadius: "16px",
//                   overflow: "hidden",
//                   boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
//                   transition: "0.3s",
//                 }}
//               >
//                 {/* IMAGE */}

//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   style={{
//                     width: "100%",
//                     height: "220px",
//                     objectFit: "cover",
//                   }}
//                 />

//                 {/* CONTENT */}

//                 <div
//                   style={{
//                     padding: "16px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       fontSize: "18px",
//                       color: "#0f172a",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     {product.name}
//                   </h3>

//                   <p
//                     style={{
//                       color: "#64748b",
//                       fontSize: "14px",
//                       marginBottom: "12px",
//                       minHeight: "40px",
//                     }}
//                   >
//                     {product.description}
//                   </p>

//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     <span
//                       style={{
//                         fontWeight: "bold",
//                         color: "#16a34a",
//                         fontSize: "18px",
//                       }}
//                     >
//                       ₹{product.price}
//                     </span>

//                     <span
//                       style={{
//                         fontSize: "14px",
//                         color: "#475569",
//                       }}
//                     >
//                       Stock: {product.stock}
//                     </span>
//                   </div>

//                   <div
//                     style={{
//                       display: "inline-block",
//                       backgroundColor: "#dbeafe",
//                       color: "#2563eb",
//                       padding: "6px 12px",
//                       borderRadius: "20px",
//                       fontSize: "13px",
//                       fontWeight: "600",
//                     }}
//                   >
//                     {product.category}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* PAGINATION */}

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "20px",
//               marginTop: "40px",
//             }}
//           >
//             <button
//               style={{
//                 padding: "10px 22px",
//                 border: "none",
//                 borderRadius: "8px",
//                 backgroundColor: "#e2e8f0",
//                 cursor: "pointer",
//                 fontWeight: "600",
//               }}
//             >
//               Prev
//             </button>

//             <button
//               style={{
//                 padding: "10px 22px",
//                 border: "none",
//                 borderRadius: "8px",
//                 backgroundColor: "#2563eb",
//                 color: "white",
//                 cursor: "pointer",
//                 fontWeight: "600",
//               }}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetAddedProducts;


import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/axiosConfig";

const GetAddedProducts = () => {
  const [products, setProducts] = useState([]);

  // SORT STATE

  const [sortOrder, setSortOrder] = useState("asc");

  // PAGINATION STATE

  const [page, setPage] = useState(1);

  // GET PRODUCTS

  const getSellerAddedProduct = async () => {
    try {
      const response = await api.get(
        `/product/pagination?page=${page}`
      );

      console.log(response.data);

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message);
    }
  };

  // SORT PRODUCTS

  const sortProducts = async () => {
    try {
      const response = await api.get(
        `/product/sort?sortBy=price&sortOrder=${sortOrder}`
      );

      console.log(response.data);

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getSellerAddedProduct();
  }, [page,sortOrder]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
        padding: "30px",
      }}
    >
      {/* HEADING */}

      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#0f172a",
          marginBottom: "30px",
        }}
      >
        Your Added Products
      </h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        {/* FILTER SECTION */}

        <div
          style={{
            width: "22%",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "14px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            height: "fit-content",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#1e293b",
            }}
          >
            Filters
          </h2>

          {/* SORT */}

          <label
            style={{
              fontWeight: "600",
              color: "#475569",
            }}
          >
            Sort
          </label>

          <br />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "8px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              outline: "none",
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          <button
            onClick={sortProducts}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Apply Sorting
          </button>
        </div>

        {/* PRODUCTS SECTION */}

        <div
          style={{
            width: "78%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <div
                key={product._id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                }}
              >
                {/* IMAGE */}

                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                {/* CONTENT */}

                <div
                  style={{
                    padding: "16px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#0f172a",
                      marginBottom: "10px",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                      marginBottom: "12px",
                      minHeight: "40px",
                    }}
                  >
                    {product.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#16a34a",
                        fontSize: "18px",
                      }}
                    >
                      ₹{product.price}
                    </span>

                    <span
                      style={{
                        fontSize: "14px",
                        color: "#475569",
                      }}
                    >
                      Stock: {product.stock}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {product.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <button
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
              style={{
                padding: "10px 22px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#e2e8f0",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Prev
            </button>

            <button
              onClick={() => setPage(page + 1)}
              style={{
                padding: "10px 22px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAddedProducts;