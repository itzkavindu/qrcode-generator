const wrapper = document.querySelector(".wrapper"),
qrinput = wrapper.querySelector(".form input"),
genbutton = wrapper.querySelector(".form button"),
qrimg = wrapper.querySelector(".qr-code img");

genbutton.addEventListener("click", () => {
    let qrValue = qrinput.value;
    if(!qrValue) return;
    genbutton.innerText = "Generating QR Code...."
    qrimg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=170x170&data='+ qrValue;
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        genbutton.innerText = "Generate QR Code"
    });
});

qrinput.addEventListener("keyup", () => {
    if(!qrinput.value){
        wrapper.classList.remove("active")
    }
})