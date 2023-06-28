dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
    //establecer 4 posiciones para posicionar en la pantalla
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0,
        z = 1;
    terrariumElement.onpointerdown = pointerDrag;


    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        for (i = 1; i < 14; i++) {
            if (e.srcElement != `plant${i}`)
                document.getElementById(`plant${i}`).style.zIndex = z;
        }
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.zIndex = z + 1
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag(e) {
        document.onpointerup = null;
        document.onpointermove = null;
        terrariumElement.style.zIndex = z + 2

    }
}