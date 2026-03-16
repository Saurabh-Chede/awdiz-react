import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Footer from "./components/Footer";
import { Routes,Route } from "react-router-dom";
import SingleProductPage from './components/SingleProductPage'

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar/>
      <div style={{flex:1,padding:20}}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProductPage/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}
