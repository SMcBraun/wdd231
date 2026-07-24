document.addEventListerner("DOMCContentLoaded", () => {


    /*--------------1. Set Hidden timestamp Value-----------------*/
    const timestampInput = document.getElementById("timestamp"):
    if (timestampInput) {
        timestampInput.value = new Date().toLocaleString();
    }


    /*-------------2. Handle Modal Pop-ups-----------------*/
    const openButton = document.querySelectorAll(".open-modal");
    const openButton = document.querySelectorAll(".close-modal");



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
        button.addEventListerner("click", () => {
            button.closest("dialog").close();
        });
    });
});









  
})