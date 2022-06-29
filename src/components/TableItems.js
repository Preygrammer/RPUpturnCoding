import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchProblems } from "../actions";
import { Link } from "react-router-dom";

function TableItems({ problems }) {
  const dispatch = useDispatch();
  // Get the previous problem id
  const getPreviousProblemId = (problem) => {
    if (problem !== undefined) {
      return problem.id;
    }
    return null;
  };
  // Get the next problem id
  const getNextProblemId = (problem) => {
    if (problem !== undefined) {
      return problem.id;
    }
  };

  // handle setting previous id and next id
  const setPrevAndNextId = (index) => {
    const previousId = problems[index - 1]?.id;
    const nextId = problems[index + 1]?.id;
    localStorage.setItem(
      "prevAndNextIdObject",
      JSON.stringify({
        previousId: previousId === undefined ? null : previousId,
        nextId: nextId === undefined ? null : nextId,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchProblems());
  }, [dispatch]);

  if (!problems) {
    return (
      <tr key="0">
        <td>Loading problems...</td>
      </tr>
    );
  }

  return (
    <>
      {problems &&
        problems.map((problem, index) => {
          return (
            <tr key={problem.sort}>
              <td></td>
              <td>
                <Link
                  className="problem-item"
                  to={{
                    pathname: `/problems/${problem.id}`,
                  }}
                  onClick={() => setPrevAndNextId(index)}
                  state={{
                    problem: problem,
                    previousProblemId: getPreviousProblemId(
                      problems[index - 1]
                    ),
                    nextProblemId: getNextProblemId(problems[index + 1]),
                  }}
                >
                  {problem.title}
                </Link>
              </td>
              <td>
                <div className="tags">
                  {problem.tags.map((tag) => {
                    return <div className="tag">{tag}</div>;
                  })}
                </div>
              </td>
              <td>{problem.acceptance}</td>
              <td>
                <div className="tag tag-difficulty">{problem.difficulty}</div>
              </td>
            </tr>
          );
        })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    problems: state.problems,
  };
}

export default connect(mapStateToProps)(TableItems);
