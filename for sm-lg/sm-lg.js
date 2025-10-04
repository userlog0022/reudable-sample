document.querySelectorAll(".custom-select").forEach(dropdown => {
    const button = dropdown.querySelector(".custom-select__button");
    const labelTarget = button.querySelector("[data-select-label]");
    const hiddenInput = dropdown.querySelector("[data-select-hidden]");

    // Initialize first item dynamically
    const firstItem = dropdown.querySelector(".dropdown-item");
    if (firstItem) {
        labelTarget.innerHTML = firstItem.innerHTML;
        hiddenInput.value = firstItem.dataset.value ?? firstItem.textContent.trim();
        firstItem.setAttribute("aria-selected", "true");
    }

    dropdown.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            labelTarget.innerHTML = item.innerHTML;
            hiddenInput.value = item.dataset.value ?? item.textContent.trim();

            dropdown.querySelectorAll(".dropdown-item[aria-selected]").forEach(i => i.removeAttribute("aria-selected"));
            item.setAttribute("aria-selected", "true");

            bootstrap.Dropdown.getInstance(button)?.hide();
        });
    });
});
