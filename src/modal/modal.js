// const modal = document.getElementById("modal-box");
// Load the message in modal box, hide the modal box, then show it for 3 seconds
export function showModal(message) {
  destroyModal("modal-box");
  const d = document.createElement("div");
  d.className = "text-center";
  d.innerHTML = message;
  createModal("modal-box", [d]);
  setTimeout(() => {
    console.log("HELLO");
    destroyModal("modal-box");
  }, 3000);
}

function createModal(portalId, children) {
  const portal = document.createElement("aside");
  portal.id = portalId;
  portal.className = "modal-portal-cover";
  const portalArea = document.createElement("div");
  portalArea.className = "modal-portal-area";
  portal.appendChild(portalArea);
  for (let child of children) {
    portalArea.appendChild(child);
  }
  document.body.appendChild(portal);
}

function destroyModal(portalId) {
  document.getElementById(portalId)?.remove();
}

// export function showModal(message) {
//   modal.innerText = message;
//   modal.className = "";
//   setTimeout(() => {
//     modal.className = "hidden";
//   }, 3000);
// }
