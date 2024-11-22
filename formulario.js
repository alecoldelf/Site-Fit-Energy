document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        // Validação de Nome
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            alert('Por favor, preencha o campo Nome.');
            nameInput.focus();
            event.preventDefault();
            return;
        }

        // Validação de Email
        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Por favor, insira um endereço de email válido.');
            emailInput.focus();
            event.preventDefault();
            return;
        }

        // Validação de Telefone
        const phoneInput = document.getElementById('phone');
        const phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (phoneInput.value && !phonePattern.test(phoneInput.value)) {
            alert('Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.');
            phoneInput.focus();
            event.preventDefault();
            return;
        }

        // Validação de Mensagem
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            alert('Por favor, preencha o campo Mensagem.');
            messageInput.focus();
            event.preventDefault();
            return;
        }
    });
});