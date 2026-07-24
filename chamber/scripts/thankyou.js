document.addEventListener("DOMContentLoaded", () => {
    const formData = new URLSearchParams(window.location.search);
    const resultsContainer = document.getElementById("results");


    if (resultsContainer && formData.toString()) {
        resultsContainer.innerHTML = `
            <p><strong>First Name:</strong> ${formData.get("fname") || "N/A"}</p>
            <p><strong>Last Name:</strong> ${formData.get("lname") || "N/A"}</p>
            <p><strong>Organizational Title:</strong> ${formData.get("org-title") || "N/A"}</p>
            <p><strong>Email:</strong> ${formData.get("email") || "N/A"}</p>
            <p><strong>Mobile Phone:</strong> ${formData.get("phone") || "N/A"}</p>
            <p><strong>Business Name:</strong> ${formData.get("organization") || "N/A"}</p>
            <p><strong>Membership Level:</strong> ${formData.get("membership") || "N/A"}</p>
            <p><strong>Date Submitted:</strong> ${formData.get("timestamp") || "N/A"}</p>
       `;
    }

});
