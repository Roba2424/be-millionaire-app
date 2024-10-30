import { Button, Flex, Form, Input } from "antd";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import { useForm } from "antd/es/form/Form";

const Login = () => {
  const [form] = useForm();
  return (
    <AuthWrapper title="Login">
      <Form layout="vertical" form={form}>
        <Form.Item label="First Name" name="firstName">
          <Input type="text" placeholder="First Name" />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input type="text" placeholder="Last Name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="text" placeholder="Email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="text" placeholder="Password" />
        </Form.Item>
        <Flex justify="flex-end" className="auth_buttons_container">
          <Button>Create Account</Button>
          <Button htmlType="submit">Login</Button>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Login;
