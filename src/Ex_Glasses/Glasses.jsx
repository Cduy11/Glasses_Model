import React, { useState } from "react";
import Header from "./Header";
import { arrGlasses } from "./data";

export default function Glasses() {
  let [selectGlasses, setSelectedGlasses] = useState([]);

  const handleClick = (glasses) => {
    setSelectedGlasses(glasses);
  };

  // render model
  let renderModel = () => {
    return (
      <div className="model position-relative">
      <img
        src={selectGlasses.url}
        alt="selected glasses"
        className="glasses-on-model position-absolute"
        style={{
          bottom: '274px',
          left: '46%',
          width: '142px',
          zIndex: 1,
        }}
      />
      <div className="glasses-info text-center">
        <h4>{selectGlasses.name}</h4>
        <p>{selectGlasses.desc}</p>
        <span className="text-danger">Price: ${selectGlasses.price}</span>
      </div>
    </div>
    );
  };

  // render classes
  let renderGlasses = () => {
    return arrGlasses.map((glasses, index) => {
      return (
        <div className="col-2 p-2" key={index}>
          <div
            className="glasses__item p-1 bg-body-secondary align-content-center text-center"
            onClick={() => {
              handleClick(glasses);
            }}
          >
            <img src={glasses.url} alt="image glasses" width="50px" />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="body">
        <img
          src="/glassesImage/background.jpg"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
        {/* header */}
        <div className="header">
          <Header />
        </div>

        {/* Hiện mẫu */}
        <div className="conten-model">
          <img src="/glassesImage/model.jpg" alt="" height={300} style={{marginTop:"40px", marginLeft:"43%"}} />
          {renderModel()}
        </div>

        {/* Hiện Kính */}
        <div className="glasses container bg-light p-3 mt-5">
          <div className="row justify-content-center">{renderGlasses()}</div>
        </div>
      </div>
    </>
  );
}
