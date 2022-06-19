import {
    faBed,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./travelCar.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import CarItem from "../../components/carItem/CarItem";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const TravelCar = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [SecDestination, setSecDestination] = useState("");
    const [price, setPrice] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);


    const navigate = useNavigate();



    const handleSearch = () => {
        navigate({ state: { destination, SecDestination, date, price } });
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="travel">
                    <div className="travelSearch">
                        <div className="travelSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                className="travelSearchInput"
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="travelSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input
                                type="text"
                                placeholder="ville darrivéé?"
                                className="travelSearchInput"
                                onChange={(e) => setSecDestination(e.target.value)}
                            />
                        </div>
                        <div className="travelSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input
                                type="text"
                                placeholder="price"
                                className="travelSearchInput"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="travelSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span
                                onClick={() => setOpenDate(!openDate)}
                                className="travelSearchText"
                            >{`${format(date[0].startDate, "MM/dd/yyyy")} `}</span>
                            {openDate && (
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />
                            )}
                        </div>

                        <div className="travelSearchItem">
                            <button className="travelBtn" onClick={handleSearch}>
                                Search
                            </button>
                        </div>

                    </div>

            </div>
            <div className="listResult">
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
            </div>
            <div className="titi">

                <div className="travelmail">

                    <MailList />
                </div>
                <div className="travelfooter">

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default TravelCar;