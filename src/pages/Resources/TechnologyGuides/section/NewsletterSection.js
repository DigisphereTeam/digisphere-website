import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./NewsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const validateEmail = (emailStr) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://annapurnafarms.digispheretech.in/subscriptions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      // Subscription successful
      setStatus("success");
      setEmail("");

      // Show popup
      setShowModal(true);
    } catch (err) {
      console.error("Subscription error:", err);

      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section
        id="newsletter-section"
        className="newsletter-wrapper"
        aria-labelledby="newsletter-heading"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content Column */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <span className="newsletter-subtitle" id="newsletter-tag">
                STAY UPDATED
              </span>

              <h2 className="newsletter-title" id="newsletter-heading">
                New guides every week.
              </h2>

              <p className="newsletter-description">
                Subscribe to get new guides and articles in your inbox written
                for business leaders making technology decisions, not
                developers.
              </p>
            </div>

            {/* Right Form Column */}
            <div className="col-12 col-md-6">
              {status === "success" ? (
                <div className="newsletter-success-card" role="alert">
                  <svg
                    className="success-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <div>
                    <h3 className="success-sub-title">You're subscribed!</h3>

                    <p className="success-sub-desc">
                      Thank you for joining. Check your inbox for confirmation.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  className="newsletter-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="input-group-wrapper">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);

                        if (status === "error") {
                          setStatus("idle");
                        }
                      }}
                      className={`newsletter-input ${
                        status === "error" ? "input-error" : ""
                      }`}
                      disabled={status === "loading"}
                      aria-label="Email address for newsletter"
                      required
                    />

                    {status === "error" && (
                      <span className="error-text" role="alert">
                        {errorMessage}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`newsletter-btn ${
                      status === "loading" ? "btn-loading" : ""
                    }`}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span className="spinner" aria-hidden="true"></span>
                    ) : (
                      <>
                        <span>Subscribe</span>

                        <svg
                          className="btn-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUCCESS MODAL ================= */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal closeButton>
          <Modal.Title></Modal.Title>
        </Modal>

        <Modal.Body className="text-center py-5">
          <div className="modal-success-icon">✓</div>

          {/* <h4 className="mt-3">
            Thank You!
          </h4> */}
          <h6 className="subscribed-success">
            You have successfully subscribed.
          </h6>
        </Modal.Body>

        <Modal className="justify-content-center"></Modal>
      </Modal>
    </>
  );
};

export default NewsletterSection;
