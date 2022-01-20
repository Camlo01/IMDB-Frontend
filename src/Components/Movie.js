import { useEffect, useState } from "react";

import axios from "axios";
import { Container, Form, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button, Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
const Movie = () => {
  let [movies, setMovies] = useState([]);
  let [movie, setMovie] = useState({
    idModal: "",
    titleModal: ",",
    posterModal: "",
    trailerModal: "",
    descriptionModal: "",
    yearReleasedModal: "",
    ratingModal: "",
  });

  let [show, setShow] = useState(false);
  let [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log("Desplegando todo el listado");
    queryMovies();
  }, []);

  const queryMovies = () => {
    axios.get("http://192.168.1.11:8080/api/movie/all").then((response) => {
      setMovies(response.data);
    });
  };

  const handleClose = () => setShow(false);

  const agregarMovie = () => {
    setEdit(false);
    setMovies({
      id: "",
      title: "",
      poster: "",
      trailer: "",
      description: "",
      yearReleased: "",
      rating: "",
    });

    // POST

    setEdit(false);
    setShow(true);
  };

  const handleInputChange = (e) => {
    setMovie({
      ...movie,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const nuevaMovie = () => {
    const headers = { "Content-Type": "application/json" };
    console.log("Guardando", movie);
    axios
      .post(`http://localhost:8080/api/movie/new`, movie, { headers })
      .then((response) => {
        queryMovies();
      });
  };

  const guardarMovie = () => {
    const headers = {
      "Content-Type": "application/json",
    };

    if (edit) {
      axios
        .put("http://localhost:8080/api/Movie/update", movie, { headers })
        .then((response) => {
          setShow(false);
          alert("se actualizo Movie");
          queryMovies();
        });
    } else {
      console.log("guardando", movie);
      axios
        .post("http://localhost:8080/api/Movie/new", movie, { headers })
        .then((response) => {
          setShow(false);
          alert("se guardo Movie");
          queryMovies();
        });
    }
  };

  const borrarMovie = (id) => {
    axios.delete("http://localhost:8080/api/movie/" + id).then((response) => {
      alert("The movie was deleted");
      setShow(false);
      queryMovies();
    });
  };

  const actualizarMovie = (p) => {
    setEdit(true);
    setMovie(p);
    setShow(true);
  };

  return (
    <Container className="justify-content-center">
      <Row className="mb-3 justify-content-center">
        <hr />
        <div className="p-3 me-md-3 border bg-light">
          <Card.Text>
            <form className="row g-3">
              {/* INPUT DE ID */}
              <div className="col-auto">
                Id:
                <label for="inputPassword2" className="visually-hidden">
                  Id
                </label>
                <input
                  type="none"
                  className="form-control"
                  id="id"
                  placeholder="1"
                />
              </div>
              <div className="col-md-4 col-sm-4">
                Title:
                <label for="inputPassword2" className="visually-hidden">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title of the movie"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-4">
                Poster:
                <label for="inputPassword2" className="visually-hidden">
                  Poster
                </label>
                <input
                  type="Text"
                  className="form-control"
                  id="Poster"
                  placeholder="Link of the poster"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-4">
                Trailer:
                <label for="inputPassword2" className="visually-hidden">
                  Trailer
                </label>
                <input
                  type="Text"
                  className="form-control"
                  id="Trailer"
                  placeholder="Link of the trailer"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-4">
                Description:
                <label for="inputPassword2" className="visually-hidden">
                  Description
                </label>
                <input
                  type="Text"
                  className="form-control"
                  id="Description"
                  placeholder="describe the movie "
                  required
                />
              </div>
              <hr />
              <div className="col-md-4 col-sm-4">
                Year Released:
                <label for="inputTextYearReleased" className="visually-hidden">
                  year Released
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="yearReleased"
                  placeholder="year"
                  contenteditable="true"
                  min="1910"
                  max="2022"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-4">
                Rating:
                <label for="inputTextRating" className="visually-hidden">
                  Rating
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="Rating"
                  placeholder="Rating"
                  min="0.0"
                  max="10"
                  step="0.1"
                  pattern="\d+"
                  required
                />
              </div>
              {/* botón del formulario */}
              <div className="col-auto">
                <button
                  className="btn btn-primary g-col-md-3 .offset-md-3"
                  onClick={() => nuevaMovie()}
                >
                  Add Movie
                </button>
              </div>
            </form>
          </Card.Text>
        </div>
      </Row>

      <div className="row">
        <div className="col-8">
          <h5>Manage the list of movies and series</h5>
        </div>
        {/* 
        <div className="col-4">
          <button className="btn btn-primary" onClick={() => agregarMovie()}>
            add Movie or serie
          </button>
        </div> */}

        <div className="overflow-scroll">
          <table className="table table-hover table-responsive ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Film</th>
                <th>Poster</th>
                <th>Trailer</th>
                <th>Synopsis</th>
                <th>year Released</th>
                <th>Rating</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((p, index) => (
                <tr key={index}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>
                    <Image img src={p.poster} height="100" />
                  </td>{" "}
                  {/* width="290" 560 height="170" 315 src={p.trailer}  */}
                  <td>
                    <iframe
                      src={p.trailer}
                      width="340"
                      height="190"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </td>
                  <td>{p.description}</td>
                  <td>{p.yearReleased}</td>
                  <td>{p.rating}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => actualizarMovie(p)}
                    >
                      Update
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => borrarMovie(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
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
              <label>ID</label>
              <input
                type="number"
                className="form-control"
                id="idModal"
                placeholder="id"
                onChange={handleInputChange}
                value={movie.id}
                disabled={edit}
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <label>title</label>
              <input
                type="text"
                className="form-control"
                id="titleModal"
                placeholder="brand"
                onChange={handleInputChange}
                value={movie.title}
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <label>poster</label>
              <input
                type="img"
                className="form-control"
                id="posterModal"
                placeholder="category"
                onChange={handleInputChange}
                value={movie.poster}
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <label>trailer</label>
              <input
                type="img"
                className="form-control"
                id="trailerModal"
                placeholder="name"
                onChange={handleInputChange}
                value={movie.trailer}
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <label>description</label>
              <input
                type="text"
                className="form-control"
                id="descriptionModal"
                placeholder="description"
                onChange={handleInputChange}
                value={movie.description}
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <label>yearReleased</label>
              <input
                type="number"
                className="form-control"
                id="yearReleasedModal"
                placeholder="price"
                onChange={handleInputChange}
                value={movie.yearReleased}
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <label>rating</label>
              <input
                type="number"
                className="form-control"
                id="ratingModal"
                placeholder="price"
                onChange={handleInputChange}
                value={movie.rating}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => guardarMovie()}>
            save Movie
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Movie;
