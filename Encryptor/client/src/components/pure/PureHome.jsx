import React from "react";
import PropTypes from "prop-types";
import "../../styles/main.css";
import frame from "../../assets/img/Frame 6.png";
import alertIcon from "../../assets/svg/alert-circle-svgrepo-com.svg";
import avatar from "../../assets/img/Muñeco.png";
const PureHome = () => {
  return (
    <main className="container">
      <section className="col-1">
        <img
          src={frame}
          alt="frame-icon"
          style={{ height: "48px", width: "120px" }}
        />
        <div className="row-1">
          <h2 id="title">Ingresa el texto aqui</h2>
          <textarea
            name="text-imput"
            id="text-input"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="row-2">
          <div className="info-box">
            <img src={alertIcon} alt="alert-icon" style={{ width: "30px" }} />
            <span>Solo letras minusculas y sin acento</span>
          </div>
          <div className="btn-container">
            <button className="btn-enc">Encriptar</button>
            <button className="btn-desc">Desencriptar</button>
          </div>
        </div>
      </section>
      <div className="col-2">
        <img src={avatar} alt="avatar" />
        <h1>Ningun texto fue encontrado</h1>
        <h3>Ingresa el texto que desees encriptar o desencriptar</h3>
      </div>
    </main>
  );
};

PureHome.propTypes = {};

export default PureHome;
