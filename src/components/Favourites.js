import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const Favourites = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  const [measure, setMeasure] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const handleClose = () => setShow(false);
  useEffect(() => {
    console.log(localStorage.getItem("data"));
    const result = JSON.parse(localStorage.getItem("data"));
    setData(result);
    return () => {
      localStorage.clear();
    };
  }, []); 
  const handleButton = async (idMeal) => {
    const result = await axios(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal
    );
    setCategory(result.data.meals[0]);
    var list = Object.keys(result.data.meals[0]);
    setIngredient(list.slice(9, 29));
    setMeasure(list.slice(29, 49));
    setShow(true);
  };
  if (data) {
    return (
      <>
        <Container className="container">
          <h1 style={{ textAlign: "center" }}>
            Relish your <b style={{ color: "red" }}>Favourite Dishes</b>
          </h1>
          <Row style={{ marginTop: "20px" }}>
            {data.map((category, k) => (
              <Col key={k} xs={12} md={4} lg={3} style={{ marginTop: "20px" }}>
                <Card style={{ backgroundColor: "#BDEDFF", height: "100%" }}>
                  <Card.Img src={category.src} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "16px" }}>
                      {category.name}
                    </Card.Title>
                    <div style={{ display: "flex" }}>
                      <Button
                        variant="primary"
                        onClick={() => handleButton(category.id)}
                      >
                        Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>{category.strMeal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={{ span: 3, offset: 4 }}>
                  <img
                    src={category.strMealThumb}
                    width="150px"
                    height="150px"
                    style={{ borderRadius: "10%" }}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "40px" }}>
                <Col>
                  <b>Id:</b> {category.idMeal}
                </Col>
                <Col>
                  <b>Location:</b> {category.strArea}
                </Col>
                <Col>
                  <b>Category:</b> {category.strCategory}
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredient.map((x, i) => {
                        return (
                          category[x] !== "" && (
                            <tr key={i}>
                              <td>{category[ingredient[i]]}</td>
                              <td>{category[measure[i]]}</td>
                            </tr>
                          )
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col>
                  <b>Instructions To Do:</b> {category.strInstructions}
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>
          Add your <b style={{ color: "red" }}>Favourite Dishes</b>
        </h1>
        <Button variant="secondary" onClick={(e) => navigate("/categories")}>click here!!!</Button>
      </div>
    </>
  );
};

export default Favourites;
