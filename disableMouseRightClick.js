document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  if(options.enableAlert) {
    alert(options.alertText);
  }
});

var options = {
  enableAlert: true, // Set this false to deactivate alert
  alertText: "PO KARI PO, POOO KARRRIIII POOOO" // Customize this to change alert text
}
