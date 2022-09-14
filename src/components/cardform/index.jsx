import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

import "./styles.css";

export default function CardForm() {
  const [t, i18n] = useTranslation("global");
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
      <h1>{t("formCards.one")} </h1>
      <Form className="formi" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setSuccessful(false);
            }}
            type="url"
            placeholder={t("formCards.two")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSuccessful(false);
            }}
            type="text"
            placeholder={t("formCards.three")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            placeholder={t("formCards.four")}
            rows={7}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setSuccessful(false);
            }}
          />
        </Form.Group>

        <Button disabled={loading} variant="primary" type="submit">
          {t("formCards.five")}
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
