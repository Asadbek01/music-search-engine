import { FormEvent, useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MusicSearchResponse, Track, MusicData } from '../type/Interface';
import { BsSearch } from "react-icons/bs";
import { Detail } from './Detail';
const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

const Search = () => {
    const [query, setQuery] = useState("")

    const [music, setMusic] = useState<Track[]>([])
    const [selectMusic, setSelectMusic] = useState<MusicData | null>(null)


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
            <Container>
                <Row>
                    <Col xs={4}>
                        {
                            music.map((data) => (
                                
                                
                                <Card className='m-3 mb-2 text-secondary' style={{ width: '15rem' }}>
                                    <Card.Img className='img-fluid' src={data?.album.cover_medium} alt='1' />
                                    <Card.Body>
                                        <Card.Title onClick={()=> changeMusic(data)}>{data.title_short}</Card.Title>
                                        <Card.Text>
                                            {data.title}
                                        </Card.Text>

                                   
                                        <div className='d-flex justify-content-between'>
                                            <a href={data.preview} className='btn btn-primary'>Listen</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ) 
                            
                            )
                        }
                    </Col>
                    <Col xs={8}>
                        <Detail />
                        {/* selectMusic={selectMusic} */}
                    </Col>
                </Row>
            </Container>

        </>
    )
}


export default Search


