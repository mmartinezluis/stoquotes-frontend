const modal = document.getElementById("modal-box");
// Load the message in modal box, hide the modal box, then show it for 3 seconds
export function showModal(message) {
  modal.innerText = message;
  modal.className = "";
  setTimeout(() => {
    modal.className = "hidden";
  }, 5000);
}
