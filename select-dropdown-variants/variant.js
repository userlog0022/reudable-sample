
// document.querySelectorAll(".custom-select").forEach(dropdown => {
//     const button = dropdown.querySelector(".custom-select__button");
//     dropdown.querySelectorAll(".dropdown-item").forEach(item => {
//         item.addEventListener("click", (e) => {
//             e.preventDefault();
//             button.querySelector(".custom-select__label").textContent = item.textContent;
//         });
//     });
// });

document.querySelectorAll(".custom-select").forEach(dropdown => {
    const button = dropdown.querySelector(".custom-select__button");
    const labelTarget = button.querySelector("[data-select-label]");
    const hiddenInput = dropdown.querySelector("[data-select-hidden]");

    dropdown.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();

            // update visible label (supports HTML like icons/images)
            labelTarget.innerHTML = item.innerHTML;

            // update hidden input value
            const value = item.dataset.value ?? item.textContent.trim();
            hiddenInput.value = value;

            // update aria-selected for accessibility
            dropdown.querySelectorAll(".dropdown-item[aria-selected]")
                .forEach(i => i.removeAttribute("aria-selected"));
            item.setAttribute("aria-selected", "true");

            // close dropdown (Bootstrap)
            bootstrap.Dropdown.getInstance(button)?.hide();
        });
    });
});
