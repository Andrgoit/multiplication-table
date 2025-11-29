import langIcons from "../data/langIcons";

const getLangIcons = (lang) => {
  if (lang) {
    const [{ icon }] = langIcons.filter((item) => item.lang === lang);
    return icon;
  }
  return;
};

export default getLangIcons;
