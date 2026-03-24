export default function Button({content,  onClick}){
    return(
        <div>
            <div className={`btn `} onClick={onClick}>{content} </div>
        </div>
    )
}