import Container from "react-bootstrap/Container"
import {doctorData} from "../helper/data"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Doctors = () => {

  console.log(doctorData)

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
      {doctorData.map(({id, img, dep, name})=> (
        <Col xs={12} sm={6} md={4} lg={3}>
        <img src={img} alt="img" className="img-thumbnail doctor-img" />
        <h5>{name}</h5>
        <h6>{dep}</h6>
        </Col>
      ))}
      </Row>
    
    </Container>
  )
}

export default Doctors
