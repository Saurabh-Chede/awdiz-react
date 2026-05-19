import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/axiosConfig";
import { useNavigate } from "react-router";

const AddProducts = () => {
  const router = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "clothing",
    stock: "",
  });

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/seller/add-product", productData);
      if (response.data.success) {
        toast.success(response.data.message);
        router("/get-added-products");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  console.log(productData, "productData");

  return (
    <div>
      <h1>AddProducts</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <br />
        <input
          required
          name="name"
          type="text"
          value={productData.name}
          onChange={handleChange}
        />
        <br />
        <label>Product Price</label>
        <br />
        <input
          required
          name="price"
          type="number"
          value={productData.price}
          onChange={handleChange}
        />
        <br />
        <label>Product Description</label>
        <br />
        <input
          required
          name="description"
          type="text"
          value={productData.description}
          onChange={handleChange}
        />
        <br />
        <label>Product Image</label>
        <br />
        <input
          required
          name="image"
          type="url"
          value={productData.image}
          onChange={handleChange}
        />
        <br />
        <label>Product Category</label>
        <br />
        <select
          required
          name="category"
          value={productData.category}
          onChange={handleChange}
        >
          <option value="clothing">Clothing</option>
          <option value="footwear">Footwear</option>
          <option value="electronics">Electronics</option>
        </select>
        <br />
        <label>Product Stock</label>
        <br />
        <input
          required
          name="stock"
          type="number"
          value={productData.stock}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Create Product" />
      </form>
    </div>
  );
};

export default AddProducts;
