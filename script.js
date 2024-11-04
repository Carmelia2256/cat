document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    let errorMessage = "";
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
        errorMessage += "Имя должно содержать не менее 3 символов. ";
    }
    if (!email.includes("@") || !email.includes(".")) {
        errorMessage += "Введите корректный адрес электронной почты. ";
    }
    if (message.length < 10) {
        errorMessage += "Сообщение должно содержать не менее 10 символов.";
    }

    if (errorMessage) {
        document.getElementById("error-message").textContent = errorMessage;
        event.preventDefault();
    }
});
