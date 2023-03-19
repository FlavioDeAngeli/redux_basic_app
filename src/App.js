import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { depositMoney, withdrawMoney } from "./store/actions";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>{account}</div>
      <div>
        <button onClick={() => dispatch(depositMoney(100))}>+</button>
        <button onClick={() => dispatch(withdrawMoney(100))}>-</button>
      </div>
    </div>
  );
}

export default App;
