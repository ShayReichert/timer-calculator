let timeCalculationTimeout;
let minutesConversionTimeout;
let totalAddedMinutes = 0;

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

// Fonction pour additionner plusieurs valeurs en minutes
function addMinutes() {
  const additionalMinutes = parseInt(document.getElementById("additionalMinutes").value, 10);

  if (!isNaN(additionalMinutes)) {
    totalAddedMinutes += additionalMinutes;

    const li = document.createElement("li");
    li.textContent = `${additionalMinutes} minutes ajoutées`;
    document.getElementById("minutesList").appendChild(li);

    displayTotalAddedMinutes();

    document.getElementById("additionalMinutes").value = "";
  }
}

// Fonction pour afficher le total des minutes ajoutées en heures et minutes
function displayTotalAddedMinutes() {
  const hours = Math.floor(totalAddedMinutes / 60);
  const minutes = totalAddedMinutes % 60;

  document.getElementById("totalAddedMinutesResult").textContent = `Total : ${hours}h ${minutes}min (${totalAddedMinutes} minutes)`;
}

// Fonction pour réinitialiser les champs et les résultats
function resetFields() {
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("additionalMinutes").value = "";
  document.getElementById("minutesList").innerHTML = "";

  document.getElementById("resultat").textContent = "";
  document.getElementById("totalMinutes").textContent = "";
  document.getElementById("conversionResultat").textContent = "";
  document.getElementById("workDaysResultat").textContent = "";
  document.getElementById("totalAddedMinutesResult").textContent = "";

  totalAddedMinutes = 0;
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

// Ajout d'un écouteur d'événement pour additionner les minutes
document.getElementById("addMinutesButton").addEventListener("click", addMinutes);

// Vider le champ quand on clique dedans
document.getElementById("additionalMinutes").addEventListener("focus", function () {
  document.getElementById("additionalMinutes").value = "";
});
