import parseHTML from "html-react-parser";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ProblemDetails({ details }) {
  if (details === null || details.length === 0) {
    return <div>Loading data...</div>;
  }

  // extract the object problem
  const { id, title, description, requirements, examples, prevId, nextId } =
    details;

  const hasPrevious =
    prevId === null || prevId === "null" ? "disabled-link" : "";

  const hasNext = nextId === null || nextId === "null" ? "disabled-link" : "";

  const requirementItems = requirements.map((item, index) => {
    return (
      <li className="requirement-item" key={index}>
        {item}
      </li>
    );
  });

  const examplesItems = examples.map((example, index) => {
    return (
      <div key={index} className="example">
        <div className="example-title">
          <h4>{example.title}</h4>
        </div>
        <pre>
          {example.exSolution}
          <br></br>
          {">"} {example.output}
        </pre>
      </div>
    );
  });

  return (
    <div className="problem-details">
      <div className="problem-details-title">
        <h4>{title}</h4>
        <p className="problem-details-description">{parseHTML(description)}</p>
      </div>
      <div className="problem-details-requirements">
        <h3>Requirements</h3>

        <ul>{requirementItems}</ul>
      </div>

      <div className="problem-details-examples">{examplesItems}</div>

      <div className="problem-details-footer">
        <div className={`btn-navigation-parent ${hasPrevious}`}>
          <Link
            className={`btn-previous ${hasPrevious}`}
            to={{
              pathname: `/problems/${prevId}`,
            }}
          >
            Previous
          </Link>
        </div>

        <div className={`btn-navigation-parent ${hasNext}`}>
          <Link
            className={`btn-next ${hasNext}`}
            to={{
              pathname: `/problems/${nextId}`,
            }}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    details: state.problems.currentProblem,
  };
}

export default connect(mapStateToProps)(ProblemDetails);
