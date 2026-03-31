import Navbar from "../Components/Navbar";
import simplehaz from "../kepek/feketeHaz.svg"
import messages from "../kepek/feketeKomment.svg"
import settings from "../kepek/feketeSettings.svg"
import people from "../kepek/feketePeople.svg"
import useLanguage from "../language"
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import Language from "../Components/Lanugage";
import Button from "../Components/Button";
import TextBox from "../Components/TextBox";

export default function Settings() {

    const navigate = useNavigate();

    const [lang, setLang] = useState(useLanguage(1))

    useEffect(() => {
        // a localstorage-et beolvassuk
        const language = JSON.parse(localStorage.getItem("language")) || { lang: "0" }
        setLang(useLanguage(language.lang))
        console.log(lang.username);
    }, [])

    return (
        <div style={{ padding: "100px" }} className="background vh-100">
            <Navbar homeI={simplehaz} messagesI={messages} peopleI={people} settingsI={settings} />
            <div className="container text-center fw-bold ">
                <div className="row">
                    <div className="col fs-2 csetliColor ">Beállítások</div>
                </div>
                
                <div className="row csetliColor p-4 m-5 text-left">
                    {/* felhasználónév */}
                    <div className="col-6 d-flex flex-row felhNev">
                        <div className="d-flex flex-column">
                        <TextBox title={"Adja meg az új felhasználónevét"}/>
                        <Button content={"Módosítás"}/>
                        <div className="p-2">
                        {/* nyelv */}
                        <h2>Módosítja a nyelvet</h2>
                            <div className="d-flex flex-row p-1">
                            <Language/>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* jelszó */}
                    <div class="col-6 d-flex flex-column ">
                        <div className="d-flex flex-column jelszo">
                        <TextBox title={"Régi jelszó"}/>
                        <TextBox title={"Új  jelszó"}/>
                        <TextBox title={"Új jelszó"}/>
                        </div>
                        <Button content={"Módosítás"}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}