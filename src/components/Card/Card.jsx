/* eslint-disable react/prop-types */
import "./Card.scss";

import {
  User,
  Users,
  BookBookmark,
  Buildings,
  MapPin,
  ArrowBendDownLeft,
} from "phosphor-react";

import { DeckContext } from "../../contexts/DeckContext";
import { useContext } from "react";

export function Card(props) {
  const { cardInfos } = useContext(DeckContext);

  if (cardInfos[props.id] == undefined) {
    return <div className="container-card">nada</div>;
  }

  return (
    <div className="container-card">
      <header>
        <img src="./src/assets/logo-grendene.svg" className="icon" />
        <span className="username">
          {cardInfos[props.id].name}
        </span>
      </header>

      <main className="user-photo">
        <img src={cardInfos[props.id].avatar}></img>
      </main>

      <div className="lower-card">
        <div className="options-and-arrow">
          <input className="switch" type="checkbox"></input>
        </div>
        <ul className="infos">
          <li>
            <User /> {cardInfos[props.id].followers} Seguidores
          </li>
          <li>
            <Users /> {cardInfos[props.id].following} Seguindo
          </li>
          <li>
            <BookBookmark /> {cardInfos[props.id].repositories} Repositórios
          </li>
          <li>
            <Buildings /> {cardInfos[props.id].company}
          </li>
          <li>
            <MapPin /> {cardInfos[props.id].location}
          </li>
        </ul>
      </div>
      <button className="arrow">
        <ArrowBendDownLeft />
      </button>
    </div>
  );
}
