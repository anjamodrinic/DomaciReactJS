import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";


const skijeItem = ({skije})=> {
    const design = {margin: 10, borderStyle: "dashed" };

    const addToCart = () => {
        console.log("add");
    };

    const removeFromCart = () => {
        console.log("remove");
    };

    return(
        <div className="card" style={design}>
           <img className="card-img-top" src={skije.slikaUrl} alt="Atomic skije" width={200}/>
            <div className="card-body">
                <h3 className="card-title">{skije.model}</h3>
                <p className="card-text"> {skije.specifikacije}</p>
                <button className="btn" onClick={addToCart}><ImPlus/></button>
                <button className="btn" onClick={removeFromCart}><ImMinus/></button>
            </div>
        </div>
    )

}

export default skijeItem;