function Tile ({pig}){

    return(
        <div>
            {pig.name}
            <img src={pig.image}></img>
        </div>
    )
}
export default Tile;