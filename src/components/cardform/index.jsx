import { useState } from "react";

import "./styles.css";

export default function CardForm() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successful, setSuccessful] = useState(false);

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
      }),
    });

    setLoading(false);
    setSuccessful(true);
    setTitle("");
    setDescription("");
  }

  return (
    <form className="formi" onSubmit={handleSubmit}>
      <h1>Your Emotion card</h1>
      <label>
        Title:
        <br />
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setSuccessful(false);
          }}
        />
      </label>
      <label>
        Description:
        <br />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setSuccessful(false);
          }}
        />
      </label>
      <button type="submit" disabled={loading}>
        Submit
      </button>
      {successful && (
        <span style={{ fontSize: "2rem" }} aria-label="thumbs up" role="img">
          👍🏼
        </span>
      )}
    </form>
  );
}
