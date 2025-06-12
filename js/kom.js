/*
  1   2   3
     ABC DEF
  4   5   6
 GHI JKL MNO
  7   8   9
PQRS TUV WXYZ
*/

setInterval(() => {
  kom.value = "";
  kom.style.color = "#000000";
  const kom_data = {
    " ": "  ",
    "A": "2",
    "B": "22",
    "C": "222",
    "D": "3",
    "E": "33",
    "F": "333",
    "G": "4",
    "H": "44",
    "I": "444",
    "J": "5",
    "K": "55",
    "L": "555",
    "M": "6",
    "N": "66",
    "O": "666",
    "P": "7",
    "Q": "77",
    "R": "777",
    "S": "7777",
    "T": "8",
    "U": "88",
    "V": "888",
    "W": "9",
    "X": "99",
    "Y": "999",
    "Z": "9999"
  },
  kom_input = input.value.normalize("NFD")
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
  for (let i = 0; i <= kom_input.length - 1; i++) {
    if (kom_input.toUpperCase()[i] in kom_data) {
      kom.value += kom_data[kom_input.toUpperCase()[i]] + " ";
    } else {
      kom.style.color = "#FF5555";
      kom.value += "� ";
    }
  }
  kom.value = kom.value.slice(0, -1);
})
