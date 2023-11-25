const eyes = document.getElementById("eyes");
const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;

    pupils.forEach((pupil) => {
        const { left, top, width, height } =
            pupil.parentElement.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
        const distance = Math.min(
            10,
            Math.hypot(mouseX - centerX, mouseY - centerY)
        );

        pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${
            Math.sin(angle) * distance
        }px)`;
    });
});
