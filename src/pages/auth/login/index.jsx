import { Button, Flex, Form, Input, notification } from "antd";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { auth } from "../../../service/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      notification.error({
        message: "Invalid Login Credentials",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthWrapper title="Login">
      <Form layout="vertical" form={form} onFinish={handleLogin}>
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
          <Button loading={loading} htmlType="submit">
            Login
          </Button>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Login;
