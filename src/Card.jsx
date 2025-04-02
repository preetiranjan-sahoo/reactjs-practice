import profle from "./assets/pic.png"
export function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profle} alt="logo" />
            <h2 className="title">BantyOP</h2>
            <p className="desc">I am Banty. I play PUBG 24hr and i dont like to study.</p>
        </div>
    )
}