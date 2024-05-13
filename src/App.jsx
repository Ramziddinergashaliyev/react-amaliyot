import { Fragment, useState } from "react";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Modal from "./components/modal/Modal";
import { productData } from "./static/productsData";

function App() {
  const [showmodal, setShowmodal] = useState(false);

  const products = productData?.slice(0, 3).map((el) => (
    <div className="card">
      <img src={el.img} alt="" />
      <h3>{el.info}</h3>
      <p>{el.category}</p>
    </div>
  ));

  return (
    <Fragment>
      <Header setShowmodal={setShowmodal} />
      <Modal showmodal={showmodal} setShowmodal={setShowmodal}>
        <div className="modal__cards container">{products}</div>
      </Modal>
      <main>
        <Hero />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
