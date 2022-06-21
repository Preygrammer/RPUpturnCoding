import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect, useDispatch } from "react-redux";

export default function ProblemDetails({ details }) {
  console.log(details);

  const { id, title, description, requirements, examples } = details.problem;

  const requirementItems = requirements.map((item, index) => {
    return <li key={index}>{item}</li>;
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
        <p className="problem-details-description">{description}</p>
      </div>
      <div className="problem-details-requirements">
        <h3>Requirements</h3>

        <ul>{requirementItems}</ul>
      </div>

      <div className="problem-details-examples">{examplesItems}</div>
    </div>
  );
}
