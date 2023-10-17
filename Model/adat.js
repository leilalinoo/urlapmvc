export const urlapLeiro = {
  nev: {
    megj: "Név",
    type: "text",
    placeholder: "danda vagyok",
    value : "",
    regex: "[A-Z][a-z]{2,15}",
    valid: "Nagy betűvlel kezdődjön, legyen 3 és 15 karakter között pls",
  },
  szul: {
    megj: "Születési idő",
    type: "number",
    placeholder: "2000",
    value: "2000",
    regex: {
      min: 1000,
      max: 2023,
    },
    valid: "1000 és 2023 közötti számot írj pls",
  },
};
