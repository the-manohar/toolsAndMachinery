import React from "react";
import Title from "../Title";

function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-4 my-3">
          <Title title="contact us" center />
          <form className="mt-5">
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
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
