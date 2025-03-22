import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./FormEvents"



function FormEvents(){
    return (
        <Container  className="mt-4" >
          
          
          <Form >
            <Form.Group className="mb-3" controlId="evento">
              <Form.Label>Evento</Form.Label>
              <Form.Control type="text" placeholder="Visitas" />
            </Form.Group>
            
            <h4>Período do Evento</h4>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Horário Inicial</Form.Label>
                  <Form.Select>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Horário Final</Form.Label>
                  <Form.Select>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <h4>Horário de Pausa</h4>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Horário Inicial</Form.Label>
                  <Form.Select>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Horário Final</Form.Label>
                  <Form.Select>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <h4>Frequência Semanal</h4>
            <Row>
              {[
                "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"
              ].map((dia, index) => (
                <Col key={index} md={1} className="text-center">
                  <Form.Check type="checkbox" label={dia} />
                </Col>
              ))}
            </Row>
            
            <Row className="mt-4">
              <Col className="d-flex gap-3">
                <Button variant="primary">Voltar</Button>
                <Button variant="success">Inserir</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      );
}
export default FormEvents