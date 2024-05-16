import { Fragment, useState } from "react";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Modal from "./components/modal/Modal";
import { productData } from "./static/productsData";
import { Routes, Route } from "react-router-dom";
import Teachers from "./pages/teachers/Teachers";
import Stydents from "./pages/students/Stydents";
import Home from "./pages/home/Home";

function App() {
  const [showmodal, setShowmodal] = useState(false);

  return (
    <Fragment>
      <Header setShowmodal={setShowmodal} />
      <Routes>
        <Route path="/" element={<Teachers />} />
        <Route path="/students" element={<Stydents />} />
        <Route />
      </Routes>

      <Modal showmodal={showmodal} setShowmodal={setShowmodal}>
        <div className="modal__cards container">
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>See more</button>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
}

export default App;
