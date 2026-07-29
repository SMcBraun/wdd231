document.addEventListener("DOMContentLoaded", () => {


    /*--------------1. Set Hidden timestamp Value-----------------*/
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toLocaleString();
    }


    /*-------------2. Handle Modal Pop-ups-----------------*/
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButtons = document.querySelectorAll(".close-modal");



    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.showModal();
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog").close();
        });
    });
});
