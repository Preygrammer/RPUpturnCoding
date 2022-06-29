import React, { useCallback, useState, useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import { submitCode } from "../actions";
import { javascript } from "@codemirror/lang-javascript";
import { MdPlayArrow } from "react-icons/md";
import { useAlert, transitions, positions, types } from "react-alert";

function ProblemCodeMirror({
  codeValue,
  currentProblemId,
  codeSubmittedStatus,
}) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const btnSubmitRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const [code, setCode] = useState("");

  const onChange = (codeValue) => {
    setCode(codeValue);
  };

  useEffect(() => {
    if (!codeSubmittedStatus && codeSubmittedStatus !== null) {
      alert.show("Oops! Error, Please review your code.", {
        type: types.ERROR,
        onClose: () => {
          console.log("closed");
        },
      });
      setIsLoading(false);
      // I use `else if` instead of `else` because codeSubmittedStatus
      // is null when first load and will fall into the `else`
    } else if (codeSubmittedStatus) {
      alert.show("Your submitted code is correct.", {
        type: types.SUCCESS,
        onClose: () => {
          console.log("closed");
        },
      });
      setIsLoading(false);
    }
    setIsLoading(false);
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
        value={codeValue}
        theme="dark"
        extensions={[javascript()]}
        onChange={codeSet}
      />
      <div className="code-mirror-footer">
        <button
          className={`btn-submit ${isLoading ? "isLoading" : ""}`}
          disabled={isLoading || codeSubmittedStatus}
          ref={btnSubmitRef}
        >
          <MdPlayArrow />
          {codeSubmittedStatus ? "Submitted" : "Run and Submit"}
        </button>
      </div>
    </form>
  );
}

function mapStateToProps({ codeSubmittedStatus }) {
  return {
    codeSubmittedStatus,
  };
}

export default connect(mapStateToProps)(ProblemCodeMirror);
