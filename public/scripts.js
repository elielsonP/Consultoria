document.addEventListener('DOMContentLoaded', function() {  
    const formulario = document.getElementById('formulario');

    form.onsubmit = function(event) {
        event.preventDefault();
        alert('Formulário enviado com sucesso!'); 
        form.submit();
        form.reset();
    };
    

