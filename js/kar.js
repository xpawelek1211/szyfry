setInterval(() => {
  const abcd = "ABCDEFGHIJKLMNOPRSTUWYZABCDEFGH"; var ch = 1;
  kar_input = input.value.normalize("NFD")
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
  if (kar_key.value == "") {
    kar.value = "Wpisz klucz szyfru ";
    kar.style.color = "#FF5555";
  } else {
    for (let i = 0; i <= kar_key.value.length - 1; i++) {
      if (!abcd.includes(kar_key.value.toUpperCase()[i])) {
        ch = 0;
      }
      if (ch) {
        kar.value = "";
        kar.style.color = "#000000";
        var key = kar_key.value.toUpperCase().split("");
        for (let i = 0; i <= key.length - 1; i++) {
          key[i] = abcd.slice(abcd.indexOf(key[i]), abcd.indexOf(key[i]) + 9);
        }
        for (let i = 0; i <= kar_input.length - 1; i++) {
          for (let j = 0; j <= key.length - 1; j++) {
            litnull = 0;
            if (key[j].includes(kar_input.toUpperCase()[i])) {
              kar.value += (key[j].indexOf(kar_input.toUpperCase()[i]) + 1) + "×" + (j + 1) + " ";
              break;
            } else {
              litnull = 1;
            }
          }
          if (litnull) {
            if (kar_input[i] == " ") {
              kar.value += "    ";
            } else {
              kar.style.color = "#FF5555";
              kar.value += "� ";
            }
          }
        }
      } else {
        kar.value = "Klucz może zawierać jedynie litery alfabetu polskiego bez polskich znaków ";
        kar.style.color = "#FF5555";
      }
    }
  }
  kar.value = kar.value.slice(0, -1);
})
