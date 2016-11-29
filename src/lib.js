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

export const colors = [];

for (let i = 0; i < 5; i++) {
   const color = {
     red: createColor().r,
     green: createColor().g,
     blue: createColor().b
   }

   colors.push(color);
}
