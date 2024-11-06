import { Button, Flex, Form, Input, notification } from "antd";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../service/firebase";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utils/constants/index";

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
      notification.success({ message: "User created successfully" });
      console.log(response);
    } catch (error) {
      notification.error({
        message: "Something went wrong.",
      });
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
          <Input.Password type="text" placeholder="Password" />
        </Form.Item>
        <Flex justify="flex-end" className="auth_buttons_container">
          <Button>
            <Link to={ROUTE_CONSTANTS.LOGIN}>Sign In</Link>
          </Button>
          <Button loading={loading} htmlType="submit">
            Create Account
          </Button>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Register;
