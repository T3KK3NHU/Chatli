import Navbar from "../Components/Navbar";
import FillHouse from "../kepek/feketeHaz.svg"
import messages from "../kepek/feketeKomment.svg"
import settings from "../kepek/feketeSettings.svg"
import people from "../kepek/feketePeople.svg"
import useLanguage from "../language"

export default function MainMenu() {

    const [lang, setLang]= useState(useLanguage(1))

    useEffect(()=>{
        // a localstorage-et beolvassuk
        const language = JSON.parse(localStorage.getItem("language")) || {lang: "0"}
        setLang(useLanguage(language.lang))
        console.log(lang.username);
    },[])

    return (
        <div className="background">
                <Navbar homeI={FillHouse} messagesI={messages} settingsI={settings} peopleI={people}/>
                
                <div>EZ EGY FOMENU??</div>
        </div>
    )
}