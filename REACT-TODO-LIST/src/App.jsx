import './App.css'
import TodoList from './TodoList'
import Lottery from './Lottery';
import Ticket from './Ticket'

function App() {
  return (
    <>
    <Lottery n={4} winningSum={20}/>
    </>
  )
}

export default App;
