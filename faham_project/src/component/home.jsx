import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Accordion, Card} from 'react-bootstrap'


class Home extends Component{

    render(){
        return(
            <div className="container">
                <Button variant="outline-primary">Primary</Button>
                <h1>Home</h1>

                <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/service">Service</Link>

            </div>
        )

               
    }

}

export default Home;