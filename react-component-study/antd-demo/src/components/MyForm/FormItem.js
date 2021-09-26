import React from "react";
import FormContext from "./FormContext";

export default class FormItem extends React.Component {
  static contextType = FormContext;

  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }

  update() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.unregister = this.context.registerComponent(this.props.name, this);
  }

  componentWillUnmount() {
    this.unregister();
  }

  validate = () => {
    const { rules, name } = this.props;
    const { getFieldValue } = this.context;
    const result = [];
    if (!rules) return result;
    for (let rule of rules) {
      if (rule.required && !getFieldValue(name)) {
        result.push(rule.message);
      }
    }
    this.setState({ error: result.join("") });
    return result;
  };

  render() {
    const { getFieldValue, setFieldValue } = this.context;
    const { children, name, label } = this.props;
    console.log(name, "render");
    const renderChild = React.cloneElement(children, {
      id: name,
      value: getFieldValue(name),
      onChange: (e) => {
        setFieldValue(name, e.target.value);
        this.validate();
      },
    });
    return (
      <div>
        {label && <label htmlFor={name}>{label}: </label>}
        {renderChild}
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
      </div>
    );
  }
}
