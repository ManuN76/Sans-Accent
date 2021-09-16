window.function = function (strIn) {
  let str = strIn.value ?? "";

  // Remplace Accent
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Supprime ponctuation
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  // Supprime les espaces et multiligne
  str = str.trim();

  // Convertion en minuscule
  str = str.toLowerCase();

  return str;
};
