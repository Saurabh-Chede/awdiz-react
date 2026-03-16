import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProductPage() {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  async function fetchData(productId) {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    setProductData(response.data);
  }
  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <div style={styles.imageBox}>
          <img src={productData.image} alt="product" style={styles.image}/>
        </div>

        <div style={styles.info}>
          <h1 style={styles.title}>{productData.title}</h1>

          <p style={styles.description}>
            {productData.description}
          </p>

          <p style={styles.price}>₹ {productData.price}</p>

        </div>

      </div>
    </div>
  );
}

const styles = {

  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"80vh",
    padding:"20px"
  },

  card:{
    display:"flex",
    gap:"30px",
    maxWidth:"900px",
    background:"#fff",
    padding:"25px",
    borderRadius:"10px",
    
  },

  imageBox:{
    width:"350px",
    height:"350px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },

  image:{
    width:"100%",
    height:"100%",
    objectFit:"contain"
  },

  info:{
    flex:1,
    display:"flex",
    flexDirection:"column",
    gap:"15px"
  },

  title:{
    fontSize:"24px",
    fontWeight:"600"
  },

  description:{
    color:"#555",
    lineHeight:"1.6"
  },

  price:{
    fontSize:"22px",
    fontWeight:"bold",
    color:"#2e7d32"
  },

  button:{
    padding:"12px 20px",
    background:"#1976d2",
    color:"#fff",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer",
    fontSize:"16px",
    width:"150px"
  }

};

export default SingleProductPage;