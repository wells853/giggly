import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/shanghai.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/phoebe.png")}></img>
          </div>
          <h3 className="title">Phoebe Yao</h3>
          <p className="category">Generalist</p>
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>Challenges</p>
            </div>
            <div className="social-description">
              <h2>8</h2>
              <p>Certifications</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Jobs Done</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
