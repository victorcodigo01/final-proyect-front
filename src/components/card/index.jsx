import { useTranslation } from "react-i18next";
import { Card } from "react-bootstrap";
import "./style.css";

function CardManageEmotion({ manageEmotions }) {
  const [t, i18n] = useTranslation("global");
  console.log("TIPO DE DATO", manageEmotions);
  return (
    <>
      <Card className="card_main" style={{ width: "27rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320562/a-sad-woman-looking-out-of-the-window.jpg"
        />

        <Card.Body>
          <Card.Title>{t("titleCards.one")}</Card.Title>
          <Card.Text className="card_text">
            <p>{t("sadCard.one")}</p>
            <p>{t("sadCard.two")}</p>
            <p>{t("sadCard.three")}</p>
            <p>{t("sadCard.four")}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card_main" style={{ width: "27rem" }}>
        <Card.Img
          variant="top"
          src="https://images.theconversation.com/files/304963/original/file-20191203-66982-1rzdvz4.jpg?ixlib=rb-1.1.0&rect=31%2C71%2C5330%2C2665&q=45&auto=format&w=1356&h=668&fit=crop"
        />

        <Card.Body>
          <Card.Title>{t("titleCards.two")}</Card.Title>
          <Card.Text className="card_text">
            <p>{t("happyCard.one")}</p>
            <p>{t("happyCard.two")}</p>
            <p>{t("happyCard.three")}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card_main" style={{ width: "27rem" }}>
        <Card.Img
          variant="top"
          src="https://www.clinicaladvisor.com/wp-content/uploads/sites/11/2020/08/woman.anxiety.attack_G_1155214538-860x573.jpg"
        />

        <Card.Body>
          <Card.Title>{t("titleCards.three")}</Card.Title>
          <Card.Text className="card_text">
            <p>{t("anxietyCard.one")}</p>
            <p>{t("anxietyCard.two")}</p>
            <p>{t("anxietyCard.three")}</p>
            <p>{t("anxietyCard.four")}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card_main" style={{ width: "27rem" }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/free-photo/portrait-young-european-man-being-stupor-as-sees-his-phobia-keeps-mouth-opened-expresses-fear_273609-2967.jpg?w=2000"
        />

        <Card.Body>
          <Card.Title>{t("titleCards.four")}</Card.Title>
          <Card.Text className="card_text">
            <p>{t("fearCard.one")}</p>
            <p>{t("fearCard.two")}</p>
            <p>{t("fearCard.three")}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardManageEmotion;
