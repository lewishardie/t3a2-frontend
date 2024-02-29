import React from 'react'
import TopNav from '../components/shared/TopNav'
import SideNav from '../components/shared/SideNav'
import { Outlet } from 'react-router'
import { Container, Row, Col } from 'react-bootstrap'

const RootLayout = () => {
  return (
    <Container fluid className="p-0">
        {/* TopNav */}
        <Col>
          <TopNav />
        </Col>

      <Row className="d-md-flex">
        {/* Left Sidebar */}
        <Col md="auto">
          <SideNav />
        </Col>
        
        {/* Main Content */}
        <Col className="flex-grow-1">
          <section className="d-flex flex-column h-100">
            <Outlet />
          </section>
        </Col>
        
        {/* Bottombar */}
        {/* <Col>
          <Bottombar />
        </Col> */}

      </Row>
    </Container>
  )
}

export default RootLayout


    // <Container fluid>
    //   <Row className="d-md-flex">
    //     {/* Topbar */}
    //     <Col>
    //       <Topbar />
    //     </Col>
        
    //     {/* Left Sidebar */}
    //     <Col md="auto"> {/* "auto" ensures it takes minimum space */}
    //       <LeftSidebar />
    //     </Col>
        
    //     {/* Main Content */}
    //     <Col className="flex-grow-1">
    //       <section className="d-flex flex-column h-100">
    //         <Outlet />
    //       </section>
    //     </Col>
        
    //     {/* Bottombar */}
    //     <Col>
    //       <Bottombar />
    //     </Col>
    //   </Row>
    // </Container>
