import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{display:'flex', flexDirection:'column',  height:'100vh'}}>
      <Navbar />
      <div style={{flex:1,backgroundColor: "#e6f4ff"}}>
        <Hero />
      </div>
      <Footer></Footer>
    </div>
  );
}
