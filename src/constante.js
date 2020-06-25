const prescription = [
  {
    id: 1,
    date: '15/06/2020',
    doctor: {
      name: 'Dr Didier Raoult',
      speciality: "Disciple de l'hydroxyChloroquine",
      adress: '27 rue de la haute 13100 Marseille'
    },
    patient: 'Jean michel vapasbien',
    disease: 'COVID-19',
    treatmentDuration: '30 jours',
    renouvellable: true,
    prescription: [
      {
        drugName: 'hydroxyChloroquine',
        dosage: '3 fois par jour',
        intervall: '6h',
        instruction: 'Ca vous fera pas de mal',
        duration: '30 jours'
      },
      {
        drugName: 'hydroxyChloroquine',
        dosage: 'une cuillère, 3 fois par jour',
        intervall: '6h',
        instruction: "De toute façon vous n'êtes pas un scientifique vous pouvez pas comprendre",
        duration: '30 jours'
      },
      {
        drugName: 'hydroxyChloroquine',
        dosage: 'une piqure, 3 fois par jour',
        intervall: '6h',
        instruction: 'Faites moi confiance je fais parti des 10 meilleures Medecin au monde',
        duration: '30 jours'
      }
    ]
  },

  {
    id: 2,
    date: '01/02/2020',
    doctor: {
      name: 'Dr Sylvie Bien',
      speciality: 'Médecin généraliste',
      adress: '36 rue des bons vivants 31100 Toulouse'
    },
    patient: 'Jean michel vapasbien',
    disease: 'grippe',
    treatmentDuration: '7 jours',
    renouvellable: false,
    prescription: [
      {
        drugName: 'Paracétamol 1000 mg',
        dosage: '3 fois par jour',
        intervall: '6h',
        instruction: 'none',
        duration: '3 jours'
      },
      {
        drugName: 'sirop pour la toux',
        dosage: 'une cuillère, 3 fois par jour',
        intervall: '6h',
        instruction: 'pendant les repas',
        duration: '7 jours'
      }
    ]
  },
  {
    id: 3,
    date: '22/11/2019',
    doctor: {
      name: 'Dr Claire Voyance',
      speciality: 'Psychiatre',
      adress: '36 rue du soleil radieux 31100 Toulouse'
    },
    patient: 'Jean michel vapasbien',
    disease: 'depression',
    treatmentDuration: '30 jours',
    renouvellable: true,
    prescription: [
      {
        drugName: 'Anxio diminutor',
        dosage: '1 fois par jour',
        intervall: '24',
        instruction: 'au petit déjeuner',
        duration: '30 jours'
      },
      {
        drugName: 'Sourire intense',
        dosage: '2 fois par jour',
        intervall: '12h',
        instruction: '1 le matin, 1 le soir pendant les repas',
        duration: '30 jours'
      },
      {
        drugName: 'Bonne nuit les petits',
        dosage: '1 fois par jour',
        intervall: '24h',
        instruction: '1 fois le soir avant de dormir',
        duration: '30 jours'
      }
    ]
  }
];

const pharmacy = [
  {
    name: 'Pharmacie Lafayette Tolosane',
    adress: '20 Avenue Tolosane',
    distance: '500m'
  },
  {
    name: 'Pharmacie des Facs',
    adress: '84 route de Narbonne',
    distance: '800m'
  },
  {
    name: 'Pharmacie des Cotaux',
    adress: '2 rue des palmiers',
    distance: '1.2km'
  },
  {
    name: 'Pharmacie du Férétra',
    adress: '2 impasse du Feretra',
    distance: '2km'
  }
];

export default { prescription, medecin, pharmacy };
