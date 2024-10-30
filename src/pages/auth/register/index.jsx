import { Button, Flex, Form, Input } from "antd";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../service/firebase";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] = useForm();
  const handleRegister = async (values) => {
    setLoading(true);
    const { email, password } = values;

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response, "RESPONSE");
    } catch (error) {
      console.log(error, "ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper title="Register">
      <Form layout="vertical" form={form} onFinish={handleRegister}>
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
          <Button>Sign In</Button>
          <Button loading={loading} htmlType="submit">
            Create Account
          </Button>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Register;
