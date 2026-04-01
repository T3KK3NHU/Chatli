export default function UzenetekCard({ profilkep, uzenet }) {
    return (
        <div className="d-flex flex-row">
            {
                (<div className="d-flex flex-row align-items-start">
                    <img style={{ width: "40px", height: "40px", objectFit: "cover" ,borderRadius: "50%"}} src={profilkep} />
                    <div style={{padding: "10px 15px" ,borderRadius: "20px", maxWidth: "200px"}}>{uzenet}uzenet</div>
                </div>
            )}
            {
                (<div  className="d-flex flex-row align-items-end m-4">
                    <div>{uzenet}uzenet</div>
                    <img style={{ width: "40px", height: "40px", objectFit: "cover" ,borderRadius: "50%" }} src={profilkep} />
                    
                                 
                </div>
            )}
        </div>
    )
}
