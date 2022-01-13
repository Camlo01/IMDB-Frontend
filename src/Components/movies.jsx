import { useEffect, useState } from "react";

import axios from 'axios';
import { Container, } from 'react-bootstrap'
import { Button, Image } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
const Movie = () => {
    let [movies, setMovies] = useState([]);
    let [movie, setMovie] = useState({

        id: '',
        title: ',',
        poster: '',
        trailer: '',
        description: '',
        yearRealased: '',
        rating: '',
    })

    let [show, setShow] = useState(false);
    let [edit, setEdit] = useState(false);

    useEffect(() => {
        console.log('iniciando Moviesform')
        queryMovies();

    }, [])

    const queryMovies = () => {
        axios.get('http://192.168.1.11:8080/api/movie/all')
            .then(response => {

                setMovies(response.data);

            })
    }

  
    const handleClose = () => setShow(false);
    const agregarMovie = () => {
        setEdit(false);
        setMovies({
            id: '',
            title: '',
            poster: '',
            trailer: '',
            description: '',
            yearRealased: '',
            rating: '',
        })
        setEdit(false)
        setShow(true)
    }

    const handleInputChange = (e) => {

        setMovie({
            ...movie,
            [e.currentTarget.id]: e.currentTarget.value
        })

    };
    const guardarMovie = () => {


        const headers = {
            'Content-Type': 'application/json'
        };

        if (edit) {
            axios.put('http://localhost:8080/api/Movie/update', movie, { headers })
                .then(response => {
                    setShow(false);
                    alert('se actualizo Movie');
                    queryMovies();

                })


        } else {
            console.log('guardando', movie);
            axios.post('http://localhost:8080/api/Movie/new', movie, { headers })
                .then(response => {
                    setShow(false);
                    alert('se guardo Movie');
                    queryMovies();

                })
        }
    }

    const borrarMovie = (id) => {
        axios.delete('http://localhost:8080/api/movie/' + id)
            .then(response => {
                alert('se elimimo Movie')
                setShow(false)
                queryMovies();
            })


    }

    const actualizarMovie = (p) => {
        setEdit(true);
        setMovie(p);
        setShow(true);

    }


    return (
        <Container className='justify-content-center'>
            <Row className="mb-3 justify-content-center">
                
            </Row>


            <div className="row">
                <div className="col-8">
                    <h5>list of movies</h5>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary"
                        onClick={() => agregarMovie()}>add Movies</button>
                </div >
                <div className="overflow-scroll">
                    <table className="table table-hover table-responsive ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>title</th>
                                <th>poster</th>
                                <th>trailer</th>
                                <th>Descripcion</th>
                                <th>year realased</th>
                                <th>rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map((p, index) => (
                                    <tr key={index}>
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td><Image img src={p.poster}  height="100"/></td>
                                        <td><iframe src={p.trailer} width="290" height="170" src="https://www.youtube.com/embed/r6t0czGbuGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/></td>
                                        <td>{p.description}</td>
                                        <td>{p.yearRealased}</td>
                                        <td>{p.rating}</td>
                                        
                                        <td><button className="btn btn-primary" onClick={() => actualizarMovie(p)}>actualizar</button>
                                            &nbsp;
                                            <button className="btn btn-danger" onClick={() => borrarMovie(p.id)}>borrar</button></td>

                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row ">
                        <div className="col-md-4 col-sm-4 ">
                            <label>ID</label><input type="number" className="form-control" id="id" placeholder="id"
                                onChange={handleInputChange} value={movie.id} disabled={edit} />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <label>title</label><input type="text" className="form-control" id="brand" placeholder="brand"
                                onChange={handleInputChange} value={movie.title} />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <label>poster</label><input type="img" className="form-control" id="category" placeholder="category"
                                onChange={handleInputChange} value={movie.poster} />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <label>trailer</label><input type="img" className="form-control" id="name" placeholder="name"
                                onChange={handleInputChange} value={movie.trailer} />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <label>description</label><input type="text" className="form-control" id="description" placeholder="description"
                                onChange={handleInputChange} value={movie.description} />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <label>yearRealased</label><input type="number" className="form-control" id="price" placeholder="price"
                                onChange={handleInputChange} value={movie.yearRealased} />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <label>rating</label><input type="number" className="form-control" id="price" placeholder="price"
                                onChange={handleInputChange} value={movie.rating} />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => guardarMovie()}>save Movie</Button>
                    <Button variant="primary" onClick={handleClose}>.....</Button>
                </Modal.Footer>
            </Modal>


        </Container>
    )
}

export default Movie
