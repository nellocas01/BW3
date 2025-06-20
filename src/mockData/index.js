// funzione che indica se l'arr principale ha contenuto, altrimenti utilizzare fallback
export const safeArray = (arr, fallback) =>
  Array.isArray(arr) && arr.length > 0 ? arr : fallback;

export const mockUser = {
  _id: 1,
  name: "Nello",
  surname: "Casolla",
  title: "Frontend Developer",
  area: "Napoli, Italia",
  bio: "Sono un 🌐 Web Developer Full Stack 🚀 appassionato di creare esperienze digitali coinvolgenti e di alta qualità.",
};

export const mockProfiles = Array.from({ length: 20 }, (_, i) => ({
  _id: `mock-profile-${i + 1}`,
  name: [
    "Aurora",
    "Luca",
    "Giulia",
    "Marco",
    "Elena",
    "Francesco",
    "Sara",
    "Davide",
    "Chiara",
    "Giorgio",
    "Valentina",
    "Matteo",
    "Laura",
    "Stefano",
    "Alessia",
    "Simone",
    "Martina",
    "Federico",
    "Alice",
    "Andrea",
  ][i],
  bio: `Bio utente ${i + 1}`,
  title: [
    "UX/UI Designer",
    "Frontend Developer",
    "Backend Developer",
    "Product Manager",
    "QA Engineer",
    "Marketing Specialist",
    "DevOps Engineer",
    "Scrum Master",
    "iOS Developer",
    "Android Developer",
  ][i % 10],
}));

export const mockExperiences = Array.from({ length: 20 }, (_, i) => ({
  _id: `mock-exp-${i + 1}`,
  role: ["CTO", "Developer", "Team Lead", "Designer", "Manager", "Engineer"][
    i % 6
  ],
  company: `Company ${i + 1}`,
  startDate: `201${i % 10}-01-01`,
  endDate: `202${i % 5}-12-31`,
  description: `Esperienza lavorativa numero ${i + 1}`,
  area: ["Milano", "Roma", "Berlino", "Londra", "Parigi"][i % 5],
  username: `utente${i + 1}`,
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
  updatedAt: new Date(Date.now() - i * 43200000).toISOString(),
  __v: 0,
}));

export const mockPosts = Array.from({ length: 20 }, (_, i) => ({
  _id: `mock-post-${i + 1}`,
  text: `Questo è il contenuto del post numero ${i + 1}.`,
  username: `utente${i + 1}`,
  job: `Web developer${i + 1}`,
  createdAt: new Date(Date.now() - i * 100000000).toISOString(),
  updatedAt: new Date(Date.now() - i * 50000000).toISOString(),
  __v: 0,
}));

export const mockComments = Array.from({ length: 20 }, (_, i) => ({
  comment: `Commento fittizio numero ${i + 1}`,
  rate: `${(i % 5) + 1}`, // valori da 1 a 5
  postId: `mock-post-${(i % 10) + 1}`,
}));
