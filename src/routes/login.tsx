import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  Divide,
  Error,
  ForgotPasswordBtn,
  Form,
  HalfBox,
  Inner,
  Input,
  Switcher,
  // Title,
  Wrapper,
} from "../components/auth-components";
import SocialAuth from "../components/social-auth";
import XLogo from "../components/logo";
// import GithubButton from "../components/github-btn";
// import GoogleButton from "../components/google-btn";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isLoading || email === "" || password === "") return;
    try {
      // create an account
      // set the name of the user
      // redirect to the home page
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      // setError
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const onForgotPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate("/forgot-password");
  };

  return (
    <Wrapper>
      <HalfBox>
        <Inner>
          {/* <Title>가입하기</Title> */}

          <SocialAuth page="login" />

          <Divide>
            <span>또는</span>
          </Divide>

          <Form onSubmit={onSubmit}>
            <Input
              onChange={onChange}
              name="email"
              value={email}
              placeholder="이메일"
              type="email"
              required
            />
            <Input
              onChange={onChange}
              name="password"
              value={password}
              placeholder="비밀번호"
              type="password"
              required
            />
            <Input
              type="submit"
              value={isLoading ? "로그인중..." : "로그인"}
            />
          </Form>
          {error !== "" ? <Error>{error}</Error> : null}

          <Switcher>
            <ForgotPasswordBtn onClick={onForgotPassword}>
              비밀번호를 잊으셨나요?
            </ForgotPasswordBtn>
          </Switcher>
        </Inner>
      </HalfBox>

      <HalfBox>
        <XLogo />
      </HalfBox>
    </Wrapper>
  );
}
