import { type } from '@testing-library/user-event/dist/type';
import { StdioNull } from 'child_process';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NonNullExpression } from 'typescript';
import {MusicData, Track } from '../type/Interface';

export const Detail = () => {
 
  const [music, setMusic] = useState <Track[]>([])


  // useEffect(()=>{
  //    setMusic(selectMusic);
  //     }, [selectMusic])
      

  return (
    <>
    <Container>
      <Row>
        <Col xs={6}>
          <h2>Select a music</h2>
{/* <h2>{selectMusic.album.cover_small}</h2> */}
        </Col>
      </Row>
    </Container>
    
    </>
  )
};
