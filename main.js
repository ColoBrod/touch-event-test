const p = document.querySelector("p");
const block = document.querySelector(".block")

const handleTouchMove = (e) => {
  const element = e.target;
  if (e.touches.length > 1) return;
  const { clientX: tX, clientY: tY } = e.touches[0];
  const { x: eX, y: eY } = element.getBoundingClientRect();
  const offsetX = tX - eX;
  const offsetY = tY - eY;
  console.log(offsetX, offsetY)
  p.innerHTML = `X: ${offsetX.toFixed(0)}px, Y: ${offsetY.toFixed(0)}px`;
  // console.log(element)
  // console.log(tX, tY);
}

block.addEventListener("touchmove", handleTouchMove)