import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { links, sidebarOpen, handleSidebar } = value;
      }}
    </ProductConsumer>
  );
}

export default Sidebar;

const SideWrapper = styled.nav``;
