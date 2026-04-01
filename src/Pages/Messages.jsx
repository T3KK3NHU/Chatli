import Navbar from "../Components/Navbar";
import simplehaz from "../kepek/feketeHaz.svg";
import messages from "../kepek/feketeKomment.svg";
import settings from "../kepek/feketeSettings.svg";
import emojikuldo from "../kepek/emojikuldo.png";
import send from "../kepek/send.png";
import people from "../kepek/feketePeople.svg";
import useLanguage from "../language";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaratokCard from "../Components/BaratokCard";
import UzenetekCard from "../Components/UzenetekCard";
import Button from "../Components/Button";


export default function Messages() {


    const navigate = useNavigate();


    const [lang, setLang] = useState(1);


    useEffect(() => {
        const language = JSON.parse(localStorage.getItem("language")) || { lang: "0" };
        setLang(useLanguage(language.lang));
    }, []);


    return (
        <div className="background" >
            <Navbar homeI={simplehaz} messagesI={messages} settingsI={settings} peopleI={people} />
            <div className="row d-flex flex-column justify-content-start  background text-white" style={{paddingTop:"100px"}}>
                <div className="d-flex flex-row">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2  d-flex flex-column  align-items-start mt-3 m-3 bombo px-4 p-2">
                        <input type="text" placeholder="keresés" style={{ width: "50%" }} />
                        <div className="d-flex flex-row mt-5">
                            <h4 className="d-flex text-white">Barátok()</h4>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                        <BaratokCard />
                        <BaratokCard />
                        <BaratokCard />
                    </div>
                    <div className="d-flex vh-100 align-items-start justify-content-center ">
                        <div>
                            <UzenetekCard profilkep={settings} />
                            <UzenetekCard uzenet={""} />
                            <UzenetekCard />
                            <UzenetekCard />
                            <div className="d-flex  flex-row align-items-end">
                                <input type="text" placeholder="Üzenetek" style={{ width: "100%" }} />
                                <Button content={<img className="icon" src={emojikuldo} alt="emoji" />} />
                                <Button content={<img className="icon" src={send} alt="emoji" />} />
                            </div>
                        </div>
                    </div>
                    <div>
                        Valami itt tortenik hamarosan
                    </div>
                </div>
            </div>
        </div>
    )
}
