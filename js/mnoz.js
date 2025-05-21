/*
× 12345
1 ABCDE
2 FGHIJ
3 KLMNO
4 PRSTU
5 WYZ
*/

setInterval(() => {
  mnoz.value = "";
  mnoz.style.color = "#000000";
  const mnoz_data = {
    " ": "   ",
    "A": "1×1",
    "B": "1×2",
    "C": "1×3",
    "D": "1×4",
    "E": "1×5",
    "F": "2×1",
    "G": "2×2",
    "H": "2×3",
    "I": "2×4",
    "J": "2×5",
    "K": "3×1",
    "L": "3×2",
    "M": "3×3",
    "N": "3×4",
    "O": "3×5",
    "P": "4×1",
    "R": "4×2",
    "S": "4×3",
    "T": "4×4",
    "U": "4×5",
    "W": "5×1",
    "Y": "5×2",
    "Z": "5×3"
  },
  mnoz_input = input.value.normalize("NFD")
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
  for (let i = 0; i <= mnoz_input.length - 1; i++) {
    if (mnoz_input.toUpperCase()[i] in mnoz_data) {
      mnoz.value += mnoz_data[mnoz_input.toUpperCase()[i]] + " ";
    } else {
      mnoz.style.color = "#FF5555";
      mnoz.value += "� ";
    }
  }
  mnoz.value = mnoz.value.slice(0, -1);
})
