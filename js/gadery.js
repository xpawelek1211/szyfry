setInterval(() => {
  var key = gadery_key.value;
  gadery.value = "";
  for (let i = 0; i <= input.value.length - 1; i++) {
    if (key.includes(input.value[i]) && input.value[i] != "-") {
      if (key[key.indexOf(input.value[i]) + 1] == "-") {
        gadery.value += key[key.indexOf(input.value[i]) - 1];
      } else {
        gadery.value += key[key.indexOf(input.value[i]) + 1];
      }
    } else {
      gadery.value += input.value[i];
    }
  }
})
