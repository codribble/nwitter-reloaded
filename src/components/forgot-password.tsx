import { sendPasswordResetEmail } from "firebase/auth";
import {
  Desc,
  Form,
  HalfBox,
  Inner,
  Input,
  Title,
  Wrapper,
} from "./auth-components";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import XLogo from "./logo";

export default function ForgotPassword() {
  // const user = auth.currentUser;
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

    try {
      await sendPasswordResetEmail(auth, email);
      navigate("/login");
    } catch (error) {
      console.log(error.code);
    }
  };

  /* useEffect(() => {
    if (user) navigate("/");
  }, []); */

  return (
    <Wrapper>
      <HalfBox>
        <Inner>
          <Title className="nomargin">내 계정 찾기</Title>
          <Desc>
            비밀번호를 변경하려면 계정에 연결된 이메일을 입력해주세요.
          </Desc>
          <Form onSubmit={onSubmit}>
            <Input
              onChange={onChange}
              name="email"
              placeholder="이메일"
              type="email"
              required
            />
            <Input
              type="submit"
              value="발송"
            />
          </Form>
        </Inner>
      </HalfBox>

      <HalfBox>
        <XLogo />
      </HalfBox>
    </Wrapper>
  );
}
