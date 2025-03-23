import './App.css'
import TodoList from './TodoList'
import Lottery from './Lottery';
import Ticket from './Ticket';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  // let winCondition = (ticket) => {
  //   return sum(ticket) === 15;
  // }

  // let winCondition2 = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // };

  return (
    <>
    {/* <Lottery n={3} winCondition={winCondition}/> */}
    {/* < TodoList/> */}
    <Lottery/>
    </>
  )
}

export default App;
