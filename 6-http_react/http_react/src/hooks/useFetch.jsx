import { useState,useEffect } from "react";

// 4- Custom hook

export const useFetch=(url)=>{

    const [data,setData]=useState(null);

    useEffect(()=>{

        const fetchDate= async ()=>{
            const res= await fetch(url);
            // Transformar em um obj json
            const json= await res.json();

            setData(json)

        }
        
        // Chamando o fetchData
        fetchDate();

    },[url]);

    // eu posso retornar o dados que estão sendo preenchidos no nosso fetch
    return {data};

}