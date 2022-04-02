import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function myfunction() {
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(result.data.categories);
    }
    myfunction();
  }, []);
  return (
    <Container className="container">
      <h1 style={{textAlign:"center"}}>Our Menus</h1>
      <Row style={{ marginTop: "20px" }}>
        {categories.map((categories, k) => (
          <Col key={k} xs={12} md={4} lg={3} style={{ marginTop: "20px" }}>
            <Card
              style={{ cursor: "pointer",backgroundColor:"#BDEDFF"}}
              onClick={(e) => {
                navigate("/categorydetails", {
                  state: { categoryName: categories.strCategory },
                });
              }}
            >
              <Card.Img src={categories.strCategoryThumb} />
              <Card.Body>
                <Card.Title id="title" style={{textAlign:"center"}}>{categories.strCategory}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
