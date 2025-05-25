setInterval(() => {
  cezar.value = "";
  cezar.style.color = "#000000";
  const up = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ", low = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";
  var key = cezar_key.value % 32;
  for (let i = 0; i <= input.value.length - 1; i++) {
    if (up.includes(input.value[i]) || low.includes(input.value[i])) {
      if (input.value[i] == input.value.toUpperCase()[i]) {
        if (up.indexOf(input.value[i]) + key > 31) {
          cezar.value += up[up.indexOf(input.value[i]) + key - 32];
        } else if (up.indexOf(input.value[i]) + key < 0) {
          cezar.value += up[up.indexOf(input.value[i]) + key + 32];
        } else {
          cezar.value += up[up.indexOf(input.value[i]) + key];
        }
      } else if (input.value[i] == input.value.toLowerCase()[i]) {
        if (low.indexOf(input.value[i]) + key > 31) {
          cezar.value += low[low.indexOf(input.value[i]) + key - 32];
        } else if (low.indexOf(input.value[i]) + key < 0) {
          cezar.value += low[low.indexOf(input.value[i]) + key + 32];
        } else {
          cezar.value += low[low.indexOf(input.value[i]) + key];
        }
      }
    } else if (input.value[i] == " ") {
      cezar.value += " ";
    } else {
      cezar.style.color = "#FF5555";
      cezar.value += "�";
    }
  }
})
