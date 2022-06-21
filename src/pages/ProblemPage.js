import SplitPane from "react-split-pane";
import Tab from "../components/Tab";
import ProblemDetails from "../components/ProblemDetails";

import { Link, useLocation } from "react-router-dom";
import ProblemCodeMirror from "../components/ProblemCodeMirror";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import js_beautify from "js-beautify";
import "../assets/scss/pages/_problem-page.scss";

export default function ProblemPage() {
  const { state } = useLocation();

  return (
    <div className="problems">
      <div className="problems-back">
        <Link
          to={{
            pathname: `/problems/`,
          }}
        >
          <BsArrowLeftSquareFill />
        </Link>
        All Problems
      </div>
      <SplitPane className="split-pane-container">
        <div className="problems-split-left">
          <Tab />
          <ProblemDetails details={state} />
        </div>
        <div className="problems-split-right">
          <ProblemCodeMirror
            codeValue={js_beautify(state.problem.code.trim())}
          />
        </div>
      </SplitPane>
    </div>
  );
}
