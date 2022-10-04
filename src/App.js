import React, { Component } from "react";
import { 
  Container, Row, Col, Dropdown, Form,
  InputGroup, Image, Figure, Jumbotron, Button,
  Carousel, ListGroup, Modal, Media, Breadcrumb
} from "react-bootstrap";
import gambarProfile from "./ef1b24279e.png";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false
    }
    this.modalShow = this.modalShow.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }
  modalShow(e){
    e.preventDefault();
    this.setState({modal:true});
  }
  modalClose(){
    this.setState({modal:false});
  }
  render(){
    return(
      <Container fluid>
        <Modal show={this.state.modal} onHide={this.modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Anda Berhasil Login</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.modalClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Media style={{backgroundColor: "#000"}}>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle>
                  Pilih Bahasa
                </Dropdown.Toggle>
                <Dropdown.Menu show>
                  <Dropdown.Item>Indonesia</Dropdown.Item>
                  <Dropdown.Item>English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={2}>
              <Figure>
                <Figure.Image 
                  width="50"
                  height="50"
                  alt="profile"
                  src={gambarProfile}
                />
                <Figure.Caption style={{color: "#fff"}}>Allan Saputra</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Media>
        <Row>
          <Col md={7}></Col>
          <Col md={4} style={{backgroundColor: "#ccc", borderRadius: "4px"}}>
            <Breadcrumb>
              <Breadcrumb.Item href="/"><b>Home</b></Breadcrumb.Item>
              <Breadcrumb.Item href="/"><b>Berita</b></Breadcrumb.Item>
              <Breadcrumb.Item href="/" active><b>Bola</b></Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
          <Carousel className="d-block w-50" slide={true} controls={true}>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <br/>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Lifa Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Jumbotron style={{backgroundColor: "#ccc"}}>
              <h1>DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </Col>
          <Col>
            <center>
              <Image 
                width="50"
                height="50"
                alt="profile"
                src={gambarProfile}
              />
              <h3>Silahkan Login</h3>
            </center>
            <Form onSubmit={this.modalShow}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Term &amp; Condition" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <br/>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Nama"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
