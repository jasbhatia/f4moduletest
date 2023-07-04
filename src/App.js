import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/actions/productActions";
import Error from "./Components/Error";

function App() {
  // let obj = useSelector((state) => state);
  // console.log("obj", obj);
  const data = useSelector((state) => {
    return state.product.data;
  });
  const error = useSelector((state) => {
    return state.product.error;
  });
  const loading = useSelector((state) => {
    return state.product.loading;
  });

  console.log("dataApp", data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{ marginTop: "2rem", marginLeft: "3rem", marginRight: "3rem" }}
      >
        <Routes>
          <Route path="/" element={<Home posts={data} />} />
          <Route path="/item/:id" element={<ProductDetail posts={data} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
