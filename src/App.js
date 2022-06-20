import BodyHeader from "./components/BodyHeader";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Table from "./containers/Table";
import "./styles.scss";

export default function App() {
  return (
    <div className="App dark-mode">
      <Navbar />
      <div className="container">
        <BodyHeader />

        <div className="board">
          <div className="board-content">
            <Table />
          </div>

          <div className="board-status">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
