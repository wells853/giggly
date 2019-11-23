import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

class MessagesList extends Component {
  render() {
    const styles = {
      container: {
        overflowY: "scroll",
        overflowX: "hidden",
        flex: "1 1 0"
      },
      ul: {
        listStyle: "none",
        paddingLeft: "1em",
        paddingRight: "1em"
      },
      li: {
        marginTop: 13,
        marginBottom: 13
      },
      senderUsername: {
        fontWeight: "bold"
      },
      message: { fontSize: 15 }
    };
    return (
      <div
        style={{
          ...this.props.style,
          ...styles.container
        }}
      >
        <ul style={styles.ul}>
          {this.props.messages.map((message, index) => (
            <li key={index} style={styles.li}>
              <div>
                {message.senderId === "rayan" ? (
                  <Row>
                    <Col></Col>
                    <Col xs="auto">
                      <h6>{message.senderId}</h6>
                    </Col>
                  </Row>
                ) : (
                  <div>
                    {message.senderId === "Admin" ? (
                      <Row>
                        <Col></Col>
                        <Col xs="auto">
                          <h6>{message.senderId}</h6>
                        </Col>
                        <Col></Col>
                      </Row>
                    ) : (
                      <h6>{message.senderId}</h6>
                    )}
                  </div>
                )}
              </div>
              {message.senderId === "Admin" ? (
                <Row>
                  <Col></Col>
                  <Col xs="auto">
                    <Button
                      href="#"
                      className="btn-round"
                      disabled
                      color="success"
                      size="lg"
                    >
                      {message.text}
                    </Button>
                  </Col>
                  <Col></Col>
                </Row>
              ) : (
                <div>
                  {message.senderId === "rayan" ? (
                    <Row>
                      <Col></Col>
                      <Col xs="auto">
                        <Button
                          position="right"
                          href="#"
                          className="btn-round"
                          disabled
                          color="primary"
                          size="lg"
                        >
                          {message.text}
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <Button
                      position="right"
                      href="#"
                      className="btn-round"
                      disabled
                      color="info"
                      size="lg"
                    >
                      {message.text}
                    </Button>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessagesList;
