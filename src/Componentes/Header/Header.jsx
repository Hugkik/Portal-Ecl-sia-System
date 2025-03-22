import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";



function Header () {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/#">DOIS TECH</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Tipo de Evento">Tipo de Evento</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Gestão de Contas</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Produtos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Produto 1</a></li>
                <li><a className="dropdown-item" href="#">Produto 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pedidos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Pedido 1</a></li>
                <li><a className="dropdown-item" href="#">Pedido 2</a></li>
              </ul>
            </li>
            
          </ul>
        </div>
        <div className="d-flex">
          <a className="nav-link text-white" href="#">Configuração</a>
          <a className="nav-link text-white" href="#">Sair</a>
        </div>
      </div>
    </nav>
  );
};

export default Header