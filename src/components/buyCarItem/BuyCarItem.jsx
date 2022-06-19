import "./buyCarItem.css";

const BuyCarItem = () => {
  return (
    <div className="buyItem">
      <img
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="buyImg"
      />
      <div className="buyDesc">
        <h1 className="buyTitle">Description de la voiture</h1>
        <span className="buyTaxiOp">voiture seconde maine</span>
        <span className="buyDistance">5000km/0km au compteur</span>
        
        <span className="buySubtitle">
          couleur d'origine
        </span>
        <span className="buyFeatures">
          tous les papiers
        </span>
        <span className="buyCancelOp"> </span>
        <span className="buyCancelOpSubtitle">
          essaie gratuit
        </span>
      </div>
      <div className="buyDetails">
        <div className="buyDetailTexts">
          <button className="buyCheckButton">Voir la voiture</button>
        </div>
      </div>
    </div>
  );
};

export default BuyCarItem;