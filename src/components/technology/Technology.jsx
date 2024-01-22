import React, { useState, useEffect } from "react";
import "./technology.css";
import data from "../../starter-code/data.json";

const Technology = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [techImg, setTechImg] = useState("");
  const handleClick = (item) => {
    setName(item.name);
    setDesc(item.description);
    setTechImg(require(`../../starter-code${item.images.portrait.slice(1)}`));
  };
  useEffect(() => {
    handleClick(data.technology[0]);
  }, []);
  return (
    <div className="tech__class">
      <div className="tech__content">
        <div className="tech__title">
          <p>03 space launch 101</p>
        </div>
        <div className="tech__details">
          <div className="tech__left__details">
            <div className="tech__left__btn">
              {data.technology.map((item, index) => {
                return (
                  <button
                    key={item.name}
                    className={item.name === name ? "tech__active" : ""}
                    onClick={() => handleClick(item)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="tech__left__section">
              <div className="tech__left__subsection">
                <p>The terminology ..</p>
                <h1>{name}</h1>
              </div>
              <p>{desc}</p>
            </div>
          </div>
          <div className="tech__right__details">
            <img src={techImg} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
