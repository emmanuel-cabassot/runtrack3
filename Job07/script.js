
var da = new Date(2020, 0, 1);
function jourTravail(da){
  if (da.getDate() == 1 && da.getMonth() == 0 && da.getFullYear() == 2020 ||
  da.getDate() == 13 && da.getMonth() == 3 && da.getFullYear() == 2020 ||
  da.getDate() == 1 && da.getMonth() == 4 && da.getFullYear() == 2020 ||
  da.getDate() == 8 && da.getMonth() == 4 && da.getFullYear() == 2020 ||
  da.getDate() == 21 && da.getMonth() == 4 && da.getFullYear() == 2020 ||
  da.getDate() == 1 && da.getMonth() == 5 && da.getFullYear() == 2020 ||
  da.getDate() == 14 && da.getMonth() == 6 && da.getFullYear() == 2020 ||
  da.getDate() == 15 && da.getMonth() == 7 && da.getFullYear() == 2020 ||
  da.getDate() == 11 && da.getMonth() == 10 && da.getFullYear() == 2020 ||
  da.getDate() == 25 && da.getMonth() == 11 && da.getFullYear() == 2020
      
  ) {
    console.log('le ' + da.toLocaleDateString() + ' est un jour férié!')
  }
  else if (da.getDay() == 6 || da.getDay() == 0) {
    console.log('le ' + da.toLocaleDateString() + ' est un week-end!')
  }
  else{
    console.log('le ' + da.toLocaleDateString() + ' est un jour de travail')
  }

}

jourTravail(da);

/* Mercredi 1er janvier : Jour de l’An
Lundi 13 avril : Pâques
Vendredi 1er mai : Fête du Travail
Vendredi 8 mai : Victoire des Alliés en 1945
Jeudi 21 mai : Ascension
Lundi 1er juin : Pentecôte
Mardi 14 juillet : Fête nationale
Samedi 15 août : Assomption
Dimanche 1er novembre : Toussaint
Mercredi 11 novembre : Armistice 1918
Vendredi 25 décembre : Noël */