import React from "react";
import _Form from "./Form";
import FormItem from "./FormItem";
import useForm from "./useForm";

const Form = React.forwardRef(_Form);
Form.Item = FormItem;
Form.useForm = useForm;

export default Form;
