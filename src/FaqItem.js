import "./App.css";
import {useState,useEffect} from "react";

const FaqItem=({faq,index})=>{
    const [isShow,setIsShow]=useState(false);

    useEffect(()=>{
        if(index==0){
            setIsShow(true);
        }
    },[])

    const handleshow=()=>{
        setIsShow((isShow)=>!isShow);
    }
    return (
       <div className="faq-box">
        <div className="que" onClick={handleshow}>
            <button className={isShow?"arrow":""}> > </button>
            <div>{faq.question}</div>
        </div>
        {isShow&&<div className="ans">{faq.answer}</div>}
        
       </div>
    )
}

export default FaqItem;