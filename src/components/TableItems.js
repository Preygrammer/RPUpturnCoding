import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect, useDispatch } from "react-redux";
import { fetchProblems } from "../actions";
import { Link } from "react-router-dom";

function TableItems({problems}) {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchProblems());
  }, [dispatch]);

  if(!problems) {
    return (
      <tr key="0">
        <td>Loading problems...</td>
      </tr>
    )
  }

  return (
    <>
      {
        problems && problems.map((problem, index) => {
          return (
            <tr key={problem.sort}>
              <td></td>
                <td>
                <Link
                  to={{
                    pathname: `/problems/${problem.id}`,
                  }}
                  state={{ problem }}
                >
                  {problem.title}
                </Link>
                 
                  </td>
                <td>
                  <div className="tags">
                  {
                    problem.tags.map((tag) => {
                      return (
                         <div className="tag">
                            {tag}
                          </div>
                      )
                    })
                  }
                  </div>
                  </td>
                <td>{problem.acceptance}</td>
                <td><div className="tag tag-difficulty">{problem.difficulty}</div></td>
             </tr>
          )
        })
      }
      </>
  );

}

function mapStateToProps(state) {
  return {
    problems: state.problems
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchProblems: fetchProblems }, dispatch);
// }

export default connect(mapStateToProps)(TableItems);
