import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel </span>
        <span className="fpCity">ABIDJAN</span>
        <span className="fpPrice">à partir de 20.000/nuit</span>
        <div className="fpRating">
          
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites </span>
        <span className="fpCity">Bouake</span>
        <span className="fpPrice">à partir de 50.000/nuit</span>
        <div className="fpRating">
          
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">REGION DE L'ouest</span>
        <span className="fpCity">MAN</span>
        <span className="fpPrice">à partir de 20.000</span>
        <div className="fpRating">
          
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Novotel</span>
        <span className="fpCity">korhogo</span>
        <span className="fpPrice">à partir de 80.000</span>
        <div className="fpRating">
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;