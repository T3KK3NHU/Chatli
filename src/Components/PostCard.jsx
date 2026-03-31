import LikeIcon from "../kepek/comment.png"
import Comment from "../kepek/Comment.png"
import "../style/style.css"
export default function PostCard({ profilkep, felhasznalonev, feltoltotkep, szoveg }) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center m-3 text-white">
            <div className="bombo w-50 p-4">
                <div className="d-flex flex-row m-2">
                    <div className="mx-1">
                        <img style={{ width: "50px", height: "50px", objectFit: "cover" }} src={profilkep} />
                    </div>
                    <div className="mx-1 d-flex align-items-center" style={{ fontSize: "25px", color: "black" }}>
                        {felhasznalonev}
                    </div>
                </div>


                {/* csak kep */}
                {feltoltotkep && !szoveg && (
                    <div className="d-flex justify-content-center m-2 ">
                        <img
                            style={{ height: "300px", objectFit: "cover"}} src={feltoltotkep} />
                    </div>
                )}


                {/* szoveg es kep*/}
                {feltoltotkep && szoveg && (
                    <div className="d-flex flex-row m-2">
                        <div className="mx-2 mb-3">
                            <img style={{ width: "300px", height: "300px", objectFit: "cover" }} src={feltoltotkep} />
                        </div>
                        <div className="mx-1 d-flex align-items-center p-2" style={{ fontSize: "20px", color: "black", background: "lightgrey", borderRadius: "45px" }}>
                            {szoveg}
                        </div>
                    </div>
                )}


                {/* Csak szoveg*/}
                {!feltoltotkep && szoveg && (
                    <div className="m-2 p-3" style={{ fontSize: "20px", color: "black" , background: "lightgrey", borderRadius: "45px"}}>
                        {szoveg}
                    </div>
                )}
                <div className="d-flex flex-row m-2">
                    <div className="mx-1"><img src={LikeIcon} alt="like" /></div>
                    <div className="mx-1"><img src={LikeIcon} alt="like" /></div>
                    <div className="mx-1"><img src={LikeIcon} alt="like" /></div>
                    <div className="mx-1" style={{ color: "black" }}>
                        <img src={Comment} alt="komment" /> komment
                    </div>
                </div>


            </div>
        </div>
    )
}
