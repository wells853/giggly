import React from "react";
import { Route, Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  var state = {
    usrname: "",
    currentScreen: "WhatIsYourUsernameScreen"
  };
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  function onUsernameSubmitted(username) {
    console.log("reached on usernamesubmitted");
    fetch(
      "http://ec2-35-162-213-113.us-west-2.compute.amazonaws.com:3001/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username })
      }
    )
      .then(response => {
        /*
        this.setState({
          currentUsername: username,
          currentScreen: "ChatScreen"
        });*/
        state.usrname = username;
        state.currentScreen = "ChatScreen";
        console.log(state.currentScreen);
      })
      .catch(error => console.error("error", error));
  }

  function onChange(e) {
    console.log("onchange");
    state.usrname = e.target.value;
  }

  return (
    <div>
      <div>{state.currentScreen}</div>

      {state.currentScreen === "WhatIsYourUsernameScreen" ? (
        <>
          <div className="page-header clear-filter" filter-color="blue">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/login2.jpg") + ")"
              }}
            ></div>
            <div className="content">
              <Container>
                <Col className="ml-auto mr-auto" md="4">
                  <Card className="card-login card-plain">
                    <Form action="" className="form" method="">
                      <CardHeader className="text-center">
                        <div className="logo-container">
                          <img
                            alt="..."
                            src={require("assets/img/now-logo.png")}
                          ></img>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (firstFocus ? " input-group-focus" : "")
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email Address..."
                            type="text"
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                            onChange={onChange}
                          ></Input>
                        </InputGroup>
                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (lastFocus ? " input-group-focus" : "")
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons business_badge"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Access Code..."
                            type="text"
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                          ></Input>
                        </InputGroup>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Link
                          to={{
                            pathname: "/messaging-page",
                            state: { userName: state.usrname }
                          }}
                        >
                          <Button
                            block
                            className="btn-round"
                            color="info"
                            href="#pablo"
                            onClick={() => onUsernameSubmitted(state.usrname)}
                            size="lg"
                          >
                            Login
                          </Button>
                        </Link>
                      </CardFooter>
                    </Form>
                  </Card>
                </Col>
              </Container>
            </div>
          </div>
        </>
      ) : (
        <div>Chat Screen</div>
      )}
    </div>
  );
}

export default LoginPage;
