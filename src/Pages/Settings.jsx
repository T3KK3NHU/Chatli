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
    const [imagePreview, setImagePreview] = useState(null)

    useEffect(() => {
        // a localstorage-et beolvassuk
        const language = JSON.parse(localStorage.getItem("language")) || { lang: "0" }
        setLang(useLanguage(language.lang))
        console.log(lang.username);
    }, [])

    const saveToPreview = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile))
        }
    }


    return (
        <div style={{ padding: "100px" }} className="background vh-100">
            <Navbar homeI={simplehaz} messagesI={messages} peopleI={people} settingsI={settings} />
            <div className="container text-center fw-bold ">
                {/* szoveg */}
                <div className="row">
                    <div className="col fs-2 csetliColor ">{lang.settingsString}</div>
                </div>
                {/* beallitasok */}
                <div className="row csetliColor p-4 m-5 text-left">
                    {/* felhasználónév */}
                    <div className="col-6 d-flex flex-row felhNev">
                        <div className="d-flex flex-column">
                            <TextBox title={lang.settingsUserString} />
                            <Button content={lang.button} />
                            <div className="p-2">
                                {/* nyelv */}
                                <h2>{lang.setLangChange}</h2>
                                <div className="d-flex flex-row p-1">
                                    <Language />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* jelszó */}
                    <div class="row col-6 d-flex flex-column ">
                        <div className="d-flex flex-column jelszo">
                            <TextBox title={lang.pw} />
                            <TextBox title={lang.pw1} />
                            <TextBox title={lang.pw1} />
                        </div>
                        <Button content={lang.button} />
                    </div>
                    {/* kep  */}
                    <div style={{ minWidth: 400 }}>
                        <div className="d-flex flex-row w-100 justify-content-center ">
                            <div>
                                <div>
                                    {
                                        imagePreview ? (<img src={imagePreview} className="w-100 h-100 " style={{ objectFit: "cover" }} />)
                                            : (<div className="csetliColor text-center mt-1 fs-4"></div>)}
                                </div>

                                <div>
                                    <input type="file" accept="image/*" className=" mb-3" onChange={saveToPreview} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kijelentkezés */}
                <div className="row d-flex ">
                    <div className="col-6 flex-row ">
                        <div className="justify-content-center align-items-end text-decoration-none">
                            <Button content={lang.setLogout} />
                        </div>
                    </div>
                    <div className="col-6 d-flex">
                        <div className="justify-content-center align-items-end text-decoration-none">
                            <Button content={lang.accountDelete} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}