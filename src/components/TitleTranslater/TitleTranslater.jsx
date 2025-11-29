import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function TitleTranslater() {
  const { t, i18n, ready } = useTranslation();

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (!ready) return;
    const html = document.documentElement;

    const update = () => {
      const translated = i18n.exists("head.title") ? t("head.title") : null;

      if (translated && translated !== "head.title") {
        document.title = translated;
      }

      const normalized = i18n.language?.split("-")[0] || "ru";
      html.setAttribute("lang", normalized);
    };

    update();

    i18n.on("languageChanged", update);

    return () => {
      i18n.off("languageChanged", update);
    };
  }, [i18n, t, ready]);

  return null;
}
