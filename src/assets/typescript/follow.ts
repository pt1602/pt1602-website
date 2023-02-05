export default {}
document.addEventListener('mousemove', (e) => {
    const x = e.clientX, y = e.clientY;
    const circles: NodeListOf<HTMLElement> = document.querySelectorAll('.icon-circle');
    const rings: NodeListOf<HTMLElement> = document.querySelectorAll('.icon-rings');

    addTransform(circles, 80, 40);
    addTransform(rings, 60, 120);

    function addTransform(elements: NodeListOf<HTMLElement>, xAxis: number, yAxis: number) {
        elements.forEach((element) => {
            element.style.transform = `translate(${-x / xAxis}px,${-y / yAxis}px)`;
        });
    }
});



