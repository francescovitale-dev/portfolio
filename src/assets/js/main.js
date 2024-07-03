import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import emailJsKey from './data';
import '../styles/styles.css'

document.addEventListener('DOMContentLoaded', function () {
  // Delay AOS initialization by 100 milliseconds
  setTimeout(function() {
    AOS.init();
  }, 100);
});

(function() {
  emailjs.init(emailJsKey);
})();

// Gestione del tema dark mode / light mode
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtonLarge = document.getElementById('toggle-theme');
  const toggleButtonMobile = document.getElementById('toggle-theme-mobile');
  const body = document.body;

  // Funzione per gestire il toggle del tema
  const toggleTheme = () => {
      if (body.classList.contains('light-theme')) {
          body.classList.remove('light-theme');
          toggleButtonLarge.querySelector('i').classList.remove('bi-sun');
          toggleButtonLarge.querySelector('i').classList.add('bi-moon');
          toggleButtonMobile.querySelector('i').classList.remove('bi-sun');
          toggleButtonMobile.querySelector('i').classList.add('bi-moon');
          localStorage.setItem('theme', 'dark');
      } else {
          body.classList.add('light-theme');
          toggleButtonLarge.querySelector('i').classList.remove('bi-moon');
          toggleButtonLarge.querySelector('i').classList.add('bi-sun');
          toggleButtonMobile.querySelector('i').classList.remove('bi-moon');
          toggleButtonMobile.querySelector('i').classList.add('bi-sun');
          localStorage.setItem('theme', 'light');
      }
  };

  // Aggiungi gli event listener per entrambi i pulsanti
  toggleButtonLarge.addEventListener('click', toggleTheme);
  toggleButtonMobile.addEventListener('click', toggleTheme);

  // Controlla il tema salvato in localStorage al caricamento della pagina
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      body.classList.remove('light-theme');
      toggleButtonLarge.querySelector('i').classList.remove('bi-sun');
      toggleButtonLarge.querySelector('i').classList.add('bi-moon');
      toggleButtonMobile.querySelector('i').classList.remove('bi-sun');
      toggleButtonMobile.querySelector('i').classList.add('bi-moon');
  } else {
      body.classList.add('light-theme');
      toggleButtonLarge.querySelector('i').classList.remove('bi-moon');
      toggleButtonLarge.querySelector('i').classList.add('bi-sun');
      toggleButtonMobile.querySelector('i').classList.remove('bi-moon');
      toggleButtonMobile.querySelector('i').classList.add('bi-sun');
  }
});


window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

          Swal.fire({
          title: 'Sending...',
          allowOutsideClick: false,
          onBeforeOpen: () => {
              Swal.showLoading();
          }
      });
    
      // these IDs from the previous steps
      emailjs.sendForm('service_0e6fqgp', 'template_cuwcyme', this)
      .then(function() {
              Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                timer: 2000, 
                showConfirmButton: false
              });

            setTimeout(function() {
              window.location.href = window.location.href;
            }, 2000);
          })
          .catch(function() {
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong. Please try again later.',
              icon: 'error',
              timer: 3000,
              showConfirmButton: false
            });
          });
      });
    };
