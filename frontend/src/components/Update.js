import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "https://notes-backend-amu5.onrender.com/";

const CompUpdate = () => {
  const [titulo, setTitulo] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(URI + id, {
        titulo: titulo,
        content: content,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    getNotaById();
  }, [id]);

  const getNotaById = () => {
    fetch(URI + id)
      .then((response) => response.json())
      .then((data) => {
        setTitulo(data.titulo);
        setContent(data.content);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h3 className="h3">UPDATE NOTE</h3>
      <form className="form" onSubmit={update}>
        <label className="form-label">Title:</label>
        <input
          value={titulo}
          id="titulo"
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          className="form-control"
        />
        <label className="form-label">Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="content"
          type="text"
          className="form-control"
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompUpdate;
