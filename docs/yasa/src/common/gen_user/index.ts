export const firstNames = [
  "John",
  "Jane",
  "Joe",
  "Janet",
  "Will",
  "Jack",
  "Megan",
  "Jessie",
  "Michael",
  "Mia",
  "Mason",
  "Yasa",
  "Alex",
  "Alexa",
];

export const lastNames = [
  "Doe",
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Wilson",
  "Martinez",
  "Anderson",
  "Taylor",
  "Thomas",
  "Hernandez",
];

export const getRandomUser = (id = 1) => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = Math.floor(Math.random() * 100);
  const email = `${firstName}${new Date().getFullYear() - age}@gmail.com`;

  return {
    id,
    firstName,
    lastName,
    age,
    email,
  };
};

export type User = ReturnType<typeof getRandomUser>;
