import { Button, Flex, Form, Input, notification } from "antd";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { auth } from "../../../service/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utils/constants/constant";

const Login = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
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
        <Form.Item label="Email" name="email">
          <Input type="text" placeholder="Email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password type="text" placeholder="Password" />
        </Form.Item>
        <Flex justify="flex-end" className="auth_buttons_container">
          <Button>
            <Link to={ROUTE_CONSTANTS.REGISTER}>Create Account</Link>
          </Button>
          <Button loading={loading} htmlType="submit">
            Login
          </Button>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Login;
