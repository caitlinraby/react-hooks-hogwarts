import Tile from "./Tile";

function Allpigs({hogs}){
    return(
        <div>
            {hogs.map(pig => <Tile pig={pig}/>)}
        </div>
    )
}

export default Allpigs;