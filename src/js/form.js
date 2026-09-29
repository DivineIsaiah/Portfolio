export function initContactForm() {
    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);

        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        window.location.href =
            `mailto:divindeveloper@gmail.com?subject=${subject}&body=${body}`;
    });
}