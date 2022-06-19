import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Chambre climatisée</h1>
        <span className="siDistance">50m²</span>
        <span className="siTaxiOp">Service traiteur</span>
        <span className="siSubtitle">
          2e étage avec balcon
        </span>
        <span className="siFeatures">
          2 douche • 1 suite • 21m² 1 full bed
        </span>
        <span className="siCancelOp">vous passerez un bon séjour </span>
        <span className="siCancelOpSubtitle">
          
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">50000/nuit</span>
          <span className="siTaxOp">taxes et frais inclus</span>
          <button className="siCheckButton">Voir la chambre</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;