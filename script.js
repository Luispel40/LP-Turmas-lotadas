const accordionTitles = document.querySelectorAll(".accordion-title");

const openThis = ({ target }) => {
    const text = target.parentElement.querySelector("p");
    if (text.style.top !== "0px") {
        text.style.top = text.style.top = "0";
        target.style.background = "#ccc"
    } else {
        text.style.top = `${text.scrollHeight + 20}px`;
        target.style.background = "#fff"
    }
};

const iconSwipeOnClick = ({ target }) => {
    const icon = target.parentElement.querySelector("i");
    if (icon.classList.contains("fa-plus")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    } else {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    }
}

accordionTitles.forEach((title) => {
    title.addEventListener("click", openThis);
    title.addEventListener("click", iconSwipeOnClick);
});