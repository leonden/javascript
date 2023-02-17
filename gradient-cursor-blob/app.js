const blob = document.querySelector("#blob");

document.body.onpointermove = (e) => {
  const { clientX, clientY } = e;

  //   blob.style.left = `${clientX}px`;
  //   blob.style.top = `${clientY}px`;

  blob.style.left = "-50%";
  blob.style.top = "-50%";

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
