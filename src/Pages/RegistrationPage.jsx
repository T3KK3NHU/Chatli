import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TextBox from "../Components/TextBox"
import Button from "../Components/Button"
import { regisztracio } from "../api";
import { Link, useNavigate } from "react-router-dom";
import csetliLogo from "../kepek/csetli.png";
import "../style/style.css"
import useLanguage from "../language"

export default function RegistrationPage() {

    const navigate = useNavigate()

    const [lang, setLang] = useState(useLanguage(1))

    useEffect(() => {
        // a localstorage-et beolvassuk
        const language = JSON.parse(localStorage.getItem("language")) || { lang: "0" }
        setLang(useLanguage(language.lang))
        console.log(lang.username);
    }, [])

    const [email, setEmail] = useState("");
    const [felhasználonev, setFelhasznalonev] = useState("");
    const [jelszo, setJelszo] = useState("");
    const [jelszo2, setJelszo2] = useState("");
    const [imagePreview, setImagePreview] = useState(null)
    const [file, setFile] = useState(null)


    const saveToPreview = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile))
        }
    }

    const uploadData = async () => {
        if (!file) {
            alert('Nincs kiválasztva kép')
            return
        }
        const data = await regisztracio(email, felhasználonev, jelszo, file)
        console.log(data)
        alert(data.message)
        if (data.result) {
            navigate(-1)
        }
    }



    return (
        <div className="background ">
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="mx-4"> <img src={csetliLogo} alt="CsetliLogo" /> </div>

                <div style={{ minWidth: 400 }}>
                    <div className="text-center fs-1 csetliColor">{lang.register}</div>
                    <TextBox title={lang.username} type={"text"} placeholder={lang.username} value={felhasználonev} setValue={setFelhasznalonev} />
                    <TextBox title={lang.email} type={"email"} placeholder={lang.email} value={email} setValue={setEmail} />
                    <TextBox title={lang.password} type={"password"} placeholder={"********"} value={jelszo} setValue={setJelszo} />
                    <TextBox title={lang.passwordagain} type={"password"} placeholder={"********"} value={jelszo2} setValue={setJelszo2} />

                    <div className="csetliColor text-decoration-none text-center">
                        <Button content={lang.register} onClick={async () => {
                            if (!email || !felhasználonev || !jelszo || !jelszo2) {
                                return alert("Hiányos beviteli adat(ok)!")
                            }
                            if (jelszo !== jelszo2) {
                                return alert("A jelszavak nem egyeznek")
                            }
                            const res = await regisztracio(email, felhasználonev, jelszo)
                            await uploadData()
                            alert(res.message)
                            if (res.result) {
                                // navigálás a bejelentkezésbe 
                                navigate("/")


                            }
                        }} />
                    </div>
                    <div className="text-center mt-2">
                        <Link to="/login" className="csetliColor text-decoration-none">{lang.haveaccount}</Link>
                    </div>
                    <div className="text-center mt-2">
                        <Link to="/" className="csetliColor text-decoration-none">{lang.backtohome}</Link>
                    </div>
                </div>

                <div style={{ minWidth: 50, maxWidth:350 }}>
                    <div className="text-center mt-1 mx-md-5 ">
                        <div>
                            {
                                imagePreview ? (<img src={imagePreview} className="w-100 h-100" style={{ objectFit: "cover" }} />)
                                    : (<div className="csetliColor"></div>)
                            }
                        </div>
                        <div className="text-center mt-3">
                            <input type="file" accept="image/*" className="form-control mb-3" onChange={saveToPreview} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}