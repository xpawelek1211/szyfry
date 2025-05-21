/*
AB|CD|EF   ╲T╱
GH|IJ|KL  Y ╳ U  (Z)
MN|OP|RS   ╱W╲
*/

setInterval(() => {
  czek.value = "";
  czek.style.color = "#000000";
  const czek_data = {
    " ": "   ",
    "A": " ̲•̲ ̲ ̲|",
    "B": " ̲ ̲ ̲•̲|",
    "C": "|̲•̲ ̲ ̲|",
    "D": "|̲ ̲ ̲•̲|",
    "E": "|̲•̲ ̲ ̲ ",
    "F": "|̲ ̲ ̲•̲ ",
    "G": " ̲̅•̲̅ ̲̅ ̲̅|",
    "H": " ̲̅ ̲̅ ̲̅•̲̅|",
    "I": "|̲̅•̲̅ ̲̅ ̲̅|",
    "J": "|̲̅ ̲̅ ̲̅•̲̅|",
    "K": "|̲̅•̲̅ ̲̅ ̲̅ ",
    "L": "|̲̅ ̲̅ ̲̅•̲̅ ",
    "M": " ̅•̅ ̅ ̅|",
    "N": " ̅ ̅ ̅•̅|",
    "O": "|̅•̅ ̅ ̅|",
    "P": "|̅ ̅ ̅•̅|",
    "R": "|̅•̅ ̅ ̅ ",
    "S": "|̅ ̅ ̅•̅ ",
    "T": "⟇",
    "U": "⋖",
    "W": "⟑",
    "Y": "⋗",
    "Z": "⊙"
  },
  czek_input = input.value.normalize("NFD")
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
  for (let i = 0; i <= czek_input.length - 1; i++) {
    if (czek_input.toUpperCase()[i] in czek_data) {
      czek.value += czek_data[czek_input.toUpperCase()[i]] + " ";
    } else {
      czek.style.color = "#FF5555";
      czek.value += "� ";
    }
  }
  czek.value = czek.value.slice(0, -1);
})
