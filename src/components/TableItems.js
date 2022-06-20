import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchProblems } from "../actions";

function TableItems() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProblems());
  }, [dispatch]);

  return (
    <>
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
        <tr>
          <td></td>
          <td>Joins Two Strings</td>
          <td>strings</td>
          <td>94%</td>
          <td>Easiest</td>
        </tr>
      </tbody>
    </>
  );
}

function mapStateToProps(state) {
  return {
    problems: state.problems
  };
}

export default connect(mapStateToProps)(TableItems);
