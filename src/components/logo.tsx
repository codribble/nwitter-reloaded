import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & svg {
    display: inline-block;
    width: 100%;
    height: 50%;
    max-height: 450px;
    padding: 32px;
    color: rgb(231, 233, 234);
    fill: currentColor;
  }
`;

export default function XLogo() {
  return (
    <Logo>
      <svg viewBox="0 0 24 24">
        <g>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
      </svg>
    </Logo>
  );
}
