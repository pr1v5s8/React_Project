import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Lottery.css";
import Ticket from "./Ticket";
import { genRandomNo, sum } from "./Helper"; 
 
export default function Lottery({n, winningSum}){
    let [ticket, setTicket] = useState(genRandomNo(n));
    let isWinning = sum(ticket) === winningSum;
    
    let buyTicket = () => {
        setTicket(genRandomNo(n));
    };

    return(
        <div>
            <h1>Lottery Game :</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}