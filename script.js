let timeCalculationTimeout;
let minutesConversionTimeout;

// Fonction pour calculer le temps écoulé entre deux horaires
function calculerTemps() {
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  if (startTime && endTime) {
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    const difference = end - start;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const totalMinutes = Math.floor(difference / (1000 * 60));

    document.getElementById("resultat").textContent = `${hours}h ${minutes}min`;
    document.getElementById("totalMinutes").textContent = `Temps total : ${totalMinutes} minutes`;
  } else {
    document.getElementById("resultat").textContent = "";
    document.getElementById("totalMinutes").textContent = "";
  }
}

// Fonction pour convertir les minutes en heures et jours travaillés
function convertirMinutes() {
  const minutes = parseInt(document.getElementById("minutes").value, 10);

  if (!isNaN(minutes)) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    // Conversion en jours de travail (7 heures par jour)
    const hoursInWorkDay = 7;
    const workDays = Math.floor(hours / hoursInWorkDay);
    const remainingHoursForWorkDay = hours % hoursInWorkDay;

    document.getElementById("conversionResultat").textContent = `${hours}h ${remainingMinutes}min`;
    document.getElementById("workDaysResultat").textContent = `${workDays} jour(s) et ${remainingHoursForWorkDay}h`;
  } else {
    document.getElementById("conversionResultat").textContent = "";
    document.getElementById("workDaysResultat").textContent = "";
  }
}

// Déclenchement automatique avec une latence lors de la modification des heures
document.getElementById("startTime").addEventListener("input", () => {
  clearTimeout(timeCalculationTimeout);
  timeCalculationTimeout = setTimeout(calculerTemps, 500);
});

document.getElementById("endTime").addEventListener("input", () => {
  clearTimeout(timeCalculationTimeout);
  timeCalculationTimeout = setTimeout(calculerTemps, 500);
});

// Déclenchement automatique avec une latence lors de la modification des minutes
document.getElementById("minutes").addEventListener("input", () => {
  clearTimeout(minutesConversionTimeout);
  minutesConversionTimeout = setTimeout(convertirMinutes, 500);
});
