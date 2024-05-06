import { Fragment } from "react";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
