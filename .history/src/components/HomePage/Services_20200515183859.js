import React, { Component } from "react";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
import styled from "styled-components";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text: "Lorem Ipsum is simply dummy text of the printing ",
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text: "Lorem Ipsum is simply dummy text of the printing ",
      },
      {
        id: 1,
        icon: <FaDollarSign />,
        title: "secured payments",
        text: "Lorem Ipsum is simply dummy text of the printing ",
      },
    ],
  };
  render() {
    return <div></div>;
  }
}

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;
