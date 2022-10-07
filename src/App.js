import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import styles from "../src/styles/App.module.scss";
import Home from "../src/pages/Home";
import CreateChallenge from "./pages/CreateChallenge";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-challenge" element={<CreateChallenge />} />
      </Routes>
    </div>
  );
}

export default App;
