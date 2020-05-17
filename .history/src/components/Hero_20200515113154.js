import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";

export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  color: #ffffff;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};

// --primaryColor: #5fb7ea;
//   --primaryRGBA: rgba(0, 0, 0, 0.3);
//   --mainGrey: #fafafa;
//   --darkGrey: #5f5e5e;
//   --mainWhite: #ffffff;
//   --mainBlack: #222;
//   --mainTransition: all 0.3s ease-in-out;
//   --mainSpacing: 0.3rem;
