import { FormEvent, useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MusicSearchResponse, Track } from '../type/Interface';
import { BsSearch } from "react-icons/bs";
import { Detail } from './Detail';
const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

const Search = () => {
    const [query, setQuery] = useState("")
const navigate = useNavigate()
    const [music, setMusic] = useState<Track[]>([])
    const [selectMusic, setSelectMusic] = useState<Track | null>(null)


const changeMusic = (music: any) => setSelectMusic(music) 
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch(url + query)
            if (response.ok) {
                const result = await response.json() as MusicSearchResponse

                console.log(result.data)
                setMusic(result.data)

            }
        } catch (error) {
            console.log({ message: error })
        }
    }
    return (
        <>
                    <Container>
            <Form onSubmit={handleSubmit} className='formsearch'  >

                <InputGroup>
                    <InputGroup.Text>
                        <BsSearch />
                    </InputGroup.Text>
                    <Form.Control type="search" className=''
                        placeholder="Insert a music"
                        value={query}
                        onChange={e => setQuery(e.target.value)}

                    />

                </InputGroup>

            </Form>
                <Row>
                        {
                            music.map((data) => (
                                <Col xs={3} className='ml-2'>
                                
                                
                                <Card className='mt-5 ' style={{ width: '15rem' }}>
                                    <Card.Img className='img-fluid' src={data?.album.cover_medium} alt='1' />
                                    <Card.Body>
                                        {/* <Card.Title onClick={()=> changeMusic(data)}>{data.title_short}</Card.Title>
                                        <Card.Text>
                                        {data.title}
                                        </Card.Text>
                                        
                                        
                                        <div className='d-flex justify-content-between'>
                                        <a href={data.preview} className='btn btn-primary'>Listen</a>
                                        </div> */}
                                <p style={{color: 'black', cursor: "pointer"}} onClick={()=> changeMusic(data)}>{data.title_short}</p>
                                    </Card.Body>
                                </Card>
                    </Col>
                            ) 
                            
                            )
                        }
                </Row>
            </Container>


        </>
    )
}


export default Search


