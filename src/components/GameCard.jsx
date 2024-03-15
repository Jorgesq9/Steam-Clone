import "./GameCard.css";
export const GameCard = ({ card }) => {
  return (
    <div className="game-card card">
      <img src={card.screenshots[0]} />
      <h3>{card.gameName}</h3>
      <p>{card.price}€</p>
    </div>
  );
};
