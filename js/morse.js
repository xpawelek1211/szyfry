setInterval(() => {
  morse.value = "";
  morse.style.color = "#000000";
  if (morse_style.value == "proste") {
    i = ".", o = "-", k = "/", e = "/";
  } else if (morse_style.value == "ladne") {
    i = "·", o = "–", k = "|", e = "|";
  } else if (morse_style.value == "dzdzow") {
    i = "⋂", o = "⋃", k = "—", e = "  ";
  }
  const morse_data = {
    " ": e,
    "A": i+o+k,
    "B": o+i+i+i+k,
    "C": o+i+o+i+k,
    "D": o+i+i+k,
    "E": i+k,
    "F": i+i+o+i+k,
    "G": o+o+i+k,
    "H": i+i+i+i+k,
    "I": i+i+k,
    "J": i+o+o+o+k,
    "K": o+i+o+k,
    "L": i+o+i+i+k,
    "M": o+o+k,
    "N": o+i+k,
    "O": o+o+o+k,
    "P": i+o+o+i+k,
    "Q": o+o+i+o+k,
    "R": i+o+i+k,
    "S": i+i+i+k,
    "T": o+k,
    "U": i+i+o+k,
    "V": i+i+i+o+k,
    "W": i+o+o+k,
    "X": o+i+i+o+k,
    "Y": o+i+o+o+k,
    "Z": o+o+i+i+k,
    "0": o+o+o+o+o+k,
    "1": i+o+o+o+o+k,
    "2": i+i+o+o+o+k,
    "3": i+i+i+o+o+k,
    "4": i+i+i+i+o+k,
    "5": i+i+i+i+i+k,
    "6": o+i+i+i+i+k,
    "7": o+o+i+i+i+k,
    "8": o+o+o+i+i+k,
    "9": o+o+o+o+i+k
  },
  morse_input = input.value.normalize("NFD")
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
  for (let i = 0; i <= morse_input.length - 1; i++) {
    if (morse_input.toUpperCase()[i] in morse_data) {
      morse.value += morse_data[morse_input.toUpperCase()[i]];
    } else {
      morse.style.color = "#FF5555";
      morse.value += "�";
    }
  }
  if (morse.value != "" && morse_style.value != "dzdzow") morse.value += e;
})
