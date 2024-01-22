import React, { useEffect, useState } from "react";
import "./destination.css";
import data from "../../starter-code/data.json";
import moon from "../../starter-code/assets/destination/image-europa.png";
import { NavLink } from "react-router-dom";

const Destination = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [distance, setDistance] = useState("");
  const [timeTravel, setTimeTravel] = useState("");
  const [destinationImg, setdestinationImg] = useState("");

  const destination_handle = (item) => {
    setName(item.name);
    setDesc(item.description);
    setDistance(item.distance);
    setTimeTravel(item.travel);
    setdestinationImg(require(`../../starter-code${item.images.png.slice(1)}`));
  };
  useEffect(() => {
    destination_handle(data.destinations[0]);
  }, []);
  return (
    <div className="destination__class">
      <div className="destination__content">
        <div className="destination__title">
          <p>01 pick your destination</p>
        </div>
        <div className="destination__details">
          <div className="destination__left__details">
            <img src={destinationImg} alt={name} />
          </div>
          <div className="destination__right__details">
            <ul>
              {data.destinations.map((item) => {
                return (
                  <li
                    key={item.name}
                    onClick={() => destination_handle(item)}
                    className={name === item.name ? "destination_active" : ""}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
            <h1>{name}</h1>
            <p>{desc}</p>

            <div className="properties">
              <div className="distance">
                <p>avg. distance</p>
                <h3>{distance}</h3>
              </div>
              <div className="travel__time">
                <p>est. time travel</p>
                <h3>{timeTravel}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
