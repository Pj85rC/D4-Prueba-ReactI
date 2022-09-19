import MiApi from "./components/MiApi";
import { useState } from "react";
import NavBar from "./components/NavBar";


const App = () => {
  const [filter, setFilter] = useState("")
  const [order,  setOrder] = useState(true)

  return (
    <div className="container">
      <NavBar FilterHandler={setFilter} OrderHandler={setOrder} />
      <MiApi order={order} search={filter} />
    </div>
  );
}

export default App;
