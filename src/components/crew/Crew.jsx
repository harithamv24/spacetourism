import React, { useEffect, useState } from "react";
import "./crew.css";
import data from "../../starter-code/data.json";
const Crew = () => {
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [crewImg, setCrewImg] = useState("");

  const handleClick = (item) => {
    setBio(item.bio);
    setRole(item.role);
    setName(item.name);
    setCrewImg(require(`../../starter-code${item.images.png.slice(1)}`));
  };
  useEffect(() => {
    handleClick(data.crew[0]);
  }, []);
  return (
    <div className="crew__class">
      <div className="crew__content">
        <div className="crew__title">
          <p>02 Meet your crew</p>
        </div>
        <div className="crew__details">
          <div className="crew__left__details">
            <p>{role}</p>
            <h1>{name}</h1>
            <p>{bio}</p>
            <div className="slide-btn-container">
              {data.crew.map((item) => {
                return (
                  <button
                    className={`slide-btn ${
                      name === item.name ? "crew_active" : ""
                    }`}
                    key={item.name}
                    onClick={() => handleClick(item)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="crew__right__details">
            <img src={crewImg} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
