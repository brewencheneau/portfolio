// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
 
hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_seha6ax', 'template_nzabw0i', this)
    .then(function() {
      alert('Message envoyé avec succès !');
    }, function(error) {
      alert('Erreur : ' + JSON.stringify(error));
    });
});

function openPopup(imgSrc) {
  const popup = document.getElementById("certifPopup");
  const popupImg = document.getElementById("popupImg");
  popupImg.src = imgSrc;
  popup.style.display = "flex";
}

function closePopup(event) {
  const popup = document.getElementById("certifPopup");
  if (event.target.id === "certifPopup" || event.target.classList.contains("popup-close")) {
    popup.style.display = "none";
    document.getElementById("popupImg").src = "";
  }
}
function openPdfModal(pdfUrl) {
  const modal = document.getElementById("pdfModal");
  const viewer = document.getElementById("pdfViewer");
  viewer.src = pdfUrl;
  modal.style.display = "flex";
}

function closePdfModal() {
  const modal = document.getElementById("pdfModal");
  const viewer = document.getElementById("pdfViewer");
  modal.style.display = "none";
  viewer.src = ""; // vider le src pour libérer le PDF
}
