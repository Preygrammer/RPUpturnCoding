import { useSelector } from "react-redux";
import TableItems from "../components/TableItems";

export default function Table() {
  const currentState = useSelector((state) => state);
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Tags</th>
          <th>Acceptance</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        <TableItems />
      </tbody>
    </table>
  );
}
