import Product from "./Product";
import Counter from './Counter'
import EventHandling from "./EventHandling";
import ProductCard from './ProductCard'

export default function Hero() {
  return (
    <div style={{ padding: "20px" }}>
      {/* <h1 style={{ color: "orangered" }}>React HERO</h1>
      <p style={{ marginTop: "20px" }}>JSX Practice</p>
      <button>Start Learning</button> */}
      {/* <p>Saurabh chede</p> */}
      <div style={{ display: "flex", gap: 20, justifyContent:'center' }}>
        {/* <Product title="product-card" price="199" />
        <Product title="watch" price="99" />
        <Product title="iphone" price="79999" /> */}
        {/* <Counter /> */}
        {/* <EventHandling></EventHandling> */}
        {/* <ProductCard/> */}
       
      </div>
    </div>
  );
}
