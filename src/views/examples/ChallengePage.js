import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="section section-team text-center">
        <Container>
          <h2 className="title">Challenge tracks</h2>
          <div className="team">
            <Row>
              <Col md="4">
                <div className="team-player">
                  <img
                    alt="..."
                    src={require("assets/img/paint-board-and-brush.png")}
                  ></img>
                  <h4 className="title">Design</h4>
                  <p className="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      links
                    </a>{" "}
                    for people to be able to follow them outside the site.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    alt="..."
                    src={require("assets/img/analytics.png")}
                  ></img>
                  <h4 className="title">Market research</h4>
                  <p className="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      links
                    </a>{" "}
                    for people to be able to follow them outside the site.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    alt="..."
                    src={require("assets/img/enhance-effect.png")}
                  ></img>
                  <h4 className="title">Lead Generation</h4>
                  <p className="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      links
                    </a>{" "}
                    for people to be able to follow them outside the site.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
