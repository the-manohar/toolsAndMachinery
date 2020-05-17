import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

function Footer() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; tech store {new Date().getFullYear()}. all
                    rights reserved.
                  </p>
                </div>
                <div className="col-md-6">
                  {value.socialIcons.map((item) => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

export default Footer;

const FooterWrapper = styled.footer``;
