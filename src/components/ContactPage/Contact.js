import React from "react";
import Title from "../Title";

function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" center />
          <form
            action="https://formspree.io/xdowaeev"
            className="mt-5"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@example.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Message"
              />
            </div>
            <div clclassName="form-group mt-3">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white mt-4"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
