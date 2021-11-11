import React from 'react'
import {Navbar, Container, Row, Col, Breadcrumb} from 'react-bootstrap'

function StreamItNavbar() {
    return (
        <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50">  
        <Container fluid> 
            <Row className="align-items-center">
                <Col sm="12">
                    <nav className="text-center iq-breadcrumb-two">
                        <h2 className="title">Blog</h2>
                        <Breadcrumb className="main-bg">
                            <Breadcrumb.Item>Home</Breadcrumb.Item> 
                            <Breadcrumb.Item active>Blog</Breadcrumb.Item>
                        </Breadcrumb>
                    </nav>
                </Col>
            </Row> 
        </Container>
    </div>
    )
}

export default StreamItNavbar
