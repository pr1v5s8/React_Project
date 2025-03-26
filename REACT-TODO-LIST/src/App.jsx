import './App.css'
import Lottery from './Lottery';
import { sum } from './helper';



function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  let sameWin = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
    <Lottery num={3} winningSum={15}/>
    </>
  )
}

export default App;
