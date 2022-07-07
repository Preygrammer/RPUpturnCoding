import React, { useCallback, useState, useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { submitCode } from "../actions";
import { SET_SUBMIT_CODE_DEFAULT } from "../constants/actionTypes";
import { javascript } from "@codemirror/lang-javascript";
import { MdPlayArrow } from "react-icons/md";
import { useAlert, types } from "react-alert";
import js_beautify from "js-beautify";
import CodeMirror from "@uiw/react-codemirror";

function ProblemCodeMirror({
  codeValue,
  currentProblemId,
  codeSubmittedStatus,
}) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const [submittedStatus, setSubmittedStatus] = useState(false);
  const onChange = (valueOfCode) => {
    setCode(valueOfCode);
  };

  const [currentProblemItem, setCurrentProblemItem] = useState("");

  // handling reading first load
  useEffect(() => {
    const storedProblemItem = localStorage.getItem(`_prob:${currentProblemId}`);

    if (storedProblemItem) {
      setCurrentProblemItem(storedProblemItem);
    }
    if (storedProblemItem) {
      // has submitted and stored
      setSubmittedStatus(true);
      setCode(storedProblemItem);
    } else if (!storedProblemItem && !codeSubmittedStatus) {
      // code is empty and didn't submit yet
      setCode(codeValue);
      setSubmittedStatus(false);
    }
  }, [currentProblemItem, currentProblemId]);

  // handling submission
  useEffect(() => {
    const storedProblemItem = localStorage.getItem(`_prob:${currentProblemId}`);

    if (codeSubmittedStatus == null && storedProblemItem) {
      alert.show("Oops! Error, Please review your code.", {
        type: types.ERROR,
      });

      setIsLoading(false);

      // I use `else if` instead of `else` because codeSubmittedStatus
      // is null when first load and will fall into the `else`
      // submitted and not yet stored
    } else if (codeSubmittedStatus && !storedProblemItem) {
      alert.show("Your submitted code is correct.", {
        type: types.SUCCESS,
      });

      localStorage.setItem(`_prob:${currentProblemId}`, code);
      // set codeSubmittedStatus to false
      dispatch({ type: SET_SUBMIT_CODE_DEFAULT });

      // set current code to `code`
      setCode(code);
      setSubmittedStatus(true);
      setIsLoading(false);
    }
  }, [codeSubmittedStatus]);

  const codeSet = _.debounce((value) => onChange(value), 100);

  const handleSubmitCode = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    dispatch(submitCode(code, currentProblemId));
  };

  return (
    <form onSubmit={handleSubmitCode} className="form-code">
      <CodeMirror
        value={js_beautify(code)}
        theme="dark"
        extensions={[javascript()]}
        onChange={codeSet}
      />
      <div className="code-mirror-footer">
        <button
          className={`btn-submit ${isLoading ? "isLoading" : ""}`}
          disabled={isLoading || submittedStatus}
        >
          <MdPlayArrow />
          {submittedStatus ? "Submitted" : "Run and Submit"}
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = ({
  codeSubmittedStatus,
  problems: { currentProblem },
}) => {
  return {
    codeSubmittedStatus,
    codeValue: currentProblem.code,
    currentProblemId: currentProblem.id,
  };
};

export default connect(mapStateToProps)(ProblemCodeMirror);
