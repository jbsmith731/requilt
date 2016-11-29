// Create number between 0-255 for rgb values
export function createColor() {
  const setNumber = function() {
    return Math.floor(Math.random() * (255 - 0));
  }

  return {
    r: setNumber(),
    g: setNumber(),
    b: setNumber()
  }
}

// Convert rgb values to hexidecimals
function rgbToHex(r, g, b) {

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const colors = [];

for (let i = 0; i < 5; i++) {

  const setValues = {
    r: createColor().r,
    g: createColor().g,
    b: createColor().b,
  }

   const color = {
     rgb: setValues.r + ',' + setValues.g + ',' + setValues.b,
     hex: '#' + rgbToHex(setValues.r, setValues.g, setValues.b)
   }

   colors.push(color);
}
