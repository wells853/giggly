import React from "react";
import { Link, Router } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function LandingPageHeader() {
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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg-green.png") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">
              Complete challenges, learn new skills, land the job!
            </h1>
          </Container>
        </div>
      </div>
      <Row>
        <Col sm="12" md={{ size: 2, offset: 5 }}>
          <Link to="/login-page">
            <Button
              block
              className="btn-round"
              color="info"
              href="#pablo"
              size="lg"
            >
              Log In
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default LandingPageHeader;
