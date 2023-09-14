import { useEffect, useContext } from "react";
import "./AddCard.scss";
import { DeckContext } from "../../contexts/DeckContext";

export function ButtonAddCard() {
  const { isDisabled, setDisabled, cardInfos, setCardInfos, maxCards } =
    useContext(DeckContext);

  useEffect(() => {
    if (cardInfos.length >= maxCards) {
      setDisabled(true);
    }
    console.log(cardInfos);
  }, [cardInfos]);

  function createNewCard(user) {
    const profile = `https://api.github.com/users/${user}`;
    fetch(profile)
      .then((response) => {
        if (!response.ok) {
          console.log("passou por aqui");
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setCardInfos([
          ...cardInfos,
          {
            name: data.name,
            avatar: data.avatar_url,
            followers: data.followers,
            following: data.following,
            repositories: data.public_repos,
            company: data.company ? data.company : "não informado",
            location: data.location ? data.location : "não informado",
          },
        ]);
      })
      .catch((e) => console.log("deu ruim", e));
  }

  // document.querySelector("#inputProfile").addEventListener("keypress", function(event){
  //   if(event.key === "Enter"){
  //     createNewCard(document.querySelector("#inputProfile").value)
  //   }
  // })

  return (
    <div className="add-card">
      <input
        type="text"
        disabled={isDisabled}
        id="inputProfile"
        placeholder="Digite o nome de usuário..."
      />
      <button
        type="submit"
        disabled={isDisabled}
        id="btn"
        onClick={() => {
          createNewCard(document.querySelector("#inputProfile").value);
        }}
      >
        Adicionar Card
      </button>
    </div>
  );
}
