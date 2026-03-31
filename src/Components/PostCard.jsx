import LikeIcon from "../kepek/comment.png"
import Comment from "../kepek/Comment.png"
import "../style/style.css"
export default function PostCard({profilkep,felhasznalonev,feltoltotkep,szoveg}) {
    return (
        <div className="d-flex vh-100 flex-column justify-content-center align-items-center background text-white ">
            <div className="bombo w-50 h-25 p-4">
                <div className="d-flex flex-row ">
                    <div><img src={profilkep}/>Profilkep</div>
                    <div>{felhasznalonev}felhasznalonev</div>
                </div>
                <div className="d-flex flex-row">
                    <div><img src={feltoltotkep}/>feltoltott kep</div>
                    <div>{szoveg}szoveg</div>
                </div>
                <div className="d-flex flex-row">
                    <div><img src={LikeIcon} alt="" />like</div>
                    <div><img src={Comment} alt="" />koment</div>
                </div>


            </div>
        </div>
    )
}
