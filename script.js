function calculerTemps() {
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);
  const difference = end - start;

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const totalMinutes = Math.floor(difference / (1000 * 60));

  document.getElementById("resultat").textContent = `${hours}h ${minutes}min`;
  document.getElementById("totalMinutes").textContent = `Temps total : ${totalMinutes} minutes`;
}

function convertirMinutes() {
  const minutes = parseInt(document.getElementById("minutes").value, 10);

  if (!isNaN(minutes)) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    // Conversion en jours de travail (7 heures par jour)
    const hoursInWorkDay = 7;
    const workDays = Math.floor(hours / hoursInWorkDay);
    const remainingHoursForWorkDay = hours % hoursInWorkDay;

    // Afficher la conversion en heures et minutes
    document.getElementById("conversionResultat").textContent = `${hours}h ${remainingMinutes}min`;

    // Afficher la conversion en jours de travail
    document.getElementById("workDaysResultat").textContent = `${workDays} jour(s) et ${remainingHoursForWorkDay}h`;
  } else {
    document.getElementById("conversionResultat").textContent = "Veuillez entrer un nombre valide.";
    document.getElementById("workDaysResultat").textContent = "";
  }
}
