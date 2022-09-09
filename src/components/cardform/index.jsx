import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./styles.css";

export default function CardForm() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [url, setUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    // await fetch("http://localhost:3001/emotions-manage/create", {
    await fetch("https://pomonew.onrender.com/emotions-manage/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title,
        emotionsManage: description.split("\n").filter(Boolean),
        url,
      }),
    });

    setLoading(false);
    setSuccessful(true);
    setTitle("");
    setUrl("");
    setDescription("");
    window.location.reload(false);
  }

  return (
    <>
      <h1>Your Emotion card</h1>
      <Form className="formi" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image url</Form.Label>
          <Form.Control
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setSuccessful(false);
            }}
            type="url"
            placeholder="Enter url image"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSuccessful(false);
            }}
            type="text"
            placeholder="Enter text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setSuccessful(false);
            }}
          />
        </Form.Group>

        <Button disabled={loading} variant="primary" type="submit">
          Update
        </Button>
        {successful && (
          <span style={{ fontSize: "2rem" }} aria-label="thumbs up" role="img">
            👍🏼
          </span>
        )}
      </Form>
    </>
  );
}
