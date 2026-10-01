export function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const button = form.querySelector(".contact__submit");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const originalLabel = button.value;
        button.value = "Sending...";
        button.disabled = true;

        const data = {
            access_key: "YOUR_ACCESS_KEY_HERE",
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            subject: `Portfolio Contact from ${form.name.value}`,
            replyto: form.email.value
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                form.reset();
                button.value = "Message Sent!";
            } else {
                button.value = "Something went wrong";
            }
        } catch (error) {
            button.value = "Something went wrong";
        }

        setTimeout(() => {
            button.value = originalLabel;
            button.disabled = false;
        }, 3000);
    });
}