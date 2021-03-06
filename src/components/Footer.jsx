import React from "react";
import * as Router from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="bg-light border-top pb-5">
                <Row className="text-center pt-5">
                    <Col xs={{ span: 6 }} md={{ span: 2, offset: 2 }} className="d-flex flex-column">
                        <Router.Link to="/latest" className="footer-link">
                            <p>
                                <Icon.Newspaper /> Latest News
                            </p>
                        </Router.Link>
                        <Router.Link to="/tutorial" className="footer-link">
                            <p>
                                <Icon.Book /> Tutorial
                            </p>
                        </Router.Link>
                        <Router.Link to="/register" className="footer-link">
                            <p>
                                <Icon.Pen /> Register
                            </p>
                        </Router.Link>
                        <Router.Link to="/signin" className="footer-link">
                            <p>
                                <Icon.Key /> Sign In
                            </p>
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} md={{ span: 2 }} className="d-flex flex-column">
                        <Router.Link to="/products/catalogue" className="footer-link">
                            <p>
                                <Icon.Linkedin /> LinkedIn
                            </p>
                        </Router.Link>
                        <Router.Link to="/products/corporate" className="footer-link">
                            <p>
                                <Icon.Github /> GitHub
                            </p>
                        </Router.Link>
                        <Router.Link to="/products/wholesale" className="footer-link">
                            <p>
                                <Icon.Twitter /> Twitter
                            </p>
                        </Router.Link>
                        <Router.Link to="/products/b2b" className="footer-link">
                            <p>
                                <Icon.Telegram /> Telegram
                            </p>
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} md={{ span: 2, offset: 0 }} className="mt-3 mt-md-0 d-flex flex-column">
                        <Router.Link to="/tos" className="footer-link">
                            <p>Term of Service</p>
                        </Router.Link>
                        <Router.Link to="/about" className="footer-link">
                            <p>
                                <Icon.InfoCircle /> About Us
                            </p>
                        </Router.Link>
                        <Router.Link to="/jobs" className="footer-link">
                            <p>
                                <Icon.PersonPlus /> Jobs
                            </p>
                        </Router.Link>
                        <Router.Link to="/faq" className="footer-link">
                            <p>
                                <Icon.QuestionCircle /> FAQ
                            </p>
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} md={{ span: 2 }} className="mt-3 mt-md-0 d-flex flex-column">
                        <Router.Link to="/policy/privacy" className="footer-link">
                            <p>Privacy Policy</p>
                        </Router.Link>
                        <Router.Link to="/policy/shipping" className="footer-link">
                            <p>Shipping Policy</p>
                        </Router.Link>
                        <Router.Link to="/policy/return" className="footer-link">
                            <p>Return Policy</p>
                        </Router.Link>
                        <Router.Link to="/policy/order" className="footer-link">
                            <p>Order Policy</p>
                        </Router.Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Router.withRouter(Footer);
