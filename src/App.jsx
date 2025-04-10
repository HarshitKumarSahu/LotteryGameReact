import "./App.css";
import Lottery from "./components/Lottery";
import Ticket from "./components/Ticket";

function App() {
  return (
    <>
      <Lottery n={3} winningSum = {15} />
    </>
  )
}

export default App
