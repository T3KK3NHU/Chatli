import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import FillHouse from "../kepek/feketeHaz.svg";
import messages from "../kepek/feketeKomment.svg";
import settings from "../kepek/feketeSettings.svg";
import people from "../kepek/feketePeople.svg";
import useLanguage from "../language";
import PostCard from "../Components/PostCard";


export default function MainMenu() {

    const [lang, setLang] = useState(1);

    useEffect(() => {
        const language = JSON.parse(localStorage.getItem("language")) || { lang: "0" };
        setLang(useLanguage(language.lang));
    }, []);

    return (
            <div className="background" style={{ padding: "100px" }}>
                <Navbar homeI={FillHouse} messagesI={messages} settingsI={settings} peopleI={people} />
                <PostCard felhasznalonev={"0asd"} feltoltotkep={settings}/>
                <PostCard />
                <PostCard />
            </div>
    );
}