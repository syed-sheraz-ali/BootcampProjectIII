import React from 'react';
import { Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

  return (
	<div>
		<h1 className="glow">Welcome to Shoe Store</h1>
		<h4 >
		OUR Shoes has been your companion in happiness, both big and small, for over 50 years. Find the latest products that we have in stores right here.

		</h4>
		<Button className="buy">
		
  <Link to="/product"> Our Product  </Link>
  
  </Button>
	</div>
  );
}

export default Home;
