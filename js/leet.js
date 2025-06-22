setInterval(() => {
  leet.value = "";
  leet.style.color = "#000000";
  const leet_data = {
    "A": "4",
    "B": "8",
    "C": "[",
    "D": "|)",
    "E": "3",
    "F": "|=",
    "G": "6",
    "H": "#",
    "I": "!",
    "J": "_|",
    "K": "|<",
    "L": "1",
    "M": "|\\/|",
    "N": "|\\|",
    "O": "0",
    "P": "|*",
    "Q": "0_",
    "R": "|?",
    "S": "5",
    "T": "7",
    "U": "(_)",
    "V": "\\/",
    "W": "\\^/",
    "X": "><",
    "Y": "`/",
    "Z": "2"
  },
  leet_input = input.value.normalize("NFD")
  .replace(/[\u0300-\u036F]/g, "")
  .replace(/ł/g, "l").replace(/Ł/g, "L")
  .replace(/đ/g, "d").replace(/Đ/g, "D")
  .replace(/ß/g, "ss").replace(/ẞ/g, "SS")
  .replace(/æ/g, "ae").replace(/Æ/g, "AE")
  .replace(/œ/g, "oe").replace(/Œ/g, "OE")
  .replace(/ø/g, "o").replace(/Ø/g, "O")
  .replace(/ð/g, "d").replace(/Ð/g, "D")
  .replace(/þ/g, "th").replace(/Þ/g, "TH")
  .replace(/ñ/g, "n").replace(/Ñ/g, "N");
  for (let i = 0; i <= leet_input.length - 1; i++) {
    if (leet_input.toUpperCase()[i] in leet_data) {
      leet.value += leet_data[leet_input.toUpperCase()[i]];
    } else if (leet_input[i] == " ") {
      leet.value += " ";
    } else {
      leet.style.color = "#FF5555";
      leet.value += "�";
    }
  }
})
