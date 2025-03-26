import { v4 as uuidv4 } from "uuid";
import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({arr}){
    return (
        <div>
            {
                arr.map((num, key) => (
                    <TicketNum num={num} key={uuidv4()} />
                ) )
            }
        </div>
    )
}