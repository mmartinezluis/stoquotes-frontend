// const modal = document.getElementById("modal-box");
// Load the message in modal box, hide the modal box, then show it for 3 seconds
export function showModal(message, statusCode = 1) {
  destroyModal("modal-box");
  const d = document.createElement("div");
  d.className = "text-center";
  d.innerHTML = message;
  createModal("modal-box", [d], statusCode);
  setTimeout(() => {
    console.log("HELLO");
    destroyModal("modal-box");
  }, 3000);
}

function createModal(portalId, children, statusCode) {
  const portal = document.createElement("aside");
  portal.id = portalId;
  portal.className = "modal-portal-cover";
  const portalArea = document.createElement("div");
  portalArea.className = "modal-portal-area";
  portalArea.style = "border: solid 2px " + status[statusCode];
  portal.appendChild(portalArea);
  for (let child of children) {
    portalArea.appendChild(child);
  }
  document.body.appendChild(portal);
}

function destroyModal(portalId) {
  document.getElementById(portalId)?.remove();
}

const status = {
  1: "green", // success
  2: "red", // error, invalid input
  3: "gray", //not found
};
