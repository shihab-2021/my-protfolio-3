import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_tq7186l",
        e.target,
        "user_FIUbythhej2GDvNHeUcCs"
      )
      .then(
        (result) => {
          document.getElementById("status").style.pointerEvents = "all";
          document.getElementById("status").innerHTML =
            "Thank you for your message.";
          document.getElementById("status").classList.add("success");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          document.getElementById("status").classList.add("error");
          document.getElementById("status").innerHTML =
            "Oops! There was a problem.";
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <section id="contact" className="contact pb-5 mb-5">
        <div className="container">
          <div>
            <h1
              style={{ color: "#df4d68" }}
              data-aos="fade-down"
              className="heading pb-3"
            >
              <span>Contact</span>
              <hr
                className="m-0 p-0 fw-bold"
                style={{ width: "50px", height: "3px" }}
              />
            </h1>
            <p></p>
          </div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5">
              <div className="p-3 shadow">
                <div className="info">
                  <div className="address">
                    <h2>
                      <i
                        style={{ backgroundColor: "#d7fff4" }}
                        className="fas fa-map-marker-alt border rounded-circle p-2 text-info"
                      ></i>{" "}
                      Location:
                    </h2>
                    <p className="ps-5">Bangladesh</p>
                  </div>
                  <div className="email">
                    <h2>
                      <i
                        style={{ backgroundColor: "#d7fff4" }}
                        className="fas fa-mail-bulk border rounded-circle p-2 text-info"
                      ></i>{" "}
                      Email:
                    </h2>
                    <p className="ps-5">shihab77023@gmail.com</p>
                  </div>
                  <div className="phone">
                    <h2>
                      <i
                        style={{ backgroundColor: "#d7fff4" }}
                        className="fas fa-phone-alt border rounded-circle p-2 text-info"
                      ></i>{" "}
                      Phone:
                    </h2>
                    <p className="ps-5">01643433981</p>
                  </div>
                  {/* google map  */}
                  <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746840.9140003617!2d88.1008004557478!3d23.49563313534055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1637629669088!5m2!1sen!2sbd"
                    frameborder="0"
                    style={{ border: "0", width: "100%", height: "290px" }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/* contact form  */}
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch flex-column">
              <div className="p-3 shadow">
                <form
                  className="row g-3"
                  action="https://formspree.io/f/xoqraljo"
                  method="POST"
                  id="my-form"
                  onSubmit={sendEmail}
                >
                  <div className="col-md-6">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="col-12">
                    <label for="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="subject"
                      name="subject"
                    />
                  </div>
                  <div className="col-12">
                    <label for="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      rows="10"
                      name="message"
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div id="status"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
