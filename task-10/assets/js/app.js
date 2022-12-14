let cl = console.log;

const resetCopy = document.getElementById("resetCopy");
const resetPaste = document.getElementById("resetPaste");

const myCopyInput = document.getElementById("copyInput");
const myPasteInput = document.getElementById("pasteInput");
const copyBtn = document.getElementById("copyBtn");
const pasteBtn = document.getElementById("pasteBtn");

const myFunction = (eve) => {
    // cl(myCopyInput.value);
    myCopyInput.select();
    navigator.clipboard.writeText(myCopyInput.value)
}
const pasteOnClick = (eve) => {
    // cl(myPasteInput.value);
    navigator.clipboard.readText()
      .then((text) => {
            myPasteInput.value = text;
        });
  }
copyBtn.addEventListener("click", myFunction);
pasteBtn.addEventListener("click", pasteOnClick);