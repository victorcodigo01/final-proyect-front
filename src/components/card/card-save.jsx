<Card className="mt-5 mb-5 card_main" style={{ width: "27rem" }}>
  <Card.Img
    variant="top"
    src={`https://pomonew.onrender.com/static/${manageEmotions.img}`}
  />
  {/* src={`http://localhost:3001/static/${manageEmotions.img}`} */}

  <Card.Body>
    <Card.Title>{manageEmotions.title}</Card.Title>
    <Card.Text className="card_text">
      {manageEmotions.emotionsManage.map((v) => (
        <p>{v}</p>
      ))}
    </Card.Text>
  </Card.Body>
</Card>;
