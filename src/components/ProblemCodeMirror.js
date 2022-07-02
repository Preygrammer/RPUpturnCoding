import React, { useCallback, useState, useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { submitCode } from "../actions";
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

  const currentProblemStorage = localStorage.getItem(
    `_prob:${currentProblemId}`
  );

  useEffect(() => {
    if (currentProblemStorage) {
      // has submitted and stored
      setSubmittedStatus(true);
      setCode(currentProblemStorage);
    } else if (!code && !codeSubmittedStatus) {
      // code is empty and didn't submit yet
      setCode(codeValue);
      setSubmittedStatus(false);
    }

    if (!codeSubmittedStatus && codeSubmittedStatus !== null) {
      alert.show("Oops! Error, Please review your code.", {
        type: types.ERROR,
      });
      setIsLoading(false);
      // I use `else if` instead of `else` because codeSubmittedStatus
      // is null when first load and will fall into the `else`
    } else if (codeSubmittedStatus && !currentProblemStorage) {
      // submitted and not yet stored
      alert.show("Your submitted code is correct.", {
        type: types.SUCCESS,
      });

      localStorage.setItem(`_prob:${currentProblemId}`, code);

      setCode(code);
      setSubmittedStatus(true);
      setIsLoading(false);
    }
  }, [codeSubmittedStatus, codeValue]);

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
