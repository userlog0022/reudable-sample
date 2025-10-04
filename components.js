// components.js

// Reusable Button
export function createButton(label, variant = "primary", onClick) {
    const btn = document.createElement("button");
    btn.className = `btn btn-${variant} m-2`;
    btn.textContent = label;
    if (onClick) btn.addEventListener("click", onClick);
    return btn;
}

// Reusable Card
export function createCard(title, bodyText, footerText) {
    const card = document.createElement("div");
    card.className = "card m-3";
    card.style.width = "18rem";

    card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${bodyText}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">${footerText}</div>
  `;
    return card;
}

// Reusable Modal
export function createModal(id, title, bodyText) {
    const modalHTML = `
    <div class="modal fade" id="${id}" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">${bodyText}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    return new bootstrap.Modal(document.getElementById(id));
}
