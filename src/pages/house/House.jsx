import {
    faBed,
    
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./house.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import BuyHouse from "../../components/buyHouse/BuyHouse";
import Header from "../../components/header/Header";

const House = () => {
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

            <div className="house">
                <div className="houseSearch">
                    <div className="houseSearchItem">
                        <FontAwesomeIcon icon={faBed} className="houseIcon" />
                        <input
                            type="text"
                            placeholder="the brand"
                            className="houseSearchInput"
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                    <div className="houseSearchItem">
                        <FontAwesomeIcon icon={faBed} className="houseIcon" />
                        <input
                            type="text"
                            placeholder="the price"
                            className="houseSearchInput"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="houseSearchItem">
                        <button className="houseBtn" onClick={handleSearch}>
                            Search
                        </button>
                    </div>

                </div>

            </div>
            <div className="listResult">
                <BuyHouse />
                <BuyHouse />
                <BuyHouse />
                <BuyHouse />
                <BuyHouse />
                <BuyHouse />
                <BuyHouse />

            </div>

            <div className="housemail">

                <MailList />
            </div>
            <div className="housefooter">

                <Footer />
            </div>

        </div>
    );
};

export default House;