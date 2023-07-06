const phrase = document.getElementById("note");
const buttonGet = document.getElementById("button-get");
const target = document.getElementById("target");
const text = document.getElementById("text");
const link = document.getElementById("link");


window.addEventListener("load", (e) => {
  phrase.classList.add("animated-note");
});

buttonGet.addEventListener("click", async (e) => {
    target.classList.remove("change-open");
    buttonGet.disabled = true;
    buttonGet.classList.add("disable");
    target.classList.add("change-close");
    const {text:note, origin } = await getNoteFrom("/api/note");
    setTimeout(e => {
        text.innerText = `"${note}"`;
        link.href = origin
        target.classList.add('change-open');
        buttonGet.classList.remove("disable");
        target.classList.remove("change-close");
        buttonGet.disabled = false;
    },2000);
});
