export default function BaratokCard({profilkep,felhasznalonev,elerhetoallapot}){
    return(
       
            <div >
                    <div className="d-flex   flex-row  align-items-start">
                    <img src={profilkep}/>
                    <div>{felhasznalonev}felhasznalonev</div>
                    <div>{elerhetoallapot}10min</div>
                    </div>
            </div>  
             
       
       
    )
}
