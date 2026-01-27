document.addEventListener("input", () => {
  bin.value = "";
  bin.style.color = "#000000";
  for (let i = 0; i <= input.value.length - 1; i++) {
    if (input.value[i].codePointAt() <= 255) {
      bin.value += input.value[i].codePointAt().toString(2).padStart(8, "0") + " ";
    } else {
      bin.style.color = "#FF5555";
      bin.value += "�������� ";
    }
  }
  bin.value = bin.value.slice(0, -1);
})
