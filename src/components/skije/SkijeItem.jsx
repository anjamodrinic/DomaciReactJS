import React, { useContext } from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import { SkijeContext } from '../../store/SkijeContext';



const SkijeItem = ({skije})=> {
    const design = {margin: 10, borderStyle: "dashed" };

    const skijeCtx=useContext(SkijeContext);

    const addToCart = () => {
        
        const s={
            id:skije.id,
            model:skije.model,
            specifikacije:skije.specifikacije,
            slikaUrl:skije.slikaUrl,
            brojPonavljanja:1
        }
        skijeCtx.dodajSkije(s);
    };

    const removeFromCart = () => {
        
        skijeCtx.ukloniSkije(skije.id);
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


export default SkijeItem;