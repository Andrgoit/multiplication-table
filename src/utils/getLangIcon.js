import langIcons from "../data/langIcons";

const getLangIcons = (lang) => {
  // нормализуем lang типа "en-US" → "en"
  const normalized = lang?.split("-")[0] || "ru";

  // пробуем найти иконку для языка
  const item = langIcons.find((item) => item.lang === normalized);

  // если нет → fallback на английский
  const fallback = langIcons.find((item) => item.lang === "ru");

  return item?.icon || fallback?.icon || null;
};

export default getLangIcons;
