function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

    //Se declaran las const
    const regBtn = document.getElementById('regBtn');
    
    function registro() {
        //Se declaran las const
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;
        const checkbox = document.getElementById('terminos').checked;

        
        //previene continuar = campo vacio
            if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
                showAlertError();
            } else if (password1.length < 6) {
                showAlertError();
            } else if (password1 !== password2) {
                showAlertError();
            } else if (!checkbox) {
                showAlertError();
            } else {
                showAlertSuccess();
            }

          //  if (password1.length <= 6 || password2.length <= 6) {
           //     showAlertError();
          //  }
    }
    
    regBtn.addEventListener("click", function() {
        registro();
    })