const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
  const x = e.pageX;
  const y = e.pageY;
  h.style.transform = `
        perspective(20000px)
        rotateX(${y}deg)
        rotateZ(${-x}deg)
        translateZ(-9vw)
    `;
};

b.addEventListener("pointermove", base);
