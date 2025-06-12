/*
ABCDE FGHIJ KLMNO PRSTU WYZ
––––– ––––– ––––– ––––– –––
  1     2     3     4    5
*/

setInterval(() => {
  var licz = "", kreska = "", mian = "";
  ulam.value = "";
  ulam.style.color = "#000000";
  const ulam_data = {
    "A": "11",
    "B": "12",
    "C": "13",
    "D": "14",
    "E": "15",
    "F": "21",
    "G": "22",
    "H": "23",
    "I": "24",
    "J": "25",
    "K": "31",
    "L": "32",
    "M": "33",
    "N": "34",
    "O": "35",
    "P": "41",
    "R": "42",
    "S": "43",
    "T": "44",
    "U": "45",
    "W": "51",
    "Y": "52",
    "Z": "53"
  },
  ulam_input = input.value.normalize("NFD")
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
  for (let i = 0; i <= ulam_input.length - 1; i++) {
    if (ulam_input.toUpperCase()[i] in ulam_data) {
      licz += ulam_data[ulam_input.toUpperCase()[i]][1],
      mian += ulam_data[ulam_input.toUpperCase()[i]][0],
      kreska += "–";
    } else if (ulam_input[i] == " ") {
      licz += " ", kreska += " ", mian += " ";
    } else {
      licz += "�", kreska += "–", mian += "�";
      ulam.style.color = "#FF5555";
    }
    if (ulam_tekst.checked) {
      ulam.value = licz + "\n" + kreska + "\n" + mian;
    } else if (ulam_tex.checked) {
      var tex_l = licz.split(" "), tex_m = mian.split(" ");
      ulam.value = "";
      for (let i = 0; i <= tex_l.length - 1; i++) {
        ulam.value += `\\frac{${tex_l[i]}}{${tex_m[i]}}`;
      }
    }
  }
})
