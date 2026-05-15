import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Footer from "./components/Footer";
import { Routes,Route } from "react-router-dom";
import SingleProductPage from './components/SingleProductPage'
import ContextCounter from "./components/Day11/ContextCounter";
import ReduxCounter from './components/Day12/ReduxCounter'
import Todo from './components/Day14/Todo'
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar/>
      <div style={{flex:1,padding:20}}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProductPage/>} />
        <Route path="/context-counter" element={<ContextCounter/>} />
        <Route path="/redux-counter" element={<ReduxCounter/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}
