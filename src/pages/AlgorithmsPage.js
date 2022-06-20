import Navbar from "../components/Navbar";
import BodyHeader from "../components/BodyHeader";
import Card from "../components/Card";
import Table from "../containers/Table";

export default function AlgorithmsPage() {
    return (
        <>
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
        </>
    )
}