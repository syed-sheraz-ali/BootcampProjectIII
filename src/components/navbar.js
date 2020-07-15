import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
function NavBar() {

  return (
	<div>
     <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item className='li'>
  <Link to="/"> Home </Link>
       
       
  </Nav.Item>
  <Nav.Item className='li'>
  <Link to="/product"> Product  </Link>
  </Nav.Item>
  <Nav.Item className='li'>
  <Link to="/about" > About  </Link>
  </Nav.Item>
  {/* <Nav.Item className='li'>
  
  {/* <Nav.Item className='li'>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item> */}
</Nav> 
	</div>
  );
}

export default NavBar;
