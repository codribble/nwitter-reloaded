import { sendPasswordResetEmail } from "firebase/auth";
import { Form, Input, Title, Wrapper } from "./auth-components";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setEmail(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") return;

    await sendPasswordResetEmail(auth, email);
    navigate("/");
  };

  return (
    <Wrapper>
      <Title>Forgot Password</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <Input
          type="submit"
          value="Send mail"
        />
      </Form>
    </Wrapper>
  );
}
