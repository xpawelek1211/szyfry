setInterval(() => {
  sga.value = "";
  sga.style.color = "#000000";
  const sga_data = {
    " ": "  ",
    "A": " ̠Ր",
    "B": " ͟く",
    "C": "ᓵ",
    "D": " ͞⸜",
    "E": "ᒷ",
    "F": " ͞⋯",
    "G": "˧",
    "H": " ͞┬",
    "I": "¦",
    "J": "⋮",
    "K": "ꖌ",
    "L": "ꖎ",
    "M": "ᒲ",
    "N": "リ",
    "O": "フ",
    "P": "iᴉ",
    "Q": " ͘⊐",
    "R": "∷",
    "S": "ነ",
    "T": " ̣ℸ",
    "U": " ̈-",
    "V": " ͟┴",
    "W": "∴",
    "X": " ̇/",
    "Y": "‖",
    "Z": "⨅"
  },
  sga_input = input.value.normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/ł/g, "l").replace(/Ł/g, "L")
  .replace(/đ/g, "d").replace(/Đ/g, "D")
  .replace(/ß/g, "ss").replace(/ẞ/g, "SS")
  .replace(/æ/g, "ae").replace(/Æ/g, "AE")
  .replace(/œ/g, "oe").replace(/Œ/g, "OE")
  .replace(/ø/g, "o").replace(/Ø/g, "O")
  .replace(/ð/g, "d").replace(/Ð/g, "D")
  .replace(/þ/g, "th").replace(/Þ/g, "TH")
  .replace(/ñ/g, "n").replace(/Ñ/g, "N");
  for (let i = 0; i <= sga_input.length - 1; i++) {
    if (sga_input.toUpperCase()[i] in sga_data) {
      sga.value += sga_data[sga_input.toUpperCase()[i]];
    } else if (sga_input[i] == "." && (sga_input[i + 1] == " " || i == sga_input.length - 1)) {
      sga.value += "._.";
    } else {
      sga.style.color = "#FF5555";
      sga.value += "�";
    }
  }
})
