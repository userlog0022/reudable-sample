document.querySelectorAll(".custom-select").forEach(dropdown => {
    const button = dropdown.querySelector(".custom-select__button");
    const labelTarget = button.querySelector("[data-select-label]");
    const hiddenInput = dropdown.querySelector("[data-select-hidden]");


    // Initialize the label dynamically with first item
    const firstItem = dropdown.querySelector(".dropdown-item");
    if (firstItem) {
        labelTarget.innerHTML = firstItem.innerHTML;
        hiddenInput.value = firstItem.dataset.value ?? firstItem.textContent.trim();
        firstItem.setAttribute("aria-selected", "true");
    }


    dropdown.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();

            // Update visible label
            labelTarget.innerHTML = item.innerHTML;

            // Update hidden input value
            hiddenInput.value = item.dataset.value ?? item.textContent.trim();

            // Update aria-selected
            dropdown.querySelectorAll(".dropdown-item[aria-selected]").forEach(i => i.removeAttribute("aria-selected"));
            item.setAttribute("aria-selected", "true");

            // Close dropdown
            bootstrap.Dropdown.getInstance(button)?.hide();
        });
    });
});