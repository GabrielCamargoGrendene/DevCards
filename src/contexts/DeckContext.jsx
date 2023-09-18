/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DeckContext = createContext({});

export function DeckProvider( {children} ) { //isso era declarado direto no AddCart
  const [isDisabled, setDisabled] = useState(false);
  const [cardInfos, setCardInfos] = useState([]);
  const maxCards = 3;
  return (
    <DeckContext.Provider
      value={{isDisabled, setDisabled, cardInfos, setCardInfos, maxCards}}
    >
      {children}
    </DeckContext.Provider>
  );
}
