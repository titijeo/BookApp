import {
    faBed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./buyCar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import BuyCarItem from "../../components/buyCarItem/BuyCarItem";
import Header from "../../components/header/Header";

const BuyCar = ({ type }) => {
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");


    const navigate = useNavigate();


    const handleSearch = () => {
        navigate("", { state: { brand, price } });
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="buycar">
                <div className="buySearch">
                    <div className="buySearchItem">
                        <FontAwesomeIcon icon={faBed} className="buyIcon" />
                        <input
                            type="text"
                            placeholder="the brand"
                            className="buySearchInput"
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                    <div className="buySearchItem">
                        <FontAwesomeIcon icon={faBed} className="buyIcon" />
                        <input
                            type="text"
                            placeholder="the price"
                            className="buySearchInput"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="buySearchItem">
                        <button className="buyBtn" onClick={handleSearch}>
                            Search
                        </button>
                    </div>

                </div>
            </div>
            <div className="listResult">
                <BuyCarItem />
                <BuyCarItem />
                <BuyCarItem />
                <BuyCarItem />
                <BuyCarItem />
                <BuyCarItem />

            </div>

            <div className="buymail">

                <MailList />
            </div>
            <div className="buyfooter">

                <Footer />
            </div>

        </div>
    );
};

export default BuyCar;