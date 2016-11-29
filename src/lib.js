export function createColor() {
  const setNumber =  function() {
    return Math.round(Math.random() * (255 - 0));
  }

  return {
    r: setNumber(),
    g: setNumber(),
    b: setNumber()
  }
}

function rgbToHex(r, g, b) {

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const colors = [];

for (let i = 0; i < 5; i++) {

  const setColor = {
    r: createColor().r,
    g: createColor().g,
    b: createColor().b,
  }

   const color = {
     rgb: setColor.r + ',' + setColor.g + ',' + setColor.b,
     hex: '#' + rgbToHex(setColor.r, setColor.g, setColor.b)
   }

   colors.push(color);
}
