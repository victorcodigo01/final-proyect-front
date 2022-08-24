import { useTranslation } from "react-i18next";

function PrivacyPolicy() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <h1>{t("PrivacyText.one")}</h1>
      <p>{t("PrivacyText.two")}</p>
      <p>{t("PrivacyText.three")}</p>
      <p>{t("PrivacyText.four")}</p>

      <h2>{t("PrivacyText.five")}</h2>
      <h6>{t("PrivacyText.six")}</h6>
      <ul>
        <li>{t("PrivacyText.seven")}</li>
        <li>{t("PrivacyText.eight")}</li>
        <li>{t("PrivacyText.nine")}</li>
        <li>{t("PrivacyText.ten")}</li>
        <li>{t("PrivacyText.eleven")}</li>
        <li>{t("PrivacyText.twelve")}</li>
      </ul>
      <h2>{t("PrivacyText.thirteen")}</h2>
      <p>{t("PrivacyText.fourteen")}</p>
      <p>{t("PrivacyText.fifteen")}</p>

      <h2>{t("PrivacyText.sixteen")}</h2>
      <p>
        {t("PrivacyText.seventeen")} {t("PrivacyText.eighteen")}
      </p>
    </div>
  );
}

export default PrivacyPolicy;
