import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "../../Componentes/Footer/Footer";
import Header from "../../Componentes/Header/Header";


function Home(){
    return(
        <div className="d-flex flex-column vh-100">
        <Header />
        <div className="flex-grow-1 bg-white"></div>
        <Footer />
      </div>
    );
};
export default Home