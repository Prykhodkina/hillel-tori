`use strict`




const select = document.getElementById("filter");
const cards = document.querySelectorAll(".card");

select.addEventListener("change", function () {
    const selectedCategory = select.value;

    cards.forEach(card => {
        const cardCategory = card.getAttribute(`data-category`);

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.classList.remove(`hidden`);
        } else {
            card.classList.add(`hidden`);
        }
    });
});
