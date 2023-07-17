
const toastify = document.querySelector('#toastify')

toastify.addEventListener("click", ()=>{
    Toastify({
        text: "Gracias por suscribirte!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #e56820, #f55442)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

