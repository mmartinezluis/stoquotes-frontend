// Function for converting dates
export function normalizeDate(date) {
  return new Date(date).toDateString();
}

// Used in author.js
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// create a portal cover and a portal area, and append the
// children nodes to the portal area
export function createPortal(portalId, children) {
  const portal = document.createElement("aside");
  portal.id = portalId;
  portal.className = "portal-cover";
  portal.addEventListener("click", (e) => {
    if (e.target.tagName === "ASIDE") destroyPortal(portalId);
  });
  portal.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) destroyPortal(portalId);
  });
  const portalArea = document.createElement("div");
  portalArea.className = "portal-area";
  portal.appendChild(portalArea);
  for (let child of children) {
    portalArea.appendChild(child);
  }
  document.body.appendChild(portal);
}

export function destroyPortal(portalId) {
  document.getElementById(portalId).remove();
}
