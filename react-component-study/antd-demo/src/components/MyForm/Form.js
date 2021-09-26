import React from "react";
import useForm from "./useForm";
import FormContext from "./FormContext";

export default function Form(props, ref) {
  const { children, form, onFinish, onFinishFailed } = props;
  const [formInstance] = useForm(form);
  console.log("form===> render");
  React.useImperativeHandle(ref, () => formInstance);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.onSubmit({ onFinish, onFinishFailed });
      }}
    >
      <FormContext.Provider value={formInstance}>
        {children}
      </FormContext.Provider>
    </form>
  );
}
