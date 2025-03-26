// import Ticket from "./Ticket.jsx";
// import { useState } from "react";
// import "./Lottery.css";
// import { genNo, sum } from "./helper";

// export default function Lottery({num, sameWin}){
//     let [ticket, setTicket] = useState(genNo(num));
//     let isWinning = sameWin(ticket);

//     let buyTicket = () => {
//         setTicket(genNo(num));
//     };

//     return (
//         <div>
//             <h1>Lottery Game!</h1>
//             <Ticket ticket={ticket}/>
//             <br />
//             <button onClick={buyTicket}>Buy New Ticket</button>
//             <h2 style={{color:"red"}}>{isWinning && "Congratulations, you won!"}</h2>
//         </div>
//     )
// }


import Ticket from "./Ticket.jsx";
import { useState } from "react";
import { genNo, sum } from "./helper";

export default function Lottery({num, winningSum}){
    let [ticket, setTicket] = useState(genNo(num));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genNo(num));
    };
    
    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket arr={ticket} />
            <button onClick={buyTicket}>
                Buy New Ticket </button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}