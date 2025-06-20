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

export const mockJobs = Array.from({ length: 20 }, (_, i) => ({
  _id: `mock-jobs-${i + 1}`,
  url: `https://remotive-jobs-${i + 1}`,
  title: `Jobs title ${i + 1}`,
  company_name: `Company Name ${i + 1}`,
  category: `category job ${i + 1}`,
  job_type: `type job ${i + 1}`,
  candidate_required_location: "USA Only",
  salary: "",
  description: `Descrizione del lavoro ${i + 1}`,
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

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomDate = () => {
  const now = Date.now();
  const offset = getRandomInt(0, 1000 * 60 * 60 * 24 * 90); // ultimi 90 giorni
  return new Date(now - offset).toISOString();
};

const generateRandomEmail = () => `utente${getRandomInt(1, 1000)}@email.com`;

export const mockComments = [];

mockPosts.forEach((post, i) => {
  const numComments = getRandomInt(0, 10 + i); // può generare da 0 a N commenti
  for (let j = 0; j < numComments; j++) {
    const date = generateRandomDate();
    mockComments.push({
      _id: `mock-comment-${i + 1}-${j + 1}`,
      comment: `Commento ${j + 1} al post "${post.text}"`,
      rate: getRandomInt(1, 5),
      elementId: post._id, // <-- collegamento corretto al post
      author: generateRandomEmail(),
      createdAt: date,
      updatedAt: date,
      __v: 0,
    });
  }
});
