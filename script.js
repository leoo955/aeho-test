// Tu peux ajouter des animations, alertes ou suivi ici si besoin
console.log("Site AEHO chargé.");
document.getElementById('generate-btn').addEventListener('click', () => {
  const url = document.getElementById('input-url').value.trim();
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = ''; // vide le conteneur

  if (!url) {
    alert('Merci de saisir un lien valide.');
    return;
  }

  // Génère le QR code dans le div
  QRCode.toCanvas(qrContainer, url, { width: 200 }, function (error) {
    if (error) {
      console.error(error);
      alert('Erreur lors de la génération du QR code.');
    }
  });
});
