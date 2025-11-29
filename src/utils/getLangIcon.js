import langIcons from "../data/langIcons";

const getLangIcons = (lang) => {
  if (!lang) return null;

  const item = langIcons.find((item) => item.lang === lang);
  return item ? item.icon : null;
};

export default getLangIcons;
