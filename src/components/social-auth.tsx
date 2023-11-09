import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 50px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  border-radius: 50px;
  border: 0;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function SocialAuth() {
  const navigate = useNavigate();
  const platform = ["github", "google"];
  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { name } = e.currentTarget;

    try {
      const provider =
        name === "github" ? new GithubAuthProvider() : new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SocialBox>
      {platform.map((v) => (
        <Button
          key={v}
          name={v}
          onClick={onSocialClick}
        >
          <Logo src={`${v}-logo.svg`} />
          Continue with {v}
        </Button>
      ))}
    </SocialBox>
  );
}
