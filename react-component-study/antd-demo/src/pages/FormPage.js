// import { Form, Input, Button } from 'antd';
import React from "react";
import Form from "../components/MyForm";
import Button from "../components/Button";
import Input from "../components/Input";

// const Demo = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   React.useEffect(() => {
//     form.setFieldValue("username", "lost");
//   }, [form]);

//   return (
//     <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: "Please input your username!",
//           },
//         ]}
//       >
//         <Input placeholder="please input username" />
//       </Form.Item>
//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!",
//           },
//         ]}
//       >
//         <Input placeholder="please input password" />
//       </Form.Item>

//       <Form.Item>
//         <Button type="submit">Submit</Button>
//       </Form.Item>
//     </Form>
//   );
// };

class Demo extends React.Component {
  formRef = React.createRef();

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  componentDidMount() {
    // console.log("form", this.formRef.current); //sy-log
    this.formRef.current.setFieldValue("username", "default");
  }

  render() {
    return (
      <Form
        ref={this.formRef}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="please input username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input placeholder="please input password" />
        </Form.Item>

        <Form.Item>
          <Button type="submit">Submit</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Demo;
