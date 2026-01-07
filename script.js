// On va récupérer le contenu depuis contenu.json
fetch('contenu.json')
  .then(response => response.json())
  .then(data => {
    const today = new Date();
    // On prend le jour du mois comme index (0 = jour 1)
    const dayIndex = (today.getDate() - 1) % data.length;
    const jour = data[dayIndex];

    document.getElementById('message').textContent = jour.message;
    document.getElementById('rituel').textContent = jour.rituel;
    document.getElementById('tirage').textContent = jour.tirage;
    document.getElementById('question').textContent = jour.question;
    
    // lien discret
    const lien = document.querySelector('.lien');
    lien.href = jour.lien_discret;
  })
  .catch(error => {
    console.error('Erreur chargement contenu:', error);
    document.getElementById('message').textContent = "Impossible de charger le contenu pour le moment.";
  });
