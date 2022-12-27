import React,{useState} from "react"


export const SkijeContext=React.createContext({

    skije:[],
    dodajSkije:()=>{},
    ukloniSkije:()=>{},
    ukupanBrojSkija:0

})



export const SkijeProvider=(props)=>{
    const [skije,setSkije]=useState([]);
const [ukupanBrojSkija,setUkupanBrojSkija]=useState(0);


const dodajSkije=(skije)=>{
    setSkije(prevSkije=>{
        return [...prevSkije,skije];
    });
    setUkupanBrojSkija(prevValue=>prevValue+1);
}

const ukloniSkije=(id)=>{
    const filterSkije=skije.filter(s=>s.id!==id);
    setSkije(filterSkije);
    setUkupanBrojSkija(prevValue=>prevValue-1);
}

const skijeValue={
    skije:skije,
    dodajSkije:dodajSkije,
    ukloniSkije:ukloniSkije,
    ukupanBrojSkija:ukupanBrojSkija

}
    return <SkijeContext.Provider value={skijeValue}>
        {props.children}
    </SkijeContext.Provider>
}