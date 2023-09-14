import "./Deck.scss";
import { Card } from "../Card/Card.jsx";
import { DeckProvider } from "../../contexts/DeckContext";
import { ButtonAddCard } from '../ButtomAddCard/AddCard.jsx'

export function Deck() {
  return (
    <DeckProvider>
      <div className="container-deck">
        <Card id={0} />
        <Card id={1}/>
        <Card id={2}/>
      </div>
      <ButtonAddCard />
    </DeckProvider>
  )
}
