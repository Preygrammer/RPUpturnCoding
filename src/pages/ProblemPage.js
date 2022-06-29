import _ from "lodash";
import SplitPane from "react-split-pane";
import Tab from "../components/Tab";
import ProblemDetails from "../components/ProblemDetails";
import ProblemCodeMirror from "../components/ProblemCodeMirror";

import { Link, useLocation } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProblemById } from "../actions";
import js_beautify from "js-beautify";
import _arrayPropGetter from "../utils/array_property_getter";
import "../assets/scss/pages/_problem-page.scss";
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function ProblemPage({ problem }) {
  const dispatch = useDispatch();
  // optional configuration
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_LEFT,
    timeout: 8000,
    type: types.SUCCESS,
    // you can also just use 'scale'
    transition: transitions.FADE,
    containerStyle: {
      fontSize: "12px",
    },
  };

  const { pathname } = useLocation();
  const currentPageId = pathname.split(/\//)[2];

  useEffect(() => {
    dispatch(getProblemById(currentPageId));
  }, [dispatch, currentPageId]);

  return (
    <AlertProvider template={AlertTemplate} {...options}>
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
            <ProblemDetails details={{ problem: problem }} />
          </div>
          <div className="problems-split-right">
            <ProblemCodeMirror
              codeValue={js_beautify(((problem && problem[0]) || {})["code"])}
              currentProblemId={((problem && problem[0]) || {})["id"]}
            />
          </div>
        </SplitPane>
      </div>
    </AlertProvider>
  );
}

function mapStateToProps(state) {
  return {
    problem: state.problems,
  };
}

export default connect(mapStateToProps)(ProblemPage);
