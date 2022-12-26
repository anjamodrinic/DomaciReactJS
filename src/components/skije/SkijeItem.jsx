import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";


const skijeItem = ()=> {
    const design = {margin: 10, borderStyle: "dashed" };

    return(
        <div className="card" style={design}>
            <img className="card-img-top" src="https://www.divein.com/wp-content/uploads/Snow/atomic-skis-1920x1231.avif" alt="Atomic skije" width={200}/>
            <div className="card-body">
                <h3 className="card-title">Model skija</h3>
                <p className="card-text"> Specifikacije</p>
                <button className="btn"><ImPlus/></button>
                <button className="btn"><ImMinus/></button>
            </div>
        </div>
    )

}

export default skijeItem;