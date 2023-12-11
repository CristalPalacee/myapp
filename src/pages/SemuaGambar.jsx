import { Container, Row, Col, Nav } from "react-bootstrap"
import { kelasTerbaru } from "../data"
import { useNavigate } from "react-router-dom"
useNavigate

const SemuaGambar = () => {
    let navigate = useNavigate()
  return (
    <div className="semua min-vh-100">
  
            <Container>
                <Row>
                    {kelasTerbaru.map((kelas) => {
                        return (
                            <Col key={kelas.id}>
                                <img src={kelas.image} alt="" />
                                <h5>{kelas.title}</h5>
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <Col className="text-center">
                    <button className="btn btn-outline-success rounded-5 btn-lg" onClick={() => navigate("/")}>KEMBALI KE HOME</button>
                    </Col>
                </Row>
            </Container>
 
    </div>
  )
}

export default SemuaGambar