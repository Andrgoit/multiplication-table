import langIcons from "../data/langIcons";

const getLangIcons = (lang) => {
  const [{ icon }] = langIcons.filter((item) => item.lang === lang);
  return icon;
};

export default getLangIcons;
