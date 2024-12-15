import { Bike, Book, BookHeart, Clapperboard, Coins, Cpu, Disc3, Globe2, Pencil, ScrollText, Slash, TestTubeDiagonal, Users, Vote } from "lucide-react";
import { ReactElement } from "react";

export enum TagEnum {
  GEOGRAPHY = "GEOGRAPHY",
  HISTORY = "HISTORY",
  SCIENCE = "SCIENCE",
  LITERATURE = "LITERATURE",
  ART = "ART",
  MUSIC = "MUSIC",
  CINEMA = "CINEMA",
  SPORTS = "SPORTS",
  POLITICS = "POLITICS",
  ECONOMY = "ECONOMY",
  PHILOSOPHY = "PHILOSOPHY",
  TECHNOLOGY = "TECHNOLOGY",
  SOCIETY = "SOCIETY",
  RELIGION = "RELIGION"
}

export type Tag = {
  names: Record<string, string>;
  enum: TagEnum;
  color: string;
  icon: ReactElement;
}

export type Question = {
  difficulty: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  question: Record<string, string>;
  answers: Record<string, string[]>;
  correct: number;
  explanation: Record<string, string>;
  tags: string[];

  id: string;
}

export const tags: Tag[] = [
  { names: { fr: "Géographie", en: "Geography" }, color: "#3182ce", icon: <Globe2 />, enum: TagEnum.GEOGRAPHY },
  { names: { fr: "Histoire", en: "History" }, color: "#f59e0b", icon: <ScrollText />, enum: TagEnum.HISTORY },
  { names: { fr: "Science", en: "Science" }, color: "#10b981", icon: <TestTubeDiagonal />, enum: TagEnum.SCIENCE },
  { names: { fr: "Littérature", en: "Literature" }, color: "#f59e0b", icon: <Book />, enum: TagEnum.LITERATURE },
  { names: { fr: "Art", en: "Art" }, color: "#10b981", icon: <Pencil />, enum: TagEnum.ART },
  { names: { fr: "Musique", en: "Music" }, color: "#f59e0b", icon: <Disc3 />, enum: TagEnum.MUSIC },
  { names: { fr: "Cinéma", en: "Cinema" }, color: "#10b981", icon: <Clapperboard />, enum: TagEnum.CINEMA },
  { names: { fr: "Sports", en: "Sports" }, color: "#f59e0b", icon: <Bike />, enum: TagEnum.SPORTS },
  { names: { fr: "Politique", en: "Politics" }, color: "#10b981", icon: <Vote />, enum: TagEnum.POLITICS },
  { names: { fr: "Économie", en: "Economy" }, color: "#f59e0b", icon: <Coins />, enum: TagEnum.ECONOMY },
  { names: { fr: "Philosophie", en: "Philosophy" }, color: "#10b981", icon: <Slash />, enum: TagEnum.PHILOSOPHY },
  { names: { fr: "Technologie", en: "Technology" }, color: "#10b981", icon: <Cpu />, enum: TagEnum.TECHNOLOGY },
  { names: { fr: "Société", en: "Society" }, color: "#f59e0b", icon: <Users />, enum: TagEnum.SOCIETY },
  { names: { fr: "Religion", en: "Religion" }, color: "#10b981", icon: <BookHeart />, enum: TagEnum.RELIGION }
];

export const questions: Question[] = [
  {
    id: "9a18ce6d-9409-4ad3-91c1-c4a6570842e4",
    difficulty: 3,
    question: { en: "What is the capital of France?", fr: "Quelle est la capitale de la France ?" },
    answers: {
      en: ["Paris", "London", "Berlin", "Madrid"],
      fr: ["Paris", "Londres", "Berlin", "Madrid"]
    },
    correct: 0,
    explanation: {
      en: "Paris is the capital of France, known for landmarks like the Eiffel Tower.",
      fr: "Paris est la capitale de la France, connue pour des monuments comme la Tour Eiffel."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "67aa7f81-4aea-4b75-9ef6-76a09064aad9",
    difficulty: 5,
    question: { en: "Who painted the Mona Lisa?", fr: "Qui a peint la Joconde ?" },
    answers: {
      en: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
      fr: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Donatello"]
    },
    correct: 0,
    explanation: {
      en: "Leonardo da Vinci painted the Mona Lisa in the early 16th century and it is now displayed in the Louvre Museum in Paris.",
      fr: "Léonard de Vinci a peint la Joconde au début du XVIe siècle et elle est maintenant exposée au Musée du Louvre à Paris."
    },
    tags: [TagEnum.ART],
  },
  {
    id: "11b97e86-c06d-4deb-ac74-91d501a32ac8",
    difficulty: 7,
    question: { en: "What is the chemical symbol for gold?", fr: "Quel est le symbole chimique de l'or ?" },
    answers: {
      en: ["Au", "Ag", "Pb", "Fe"],
      fr: ["Au", "Ag", "Pb", "Fe"]
    },
    correct: 0,
    explanation: {
      en: "The symbol 'Au' comes from the Latin word 'aurum,' meaning gold.",
      fr: "Le symbole 'Au' vient du mot latin 'aurum,' qui signifie or."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "71702a63-0cf0-4705-b13c-b1b7384a6eaf",
    difficulty: 6,
    question: { en: "What year did World War II end?", fr: "En quelle année s'est terminée la Seconde Guerre mondiale ?" },
    answers: {
      en: ["1945", "1939", "1940", "1950"],
      fr: ["1945", "1939", "1940", "1950"]
    },
    correct: 0,
    explanation: {
      en: "World War II ended in 1945 with the surrender of Germany and Japan.",
      fr: "La Seconde Guerre mondiale s'est terminée en 1945 avec la reddition de l'Allemagne et du Japon."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "584f7e40-e9fc-4045-a673-c44405a057b8",
    difficulty: 4,
    question: { en: "Who wrote '1984'?", fr: "Qui a écrit '1984' ?" },
    answers: {
      en: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
      fr: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"]
    },
    correct: 0,
    explanation: {
      en: "'1984' was written by George Orwell and published in 1949.",
      fr: "'1984' a été écrit par George Orwell et publié en 1949."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "584f7e40-e9fc-4045-a673-c44405a057b8",
    difficulty: 8,
    question: { en: "What is the formula for the area of a circle?", fr: "Quelle est la formule de l'aire d'un cercle ?" },
    answers: {
      en: ["πr²", "2πr", "r²", "πd"],
      fr: ["πr²", "2πr", "r²", "πd"]
    },
    correct: 0,
    explanation: {
      en: "The area of a circle is calculated using the formula πr², where r is the radius.",
      fr: "L'aire d'un cercle se calcule avec la formule πr², où r est le rayon."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "7e157f52-a62f-4a88-8445-86871051b0b9",
    difficulty: 2,
    question: { en: "Who is the Greek god of the sea?", fr: "Qui est le dieu grec de la mer ?" },
    answers: {
      en: ["Poseidon", "Zeus", "Hades", "Apollo"],
      fr: ["Poséidon", "Zeus", "Hadès", "Apollon"]
    },
    correct: 0,
    explanation: {
      en: "Poseidon is the Greek god of the sea, earthquakes, and horses.",
      fr: "Poséidon est le dieu grec de la mer, des tremblements de terre et des chevaux."
    },
    tags: [TagEnum.RELIGION],
  },
  {
    id: "98c8c757-821c-4311-916a-8f7a2243ad5d",
    difficulty: 6,
    question: { en: "What is the primary programming language used for Android development?", fr: "Quel est le langage de programmation principal utilisé pour le développement Android ?" },
    answers: {
      en: ["Java", "Python", "C++", "Swift"],
      fr: ["Java", "Python", "C++", "Swift"]
    },
    correct: 0,
    explanation: {
      en: "Java has been the primary language for Android development, though Kotlin is now widely used.",
      fr: "Java a été le langage principal pour le développement Android, bien que Kotlin soit maintenant largement utilisé."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "06864069-2bd1-4266-b675-08d3b08c216a",
    difficulty: 4,
    question: { en: "Who discovered penicillin?", fr: "Qui a découvert la pénicilline ?" },
    answers: {
      en: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Edward Jenner"],
      fr: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Edward Jenner"]
    },
    correct: 0,
    explanation: {
      en: "Alexander Fleming discovered penicillin in 1928.",
      fr: "Alexander Fleming a découvert la pénicilline en 1928."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "84a70859-9286-45f2-a4cc-be93d89d49db",
    difficulty: 9,
    question: { en: "What treaty ended World War I?", fr: "Quel traité a mis fin à la Première Guerre mondiale ?" },
    answers: {
      en: ["Treaty of Versailles", "Treaty of Trianon", "Treaty of Brest-Litovsk", "Treaty of Ghent"],
      fr: ["Traité de Versailles", "Traité de Trianon", "Traité de Brest-Litovsk", "Traité de Gand"]
    },
    correct: 0,
    explanation: {
      en: "The Treaty of Versailles ended World War I and imposed reparations on Germany.",
      fr: "Le Traité de Versailles a mis fin à la Première Guerre mondiale et imposé des réparations à l'Allemagne."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "90cd551c-d9dd-4947-b848-991a703f4486",
    difficulty: 7,
    question: { en: "Who composed the 'Symphony No. 9'?", fr: "Qui a composé la 'Symphonie n° 9' ?" },
    answers: {
      en: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Pyotr Ilyich Tchaikovsky"],
      fr: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Piotr Ilitch Tchaïkovski"]
    },
    correct: 0,
    explanation: {
      en: "Ludwig van Beethoven composed the 'Symphony No. 9' in the early 19th century.",
      fr: "Ludwig van Beethoven a composé la 'Symphonie n° 9' au début du XIXe siècle."
    },
    tags: [TagEnum.MUSIC],
  },
  {
    id: "7d2587ed-70b3-4696-9ea4-7f3bf621596b",
    difficulty: 5,
    question: { en: "Who wrote 'Pride and Prejudice'?", fr: "Qui a écrit 'Orgueil et Préjugés' ?" },
    answers: {
      en: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "George Eliot"],
      fr: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "George Eliot"]
    },
    correct: 0,
    explanation: {
      en: "Jane Austen wrote 'Pride and Prejudice' and published it in 1813.",
      fr: "Jane Austen a écrit 'Orgueil et Préjugés' et l'a publié en 1813."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "41b3c8eb-a1b5-42e5-a60c-040b71e5c1d9",
    difficulty: 3,
    question: { en: "What is the chemical symbol for water?", fr: "Quel est le symbole chimique de l'eau ?" },
    answers: {
      en: ["H²O", "O2", "CO2", "H2"],
      fr: ["H²O", "O2", "CO2", "H2"]
    },
    correct: 0,
    explanation: {
      en: "The chemical symbol for water is H2O.",
      fr: "Le symbole chimique de l'eau est H2O."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "a9b2d586-4e1c-4d55-9d9b-6a1a08d9c6f0",
    difficulty: 2,
    question: { en: "What is the largest planet in our solar system?", fr: "Quelle est la plus grande planète de notre système solaire ?" },
    answers: {
      en: ["Jupiter", "Saturn", "Earth", "Mars"],
      fr: ["Jupiter", "Saturne", "Terre", "Mars"]
    },
    correct: 0,
    explanation: {
      en: "Jupiter is the largest planet in our solar system, with a diameter of about 139,820 km.",
      fr: "Jupiter est la plus grande planète de notre système solaire, avec un diamètre d'environ 139 820 km."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "f7c9e146-5185-4e4a-9b24-837b1e56c4df",
    difficulty: 4,
    question: { en: "Who discovered gravity?", fr: "Qui a découvert la gravité ?" },
    answers: {
      en: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
      fr: ["Isaac Newton", "Galilée", "Albert Einstein", "Nikola Tesla"]
    },
    correct: 0,
    explanation: {
      en: "Isaac Newton formulated the theory of gravity in the 17th century after observing an apple fall from a tree in his garden in England in 1666 (or so the story goes) and published it in his book 'Philosophiæ Naturalis Principia Mathematica' in 1687 (commonly known as the 'Principia') which is considered one of the most important scientific works ever written and is still widely read today by scientists and mathematicians.",
      fr: "Isaac Newton a formulé la théorie de la gravité au XVIIe siècle après avoir observé une pomme tomber d'un arbre dans son jardin en Angleterre en 1666 (ou du moins c'est ce que raconte l'histoire) et l'a publiée dans son livre 'Philosophiæ Naturalis Principia Mathematica' en 1687 (communément appelé le 'Principia') qui est considéré comme l'un des ouvrages scientifiques les plus importants jamais écrits et est encore largement lu aujourd'hui par les scientifiques et les mathématiciens."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "c13b62c4-e916-4c08-97f8-b6c6e2e22b43",
    difficulty: 3,
    question: { en: "Which organ pumps blood in the human body?", fr: "Quel organe pompe le sang dans le corps humain ?" },
    answers: {
      en: ["Heart", "Lungs", "Liver", "Kidneys"],
      fr: ["Cœur", "Poumons", "Foie", "Reins"]
    },
    correct: 0,
    explanation: {
      en: "The heart is responsible for pumping blood throughout the body to deliver oxygen and nutrients to cells and remove waste products like carbon dioxide and other toxins.",
      fr: "Le cœur est responsable de la circulation du sang dans tout le corps pour apporter de l'oxygène et des nutriments aux cellules et éliminer les déchets comme le dioxyde de carbone et d'autres toxines."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "d4e7a345-1e6d-49c7-a52d-909cb8e72a6e",
    difficulty: 5,
    question: { en: "Who was the first President of the United States?", fr: "Qui était le premier président des États-Unis ?" },
    answers: {
      en: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
      fr: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"]
    },
    correct: 0,
    explanation: {
      en: "George Washington served as the first President of the United States from 1789 to 1797. He is often referred to as the 'Father of His Country.' He was a Founding Father of the United States and led the Continental Army to victory over the British in the American Revolutionary War.",
      fr: "George Washington a été le premier président des États-Unis de 1789 à 1797. Il est souvent appelé le 'Père de son pays'. Il était un Père fondateur des États-Unis et a dirigé l'Armée continentale à la victoire sur les Britanniques lors de la Guerre d'indépendance américaine."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "e0f9d3a6-5f3e-4dbe-8b12-f6f497ce6b57",
    difficulty: 7,
    question: { en: "What is the speed of light in vacuum?", fr: "Quelle est la vitesse de la lumière dans le vide ?" },
    answers: {
      en: ["299,792 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"],
      fr: ["299 792 km/s", "150 000 km/s", "1 000 km/s", "3 000 km/s"]
    },
    correct: 0,
    explanation: {
      en: "The speed of light in a vacuum is approximately 299,792 kilometers per second (km/s) or about 186,282 miles per second (mi/s) which is the fastest speed at which energy or information can travel.",
      fr: "La vitesse de la lumière dans le vide est d'environ 299 792 kilomètres par seconde (km/s) ou environ 186 282 miles par seconde (mi/s) qui est la vitesse la plus rapide à laquelle l'énergie ou l'information peut voyager."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "bb7385cc-f948-492a-b38b-c9a4e9a3e021",
    difficulty: 6,
    question: { en: "Who was known as the 'Maid of Orléans'?", fr: "Qui était connue comme la 'Pucelle d'Orléans' ?" },
    answers: {
      en: ["Joan of Arc", "Marie Antoinette", "Catherine de' Medici", "Anne of Brittany"],
      fr: ["Jeanne d'Arc", "Marie-Antoinette", "Catherine de Médicis", "Anne de Bretagne"]
    },
    correct: 0,
    explanation: {
      en: "Joan of Arc, known as the 'Maid of Orléans,' led French forces during the Hundred Years' War.",
      fr: "Jeanne d'Arc, connue comme la 'Pucelle d'Orléans', a dirigé les forces françaises pendant la Guerre de Cent Ans."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "a7b2e84c-0b3f-4c3e-ae9b-d0cb3e6a5de2",
    difficulty: 8,
    question: { en: "What is the primary language spoken in Brazil?", fr: "Quelle est la langue principale parlée au Brésil ?" },
    answers: {
      en: ["Portuguese", "Spanish", "English", "French"],
      fr: ["Portugais", "Espagnol", "Anglais", "Français"]
    },
    correct: 0,
    explanation: {
      en: "Portuguese is the official and most widely spoken language in Brazil.",
      fr: "Le portugais est la langue officielle et la plus parlée au Brésil."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "f0a4b357-0bce-4c34-940c-cd9ecdc4b14e",
    difficulty: 3,
    question: { en: "What does DNA stand for?", fr: "Que signifie ADN ?" },
    answers: {
      en: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Nucleic Acid", "Deoxyribose Acid"],
      fr: ["Acide Désoxyribonucléique", "Acide Ribonucléique", "Acide Nucléique", "Acide Désoxyribose"]
    },
    correct: 0,
    explanation: {
      en: "DNA stands for Deoxyribonucleic Acid, which carries genetic information in living organisms.",
      fr: "ADN signifie Acide Désoxyribonucléique, qui porte les informations génétiques des organismes vivants."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "7e2589df-92f7-49a8-91b6-3a4c0e7a0eaf",
    difficulty: 9,
    question: { en: "Who was the author of 'The Divine Comedy'?", fr: "Qui était l'auteur de 'La Divine Comédie' ?" },
    answers: {
      en: ["Dante Alighieri", "Virgil", "Homer", "Ovid"],
      fr: ["Dante Alighieri", "Virgile", "Homère", "Ovide"]
    },
    correct: 0,
    explanation: {
      en: "Dante Alighieri wrote 'The Divine Comedy,' an epic poem from the early 14th century.",
      fr: "Dante Alighieri a écrit 'La Divine Comédie', un poème épique du début du XIVe siècle."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "db739080-77f7-42fa-895d-5a21108f0b7b",
    difficulty: 3,
    question: { 
      en: "What is the longest river in the world?", 
      fr: "Quel est le plus long fleuve du monde ?" 
    },
    answers: {
      en: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      fr: ["Nil", "Amazone", "Yangtsé", "Mississippi"]
    },
    correct: 0,
    explanation: {
      en: "The Nile River in Africa is considered the longest river, stretching approximately 6,650 kilometers.",
      fr: "Le Nil en Afrique est considéré comme le plus long fleuve, s'étendant sur environ 6 650 kilomètres."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "4ae80797-5aa9-4861-b6af-ff31d0da38d3",
    difficulty: 5,
    question: { 
      en: "What is the most abundant element in the universe?", 
      fr: "Quel est l'élément le plus abondant dans l'univers ?" 
    },
    answers: {
      en: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
      fr: ["Hydrogène", "Hélium", "Oxygène", "Carbone"]
    },
    correct: 0,
    explanation: {
      en: "Hydrogen is the most abundant element, making up about 75% of the universe's mass.",
      fr: "L'hydrogène est l'élément le plus abondant, représentant environ 75% de la masse de l'univers."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "6a136b02-0ba9-41f7-888a-0de60a2dcdf9",
    difficulty: 7,
    question: { 
      en: "In what year did the French Revolution begin?", 
      fr: "En quelle année la Révolution française a-t-elle commencé ?" 
    },
    answers: {
      en: ["1789", "1792", "1785", "1793"],
      fr: ["1789", "1792", "1785", "1793"]
    },
    correct: 0,
    explanation: {
      en: "The French Revolution began in 1789 with the storming of the Bastille on July 14th.",
      fr: "La Révolution française a commencé en 1789 avec la prise de la Bastille le 14 juillet."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "43cb941d-ed4d-4502-97b0-af878e0a309d",
    difficulty: 6,
    question: { 
      en: "Who wrote 'Don Quixote'?", 
      fr: "Qui a écrit 'Don Quichotte' ?" 
    },
    answers: {
      en: ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "Federico García Lorca"],
      fr: ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "Federico García Lorca"]
    },
    correct: 0,
    explanation: {
      en: "Miguel de Cervantes wrote 'Don Quixote', published in two parts in 1605 and 1615.",
      fr: "Miguel de Cervantes a écrit 'Don Quichotte', publié en deux parties en 1605 et 1615."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "822a48db-1850-4fba-8292-7a2118b16e43",
    difficulty: 8,
    question: { 
      en: "Who composed the 'Four Seasons'?", 
      fr: "Qui a composé 'Les Quatre Saisons' ?" 
    },
    answers: {
      en: ["Antonio Vivaldi", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "George Frideric Handel"],
      fr: ["Antonio Vivaldi", "Wolfgang Amadeus Mozart", "Jean-Sébastien Bach", "George Frideric Handel"]
    },
    correct: 0,
    explanation: {
      en: "Antonio Vivaldi composed 'The Four Seasons', a set of four violin concertos, around 1720.",
      fr: "Antonio Vivaldi a composé 'Les Quatre Saisons', un ensemble de quatre concertos pour violon, vers 1720."
    },
    tags: [TagEnum.MUSIC],
  },
  {
    id: "6361986e-cec5-499d-9695-1037b37ce3f7",
    difficulty: 4,
    question: { 
      en: "Who invented the World Wide Web?", 
      fr: "Qui a inventé le World Wide Web ?" 
    },
    answers: {
      en: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"],
      fr: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"]
    },
    correct: 0,
    explanation: {
      en: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN.",
      fr: "Tim Berners-Lee a inventé le World Wide Web en 1989 en travaillant au CERN."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "3c794770-2bb9-4e44-b1db-e4f69353e2a6",
    difficulty: 5,
    question: { 
      en: "What is the smallest unit of life?", 
      fr: "Quelle est la plus petite unité de vie ?" 
    },
    answers: {
      en: ["Cell", "Atom", "Molecule", "Virus"],
      fr: ["Cellule", "Atome", "Molécule", "Virus"]
    },
    correct: 0,
    explanation: {
      en: "The cell is considered the smallest unit of life, capable of all basic life functions.",
      fr: "La cellule est considérée comme la plus petite unité de vie, capable de toutes les fonctions vitales de base."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "65d2e83e-e111-4df1-9d1f-68a7a631ed3b",
    difficulty: 2,
    question: { 
      en: "What is the capital of Australia?", 
      fr: "Quelle est la capitale de l'Australie ?" 
    },
    answers: {
      en: ["Canberra", "Sydney", "Melbourne", "Perth"],
      fr: ["Canberra", "Sydney", "Melbourne", "Perth"]
    },
    correct: 0,
    explanation: {
      en: "Canberra is the capital of Australia, located in the Australian Capital Territory.",
      fr: "Canberra est la capitale de l'Australie, située dans le Territoire de la Capitale Australienne."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "06b73302-f372-4ca2-8992-7f0eaf0e5f45",
    difficulty: 6,
    question: { 
      en: "Who was the first woman to win a Nobel Prize?", 
      fr: "Qui a été la première femme à remporter un prix Nobel ?" 
    },
    answers: {
      en: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Mother Teresa"],
      fr: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Mère Teresa"]
    },
    correct: 0,
    explanation: {
      en: "Marie Curie was the first woman to win a Nobel Prize, in Physics in 1903.",
      fr: "Marie Curie a été la première femme à remporter un prix Nobel, en Physique en 1903."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "4d359e1a-807e-4659-a103-26ac31a68b3a",
    difficulty: 7,
    question: { 
      en: "Who wrote 'The Republic'?", 
      fr: "Qui a écrit 'La République' ?" 
    },
    answers: {
      en: ["Plato", "Aristotle", "Socrates", "Pythagoras"],
      fr: ["Platon", "Aristote", "Socrate", "Pythagore"]
    },
    correct: 0,
    explanation: {
      en: "Plato wrote 'The Republic', a foundational work of Western philosophy discussing justice and the ideal state.",
      fr: "Platon a écrit 'La République', une œuvre fondamentale de la philosophie occidentale traitant de la justice et de l'État idéal."
    },
    tags: [TagEnum.PHILOSOPHY],
  },
  {
    id: "f87cd401-c230-408a-b160-6f42f3c7af24",
    difficulty: 4,
    question: { 
      en: "What is the national sport of Japan?", 
      fr: "Quel est le sport national du Japon ?" 
    },
    answers: {
      en: ["Sumo Wrestling", "Judo", "Karate", "Baseball"],
      fr: ["Sumo", "Judo", "Karaté", "Baseball"]
    },
    correct: 0,
    explanation: {
      en: "Sumo wrestling is considered the national sport of Japan, with a rich history dating back centuries.",
      fr: "Le sumo est considéré comme le sport national du Japon, avec une histoire riche remontant à plusieurs siècles."
    },
    tags: [TagEnum.SPORTS]
  },
  {
    id: "a027ba06-df8e-4828-9c01-92e304f09065",
    difficulty: 5,
    question: { 
      en: "What is the world's largest economy?", 
      fr: "Quelle est la plus grande économie du monde ?" 
    },
    answers: {
      en: ["United States", "China", "Japan", "Germany"],
      fr: ["États-Unis", "Chine", "Japon", "Allemagne"]
    },
    correct: 0,
    explanation: {
      en: "The United States has the world's largest economy by nominal GDP, though China is a close second.",
      fr: "Les États-Unis ont la plus grande économie du monde en termes de PIB nominal, bien que la Chine soit très proche."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "a838e736-7141-4e56-900c-8ba8cccc23a1",
    difficulty: 6,
    question: { 
      en: "Who directed the film 'Pulp Fiction'?", 
      fr: "Qui a réalisé le film 'Pulp Fiction' ?" 
    },
    answers: {
      en: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Francis Ford Coppola"],
      fr: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Francis Ford Coppola"]
    },
    correct: 0,
    explanation: {
      en: "Quentin Tarantino directed 'Pulp Fiction', released in 1994 and winning the Palme d'Or at Cannes.",
      fr: "Quentin Tarantino a réalisé 'Pulp Fiction', sorti en 1994 et ayant remporté la Palme d'Or à Cannes."
    },
    tags: [TagEnum.CINEMA]
  },
  {
    id: "c6700f05-643e-4a3c-a78c-a70545a75076",
    difficulty: 3,
    question: { 
      en: "What is the most populous country in the world?", 
      fr: "Quel est le pays le plus peuplé du monde ?" 
    },
    answers: {
      en: ["India", "China", "United States", "Indonesia"],
      fr: ["Inde", "Chine", "États-Unis", "Indonésie"]
    },
    correct: 0,
    explanation: {
      en: "India recently surpassed China to become the world's most populous country, with approximately 1.428 billion people, while China has 1.426 billion. This growth is due to a younger Indian population and higher birth rates.",
      fr: "L'Inde a récemment dépassé la Chine pour devenir le pays le plus peuplé du monde, avec environ 1,428 milliard d'habitants, tandis que la Chine en compte 1,426 milliard. Cette croissance s'explique par une population indienne plus jeune et des taux de natalité plus élevés."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "f5c0f3f1-9c6a-4e0f-a8c9-1b8f9b8e4a0b",
    difficulty: 7,
    question: { 
      en: "What is the capital of Canada?", 
      fr: "Quelle est la capitale du Canada ?" 
    },
    answers: {
      en: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
      fr: ["Ottawa", "Toronto", "Vancouver", "Montréal"]
    },
    correct: 0,
    explanation: {
      en: "Ottawa is the capital of Canada, located in the province of Ontario.",
      fr: "Ottawa est la capitale du Canada, située dans la province de l'Ontario."
    },
    tags: [TagEnum.GEOGRAPHY]
  },
  {
    id: "f4f7e40-e9fc-4045-a673-c44405a057b8",
    difficulty: 8,
    question: { 
      en: "Who wrote 'War and Peace'?", 
      fr: "Qui a écrit 'Guerre et Paix' ?" 
    },
    answers: {
      en: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
      fr: ["Léon Tolstoï", "Fiodor Dostoïevski", "Anton Tchekhov", "Ivan Tourgueniev"]
    },
    correct: 0,
    explanation: {
      en: "Leo Tolstoy wrote 'War and Peace', an epic novel published in 1869.",
      fr: "Léon Tolstoï a écrit 'Guerre et Paix', un roman épique publié en 1869."
    },
    tags: [TagEnum.LITERATURE]
  },
  {
    id: "e928ab9e-1a14-4e7a-b730-f07a9d94dc28",
    difficulty: 3,
    question: { en: "What is the capital of Italy?", fr: "Quelle est la capitale de l'Italie ?" },
    answers: {
      en: ["Rome", "Milan", "Venice", "Florence"],
      fr: ["Rome", "Milan", "Venise", "Florence"]
    },
    correct: 0,
    explanation: {
      en: "Rome is the capital and largest city of Italy, known for its rich history.",
      fr: "Rome est la capitale et la plus grande ville d'Italie, connue pour sa riche histoire."
    },
    tags: [TagEnum.GEOGRAPHY],
  },

  {
    id: "6da86804-4eeb-4253-b05b-37559421b013",
    difficulty: 7,
    question: { en: "Who wrote 'Thus Spoke Zarathustra'?", fr: "Qui a écrit 'Ainsi parlait Zarathoustra' ?" },
    answers: {
      en: ["Friedrich Nietzsche", "Immanuel Kant", "Arthur Schopenhauer", "Georg Wilhelm Friedrich Hegel"],
      fr: ["Friedrich Nietzsche", "Immanuel Kant", "Arthur Schopenhauer", "Georg Wilhelm Friedrich Hegel"]
    },
    correct: 0,
    explanation: {
      en: "'Thus Spoke Zarathustra' was written by Friedrich Nietzsche between 1883 and 1885.",
      fr: "'Ainsi parlait Zarathoustra' a été écrit par Friedrich Nietzsche entre 1883 et 1885."
    },
    tags: [TagEnum.PHILOSOPHY],
  },

  {
    id: "d7f7c13e-c3ba-4bb6-8176-023554d1d1c3",
    difficulty: 5,
    question: { en: "Who was the first female Prime Minister of the United Kingdom?", fr: "Qui a été la première femme Premier ministre du Royaume-Uni ?" },
    answers: {
      en: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Elizabeth II"],
      fr: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Elizabeth II"]
    },
    correct: 0,
    explanation: {
      en: "Margaret Thatcher served as the UK's first female Prime Minister from 1979 to 1990.",
      fr: "Margaret Thatcher a été la première femme Premier ministre du Royaume-Uni, de 1979 à 1990."
    },
    tags: [TagEnum.POLITICS],
  },

  {
    id: "3a83f830-494e-4e95-bc3b-7cd6d2842e47",
    difficulty: 2,
    question: { en: "What is the largest mammal on Earth?", fr: "Quel est le plus grand mammifère sur Terre ?" },
    answers: {
      en: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
      fr: ["Baleine bleue", "Éléphant d'Afrique", "Girafe", "Hippopotame"]
    },
    correct: 0,
    explanation: {
      en: "The Blue Whale is the largest mammal on Earth.",
      fr: "La baleine bleue est le plus grand mammifère sur Terre."
    },
    tags: [TagEnum.SCIENCE],
  },

  {
    id: "041775f5-cf31-44f2-912d-5c0d1567c041",
    difficulty: 4,
    question: { en: "Which religion is the Bhagavad Gita associated with?", fr: "À quelle religion est associée la Bhagavad Gita ?" },
    answers: {
      en: ["Hinduism", "Buddhism", "Christianity", "Islam"],
      fr: ["L'hindouisme", "Le bouddhisme", "Le christianisme", "L'islam"]
    },
    correct: 0,
    explanation: {
      en: "The Bhagavad Gita is a sacred Hindu scripture.",
      fr: "La Bhagavad Gita est un écrit sacré de la religion hindoue."
    },
    tags: [TagEnum.RELIGION],
  },

  {
    id: "16f3d1d4-7ea7-4c73-b2ae-4c76623d3b65",
    difficulty: 6,
    question: { en: "Who is known as the father of the computer?", fr: "Qui est considéré comme le père de l'ordinateur ?" },
    answers: {
      en: ["Charles Babbage", "Alan Turing", "John von Neumann", "Konrad Zuse"],
      fr: ["Charles Babbage", "Alan Turing", "John von Neumann", "Konrad Zuse"]
    },
    correct: 0,
    explanation: {
      en: "Charles Babbage is often regarded as the father of the computer due to his conceptual designs.",
      fr: "Charles Babbage est souvent considéré comme le père de l'ordinateur grâce à ses concepts et designs novateurs."
    },
    tags: [TagEnum.TECHNOLOGY],
  },

  {
    id: "fd80b8a0-4d3b-43f4-bf8f-af62755f921b",
    difficulty: 3,
    question: { en: "Who wrote 'Les Misérables'?", fr: "Qui a écrit 'Les Misérables' ?" },
    answers: {
      en: ["Victor Hugo", "Honoré de Balzac", "Gustave Flaubert", "Émile Zola"],
      fr: ["Victor Hugo", "Honoré de Balzac", "Gustave Flaubert", "Émile Zola"]
    },
    correct: 0,
    explanation: {
      en: "'Les Misérables' was written by Victor Hugo and published in 1862.",
      fr: "'Les Misérables' a été écrit par Victor Hugo et publié en 1862."
    },
    tags: [TagEnum.LITERATURE],
  },

  {
    id: "ff59c5da-3d57-4fe0-9524-bc0e1586f60f",
    difficulty: 5,
    question: { en: "Who directed 'The Godfather'?", fr: "Qui a réalisé 'Le Parrain' ?" },
    answers: {
      en: ["Francis Ford Coppola", "Steven Spielberg", "Stanley Kubrick", "Francis Veber"],
      fr: ["Francis Ford Coppola", "Steven Spielberg", "Stanley Kubrick", "Francis Veber"]
    },
    correct: 0,
    explanation: {
      en: "Francis Ford Coppola directed 'The Godfather', released in 1972.",
      fr: "Francis Ford Coppola a réalisé 'Le Parrain', sorti en 1972."
    },
    tags: [TagEnum.CINEMA],
  },

  {
    id: "3bc1a886-f894-4d25-a3ff-9710f4581cdb",
    difficulty: 5,
    question: { en: "Who composed 'Rhapsody in Blue'?", fr: "Qui a composé 'Rhapsody in Blue' ?" },
    answers: {
      en: ["George Gershwin", "Aaron Copland", "Leonard Bernstein", "Duke Ellington"],
      fr: ["George Gershwin", "Aaron Copland", "Leonard Bernstein", "Duke Ellington"]
    },
    correct: 0,
    explanation: {
      en: "'Rhapsody in Blue' was composed by George Gershwin and premiered in 1924.",
      fr: "'Rhapsody in Blue' a été composée par George Gershwin et créée en 1924."
    },
    tags: [TagEnum.MUSIC],
  },

  {
    id: "1f7aaafe-9eff-427c-bda9-84d7cc92a084",
    difficulty: 4,
    question: { en: "Which country has won the most FIFA World Cup titles?", fr: "Quel pays a remporté le plus de titres de Coupe du Monde de la FIFA ?" },
    answers: {
      en: ["Brazil", "Germany", "Italy", "Argentina"],
      fr: ["Brésil", "Allemagne", "Italie", "Argentine"]
    },
    correct: 0,
    explanation: {
      en: "Brazil has won the most FIFA World Cup titles.",
      fr: "Le Brésil a remporté le plus de titres de Coupe du Monde de la FIFA."
    },
    tags: [TagEnum.SPORTS],
  },

  {
    id: "fa439ec2-8bc8-47b1-9907-3112753b393f",
    difficulty: 6,
    question: { en: "In what year did the Berlin Wall fall?", fr: "En quelle année le mur de Berlin est-il tombé ?" },
    answers: {
      en: ["1989", "1990", "1987", "1991"],
      fr: ["1989", "1990", "1987", "1991"]
    },
    correct: 0,
    explanation: {
      en: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War era.",
      fr: "Le mur de Berlin est tombé en 1989, symbolisant la fin de la Guerre froide."
    },
    tags: [TagEnum.HISTORY],
  },

  {
    id: "c0cd823d-4809-440e-a185-1c4dd8d3dad6",
    difficulty: 7,
    question: { 
      en: "Which document outlines the fundamental human rights adopted by the UN in 1948?", 
      fr: "Quel document énonce les droits de l'homme fondamentaux adoptés par l'ONU en 1948 ?" 
    },
    answers: {
      en: ["Universal Declaration of Human Rights", "Geneva Conventions", "Magna Carta", "Bill of Rights"],
      fr: ["Déclaration universelle des droits de l'homme", "Conventions de Genève", "Magna Carta", "Bill of Rights"]
    },
    correct: 0,
    explanation: {
      en: "The Universal Declaration of Human Rights was adopted by the UN General Assembly in 1948.",
      fr: "La Déclaration universelle des droits de l'homme a été adoptée par l'Assemblée générale de l'ONU en 1948."
    },
    tags: [TagEnum.SOCIETY],
  },

  {
    id: "f61b3241-cce8-4f5c-8c71-fc31b09c1845",
    difficulty: 2,
    question: { en: "What is the currency of Japan?", fr: "Quelle est la monnaie du Japon ?" },
    answers: {
      en: ["Yen", "Dollar", "Euro", "Won"],
      fr: ["Yen", "Dollar", "Euro", "Won"]
    },
    correct: 0,
    explanation: {
      en: "The official currency of Japan is the Yen.",
      fr: "La monnaie officielle du Japon est le Yen."
    },
    tags: [TagEnum.ECONOMY],
  },

  {
    id: "0fc5e803-9c4f-4f7d-9e84-680d299be508",
    difficulty: 6,
    question: { en: "Which painter is famous for 'The Persistence of Memory'?", fr: "Quel peintre est célèbre pour 'La Persistance de la mémoire' ?" },
    answers: {
      en: ["Salvador Dalí", "Pablo Picasso", "Claude Monet", "Andy Warhol"],
      fr: ["Salvador Dalí", "Pablo Picasso", "Claude Monet", "Andy Warhol"]
    },
    correct: 0,
    explanation: {
      en: "'The Persistence of Memory' is a painting by Salvador Dalí, completed in 1931.",
      fr: "'La Persistance de la mémoire' est un tableau de Salvador Dalí, réalisé en 1931."
    },
    tags: [TagEnum.ART],
  },

  {
    id: "4c701f46-d363-4dc1-935a-0f14b98e07df",
    difficulty: 1,
    question: { en: "On which continent is the Sahara Desert located?", fr: "Sur quel continent se trouve le désert du Sahara ?" },
    answers: {
      en: ["Africa", "Asia", "South America", "Australia"],
      fr: ["Afrique", "Asie", "Amérique du Sud", "Australie"]
    },
    correct: 0,
    explanation: {
      en: "The Sahara Desert is located in North Africa.",
      fr: "Le désert du Sahara se situe en Afrique du Nord."
    },
    tags: [TagEnum.GEOGRAPHY],
  },

  {
    id: "5e6db2c6-ebb2-4cb7-9a5b-37f39f862e86",
    difficulty: 8,
    question: { en: "Which philosopher wrote 'Critique of Pure Reason'?", fr: "Quel philosophe a écrit la 'Critique de la raison pure' ?" },
    answers: {
      en: ["Immanuel Kant", "René Descartes", "John Locke", "David Hume"],
      fr: ["Immanuel Kant", "René Descartes", "John Locke", "David Hume"]
    },
    correct: 0,
    explanation: {
      en: "Immanuel Kant wrote 'Critique of Pure Reason', first published in 1781.",
      fr: "Immanuel Kant a écrit la 'Critique de la raison pure', publiée pour la première fois en 1781."
    },
    tags: [TagEnum.PHILOSOPHY],
  },

  {
    id: "b0d02f11-a8fb-4890-8519-507d69bdf4ed",
    difficulty: 3,
    question: { en: "What gas do plants primarily absorb for photosynthesis?", fr: "Quel gaz les plantes absorbent-elles principalement pour la photosynthèse ?" },
    answers: {
      en: ["Carbon dioxide (CO2)", "Oxygen (O2)", "Nitrogen (N2)", "Argon (Ar)"],
      fr: ["Dioxyde de carbone (CO2)", "Oxygène (O2)", "Azote (N2)", "Argon (Ar)"]
    },
    correct: 0,
    explanation: {
      en: "Plants mainly absorb carbon dioxide (CO2) during photosynthesis.",
      fr: "Les plantes absorbent principalement le dioxyde de carbone (CO2) lors de la photosynthèse."
    },
    tags: [TagEnum.SCIENCE],
  },

  {
    id: "922da7a9-722c-495c-aa54-acaad7df0b08",
    difficulty: 5,
    question: { en: "What does 'HTTP' stand for?", fr: "Que signifie 'HTTP' ?" },
    answers: {
      en: ["HyperText Transfer Protocol", "HyperText Transmission Process", "Hyperlink Text Transfer Program", "HighTech Transfer Protocol"],
      fr: ["HyperText Transfer Protocol", "HyperText Transmission Process", "Hyperlink Text Transfer Program", "HighTech Transfer Protocol"]
    },
    correct: 0,
    explanation: {
      en: "HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the web.",
      fr: "HTTP signifie HyperText Transfer Protocol, le protocole fondamental pour la communication de données sur le Web."
    },
    tags: [TagEnum.TECHNOLOGY],
  },

  {
    id: "6bfcff41-1311-4f8d-b48e-a3a68c0716f6",
    difficulty: 8,
    question: { en: "Who wrote 'The Canterbury Tales'?", fr: "Qui a écrit 'Les Contes de Canterbury' ?" },
    answers: {
      en: ["Geoffrey Chaucer", "William Shakespeare", "Christopher Marlowe", "Thomas More"],
      fr: ["Geoffrey Chaucer", "William Shakespeare", "Christopher Marlowe", "Thomas More"]
    },
    correct: 0,
    explanation: {
      en: "'The Canterbury Tales' were written by Geoffrey Chaucer at the end of the 14th century.",
      fr: "'Les Contes de Canterbury' ont été écrits par Geoffrey Chaucer à la fin du XIVe siècle."
    },
    tags: [TagEnum.LITERATURE],
  },

  {
    id: "f121a324-5829-4df2-b9a7-bdc0225f2b46",
    difficulty: 1,
    question: { 
      en: "Which major religion follows the teachings of the Prophet Muhammad?", 
      fr: "Quelle religion majeure suit les enseignements du Prophète Mahomet ?" 
    },
    answers: {
      en: ["Islam", "Christianity", "Buddhism", "Judaism"],
      fr: ["L'islam", "Le christianisme", "Le bouddhisme", "Le judaïsme"]
    },
    correct: 0,
    explanation: {
      en: "Islam is based on the teachings of the Prophet Muhammad.",
      fr: "L'islam est fondé sur les enseignements du Prophète Mahomet."
    },
    tags: [TagEnum.RELIGION],
  },
  {
    id: "3e3b2e3b-dc45-420c-b9fa-19e0889fc6a7",
    difficulty: 2,
    question: { en: "What is the capital of Argentina?", fr: "Quelle est la capitale de l'Argentine ?" },
    answers: {
      en: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
      fr: ["Buenos Aires", "Lima", "Bogotá", "Santiago"]
    },
    correct: 0,
    explanation: {
      en: "Buenos Aires is the capital and largest city of Argentina.",
      fr: "Buenos Aires est la capitale et la plus grande ville d'Argentine."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "fdf50382-6344-40d3-9b33-d58f5a48df5f",
    difficulty: 5,
    question: { en: "Who discovered the law of universal gravitation?", fr: "Qui a découvert la loi de la gravitation universelle ?" },
    answers: {
      en: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Albert Einstein"],
      fr: ["Isaac Newton", "Galilée", "Johannes Kepler", "Albert Einstein"]
    },
    correct: 0,
    explanation: {
      en: "Isaac Newton formulated the law of universal gravitation in the late 17th century.",
      fr: "Isaac Newton a formulé la loi de la gravitation universelle à la fin du XVIIe siècle."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "522a98b4-87f3-49b5-b5c4-c55acac97a60",
    difficulty: 7,
    question: { en: "Who wrote 'The Count of Monte Cristo'?", fr: "Qui a écrit 'Le Comte de Monte-Cristo' ?" },
    answers: {
      en: ["Alexandre Dumas", "Victor Hugo", "Honoré de Balzac", "Émile Zola"],
      fr: ["Alexandre Dumas", "Victor Hugo", "Honoré de Balzac", "Émile Zola"]
    },
    correct: 0,
    explanation: {
      en: "'The Count of Monte Cristo' was written by Alexandre Dumas and published in 1844-1845.",
      fr: "'Le Comte de Monte-Cristo' a été écrit par Alexandre Dumas et publié en 1844-1845."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "e06b83dc-0286-49a5-b131-049952ed4a63",
    difficulty: 3,
    question: { en: "Which element has the chemical symbol 'Na'?", fr: "Quel élément a pour symbole chimique 'Na' ?" },
    answers: {
      en: ["Sodium", "Nitrogen", "Neon", "Nickel"],
      fr: ["Sodium", "Azote", "Néon", "Nickel"]
    },
    correct: 0,
    explanation: {
      en: "Na is the chemical symbol for Sodium.",
      fr: "Na est le symbole chimique du sodium."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "1e573c60-1ee6-41d9-9edc-9d3ca662dd90",
    difficulty: 4,
    question: { en: "In which city was the famous Colosseum built?", fr: "Dans quelle ville a été construit le célèbre Colisée ?" },
    answers: {
      en: ["Rome", "Athens", "Carthage", "Alexandria"],
      fr: ["Rome", "Athènes", "Carthage", "Alexandrie"]
    },
    correct: 0,
    explanation: {
      en: "The Colosseum is located in Rome, Italy.",
      fr: "Le Colisée se trouve à Rome, en Italie."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "d5c8d4c2-e9f7-47ca-b25b-7211a75ba723",
    difficulty: 6,
    question: { en: "Who painted 'Guernica'?", fr: "Qui a peint 'Guernica' ?" },
    answers: {
      en: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Vincent van Gogh"],
      fr: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Vincent van Gogh"]
    },
    correct: 0,
    explanation: {
      en: "'Guernica' was painted by Pablo Picasso in 1937.",
      fr: "'Guernica' a été peint par Pablo Picasso en 1937."
    },
    tags: [TagEnum.ART],
  },
  {
    id: "54a10ab3-bdc0-49a2-9656-23caa764e3fb",
    difficulty: 8,
    question: { en: "Who composed the opera 'Carmen'?", fr: "Qui a composé l'opéra 'Carmen' ?" },
    answers: {
      en: ["Georges Bizet", "Giuseppe Verdi", "Giacomo Puccini", "Wolfgang Amadeus Mozart"],
      fr: ["Georges Bizet", "Giuseppe Verdi", "Giacomo Puccini", "Wolfgang Amadeus Mozart"]
    },
    correct: 0,
    explanation: {
      en: "The opera 'Carmen' was composed by Georges Bizet and premiered in 1875.",
      fr: "L'opéra 'Carmen' a été composé par Georges Bizet et créé en 1875."
    },
    tags: [TagEnum.MUSIC],
  },
  {
    id: "cc88a42f-95ef-47cc-8e7f-b0da8a3c6689",
    difficulty: 2,
    question: { en: "What is the chemical symbol for Silver?", fr: "Quel est le symbole chimique de l'argent ?" },
    answers: {
      en: ["Ag", "Au", "Pb", "Pt"],
      fr: ["Ag", "Au", "Pb", "Pt"]
    },
    correct: 0,
    explanation: {
      en: "Ag is the chemical symbol for Silver.",
      fr: "Ag est le symbole chimique de l'argent."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "b658ba26-613f-4971-8be9-3c64f07ee9d3",
    difficulty: 9,
    question: { en: "Which philosopher wrote 'Meditations on First Philosophy'?", fr: "Quel philosophe a écrit 'Méditations Métaphysiques' ?" },
    answers: {
      en: ["René Descartes", "Baruch Spinoza", "Gottfried Wilhelm Leibniz", "John Locke"],
      fr: ["René Descartes", "Baruch Spinoza", "Gottfried Wilhelm Leibniz", "John Locke"]
    },
    correct: 0,
    explanation: {
      en: "René Descartes wrote 'Meditations on First Philosophy', published in 1641.",
      fr: "René Descartes a écrit les 'Méditations Métaphysiques', publiées en 1641."
    },
    tags: [TagEnum.PHILOSOPHY],
  },
  {
    id: "8d7ec0b0-20b0-4f60-86c5-0228a60a74e5",
    difficulty: 1,
    question: { en: "What is the main programming language used for iOS development?", fr: "Quel est le langage de programmation principal utilisé pour le développement iOS ?" },
    answers: {
      en: ["Swift", "Java", "C#", "Kotlin"],
      fr: ["Swift", "Java", "C#", "Kotlin"]
    },
    correct: 0,
    explanation: {
      en: "Swift is the main language used for modern iOS development.",
      fr: "Swift est le langage principal utilisé pour le développement iOS moderne."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "d5f6680e-273b-4a5f-8f96-2f285564ff5e",
    difficulty: 5,
    question: { en: "Which planet is known as the 'Red Planet'?", fr: "Quelle planète est connue comme la 'planète rouge' ?" },
    answers: {
      en: ["Mars", "Jupiter", "Venus", "Mercury"],
      fr: ["Mars", "Jupiter", "Vénus", "Mercure"]
    },
    correct: 0,
    explanation: {
      en: "Mars is known as the Red Planet due to its iron oxide-rich soil.",
      fr: "Mars est connue comme la planète rouge en raison de son sol riche en oxyde de fer."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "fa22fc58-3d2d-4571-bb74-08544a8b8bbb",
    difficulty: 7,
    question: { en: "Who was the first person to run a sub-four-minute mile?", fr: "Qui a été la première personne à courir un mile en moins de quatre minutes ?" },
    answers: {
      en: ["Roger Bannister", "Haile Gebrselassie", "Emil Zátopek", "Sebastian Coe"],
      fr: ["Roger Bannister", "Haile Gebrselassie", "Emil Zátopek", "Sebastian Coe"]
    },
    correct: 0,
    explanation: {
      en: "Roger Bannister ran the first sub-four-minute mile in 1954.",
      fr: "Roger Bannister a couru le premier mile en moins de quatre minutes en 1954."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "ef57d3bd-7a73-4f3b-8840-95fb29dc3cf1",
    difficulty: 3,
    question: { en: "What is the largest continent on Earth?", fr: "Quel est le plus grand continent sur Terre ?" },
    answers: {
      en: ["Asia", "Africa", "North America", "Europe"],
      fr: ["L'Asie", "L'Afrique", "L'Amérique du Nord", "L'Europe"]
    },
    correct: 0,
    explanation: {
      en: "Asia is the largest continent by both area and population.",
      fr: "L'Asie est le plus grand continent à la fois par la superficie et la population."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "5b30aa77-4c3e-4c81-883c-f47772dc77f4",
    difficulty: 8,
    question: { en: "Who wrote the philosophical work 'Being and Nothingness'?", fr: "Qui a écrit l'ouvrage philosophique 'L'Être et le Néant' ?" },
    answers: {
      en: ["Jean-Paul Sartre", "Simone de Beauvoir", "Martin Heidegger", "Albert Camus"],
      fr: ["Jean-Paul Sartre", "Simone de Beauvoir", "Martin Heidegger", "Albert Camus"]
    },
    correct: 0,
    explanation: {
      en: "'Being and Nothingness' was written by the French philosopher Jean-Paul Sartre in 1943.",
      fr: "'L'Être et le Néant' a été écrit par le philosophe français Jean-Paul Sartre en 1943."
    },
    tags: [TagEnum.PHILOSOPHY],
  },
  {
    id: "391d640d-10fc-4a64-9c1e-560cb09d7fb7",
    difficulty: 6,
    question: { en: "What does GDP stand for?", fr: "Que signifie PIB ?" },
    answers: {
      en: ["Gross Domestic Product", "Gross Development Potential", "Global Domestic Power", "General Demographic Profile"],
      fr: ["Produit Intérieur Brut", "Potentiel de Développement Intérieur", "Puissance Domestique Globale", "Profil Démographique Général"]
    },
    correct: 0,
    explanation: {
      en: "GDP stands for Gross Domestic Product, the total value of all goods and services produced within a country.",
      fr: "PIB signifie Produit Intérieur Brut, la valeur totale de tous les biens et services produits à l'intérieur d'un pays."
    },
    tags: [TagEnum.ECONOMY],
  },
  {
    id: "5779a6c6-27ac-4aba-bc7d-ca4edaa6857e",
    difficulty: 2,
    question: { en: "Who directed the film 'Jaws'?", fr: "Qui a réalisé le film 'Les Dents de la mer' ?" },
    answers: {
      en: ["Steven Spielberg", "George Lucas", "Alfred Hitchcock", "Stanley Kubrick"],
      fr: ["Steven Spielberg", "George Lucas", "Alfred Hitchcock", "Stanley Kubrick"]
    },
    correct: 0,
    explanation: {
      en: "Steven Spielberg directed 'Jaws', released in 1975.",
      fr: "Steven Spielberg a réalisé 'Les Dents de la mer', sorti en 1975."
    },
    tags: [TagEnum.CINEMA],
  },
  {
    id: "9309460f-65a8-45b4-b01e-ca69902f1be3",
    difficulty: 4,
    question: { en: "What is the largest religion by number of followers?", fr: "Quelle est la plus grande religion par nombre de fidèles ?" },
    answers: {
      en: ["Christianity", "Islam", "Hinduism", "Buddhism"],
      fr: ["Le christianisme", "L'islam", "L'hindouisme", "Le bouddhisme"]
    },
    correct: 0,
    explanation: {
      en: "Christianity is currently the largest religion by number of adherents.",
      fr: "Le christianisme est actuellement la religion comptant le plus grand nombre de fidèles."
    },
    tags: [TagEnum.RELIGION],
  },
  {
    id: "520eb1d2-ae0f-4ade-8f51-45f381d3f66a",
    difficulty: 9,
    question: { en: "Which philosopher wrote 'The World as Will and Representation'?", fr: "Quel philosophe a écrit 'Le Monde comme Volonté et Représentation' ?" },
    answers: {
      en: ["Arthur Schopenhauer", "Friedrich Nietzsche", "Georg Wilhelm Friedrich Hegel", "Martin Heidegger"],
      fr: ["Arthur Schopenhauer", "Friedrich Nietzsche", "Georg Wilhelm Friedrich Hegel", "Martin Heidegger"]
    },
    correct: 0,
    explanation: {
      en: "Arthur Schopenhauer wrote 'The World as Will and Representation', published in 1818.",
      fr: "Arthur Schopenhauer a écrit 'Le Monde comme Volonté et Représentation', publié en 1818."
    },
    tags: [TagEnum.PHILOSOPHY],
  },
  {
    id: "1a2b8763-2c51-4db5-a76b-1948c1e35ce4",
    difficulty: 3,
    question: { en: "Who wrote 'The Adventures of Huckleberry Finn'?", fr: "Qui a écrit 'Les Aventures de Huckleberry Finn' ?" },
    answers: {
      en: ["Mark Twain", "Herman Melville", "Ernest Hemingway", "F. Scott Fitzgerald"],
      fr: ["Mark Twain", "Herman Melville", "Ernest Hemingway", "F. Scott Fitzgerald"]
    },
    correct: 0,
    explanation: {
      en: "Mark Twain wrote 'The Adventures of Huckleberry Finn', published in 1884.",
      fr: "Mark Twain a écrit 'Les Aventures de Huckleberry Finn', publié en 1884."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "d81c3c31-385b-4c75-9e1f-541d884237e4",
    difficulty: 4,
    question: { en: "Which country was the first to send a satellite into space?", fr: "Quel pays a été le premier à envoyer un satellite dans l'espace ?" },
    answers: {
      en: ["Soviet Union", "United States", "United Kingdom", "France"],
      fr: ["Union soviétique", "États-Unis", "Royaume-Uni", "France"]
    },
    correct: 0,
    explanation: {
      en: "The Soviet Union launched Sputnik 1 in 1957, the first artificial satellite.",
      fr: "L'Union soviétique a lancé Spoutnik 1 en 1957, le premier satellite artificiel."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "64ae856c-7e84-42d3-9a16-25e548d37c35",
    difficulty: 1,
    question: { en: "What is the primary religion of Saudi Arabia?", fr: "Quelle est la religion principale de l'Arabie Saoudite ?" },
    answers: {
      en: ["Islam", "Christianity", "Hinduism", "Judaism"],
      fr: ["L'islam", "Le christianisme", "L'hindouisme", "Le judaïsme"]
    },
    correct: 0,
    explanation: {
      en: "Islam is the official and dominant religion in Saudi Arabia.",
      fr: "L'islam est la religion officielle et dominante en Arabie Saoudite."
    },
    tags: [TagEnum.RELIGION],
  },
  {
    id: "c24667a8-6919-4fad-9e0f-572732d2db63",
    difficulty: 2,
    question: { en: "Who directed 'E.T. the Extra-Terrestrial'?", fr: "Qui a réalisé 'E.T. l'extra-terrestre' ?" },
    answers: {
      en: ["Steven Spielberg", "Ridley Scott", "James Cameron", "George Lucas"],
      fr: ["Steven Spielberg", "Ridley Scott", "James Cameron", "George Lucas"]
    },
    correct: 0,
    explanation: {
      en: "Steven Spielberg directed 'E.T. the Extra-Terrestrial', released in 1982.",
      fr: "Steven Spielberg a réalisé 'E.T. l'extra-terrestre', sorti en 1982."
    },
    tags: [TagEnum.CINEMA],
  },
  {
    id: "027f0784-8fe3-4a72-b510-8af2cb3a8f2f",
    difficulty: 7,
    question: { en: "Who proposed the theory of evolution by natural selection?", fr: "Qui a proposé la théorie de l'évolution par sélection naturelle ?" },
    answers: {
      en: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Louis Pasteur"],
      fr: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Louis Pasteur"]
    },
    correct: 0,
    explanation: {
      en: "Charles Darwin proposed the theory of evolution by natural selection in 'On the Origin of Species' (1859).",
      fr: "Charles Darwin a proposé la théorie de l'évolution par sélection naturelle dans 'De l'Origine des espèces' (1859)."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "7c7ea39a-a6b7-4257-9a69-74efa2824a85",
    difficulty: 5,
    question: { en: "Which river flows through London?", fr: "Quel fleuve traverse Londres ?" },
    answers: {
      en: ["Thames", "Seine", "Danube", "Rhine"],
      fr: ["La Tamise", "La Seine", "Le Danube", "Le Rhin"]
    },
    correct: 0,
    explanation: {
      en: "The River Thames flows through London.",
      fr: "La Tamise traverse Londres."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "7267ffcc-5e95-4217-9ab1-5bee679d66fb",
    difficulty: 3,
    question: { en: "Which artist painted the ceiling of the Sistine Chapel?", fr: "Quel artiste a peint le plafond de la chapelle Sixtine ?" },
    answers: {
      en: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Titian"],
      fr: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Titien"]
    },
    correct: 0,
    explanation: {
      en: "Michelangelo painted the ceiling of the Sistine Chapel between 1508 and 1512.",
      fr: "Michel-Ange a peint le plafond de la chapelle Sixtine entre 1508 et 1512."
    },
    tags: [TagEnum.ART],
  },
  {
    id: "0e223678-8268-4967-b08a-2dd95537951b",
    difficulty: 8,
    question: { en: "Who composed the Brandenburg Concertos?", fr: "Qui a composé les Concertos Brandebourgeois ?" },
    answers: {
      en: ["Johann Sebastian Bach", "George Frideric Handel", "Antonio Vivaldi", "Johann Pachelbel"],
      fr: ["Johann Sebastian Bach", "Georg Friedrich Haendel", "Antonio Vivaldi", "Johann Pachelbel"]
    },
    correct: 0,
    explanation: {
      en: "The Brandenburg Concertos were composed by Johann Sebastian Bach and presented in 1721.",
      fr: "Les Concertos Brandebourgeois ont été composés par Johann Sebastian Bach et présentés en 1721."
    },
    tags: [TagEnum.MUSIC],
  },
  {
    id: "c6aef31d-5ae1-4c25-8d12-fa428ccb3bb8",
    difficulty: 4,
    question: { en: "Which French leader became Emperor in 1804?", fr: "Quel leader français est devenu empereur en 1804 ?" },
    answers: {
      en: ["Napoleon Bonaparte", "Louis XIV", "Charlemagne", "Louis Napoleon (Napoleon III)"],
      fr: ["Napoléon Bonaparte", "Louis XIV", "Charlemagne", "Louis Napoléon (Napoléon III)"]
    },
    correct: 0,
    explanation: {
      en: "Napoleon Bonaparte crowned himself Emperor of the French in 1804.",
      fr: "Napoléon Bonaparte s'est couronné Empereur des Français en 1804."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "f6275a27-e6d7-48e6-b535-b053ef741b22",
    difficulty: 6,
    question: { en: "What is the primary muscle used for breathing?", fr: "Quel est le muscle principal utilisé pour respirer ?" },
    answers: {
      en: ["Diaphragm", "Heart", "Lung", "Intercostal muscles"],
      fr: ["Le diaphragme", "Le cœur", "Le poumon", "Les muscles intercostaux"]
    },
    correct: 0,
    explanation: {
      en: "The diaphragm is the main muscle responsible for breathing.",
      fr: "Le diaphragme est le muscle principal responsable de la respiration."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "bfd2f353-5b67-4f2c-a305-55f4f2ce5273",
    difficulty: 5,
    question: { en: "Who was the first Prime Minister of India?", fr: "Qui a été le premier Premier ministre de l'Inde ?" },
    answers: {
      en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Rajendra Prasad"],
      fr: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Rajendra Prasad"]
    },
    correct: 0,
    explanation: {
      en: "Jawaharlal Nehru was the first Prime Minister of India, serving from 1947 to 1964.",
      fr: "Jawaharlal Nehru a été le premier Premier ministre de l'Inde, en fonction de 1947 à 1964."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "7ab90459-bbc8-4cb5-ae66-3fbb4316fef0",
    difficulty: 2,
    question: { en: "What does 'CPU' stand for in computing?", fr: "Que signifie 'CPU' en informatique ?" },
    answers: {
      en: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Central Program Uplink"],
      fr: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Central Program Uplink"]
    },
    correct: 0,
    explanation: {
      en: "CPU stands for Central Processing Unit, the main processor of a computer.",
      fr: "CPU signifie Central Processing Unit, le processeur principal d'un ordinateur."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "5bf6f4b8-1112-435f-a89b-b17b3c7851c0",
    difficulty: 4,
    question: { en: "Who wrote 'Moby-Dick'?", fr: "Qui a écrit 'Moby-Dick' ?" },
    answers: {
      en: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "Edgar Allan Poe"],
      fr: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "Edgar Allan Poe"]
    },
    correct: 0,
    explanation: {
      en: "Herman Melville wrote 'Moby-Dick', published in 1851.",
      fr: "Herman Melville a écrit 'Moby-Dick', publié en 1851."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "ccdb3911-059f-4d77-b29b-7614898ff5b4",
    difficulty: 8,
    question: { en: "What is the philosophical term for the study of being?", fr: "Quel est le terme philosophique pour l'étude de l'être ?" },
    answers: {
      en: ["Ontology", "Epistemology", "Aesthetics", "Ethics"],
      fr: ["L'ontologie", "L'épistémologie", "L'esthétique", "L'éthique"]
    },
    correct: 0,
    explanation: {
      en: "Ontology is the philosophical study of the nature of being.",
      fr: "L'ontologie est l'étude philosophique de la nature de l'être."
    },
    tags: [TagEnum.PHILOSOPHY],
  },
  {
    id: "5df33fc0-13ed-4e57-af26-1742852c56ae",
    difficulty: 1,
    question: { en: "What is the currency of the United Kingdom?", fr: "Quelle est la monnaie du Royaume-Uni ?" },
    answers: {
      en: ["Pound Sterling", "Euro", "Dollar", "Franc"],
      fr: ["La livre sterling", "L'euro", "Le dollar", "Le franc"]
    },
    correct: 0,
    explanation: {
      en: "The Pound Sterling is the currency of the United Kingdom.",
      fr: "La livre sterling est la monnaie du Royaume-Uni."
    },
    tags: [TagEnum.ECONOMY],
  },
  {
    id: "42f9d043-4ea6-4a84-9795-a266afc7c944",
    difficulty: 5,
    question: { en: "Which empire built Machu Picchu?", fr: "Quel empire a construit le Machu Picchu ?" },
    answers: {
      en: ["Inca Empire", "Aztec Empire", "Mayan Empire", "Roman Empire"],
      fr: ["L'Empire inca", "L'Empire aztèque", "L'Empire maya", "L'Empire romain"]
    },
    correct: 0,
    explanation: {
      en: "Machu Picchu was built by the Inca Empire in the 15th century.",
      fr: "Le Machu Picchu a été construit par l'Empire inca au XVe siècle."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "ecafcfc0-6357-48ab-aed6-a9356a384eb9",
    difficulty: 6,
    question: { en: "Who is known as the 'King of Pop'?", fr: "Qui est connu comme le 'Roi de la Pop' ?" },
    answers: {
      en: ["Michael Jackson", "Elvis Presley", "Prince", "Freddie Mercury"],
      fr: ["Michael Jackson", "Elvis Presley", "Prince", "Freddie Mercury"]
    },
    correct: 0,
    explanation: {
      en: "Michael Jackson is widely referred to as the 'King of Pop'.",
      fr: "Michael Jackson est largement connu comme le 'Roi de la Pop'."
    },
    tags: [TagEnum.MUSIC],
  },
  {
    id: "c1b47007-1f4e-4571-8da6-658d705a3dae",
    difficulty: 2,
    question: { en: "What does 'HTML' stand for?", fr: "Que signifie 'HTML' ?" },
    answers: {
      en: ["HyperText Markup Language", "HyperTool Multi Language", "HighText Machine Language", "Hyperlink Text Mainframe Language"],
      fr: ["HyperText Markup Language", "HyperTool Multi Language", "HighText Machine Language", "Hyperlink Text Mainframe Language"]
    },
    correct: 0,
    explanation: {
      en: "HTML stands for HyperText Markup Language, the standard language for web pages.",
      fr: "HTML signifie HyperText Markup Language, le langage standard des pages Web."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "009ceaab-1c6a-4ed6-9ca5-d5adcb3dac2f",
    difficulty: 3,
    question: { en: "What gas makes up most of the Earth's atmosphere?", fr: "Quel gaz compose la majeure partie de l'atmosphère terrestre ?" },
    answers: {
      en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
      fr: ["L'azote", "L'oxygène", "Le dioxyde de carbone", "L'argon"]
    },
    correct: 0,
    explanation: {
      en: "About 78% of the Earth's atmosphere is nitrogen.",
      fr: "Environ 78% de l'atmosphère terrestre est composée d'azote."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "446de347-34ba-4b23-99af-a1a1b2652f31",
    difficulty: 4,
    question: { en: "What is the capital of Egypt?", fr: "Quelle est la capitale de l'Égypte ?" },
    answers: {
      en: ["Cairo", "Alexandria", "Giza", "Luxor"],
      fr: ["Le Caire", "Alexandrie", "Gizeh", "Louxor"]
    },
    correct: 0,
    explanation: {
      en: "Cairo is the capital of Egypt.",
      fr: "Le Caire est la capitale de l'Égypte."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "0818880f-1180-457f-b723-abdc87692fb8",
    difficulty: 9,
    question: { en: "Which philosopher wrote 'The Phenomenology of Spirit'?", fr: "Quel philosophe a écrit 'La Phénoménologie de l'esprit' ?" },
    answers: {
      en: ["G.W.F. Hegel", "Immanuel Kant", "Karl Marx", "Friedrich Nietzsche"],
      fr: ["G.W.F. Hegel", "Immanuel Kant", "Karl Marx", "Friedrich Nietzsche"]
    },
    correct: 0,
    explanation: {
      en: "'The Phenomenology of Spirit' was written by Georg Wilhelm Friedrich Hegel, published in 1807.",
      fr: "'La Phénoménologie de l'esprit' a été écrite par Georg Wilhelm Friedrich Hegel, publiée en 1807."
    },
    tags: [TagEnum.PHILOSOPHY],
  },
  {
    id: "fc1a17f6-7a02-4c2d-b021-2d071dfd54e0",
    difficulty: 3,
    question: { en: "Who wrote 'The Old Man and the Sea'?", fr: "Qui a écrit 'Le Vieil Homme et la Mer' ?" },
    answers: {
      en: ["Ernest Hemingway", "John Steinbeck", "William Faulkner", "James Joyce"],
      fr: ["Ernest Hemingway", "John Steinbeck", "William Faulkner", "James Joyce"]
    },
    correct: 0,
    explanation: {
      en: "Ernest Hemingway wrote 'The Old Man and the Sea', published in 1952.",
      fr: "Ernest Hemingway a écrit 'Le Vieil Homme et la Mer', publié en 1952."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "c6c58422-7b68-45a3-8767-2c9238ed26d9",
    difficulty: 5,
    question: { en: "When did the United States Declaration of Independence occur?", fr: "Quand la Déclaration d'indépendance des États-Unis a-t-elle eu lieu ?" },
    answers: {
      en: ["1776", "1789", "1804", "1750"],
      fr: ["1776", "1789", "1804", "1750"]
    },
    correct: 0,
    explanation: {
      en: "The United States Declaration of Independence was adopted on July 4, 1776.",
      fr: "La Déclaration d'indépendance des États-Unis a été adoptée le 4 juillet 1776."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "53922f20-713e-488a-af14-20e0acc22d53",
    difficulty: 6,
    question: { en: "Which company created the Android operating system?", fr: "Quelle entreprise a créé le système d'exploitation Android ?" },
    answers: {
      en: ["Google", "Apple", "Microsoft", "IBM"],
      fr: ["Google", "Apple", "Microsoft", "IBM"]
    },
    correct: 0,
    explanation: {
      en: "Android was originally developed by Android Inc., later acquired by Google in 2005.",
      fr: "Android a été initialement développé par Android Inc., puis racheté par Google en 2005."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "c865aad5-e8d8-4751-85a1-bd023d53ba28",
    difficulty: 8,
    question: { en: "Who composed 'Boléro'?", fr: "Qui a composé le 'Boléro' ?" },
    answers: {
      en: ["Maurice Ravel", "Claude Debussy", "Camille Saint-Saëns", "Erik Satie"],
      fr: ["Maurice Ravel", "Claude Debussy", "Camille Saint-Saëns", "Erik Satie"]
    },
    correct: 0,
    explanation: {
      en: "Maurice Ravel composed 'Boléro', premiered in 1928.",
      fr: "Maurice Ravel a composé le 'Boléro', créé en 1928."
    },
    tags: [TagEnum.MUSIC],
  },
  {
    id: "2df17c6c-cfe1-43d3-a3c6-1f128c0c14b5",
    difficulty: 2,
    question: { en: "Who is considered the father of modern physics for his work on relativity?", fr: "Qui est considéré comme le père de la physique moderne pour ses travaux sur la relativité ?" },
    answers: {
      en: ["Albert Einstein", "Niels Bohr", "Max Planck", "Erwin Schrödinger"],
      fr: ["Albert Einstein", "Niels Bohr", "Max Planck", "Erwin Schrödinger"]
    },
    correct: 0,
    explanation: {
      en: "Albert Einstein is considered the father of modern physics, especially for his theory of relativity.",
      fr: "Albert Einstein est considéré comme le père de la physique moderne, notamment pour sa théorie de la relativité."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "805d4b39-495a-4f38-bdb9-e9d8d0b5d0e6",
    difficulty: 5,
    question: { en: "What is the capital city of Sweden?", fr: "Quelle est la capitale de la Suède ?" },
    answers: {
      en: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
      fr: ["Stockholm", "Oslo", "Copenhague", "Helsinki"]
    },
    correct: 0,
    explanation: {
      en: "Stockholm is the capital of Sweden.",
      fr: "Stockholm est la capitale de la Suède."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "b6d66d54-5f9a-4c6b-8c51-12708599d149",
    difficulty: 4,
    question: { en: "Which painter is famous for cutting off part of his own ear?", fr: "Quel peintre est célèbre pour s'être coupé une partie de l'oreille ?" },
    answers: {
      en: ["Vincent van Gogh", "Paul Gauguin", "Henri de Toulouse-Lautrec", "Edgar Degas"],
      fr: ["Vincent van Gogh", "Paul Gauguin", "Henri de Toulouse-Lautrec", "Edgar Degas"]
    },
    correct: 0,
    explanation: {
      en: "Vincent van Gogh famously cut off part of his left ear in 1888.",
      fr: "Vincent van Gogh s'est tristement coupé une partie de l'oreille gauche en 1888."
    },
    tags: [TagEnum.ART],
  },
  {
    id: "02e02a5c-5144-438b-a3f1-4f8faee8c662",
    difficulty: 7,
    question: { en: "Who composed the opera cycle 'The Ring of the Nibelung'?", fr: "Qui a composé le cycle d'opéras 'L'Anneau du Nibelung' ?" },
    answers: {
      en: ["Richard Wagner", "Richard Strauss", "Johannes Brahms", "Giacomo Puccini"],
      fr: ["Richard Wagner", "Richard Strauss", "Johannes Brahms", "Giacomo Puccini"]
    },
    correct: 0,
    explanation: {
      en: "'The Ring of the Nibelung' was composed by Richard Wagner and first performed between 1876 and 1877.",
      fr: "'L'Anneau du Nibelung' a été composé par Richard Wagner et créé entre 1876 et 1877."
    },
    tags: [TagEnum.MUSIC],
  },
  {
    id: "665a96c5-06f5-4433-bca8-b0f9979c84af",
    difficulty: 3,
    question: { en: "Who discovered the circulation of blood?", fr: "Qui a découvert la circulation du sang ?" },
    answers: {
      en: ["William Harvey", "Andreas Vesalius", "Galen", "Hippocrates"],
      fr: ["William Harvey", "Andreas Vesalius", "Galien", "Hippocrate"]
    },
    correct: 0,
    explanation: {
      en: "William Harvey demonstrated the circulation of blood in the early 17th century.",
      fr: "William Harvey a démontré la circulation du sang au début du XVIIe siècle."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "4eb71fad-1a96-4e6f-838d-f74042c1de88",
    difficulty: 2,
    question: { en: "What is the capital of Russia?", fr: "Quelle est la capitale de la Russie ?" },
    answers: {
      en: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],
      fr: ["Moscou", "Saint-Pétersbourg", "Kazan", "Novossibirsk"]
    },
    correct: 0,
    explanation: {
      en: "Moscow is the capital and largest city of Russia.",
      fr: "Moscou est la capitale et la plus grande ville de Russie."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "640a2b6c-d8de-4ecc-83d3-7d52390e0c4a",
    difficulty: 6,
    question: { en: "Who coined the term 'Surrealism'?", fr: "Qui a inventé le terme 'Surréalisme' ?" },
    answers: {
      en: ["Guillaume Apollinaire", "André Breton", "Max Ernst", "Salvador Dalí"],
      fr: ["Guillaume Apollinaire", "André Breton", "Max Ernst", "Salvador Dalí"]
    },
    correct: 0,
    explanation: {
      en: "The term 'Surrealism' was coined by the French poet Guillaume Apollinaire in 1917.",
      fr: "Le terme 'Surréalisme' a été inventé par le poète français Guillaume Apollinaire en 1917."
    },
    tags: [TagEnum.ART],
  }
];