setInterval(() => {
  const mks_img_data = {
    "A": '<rect width="45" height="60" fill="#fff"/><path d="M 90,0 H 45 V 60 H 90 L 60,30 z" fill="#039"/>',
    "B": '<path d="M 90,0 H 0 V 60 H 90 L 60,30 z" fill="#f00"/>',
    "C": '<rect width="90" height="60" fill="#039"/><rect y="12" width="90" height="36" fill="#fff"/><rect y="24" width="90" height="12" fill="#f00"/>',
    "D": '<rect width="90" height="60" fill="#ff0"/><rect y="20" width="90" height="20" fill="#039"/>',
    "E": '<rect width="90" height="30" fill="#039"/><rect y="30" width="90" height="30" fill="#f00"/>',
    "F": '<rect width="90" height="60" fill="#fff"/><path d="M 45,0 L 0,30 L 45,60 L 90,30" fill="#f00"/>',
    "G": '<rect width="90" height="60" fill="#ff0"/><path d="M 15 0 L 15 60 L 30 60 L 30 0 L 15 0 z M 45 0 L 45 60 L 60 60 L 60 0 L 45 0 z M 75 0 L 75 60 L 90 60 L 90 0 L 75 0 z" fill="#039"/>',
    "H": '<rect width="45" height="60" fill="#fff"/><rect x="45" width="45" height="60" fill="#f00"/>',
    "I": '<rect width="90" height="60" fill="#ff0"/><circle cx="45" cy="30" r="16" fill="#000"/>',
    "J": '<rect width="90" height="60" fill="#039"/><rect y="20" width="90" height="20" fill="#fff"/>',
    "K": '<rect width="45" height="60" fill="#ff0"/><rect x="45" width="45" height="60" fill="#039"/>',
    "L": '<rect width="90" height="60" fill="#ff0"/><path d="M 45 0 L 45 30 L 90 30 L 90 0 L 45 0 z M 45 30 L 0 30 L 0 60 L 45 60 L 45 30 z" fill="#000"/>',
    "M": '<rect width="90" height="60" fill="#039"/><path d="M 0,0 V 9.0138672 L 31.479297,30 0,50.986133 V 60 H 13.520703 L 45,39.013867 76.479297,60 H 90 V 50.986133 L 58.520703,30 90,9.0138672 V 0 H 76.479297 L 45,20.986133 13.520703,0 Z" fill="#fff"/>',
    "N": '<rect width="90" height="60" fill="#039"/><path d="M 0,0 H 90 V 15 H 0 z M 0,30 H 90 V 45 H 0 z M 0,0 V 60 H 22.5 V 0 z M 45,0 V 60 H 67.5 V 0 z" fill="#fff"/>',
    "O": '<rect width="90" height="60" fill="#f00"/><path d="M 0,0 L 90,60 H 0 z" fill="#ff0"/>',
    "P": '<rect width="90" height="60" fill="#039"/><rect x="18" y="12" width="54" height="36" fill="#fff"/>',
    "Q": '<rect width="90" height="60" fill="#ff0"/>',
    "R": '<rect width="90" height="60" fill="#f00"/><path d="M 37.5,0 V 22.5 H 0 v 15 H 37.5 V 60 h 15 V 37.5 H 90 v -15 H 52.5 V 0 Z" fill="#ff0"/>',
    "S": '<rect width="90" height="60" fill="#fff"/><rect x="18" y="12" width="54" height="36" fill="#039"/>',
    "T": '<rect width="30" height="60" fill="#f00"/><rect x="30" width="30" height="60" fill="#fff"/><rect x="60" width="30" height="60" fill="#039"/>',
    "U": '<rect width="90" height="60" fill="#f00"/><path d="M 45 0 L 45 30 L 90 30 L 90 0 L 45 0 z M 45 30 L 0 30 L 0 60 L 45 60 L 45 30 z" fill="#fff"/>',
    "V": '<rect width="90" height="60" fill="#fff"/><path d="M 0,0 V 9.0138672 L 31.479297,30 0,50.986133 V 60 H 13.520703 L 45,39.013867 76.479297,60 H 90 V 50.986133 L 58.520703,30 90,9.0138672 V 0 H 76.479297 L 45,20.986133 13.520703,0 Z" fill="#f00"/>',
    "W": '<rect width="90" height="60" fill="#039"/><rect x="18" y="12" width="54" height="36" fill="#fff"/><rect x="36" y="24" width="18" height="12" fill="#f00"/>',
    "X": '<rect width="90" height="60" fill="#fff"/><path d="M 37.5,0 V 22.5 H 0 v 15 H 37.5 V 60 h 15 V 37.5 H 90 v -15 H 52.5 V 0 Z" fill="#039"/>',
    "Y": '<rect width="90" height="60" fill="#f00"/><path d="M 0,0 V 10.936914 L 16.405273,0 Z M 32.810547,0 0,21.873633 V 32.810547 L 49.21582,0 Z M 65.621094,0 0,43.747266 V 54.68418 L 82.026367,0 Z M 90,5.6208984 8.4314453,60 H 24.836719 L 90,16.557812 Z M 90,27.494727 41.241992,60 H 57.647266 L 90,38.431641 Z M 90,49.368359 74.052539,60 H 90 Z" fill="#ff0"/>',
    "Z": '<path d="M 0,0 H 90 L 45,30 z" fill="#ff0"/><path d="M 0,0 V 60 L 45,30 z" fill="#000"/><path d="M 90,0 V 60 L 45,30 z" fill="#039"/><path d="M 45,30 L 0,60 H 90 z" fill="#f00"/>',
    "0": '<path d="M 0,0 V 60 L 120,45 V 15 z" fill="#ff0"/><path d="M 40,5 V 55 L 80,50 V 10 z" fill="#f00"/>',
    "1": '<path d="M 0,0 V 60 L 120,45 V 15 z" fill="#fff"/><circle cx="30" cy="30" r="15" fill="#f00"/>',
    "2": '<path d="M 0,0 V 60 L 120,45 V 15 z" fill="#039"/><circle cx="30" cy="30" r="15" fill="#fff"/>',
    "3": '<path d="M 0,0 V 60 L 40,55 V 5 z" fill="#f00"/><path d="M 40,5 V 55 L 80,50 V 10 z" fill="#fff"/><path d="M 80,10 V 50 L 120,45 V 15 z" fill="#039"/>',
    "4": '<path d="M 0,0 V 60 L 120,45 V 15 z" fill="#f00"/><path d="M 40,5 V 25 H 0 V 35 H 40 V 55 L 50,53.75 V 35 h 70 V 25 H 50 V 6.25 Z" fill="#fff"/>',
    "5": '<path d="M 0,0 V 60 L 60,52.5 V 7.5 z" fill="#ff0"/><path d="M 60,7.5 V 52.5 L 120,45 V 15 z" fill="#039"/>',
    "6": '<path d="M 0,0 V 30 H 120 V 15 z" fill="#000"/><path d="M 0,60 V 30 H 120 V 45 z" fill="#fff"/>',
    "7": '<path d="M 0,0 V 30 H 120 V 15 z" fill="#ff0"/><path d="M 0,60 V 30 H 120 V 45 z" fill="#f00"/>',
    "8": '<path d="M 0,0 V 60 L 120,45 V 15 z" fill="#fff"/><path d="M 40,5 V 25 H 0 V 35 H 40 V 55 L 50,53.75 V 35 h 70 V 25 H 50 V 6.25 Z" fill="#f00"/>',
    "9": '<path d="M 0,0 V 30 H 60 V 7.5 z" fill="#fff"/><path d="M 60,7.5 V 30 H 120 V 15 z" fill="#000"/><path d="M 0,60 V 30 H 60 V 52.5 z" fill="#f00"/><path d="M 60,52.5 V 30 H 120 V 45 z" fill="#ff0"/>',
  },
  mks_input = input.value.normalize("NFD")
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
  if (kontur.checked) {
    stroke = "style=\"stroke: #000000; stroke-width: 1.5\"";
  } else {
    stroke = "";
  }
  pos = 0; svgcode = '<svg height="60px" xmlns="http://www.w3.org/2000/svg"><title>Kod flagowy</title><g id="mks_svg"' + stroke + '>';
  mks_img.innerHTML = svgcode;
  for (let i = 0; i <= mks_input.length - 1; i++) {
    if (mks_input.toUpperCase()[i] in mks_img_data) {
      svgcode += '<g transform="translate(' + pos + ')">' + mks_img_data[mks_input.toUpperCase()[i]] + '</g>';
      mks_img.innerHTML = svgcode + "</g></svg>";
      pos = (document.querySelector("#mks_svg").getBoundingClientRect().width + 15);
    } else if (mks_input[i] == " ") {
      pos += 90;
    }
  }
  document.querySelector(".mks_img_dl").href = "data:image/svg+xml;base64," + btoa(mks_img.innerHTML);
  mks_img.querySelector("svg").width.baseVal.valueAsString = "50vw";
})
