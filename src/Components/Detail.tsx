import { type } from '@testing-library/user-event/dist/type';
import { StdioNull } from 'child_process';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NonNullExpression } from 'typescript';
import {Track } from '../type/Interface';

 interface DetailProps {
  selectMusic: Track
  
}
export const Detail = () => {
 
  const [music, setMusic] = useState <Track| null>(null)
  


  useEffect(()=>{
    
      }, [])
      

  return (
    <>
    <Container>
      <Row>
        <Col xs={6}>
          <h2>Select a music</h2>
          <div className="mt-3">
        {music ? (
          <>
          <Container>
            <Row>
              <Col sm={12}>
                <h1>{music.title}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              
              <Col className="mx-5" sm={8}>
                <div>
                  <span className="font-weight-bold">Description:</span>
                  <p>{ music.title} </p>
                </div>
              </Col>
            </Row>
          </Container>
          </>
        ) : (
          <Row>

          </Row>
          )}
      </div>
   
        </Col>
      </Row>
    </Container>
    
    </>
  )
};
