function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  try {
    const tinaResult = await luckyDraw('Tina');
    console.log(tinaResult);
  } catch (error) {
    console.error(error.message);
  }

  try {
    const jorgeResult = await luckyDraw('Jorge');
    console.log(jorgeResult);
  } catch (error) {
    console.error(error.message);
  }

  try {
    const julienResult = await luckyDraw('Julien');
    console.log(julienResult);
  } catch (error) {
    console.error(error.message);
  }
}

// Call the async function
getResults();
