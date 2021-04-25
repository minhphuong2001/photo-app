import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './header.scss';

Header.propTypes = {};

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              href="https://www.facebook.com/phuongmin0616"
              className="header__link header__title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Minh Phương
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/sign-in"
              activeClassName="header__link--active"
            >
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

