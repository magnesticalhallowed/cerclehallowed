// Récupérer le contenu du jour
fetch('contenu.json')
  .then(res => res.json())
  .then(data => {
    const today = new Date();
    const dayIndex = (today.getDate() - 1) % data.length;
    const jour = data[dayIndex];

    document.getElementById('message').textContent = jour.message;
    document.getElementById('rituel').textContent = jour.rituel;
    document.getElementById('question').textContent = jour.question;
    document.querySelector('.lien').href = jour.lien_discret;

    // Tirage interactif
    const cartes = document.querySelectorAll('.carte');
    const resultat = document.getElementById('tirage-resultat');

    cartes.forEach(carte => {
      carte.addEventListener('click', () => {
        const index = carte.dataset.index;
        resultat.textContent = jour.tirages[index].texte;
        cartes.forEach(c => c.classList.remove('active'));
        carte.classList.add('active');
      });

      // Ajouter un visuel simple pour la carte
      carte.textContent = "🂠"; // dos de carte
    });
  })
  .catch(err => console.error('Erreur:', err));
