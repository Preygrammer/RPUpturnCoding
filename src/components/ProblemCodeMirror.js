import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function ProblemCodeMirror({ codeValue }) {
  const onChange = useCallback((value, viewUpdate) => {}, []);

  return (
    <CodeMirror
      value={codeValue}
      theme="dark"
      extensions={[javascript()]}
      onChange={onChange}
    />
  );
}
