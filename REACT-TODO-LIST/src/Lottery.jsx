// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import "./Lottery.css";
// import Ticket from "./Ticket";
// import { genRandomNo, sum } from "./Helper"; 
// import Button from "./button";
 
// export default function Lottery({n, winCondition}){
//     let [ticket, setTicket] = useState(genRandomNo(n));
//     let isWinning = winCondition(ticket);
    
//     let buyTicket = () => {
//         setTicket(genRandomNo(n));
//     };

//     const partyEmoji = "\u{1F389}";
//     const trophyEmoji = "\u{1F3C6}";

//     return(
//         <div>
//             <h1>LOTTERY GAME</h1>
//             <Ticket ticket={ticket}/>
//             <br />
//             {/* <button id="btn_One" onClick={buyTicket}>Buy New Ticket</button> */}
//             <Button action={buyTicket}/>
//             <h3 style={{color: "red", backgroundColor: "white", border: "dotted", padding: "20px"}}>{isWinning && `${trophyEmoji} Congratulations, you won!   ${trophyEmoji}`}</h3>
//         </div>
//     )
// }

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Lottery.css";
import { genTicket, sum } from "./Helper";

export default function Lottery(){
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    
    let buyTicket = () => {
        setTicket(genTicket(3));
    };

    return(
        <div>
            <h2>Lottery Game</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>

            <br />
            <button onClick={buyTicket}>Buy Ticket</button>

            <h3 style={{color: "red"}}>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}