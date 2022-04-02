import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginTop: "100px", display: "flex" }}>
        <div style={{ marginLeft: "80px", width: "40%" }}>
          <h5>Learn and cook</h5>
          <h1>
            Become a <b style={{ color: "red" }}>Master of Cooking</b>
          </h1>
          <p style={{ fontWeight: "bold", color: "grey", fontSize: "25px" }}>
            Taste it and feel the aroma !!!
          </p>

          <h3 style={{ color: "red" }}>All Country foods are available</h3>
          <h5>Canada ,UK ,India ,Spanish ,Thai ,Japanese etc....</h5>
          <p style={{ fontWeight: "bold", color: "grey" }}>
            Cooking, cookery, or culinary arts is the art, science and craft of
            using heat to prepare food for consumption. Cooking techniques and
            ingredients vary widely, from grilling food over an open fire to
            using electric stoves, to baking in various types of ovens,
            reflecting local conditions.
          </p>
          <Button style={{ marginTop: "30px" }}>
            <a
              href={() => false}
              onClick={(e) => navigate("/categories")}
              style={{ color: "white", textDecoration: "none" }}
            >
              Click to Explore
            </a>
          </Button>
        </div>
        <div
          style={{
            width: "34%",
            height: "10%",
            marginLeft: "130px",
            borderRadius: "40%",
          }}
        >
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 image-bordering"
                src="https://www.themealdb.com//images//media//meals//qxytrx1511304021.jpg"
                alt="Different Foods"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 image-bordering"
                src="https://www.themealdb.com//images//media//meals//uvuyxu1503067369.jpg"
                alt="Different Foods"
                width="20%"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 image-bordering"
                src="https://www.themealdb.com//images//media//meals//yqqqwu1511816912.jpg"
                alt="Different Foods"
                width="20%"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>
          Prefered<span style={{ color: "red" }}> Dishes</span>
        </h2>
        <div
          style={{ width: "70%", marginLeft: "200px", paddingBottom: "30px" }}
        >
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https:\/\/www.themealdb.com\/images\/media\/meals\/sstssx1487349585.jpg"
              />
              <Card.Body>
                <Card.Title>Thai Green Curry</Card.Title>
                <Card.Text>
                  Don't call the local takeaway – impress friends and family by
                  cooking this fragrant and creamy Thai green chicken curry.
                </Card.Text>
                <Button style={{ marginTop: "30px" }}>
                  <a
                    href={() => false}
                    onClick={(e) => navigate("/categories")}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Click to View
                  </a>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ marginLeft: "30px" }}>
              <Card.Img
                variant="top"
                src="https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg"
              />
              <Card.Body>
                <Card.Title>Spicy Arrabiata Penne</Card.Title>
                <Card.Text>
                  Arrabbiata sauce, or sugo all'arrabbiata in Italian,
                  (Arabbiata in Romanesco dialect) is a spicy sauce for pasta
                  cooked in olive oil.
                </Card.Text>
                <Button style={{ marginTop: "30px" }}>
                  <a
                    href={() => false}
                    onClick={(e) => navigate("/categories")}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Click to View
                  </a>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ marginLeft: "30px" }}>
              <Card.Img
                variant="top"
                src="https:\/\/www.themealdb.com\/images\/media\/meals\/wyrqqq1468233628.jpg"
              />
              <Card.Body>
                <Card.Title>Bakewell tart</Card.Title>
                <Card.Text>
                  A Bakewell tart is an English confection consisting of a
                  shortcrust pastry shell beneath layers of jam, frangipane.
                </Card.Text>
                <Button style={{ marginTop: "30px" }}>
                  <a
                    href={() => false}
                    onClick={(e) => navigate("/categories")}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Click to View
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
};

export default Home;
