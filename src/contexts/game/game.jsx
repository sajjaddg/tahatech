import { createContext, useState } from "react";

const GameContext= createContext({
    key : 'tahatech',
    items :[],
    setItems :()=>{},
    round : 5,
    setRound:()=>{},
    timer : 120,
    setTimer:()=>{},
    win:false,
    setWin:()=>{},
    reset : ()=>{}
})
const GameProvider = ({children}) =>{
    const [items , setItems] = useState([])
    const [round,setRound] = useState(5)
    const [timer,setTimer] = useState(120)
    const [win,setWin] = useState(false)
    const key = 'tahatech'
    
    const reset = ()=>{
        setWin(false)
        setTimer(120)
        setRound(5)
        setItems([])
        
    }


    const val = {
        key,
        items,
        setItems,
        round,
        setRound,
        timer,
        setTimer,
        win,
        setWin,
        reset
    }
    return(
        <GameContext.Provider value={val}>
                {children}
        </GameContext.Provider>
    )
}
export {GameContext , GameProvider}