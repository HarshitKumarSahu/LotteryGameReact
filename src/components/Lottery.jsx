import { useState } from "react";
import { genTicket , sum } from "../utils/lotteryUtils";
import Ticket from "./Ticket";

export default function Lottery({ n = 3 , winningSum = 15 }) {
    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum

    function buyTicket() {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game !</h1>
            <div>
                <p>Ticket</p>
                <Ticket ticket={ticket}/>
                <button onClick={buyTicket}>Buy New Ticket</button>
                <h2>{isWinning && "congo you win"}</h2>
            </div>
        </div>
    )
}