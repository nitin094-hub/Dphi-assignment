import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import styles from "../src/styles/App.module.scss";
import Home from "../src/pages/Home";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
