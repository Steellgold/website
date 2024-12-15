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
  RELIGION = "RELIGION",
  VIDEOGAMES = "VIDEOGAMES",
}

export type Tag = {
  names: Record<string, string>;
  enum: TagEnum;
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
  { names: { fr: "Géographie", en: "Geography" }, icon: <Globe2 />, enum: TagEnum.GEOGRAPHY },
  { names: { fr: "Histoire", en: "History" }, icon: <ScrollText />, enum: TagEnum.HISTORY },
  { names: { fr: "Science", en: "Science" }, icon: <TestTubeDiagonal />, enum: TagEnum.SCIENCE },
  { names: { fr: "Littérature", en: "Literature" }, icon: <Book />, enum: TagEnum.LITERATURE },
  { names: { fr: "Art", en: "Art" }, icon: <Pencil />, enum: TagEnum.ART },
  { names: { fr: "Musique", en: "Music" }, icon: <Disc3 />, enum: TagEnum.MUSIC },
  { names: { fr: "Cinéma", en: "Cinema" }, icon: <Clapperboard />, enum: TagEnum.CINEMA },
  { names: { fr: "Sports", en: "Sports" }, icon: <Bike />, enum: TagEnum.SPORTS },
  { names: { fr: "Politique", en: "Politics" }, icon: <Vote />, enum: TagEnum.POLITICS },
  { names: { fr: "Économie", en: "Economy" }, icon: <Coins />, enum: TagEnum.ECONOMY },
  { names: { fr: "Philosophie", en: "Philosophy" }, icon: <Slash />, enum: TagEnum.PHILOSOPHY },
  { names: { fr: "Technologie", en: "Technology" }, icon: <Cpu />, enum: TagEnum.TECHNOLOGY },
  { names: { fr: "Société", en: "Society" }, icon: <Users />, enum: TagEnum.SOCIETY },
  { names: { fr: "Religion", en: "Religion" }, icon: <BookHeart />, enum: TagEnum.RELIGION },
  { names: { fr: "Jeux vidéo", en: "Video Games" }, icon: <BookHeart />, enum: TagEnum.VIDEOGAMES },
];

const old_data: Question[] = [
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
      en: "'Moby-Dick' is a novel written by Herman Melville, published in 1851. It is a story about the voyage of the whaling ship Pequod, led by Captain Ahab, who is obsessed with hunting the giant white whale Moby Dick.",
      fr: "'Moby-Dick' est un roman écrit par Herman Melville, publié en 1851. C'est l'histoire du voyage du baleinier Pequod, dirigé par le capitaine Achab, qui est obsédé par la chasse à la grande baleine blanche Moby Dick."
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
  },
  {
    id: "2af50dc8-cd65-40cc-8864-5349078b0dfb", // 1
    difficulty: 5,
    question: { en: "Which international body protects children's rights?", fr: "Quel organisme international est chargé de la protection des droits de l'enfant ?" },
    answers: {
      en: ["UNICEF", "UNESCO", "WHO", "ILO"],
      fr: ["UNICEF", "UNESCO", "OMS", "OIT"]
    },
    correct: 0,
    explanation: {
      en: "UNICEF is the UN agency for children's rights.",
      fr: "L'UNICEF est l'agence de l'ONU chargée des droits de l'enfant."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "4903a5aa-d70a-4cb3-bb78-409722cd22bf", // 2
    difficulty: 6,
    question: { en: "Which social movement marked France in 1968?", fr: "Quel mouvement social a marqué la France en 1968 ?" },
    answers: {
      en: ["May 68 events", "Paris Commune", "1848 Revolution", "Canuts revolt"],
      fr: ["Les événements de Mai 68", "La Commune de Paris", "La Révolution de 1848", "La révolte des Canuts"]
    },
    correct: 0,
    explanation: {
      en: "May '68 was a major social upheaval in France.",
      fr: "Les événements de Mai 68 furent un important soulèvement social en France."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "87db08b7-64e0-4f88-a2e8-d25f407ceff6", // 3
    difficulty: 2,
    question: { en: "What is the legal age of majority in France?", fr: "Quel est l'âge de la majorité légale en France ?" },
    answers: {
      en: ["18", "16", "21", "20"],
      fr: ["18 ans", "16 ans", "21 ans", "20 ans"]
    },
    correct: 0,
    explanation: {
      en: "The age of majority in France is 18.",
      fr: "La majorité légale en France est fixée à 18 ans."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "49ec8ae1-cbb7-4932-bb50-31b8f7d92e0f", // 4
    difficulty: 7,
    question: { en: "Which sociological concept refers to geographic mobility for work?", fr: "Quel concept sociologique désigne la mobilité géographique des individus cherchant un emploi ?" },
    answers: {
      en: ["Migration", "Tourism", "Sedentism", "Nomadism"],
      fr: ["La migration", "Le tourisme", "La sédentarité", "Le nomadisme"]
    },
    correct: 0,
    explanation: {
      en: "Migration often occurs in search of work.",
      fr: "La migration survient souvent dans la recherche d'un emploi."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "b143c1e2-02e0-4d01-8381-48f0ea6dd46c", // 5
    difficulty: 3,
    question: { en: "What term describes equal chances for men and women?", fr: "Quel terme décrit l'égalité des chances entre les hommes et les femmes ?" },
    answers: {
      en: ["Gender equality", "Matriarchy", "Patriarchy", "Segregation"],
      fr: ["L'égalité de genre", "Le matriarcat", "Le patriarcat", "La ségrégation"]
    },
    correct: 0,
    explanation: {
      en: "Gender equality ensures equal rights for men and women.",
      fr: "L'égalité de genre vise à garantir les mêmes droits aux hommes et aux femmes."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "709eb4c3-3dce-4fe5-9b15-908f52d612c1", // 6
    difficulty: 4,
    question: { en: "What is the term for the concentration of population in large megacities?", fr: "Comment nomme-t-on le phénomène de concentration urbaine dans de grandes mégapoles ?" },
    answers: {
      en: ["Urbanization", "Rural life", "Eco-village", "Decentralization"],
      fr: ["L'urbanisation", "La ruralité", "L'éco-village", "La décentralisation"]
    },
    correct: 0,
    explanation: {
      en: "Urbanization is the growth of cities.",
      fr: "L'urbanisation est l'accroissement des villes."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "054c13c2-6b78-4349-823a-f02d0454cf18", // 7
    difficulty: 5,
    question: { en: "What term refers to favoring someone due to their ethnic origin?", fr: "Quel terme désigne le fait de favoriser un individu en raison de son origine ethnique ?" },
    answers: {
      en: ["Racism", "Sexism", "Ageism", "Classism"],
      fr: ["Le racisme", "Le sexisme", "L'âgisme", "Le classisme"]
    },
    correct: 0,
    explanation: {
      en: "Racism is discrimination based on ethnicity.",
      fr: "Le racisme est une discrimination fondée sur l'origine ethnique."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "1cd99b68-95a9-4a49-8319-b37bc4cfe548", // 8
    difficulty: 4,
    question: { en: "Which indicator measures education, life expectancy, and income in a country?", fr: "Quel indicateur mesure le niveau d'éducation, d'espérance de vie et de revenu d'un pays ?" },
    answers: {
      en: ["HDI", "GDP", "CPI", "Literacy rate"],
      fr: ["L'IDH (Indice de Développement Humain)", "Le PIB", "L'IPC", "Le taux d'alphabétisation"]
    },
    correct: 0,
    explanation: {
      en: "The HDI combines health, education, and income.",
      fr: "L'IDH combine santé, éducation et revenu."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "8bd09b85-6eb4-4138-b415-b9b74fc0fe20", // 9
    difficulty: 1,
    question: { en: "What is the study of human populations and their characteristics?", fr: "Comment appelle-t-on l'étude des populations humaines et de leurs caractéristiques ?" },
    answers: {
      en: ["Demography", "Sociology", "Anthropology", "Psychology"],
      fr: ["La démographie", "La sociologie", "L'anthropologie", "La psychologie"]
    },
    correct: 0,
    explanation: {
      en: "Demography studies population structure.",
      fr: "La démographie étudie la structure des populations."
    },
    tags: ["SOCIETY"],
  },
  {
    id: "891b53eb-3898-4611-8f12-e449269d8515", // 10
    difficulty: 3,
    question: { en: "What is discrimination based on age called?", fr: "Quel terme désigne la discrimination basée sur l'âge d'un individu ?" },
    answers: {
      en: ["Ageism", "Sexism", "Racism", "Xenophobia"],
      fr: ["L'âgisme", "Le sexisme", "Le racisme", "La xénophobie"]
    },
    correct: 0,
    explanation: {
      en: "Ageism discriminates against age groups.",
      fr: "L'âgisme discrimine selon l'âge."
    },
    tags: ["SOCIETY"],
  },

  // TECHNOLOGIE (TagEnum.TECHNOLOGY) x10
  {
    id: "9147b1db-1c66-476f-9704-4129a06ca618", // 11
    difficulty: 2,
    question: { en: "Which main language is used alongside HTML and CSS for web development?", fr: "Quel est le langage principal utilisé pour le développement de pages Web, aux côtés du HTML et du CSS ?" },
    answers: {
      en: ["JavaScript", "Python", "Java", "C++"],
      fr: ["JavaScript", "Python", "Java", "C++"]
    },
    correct: 0,
    explanation: {
      en: "JavaScript is essential in web pages.",
      fr: "JavaScript est essentiel dans les pages Web."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "468a0f9b-7e93-442a-9cbd-a1daefc487c5", // 12
    difficulty: 3,
    question: { en: "Which connected device is mainly used to track sports activity and heart rate?", fr: "Quel objet connecté est principalement utilisé pour suivre l'activité sportive et la fréquence cardiaque ?" },
    answers: {
      en: ["Smartwatch", "VR headset", "Tablet", "Smartphone"],
      fr: ["La montre connectée", "Le casque de réalité virtuelle", "La tablette", "Le smartphone"]
    },
    correct: 0,
    explanation: {
      en: "Smartwatches measure heart rate and steps.",
      fr: "La montre connectée mesure la fréquence cardiaque et les pas."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "1db052b7-a5f3-4de8-b189-9d3cb5fe6a9b", // 13
    difficulty: 4,
    question: { en: "What concept describes storing and accessing data remotely via the Internet?", fr: "Quel concept informatique décrit le stockage et l'accès aux données sur des serveurs distants via Internet ?" },
    answers: {
      en: ["Cloud computing", "Machine learning", "Big data", "Virtualization"],
      fr: ["Le cloud computing", "Le machine learning", "Le big data", "La virtualisation"]
    },
    correct: 0,
    explanation: {
      en: "Cloud computing uses remote servers.",
      fr: "Le cloud computing utilise des serveurs distants."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "0139f7b7-1d78-408c-b35b-433c94c7aa38", // 14
    difficulty: 5,
    question: { en: "Which open-source mobile OS was originally developed by Android Inc.?", fr: "Quel système d'exploitation mobile open source a été développé à l'origine par Android Inc. ?" },
    answers: {
      en: ["Android", "iOS", "Windows Phone", "BlackBerry OS"],
      fr: ["Android", "iOS", "Windows Phone", "BlackBerry OS"]
    },
    correct: 0,
    explanation: {
      en: "Android is an open-source mobile OS.",
      fr: "Android est un système d'exploitation mobile open source."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "363c45db-3db3-4c83-9743-5bd91917ffc7", // 15
    difficulty: 6,
    question: { en: "What do we call a malicious program designed to harm a computer system?", fr: "Quel terme désigne un programme malveillant conçu pour endommager ou exploiter des failles dans un système informatique ?" },
    answers: {
      en: ["Malware", "Freeware", "Shareware", "Adware"],
      fr: ["Un malware", "Un freeware", "Un shareware", "Un adware"]
    },
    correct: 0,
    explanation: {
      en: "Malware includes viruses, trojans, etc.",
      fr: "Un malware inclut virus, chevaux de Troie, etc."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "da098199-3e89-4303-8caa-e187aa7f3042", // 16
    difficulty: 1,
    question: { en: "What is the French acronym for Artificial Intelligence?", fr: "Quel acronyme désigne l'intelligence artificielle ?" },
    answers: {
      en: ["IA", "AR", "VR", "IoT"],
      fr: ["IA", "AR", "VR", "IoT"]
    },
    correct: 0,
    explanation: {
      en: "IA stands for Intelligence Artificielle.",
      fr: "IA signifie Intelligence Artificielle."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "f2f2117a-81d8-43b0-9cd2-193f0044be75", // 17
    difficulty: 2,
    question: { en: "What is the name of the global network of interconnected computers?", fr: "Quel est le nom du réseau mondial d'ordinateurs interconnectés ?" },
    answers: {
      en: ["Internet", "Intranet", "Ethernet", "Extranet"],
      fr: ["Internet", "Intranet", "Ethernet", "Extranet"]
    },
    correct: 0,
    explanation: {
      en: "Internet connects billions of devices.",
      fr: "Internet connecte des milliards d'appareils."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "2919363a-0099-450c-8cb4-e39287405c80", // 18
    difficulty: 4,
    question: { en: "Which field focuses on analyzing massive datasets?", fr: "Quel domaine de l'informatique se concentre sur l'analyse et le traitement des données massives ?" },
    answers: {
      en: ["Big data", "Cryptography", "Software engineering", "Microcomputing"],
      fr: ["Le big data", "La cryptographie", "Le génie logiciel", "La micro-informatique"]
    },
    correct: 0,
    explanation: {
      en: "Big data deals with large data sets.",
      fr: "Le big data traite de vastes ensembles de données."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "18eae736-70b5-4f7e-838f-83971b81c831", // 19
    difficulty: 2,
    question: { en: "Which standard protocol is used for transferring web pages?", fr: "Quel est le protocole standard pour transférer des pages Web sur Internet ?" },
    answers: {
      en: ["HTTP", "FTP", "SMTP", "DNS"],
      fr: ["HTTP", "FTP", "SMTP", "DNS"]
    },
    correct: 0,
    explanation: {
      en: "HTTP is used to transfer webpages.",
      fr: "HTTP est utilisé pour transférer des pages Web."
    },
    tags: ["TECHNOLOGY"],
  },
  {
    id: "b4c94504-db3e-4226-b6fb-7f1acca724b4", // 20
    difficulty: 3,
    question: { en: "What concept refers to simulating a real environment in a virtual world?", fr: "Quel concept décrit la reproduction d'un environnement réel dans un monde virtuel, souvent à l'aide d'un casque spécial ?" },
    answers: {
      en: ["Virtual reality", "Augmented reality", "Domotics", "Robotics"],
      fr: ["La réalité virtuelle", "La réalité augmentée", "La domotique", "La robotique"]
    },
    correct: 0,
    explanation: {
      en: "VR simulates a real-world environment.",
      fr: "La réalité virtuelle simule un environnement réel."
    },
    tags: ["TECHNOLOGY"],
  },

  // ECONOMIE (TagEnum.ECONOMY) x10
  {
    id: "8982423f-ae1d-465f-b1b9-e18501f23bc3", // 21
    difficulty: 2,
    question: { en: "Which indicator measures the total goods and services produced by a country?", fr: "Quel indicateur économique mesure la production de biens et services d'un pays sur une période donnée ?" },
    answers: {
      en: ["GDP", "HDI", "GNP", "CPI"],
      fr: ["Le PIB (Produit Intérieur Brut)", "L'IDH", "Le PNB", "L'IPC"]
    },
    correct: 0,
    explanation: {
      en: "GDP measures economic output.",
      fr: "Le PIB mesure la production économique."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "a318921d-6d0d-4b19-b3c9-640d6a62d1fd", // 22
    difficulty: 3,
    question: { en: "What do we call a general increase in prices?", fr: "Quel terme décrit la hausse générale des prix des biens et services dans une économie ?" },
    answers: {
      en: ["Inflation", "Deflation", "Stagflation", "Recession"],
      fr: ["L'inflation", "La déflation", "La stagflation", "La récession"]
    },
    correct: 0,
    explanation: {
      en: "Inflation is a rise in prices.",
      fr: "L'inflation est une augmentation générale des prix."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "6c68acc9-e274-4c01-b1b6-8f86511bd997", // 23
    difficulty: 5,
    question: { en: "Which institution sets monetary policy in the Eurozone?", fr: "Quelle institution est responsable de la politique monétaire au sein de la zone euro ?" },
    answers: {
      en: ["ECB", "Bank of France", "Bank of England", "World Bank"],
      fr: ["La Banque centrale européenne (BCE)", "La Banque de France", "La Banque d'Angleterre", "La Banque mondiale"]
    },
    correct: 0,
    explanation: {
      en: "The ECB sets the Eurozone’s monetary policy.",
      fr: "La BCE définit la politique monétaire de la zone euro."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "cf65db80-37fb-425f-b809-960445b320b0", // 24
    difficulty: 6,
    question: { en: "Which economic theory advocates minimal state intervention in markets?", fr: "Quel est le nom de la théorie économique qui prône la non-intervention de l'État dans les marchés ?" },
    answers: {
      en: ["Economic liberalism", "Keynesianism", "Marxism", "Protectionism"],
      fr: ["Le libéralisme économique", "Le keynésianisme", "Le marxisme", "Le protectionnisme"]
    },
    correct: 0,
    explanation: {
      en: "Liberalism favors free markets.",
      fr: "Le libéralisme économique favorise les marchés libres."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "da9dad58-70e2-416a-8690-84abb0e2aacf", // 25
    difficulty: 4,
    question: { en: "What term describes a long period of economic slowdown and high unemployment?", fr: "Quel terme désigne une période prolongée de ralentissement économique et de forte hausse du chômage ?" },
    answers: {
      en: ["Economic depression", "Growth", "Boom", "Expansion"],
      fr: ["La dépression économique", "La croissance", "Le boom économique", "L'expansion"]
    },
    correct: 0,
    explanation: {
      en: "A depression is a severe downturn.",
      fr: "Une dépression est une forte baisse de l'activité économique."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "b162a558-25d8-4116-b217-cc9b3bf4d7a6", // 26
    difficulty: 7,
    question: { en: "Which international institution loans money to developing countries?", fr: "Quelle institution internationale octroie des prêts aux pays en développement pour lutter contre la pauvreté ?" },
    answers: {
      en: ["World Bank", "IMF", "WTO", "ECB"],
      fr: ["La Banque mondiale", "Le FMI", "L'OMC", "La BCE"]
    },
    correct: 0,
    explanation: {
      en: "The World Bank gives loans to reduce poverty.",
      fr: "La Banque mondiale accorde des prêts pour réduire la pauvreté."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "2e150a61-c9f5-422a-af35-cdc9a8b33f46", // 27
    difficulty: 5,
    question: { en: "What is the difference between a country's imports and exports called?", fr: "Comment appelle-t-on la différence entre les importations et les exportations d'un pays ?" },
    answers: {
      en: ["Trade balance", "GDP", "Exchange rate", "Public debt"],
      fr: ["La balance commerciale", "Le PIB", "Le taux de change", "La dette publique"]
    },
    correct: 0,
    explanation: {
      en: "The trade balance is exports minus imports.",
      fr: "La balance commerciale est la différence entre exportations et importations."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "8977aaaf-eb3f-43ae-8a24-97444df3f76c", // 28
    difficulty: 4,
    question: { en: "Which international body aims to facilitate trade?", fr: "Quel organisme international a pour but de faciliter le commerce entre les pays ?" },
    answers: {
      en: ["WTO", "IMF", "OECD", "ILO"],
      fr: ["L'Organisation mondiale du commerce (OMC)", "Le FMI", "L'OCDE", "L'OIT"]
    },
    correct: 0,
    explanation: {
      fr: "L’Organisation mondiale du commerce (OMC) encadre le commerce international en établissant des règles communes à ses pays membres. Créée en 1995 par l’Accord de Marrakech, elle succède au GATT. Grâce à ce cadre réglementaire, l’OMC facilite la régulation des échanges commerciaux et la résolution des différends entre États membres.",
      en: "The World Trade Organization (WTO) regulates international trade by establishing common rules among its member countries. Created in 1995 by the Marrakesh Agreement, it succeeded the GATT. Through this regulatory framework, the WTO facilitates the regulation of trade and the resolution of disputes between member states."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "0cb99024-1267-4224-a1a4-4d38b453ad72", // 29
    difficulty: 6,
    question: { en: "What do we call the inability of a borrower to repay debt?", fr: "Quel terme décrit l'incapacité d'un emprunteur à rembourser sa dette ?" },
    answers: {
      en: ["Default", "Inflation", "Sovereign debt", "Devaluation"],
      fr: ["Le défaut de paiement", "L'inflation", "La dette souveraine", "La dévaluation"]
    },
    correct: 0,
    explanation: {
      en: "Default occurs when debt can't be repaid.",
      fr: "Le défaut de paiement survient lorsqu'on ne peut plus rembourser sa dette."
    },
    tags: ["ECONOMY"],
  },
  {
    id: "5d4fe8fa-a3dd-4bd7-a377-11f7e410bbf8", // 30
    difficulty: 2,
    question: { en: "What is the common currency used by most EU countries?", fr: "Quel est le nom de la monnaie commune utilisée par la majorité des pays de l'Union européenne ?" },
    answers: {
      en: ["Euro", "Dollar", "Pound", "Swiss franc"],
      fr: ["L'euro", "Le dollar", "La livre sterling", "Le franc suisse"]
    },
    correct: 0,
    explanation: {
      en: "The euro is the common currency.",
      fr: "L'euro est la monnaie commune de la zone euro."
    },
    tags: ["ECONOMY"],
  },

  // SCIENCE (TagEnum.SCIENCE) x10
  {
    id: "0efacd66-fc30-473c-9435-de31e8a0704b", // 31
    difficulty: 2,
    question: { en: "Which subatomic particle carries a negative charge?", fr: "Quelle est la particule subatomique portant une charge négative ?" },
    answers: {
      en: ["Electron", "Proton", "Neutron", "Quark"],
      fr: ["L'électron", "Le proton", "Le neutron", "Le quark"]
    },
    correct: 0,
    explanation: {
      en: "Electrons have a negative charge.",
      fr: "L'électron possède une charge négative."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "333ecc29-7b55-4a45-997d-d46b413d4955", // 32
    difficulty: 4,
    question: { en: "What optical phenomenon separates white light into a spectrum of colors?", fr: "Quel phénomène optique explique la séparation de la lumière blanche en un spectre de couleurs ?" },
    answers: {
      en: ["Dispersion", "Reflection", "Refraction", "Diffraction"],
      fr: ["La dispersion", "La réflexion", "La réfraction", "La diffraction"]
    },
    correct: 0,
    explanation: {
      en: "Dispersion splits light into colors.",
      fr: "La dispersion décompose la lumière blanche en couleurs."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "75ec1cc4-d50e-4195-93a3-19f9e97ff22d", // 33
    difficulty: 3,
    question: { en: "Which molecule is the main energy source for living cells?", fr: "Quelle molécule est la principale source d'énergie pour les cellules vivantes ?" },
    answers: {
      en: ["Glucose", "CO2", "Nitrogen", "Methane"],
      fr: ["Le glucose", "Le dioxyde de carbone", "L'azote", "Le méthane"]
    },
    correct: 0,
    explanation: {
      en: "Glucose is the main energy source.",
      fr: "Le glucose est la principale source d'énergie des cellules."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "4e1e4a4e-1dfa-47dd-a3c6-23025c9b7111", // 34
    difficulty: 5,
    question: { en: "Which scientist proposed the theory of special relativity in 1905?", fr: "Quel scientifique a proposé la théorie de la relativité restreinte en 1905 ?" },
    answers: {
      en: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo"],
      fr: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galilée"]
    },
    correct: 0,
    explanation: {
      en: "Einstein introduced special relativity.",
      fr: "Einstein a introduit la relativité restreinte."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "94f7cc38-8edc-419f-b5b8-dc667b1dea65", // 35
    difficulty: 1,
    question: { en: "Which science studies living beings and their environment?", fr: "Comment appelle-t-on la science qui étudie les êtres vivants et leur environnement ?" },
    answers: {
      en: ["Biology", "Chemistry", "Physics", "Geology"],
      fr: ["La biologie", "La chimie", "La physique", "La géologie"]
    },
    correct: 0,
    explanation: {
      en: "Biology studies living organisms.",
      fr: "La biologie étudie les êtres vivants."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "2c02b1be-e694-416d-a73c-8fbc74e456ea", // 36
    difficulty: 2,
    question: { en: "Which organ pumps blood in the human body?", fr: "Quel organe est responsable du pompage du sang dans le corps humain ?" },
    answers: {
      en: ["Heart", "Liver", "Kidney", "Lung"],
      fr: ["Le cœur", "Le foie", "Le rein", "Le poumon"]
    },
    correct: 0,
    explanation: {
      en: "The heart pumps blood.",
      fr: "Le cœur pompe le sang."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "beb4300b-39bf-4e05-866b-a47f745d6fd7", // 37
    difficulty: 3,
    question: { en: "Which planet is closest to the Sun?", fr: "Quelle est la planète la plus proche du Soleil ?" },
    answers: {
      en: ["Mercury", "Venus", "Earth", "Mars"],
      fr: ["Mercure", "Vénus", "Terre", "Mars"]
    },
    correct: 0,
    explanation: {
      en: "Mercury is closest to the Sun.",
      fr: "Mercure est la plus proche du Soleil."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "d7ddd71a-7267-4c66-b7cf-50eea517b5eb", // 38
    difficulty: 6,
    question: { en: "What natural phenomenon occurs when meteoroids burn in the atmosphere?", fr: "Quel phénomène naturel correspond à la chute de météorites traversant l'atmosphère ?" },
    answers: {
      en: ["Shooting stars", "Auroras", "Eclipses", "Rainbows"],
      fr: ["Les étoiles filantes", "Les aurores boréales", "Les éclipses", "Les arcs-en-ciel"]
    },
    correct: 0,
    explanation: {
      en: "Shooting stars are meteors.",
      fr: "Les étoiles filantes sont des météores."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "2bac0d18-a821-4e2e-9d07-fa787c06ab17", // 39
    difficulty: 2,
    question: { en: "Which gas is most abundant in Earth's atmosphere?", fr: "Quel gaz est le plus abondant dans l'atmosphère terrestre ?" },
    answers: {
      en: ["Nitrogen", "Oxygen", "CO2", "Argon"],
      fr: ["L'azote", "L'oxygène", "Le dioxyde de carbone", "L'argon"]
    },
    correct: 0,
    explanation: {
      en: "About 78% of air is nitrogen.",
      fr: "Environ 78% de l'air est composé d'azote."
    },
    tags: ["SCIENCE"],
  },
  {
    id: "9e4eaed6-84ae-4259-9ec4-49deeb4ffa63", // 40
    difficulty: 4,
    question: { en: "What is a group of stars forming a pattern in the sky called?", fr: "Quel nom donne-t-on à un groupement d'étoiles formant une figure particulière dans le ciel ?" },
    answers: {
      en: ["Constellation", "Galaxy", "Nebula", "Globular cluster"],
      fr: ["Une constellation", "Une galaxie", "Une nébuleuse", "Un amas globulaire"]
    },
    correct: 0,
    explanation: {
      en: "A constellation is a star pattern.",
      fr: "Une constellation est un motif d'étoiles."
    },
    tags: ["SCIENCE"],
  },

  // HISTOIRE (TagEnum.HISTORY) x10
  {
    id: "d19da6c3-43e0-46b0-83e1-b2a175be461f", // 41
    difficulty: 3,
    question: { en: "Which revolution began in France in 1789?", fr: "Quelle révolution a commencé en 1789 en France ?" },
    answers: {
      en: ["French Revolution", "American Revolution", "Industrial Revolution", "Russian Revolution"],
      fr: ["La Révolution française", "La Révolution américaine", "La Révolution industrielle", "La Révolution russe"]
    },
    correct: 0,
    explanation: {
      en: "The French Revolution started in 1789.",
      fr: "La Révolution française débuta en 1789."
    },
    tags: ["HISTORY"],
  },
  {
    id: "5bc9820f-fb8a-4e15-9ee6-182ea49fef9c", // 42
    difficulty: 5,
    question: { en: "Who was the first Roman Emperor?", fr: "Qui était le premier empereur romain ?" },
    answers: {
      en: ["Augustus", "Julius Caesar", "Nero", "Caligula"],
      fr: ["Auguste", "Jules César", "Néron", "Caligula"]
    },
    correct: 0,
    explanation: {
      en: "Augustus was the first Roman Emperor.",
      fr: "Auguste fut le premier empereur romain."
    },
    tags: ["HISTORY"],
  },
  {
    id: "57091688-0e0f-45b5-9286-976ee2141af2", // 43
    difficulty: 6,
    question: { en: "Which treaty ended WWI in 1919?", fr: "Quel traité signé en 1919 a mis fin à la Première Guerre mondiale ?" },
    answers: {
      en: ["Treaty of Versailles", "Brest-Litovsk", "Trianon", "Sevres"],
      fr: ["Le traité de Versailles", "Le traité de Brest-Litovsk", "Le traité de Trianon", "Le traité de Sèvres"]
    },
    correct: 0,
    explanation: {
      en: "The Treaty of Versailles ended WWI.",
      fr: "Le traité de Versailles mit fin à la Première Guerre mondiale."
    },
    tags: ["HISTORY"],
  },
  {
    id: "55b01c03-0c64-41d2-93f8-763e66de9012", // 44
    difficulty: 4,
    question: { en: "Which Italian explorer 'discovered' America in 1492?", fr: "Quel explorateur italien est connu pour avoir 'découvert' l'Amérique en 1492 ?" },
    answers: {
      en: ["Christopher Columbus", "Vasco da Gama", "Magellan", "Amerigo Vespucci"],
      fr: ["Christophe Colomb", "Vasco de Gama", "Fernand de Magellan", "Amerigo Vespucci"]
    },
    correct: 0,
    explanation: {
      en: "Columbus arrived in the Americas in 1492.",
      fr: "Christophe Colomb arriva en Amérique en 1492."
    },
    tags: ["HISTORY"],
  },
  {
    id: "5cd2199a-3719-4585-ae33-4f154ed83dab", // 45
    difficulty: 3,
    question: { en: "Which revolution led to the independence of the United States?", fr: "Quelle révolution a conduit à l'indépendance des États-Unis ?" },
    answers: {
      en: ["American War of Independence", "French Revolution", "Russian Revolution", "Wars of the Roses"],
      fr: ["La Guerre d'Indépendance américaine", "La Révolution française", "La Révolution russe", "La Guerre des Deux-Roses"]
    },
    correct: 0,
    explanation: {
      en: "The American War of Independence (1775-1783).",
      fr: "La Guerre d'Indépendance américaine (1775-1783)."
    },
    tags: ["HISTORY"],
  },
  {
    id: "24845ffe-4a23-4c6a-81a2-73f50013b6f6", // 46
    difficulty: 2,
    question: { en: "Which French military leader crowned himself emperor in 1804?", fr: "Qui était le chef militaire français couronné empereur en 1804 ?" },
    answers: {
      en: ["Napoleon Bonaparte", "Louis XIV", "Charlemagne", "Philip II"],
      fr: ["Napoléon Bonaparte", "Louis XIV", "Charlemagne", "Philippe Auguste"]
    },
    correct: 0,
    explanation: {
      en: "Napoleon crowned himself Emperor in 1804.",
      fr: "Napoléon Bonaparte s'est couronné Empereur en 1804."
    },
    tags: ["HISTORY"],
  },
  {
    id: "7789d85b-2a2b-43ed-9e00-41debcc52a01", // 47
    difficulty: 4,
    question: { en: "Which wall, a symbol of the Cold War, fell in 1989?", fr: "Quel mur, symbole de la Guerre froide, est tombé en 1989 ?" },
    answers: {
      en: ["Berlin Wall", "Trench Wall", "Great Wall of China", "Wall of Federates"],
      fr: ["Le mur de Berlin", "Le mur de la Tranchée", "La Grande Muraille de Chine", "Le mur des Fédérés"]
    },
    correct: 0,
    explanation: {
      en: "The Berlin Wall fell in 1989.",
      fr: "Le mur de Berlin est tombé en 1989."
    },
    tags: ["HISTORY"],
  },
  {
    id: "41a7a41c-9455-46ed-bc72-81f649b663df", // 48
    difficulty: 1,
    question: { en: "Which ancient civilization built the Giza pyramids?", fr: "Quelle civilisation ancienne a construit les pyramides de Gizeh ?" },
    answers: {
      en: ["Ancient Egypt", "Ancient Greece", "Mayas", "Romans"],
      fr: ["L'Égypte antique", "La Grèce antique", "Les Mayas", "Les Romains"]
    },
    correct: 0,
    explanation: {
      en: "The pyramids of Giza were built by ancient Egyptians.",
      fr: "Les Égyptiens de l'Antiquité ont construit les pyramides de Gizeh."
    },
    tags: ["HISTORY"],
  },
  {
    id: "264eb2a8-9212-42e6-bea0-d15211a2eb52", // 49
    difficulty: 5,
    question: { en: "Which pre-Columbian empire was centered in present-day Peru?", fr: "Quel empire précolombien était centré sur l'actuel Pérou ?" },
    answers: {
      en: ["Inca Empire", "Aztec Empire", "Maya Empire", "Toltec Empire"],
      fr: ["L'Empire inca", "L'Empire aztèque", "L'Empire maya", "L'Empire tolteque"]
    },
    correct: 0,
    explanation: {
      en: "The Inca Empire was in the Andes region.",
      fr: "L'Empire inca s'étendait dans la région andine."
    },
    tags: ["HISTORY"],
  },
  {
    id: "ace2105a-a0e1-45bb-a3a2-daea7343f410", // 50
    difficulty: 3,
    question: { en: "What happened on July 14, 1789, in France?", fr: "Quel événement historique s'est produit le 14 juillet 1789 en France ?" },
    answers: {
      en: ["Storming of the Bastille", "Tuileries take", "Tennis Court Oath", "Flight to Varennes"],
      fr: ["La prise de la Bastille", "La prise des Tuileries", "Le Serment du Jeu de Paume", "La fuite à Varennes"]
    },
    correct: 0,
    explanation: {
      en: "The Bastille was stormed, a key event.",
      fr: "La prise de la Bastille fut un événement clé de la Révolution française."
    },
    tags: ["HISTORY"],
  },

  // GEOGRAPHIE (TagEnum.GEOGRAPHY) x10
  {
    id: "d125f7e4-7d61-4e94-a23e-e2bfae61b870", // 51
    difficulty: 2,
    question: { en: "What is the largest hot desert in the world?", fr: "Quel est le plus grand désert chaud du monde ?" },
    answers: {
      en: ["Sahara", "Gobi", "Kalahari", "Sonora"],
      fr: ["Le Sahara", "Le Gobi", "Le Kalahari", "Le Sonora"]
    },
    correct: 0,
    explanation: {
      en: "The Sahara is the largest hot desert.",
      fr: "Le Sahara est le plus grand désert chaud."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "fef197f9-1ae8-4245-86fc-295a83837cff", // 52
    difficulty: 3,
    question: { en: "Which country has the largest area in the world?", fr: "Quel pays possède la plus grande superficie au monde ?" },
    answers: {
      en: ["Russia", "Canada", "China", "USA"],
      fr: ["La Russie", "Le Canada", "La Chine", "Les États-Unis"]
    },
    correct: 0,
    explanation: {
      en: "Russia is the largest by area.",
      fr: "La Russie est le pays le plus vaste."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "0ef59484-0ca4-468e-bc8f-852cfcec42e2", // 53
    difficulty: 4,
    question: { en: "Which continent hosts the Amazon rainforest?", fr: "Quel continent abrite la plus grande forêt tropicale, l'Amazonie ?" },
    answers: {
      en: ["South America", "Africa", "Asia", "Oceania"],
      fr: ["L'Amérique du Sud", "L'Afrique", "L'Asie", "L'Océanie"]
    },
    correct: 0,
    explanation: {
      en: "The Amazon is in South America.",
      fr: "L'Amazonie se trouve en Amérique du Sud."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "e004ebd9-57e4-45eb-b060-d2b1eec2d23e", // 54
    difficulty: 3,
    question: { en: "Which river is considered the longest in the world?", fr: "Quel fleuve est le plus long du monde ?" },
    answers: {
      en: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      fr: ["Le Nil", "L'Amazone", "Le Yangtsé", "Le Mississippi"]
    },
    correct: 0,
    explanation: {
      en: "The Nile is often considered the longest.",
      fr: "Le Nil est souvent considéré comme le plus long fleuve."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "6ebb2ed5-53a3-4383-9d90-c9851593fb18", // 55
    difficulty: 5,
    question: { en: "Which mountain range is the highest in the world?", fr: "Quelle chaîne de montagnes est la plus élevée du monde ?" },
    answers: {
      en: ["Himalayas", "Andes", "Alps", "Rockies"],
      fr: ["L'Himalaya", "Les Andes", "Les Alpes", "Les Rocheuses"]
    },
    correct: 0,
    explanation: {
      en: "The Himalayas contain Mount Everest.",
      fr: "L'Himalaya abrite le mont Everest."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "59dfd54c-931e-4076-86cb-15164e7ca57c", // 56
    difficulty: 6,
    question: { en: "Which sea is bordered by Egypt, Sudan, Eritrea, and Djibouti?", fr: "Quelle mer est bordée par l'Égypte, le Soudan, l'Érythrée et Djibouti, entre autres ?" },
    answers: {
      en: ["Red Sea", "Black Sea", "Caspian Sea", "Arabian Sea"],
      fr: ["La mer Rouge", "La mer Noire", "La mer Caspienne", "La mer d'Arabie"]
    },
    correct: 0,
    explanation: {
      en: "The Red Sea is located between Africa and Asia.",
      fr: "La mer Rouge se situe entre l'Afrique et l'Asie."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "a125d94b-73c5-4125-9ae1-6a7c186ba6dc", // 57
    difficulty: 3,
    question: { en: "Which country consists of over 17,000 islands, including Java and Sumatra?", fr: "Quel pays est composé de plus de 17 000 îles, dont Java et Sumatra ?" },
    answers: {
      en: ["Indonesia", "Philippines", "Japan", "Maldives"],
      fr: ["L'Indonésie", "Les Philippines", "Le Japon", "Les Maldives"]
    },
    correct: 0,
    explanation: {
      en: "Indonesia is an archipelago with over 17,000 islands.",
      fr: "L'Indonésie est un archipel de plus de 17 000 îles."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "f043d10d-42b4-4b78-97b1-cf3dbc6454ae", // 58
    difficulty: 2,
    question: { en: "Which language is the most spoken in Brazil?", fr: "Quelle langue est la plus parlée au Brésil ?" },
    answers: {
      en: ["Portuguese", "Spanish", "English", "French"],
      fr: ["Le portugais", "L'espagnol", "L'anglais", "Le français"]
    },
    correct: 0,
    explanation: {
      en: "Portuguese is the official language of Brazil.",
      fr: "Le portugais est la langue officielle du Brésil."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "ff272f56-562c-4678-ba4b-1e83d326dcc6", // 59
    difficulty: 4,
    question: { en: "Which strait separates Europe from Africa?", fr: "Quel détroit sépare l'Europe de l'Afrique ?" },
    answers: {
      en: ["Strait of Gibraltar", "Bering Strait", "Magellan Strait", "Malacca Strait"],
      fr: ["Le détroit de Gibraltar", "Le détroit de Béring", "Le détroit de Magellan", "Le détroit de Malacca"]
    },
    correct: 0,
    explanation: {
      en: "The Strait of Gibraltar separates Europe and Africa.",
      fr: "Le détroit de Gibraltar sépare l'Europe de l'Afrique."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "6ad0f641-f216-4261-9f44-269d39144534", // 60
    difficulty: 5,
    question: { en: "Which capital city lies on the Danube River?", fr: "Quelle capitale se trouve au bord du fleuve Danube ?" },
    answers: {
      en: ["Budapest", "Rome", "London", "Madrid"],
      fr: ["Budapest", "Rome", "Londres", "Madrid"]
    },
    correct: 0,
    explanation: {
      en: "Budapest is located on the Danube.",
      fr: "Budapest est située sur le Danube."
    },
    tags: ["GEOGRAPHY"],
  },
  {
    id: "bad79087-db97-4ab9-85d2-cc39c4e90988",
    difficulty: 4,
    question: {
      en: "Who wrote the philosophical work 'Beyond Good and Evil'?",
      fr: "Qui a écrit l'œuvre philosophique 'Par-delà le bien et le mal' ?"
    },
    answers: {
      en: ["Friedrich Nietzsche", "Arthur Schopenhauer", "Immanuel Kant", "Georg Wilhelm Friedrich Hegel"],
      fr: ["Friedrich Nietzsche", "Arthur Schopenhauer", "Immanuel Kant", "Georg Wilhelm Friedrich Hegel"]
    },
    correct: 0,
    explanation: {
      en: "'Beyond Good and Evil' was written by the German philosopher Friedrich Nietzsche and published in 1886.",
      fr: "'Par-delà le bien et le mal' a été écrit par le philosophe allemand Friedrich Nietzsche et publié en 1886."
    },
    tags: [TagEnum.PHILOSOPHY],
  },
  {
    id: "95ca2419-1488-4ab8-86c4-3aeadcdf43fb",
    difficulty: 2,
    question: {
      en: "Which musical instrument is famous for its use by Jimi Hendrix?",
      fr: "Quel instrument de musique est célèbre pour avoir été utilisé par Jimi Hendrix ?"
    },
    answers: {
      en: ["Electric guitar", "Piano", "Violin", "Saxophone"],
      fr: ["La guitare électrique", "Le piano", "Le violon", "Le saxophone"]
    },
    correct: 0,
    explanation: {
      en: "Jimi Hendrix was renowned for his innovative and virtuoso electric guitar playing.",
      fr: "Jimi Hendrix était réputé pour son jeu de guitare électrique innovant et virtuose."
    },
    tags: [TagEnum.MUSIC],
  },
  {
    id: "fd5f0650-7579-4131-b54e-cf58945568b5",
    difficulty: 5,
    question: {
      en: "What is the name of the space telescope launched by NASA to observe distant galaxies and stars?",
      fr: "Quel est le nom du télescope spatial lancé par la NASA pour observer les galaxies et étoiles lointaines ?"
    },
    answers: {
      en: ["Hubble Space Telescope", "James Webb Observatory", "Kepler Telescope", "Chandra X-Ray Telescope"],
      fr: ["Le télescope spatial Hubble", "L’observatoire James Webb", "Le télescope Kepler", "Le télescope Chandra"]
    },
    correct: 0,
    explanation: {
      en: "The Hubble Space Telescope, launched in 1990, has provided unparalleled images of distant celestial objects.",
      fr: "Le télescope spatial Hubble, lancé en 1990, a fourni des images sans précédent d'objets célestes lointains."
    },
    tags: [TagEnum.SCIENCE],
  },
  {
    id: "dee90fdb-c99c-4050-947c-5d7407cd5b19",
    difficulty: 3,
    question: {
      en: "In which country is Mount Kilimanjaro located?",
      fr: "Dans quel pays se trouve le Mont Kilimandjaro ?"
    },
    answers: {
      en: ["Tanzania", "Kenya", "Uganda", "Rwanda"],
      fr: ["La Tanzanie", "Le Kenya", "L'Ouganda", "Le Rwanda"]
    },
    correct: 0,
    explanation: {
      en: "Mount Kilimanjaro, Africa’s highest peak, is located in Tanzania.",
      fr: "Le Mont Kilimandjaro, le plus haut sommet d'Afrique, se trouve en Tanzanie."
    },
    tags: [TagEnum.GEOGRAPHY],
  },
  {
    id: "67fc5bd8-a411-4c8e-b32f-7fdc4658924a",
    difficulty: 6,
    question: {
      en: "Which Italian director directed the film 'La Dolce Vita'?",
      fr: "Quel réalisateur italien a réalisé le film 'La Dolce Vita' ?"
    },
    answers: {
      en: ["Federico Fellini", "Luchino Visconti", "Michelangelo Antonioni", "Sergio Leone"],
      fr: ["Federico Fellini", "Luchino Visconti", "Michelangelo Antonioni", "Sergio Leone"]
    },
    correct: 0,
    explanation: {
      en: "'La Dolce Vita' (1960) was directed by Federico Fellini, a key figure in Italian cinema.",
      fr: "'La Dolce Vita' (1960) a été réalisé par Federico Fellini, une figure majeure du cinéma italien."
    },
    tags: [TagEnum.CINEMA],
  },
  {
    id: "44a1464f-3b02-4e8c-a643-7ba5c5a11a4a",
    difficulty: 4,
    question: {
      en: "Who wrote the novel 'Crime and Punishment'?",
      fr: "Qui a écrit le roman 'Crime et Châtiment' ?"
    },
    answers: {
      en: ["Fyodor Dostoevsky", "Leo Tolstoy", "Ivan Turgenev", "Nikolai Gogol"],
      fr: ["Fiodor Dostoïevski", "Léon Tolstoï", "Ivan Tourgueniev", "Nicolas Gogol"]
    },
    correct: 0,
    explanation: {
      en: "'Crime and Punishment' is a novel by the Russian author Fyodor Dostoevsky, published in 1866.",
      fr: "'Crime et Châtiment' est un roman de l'écrivain russe Fiodor Dostoïevski, publié en 1866."
    },
    tags: [TagEnum.LITERATURE],
  },
  {
    id: "b07bb7f4-7e1f-4f7a-9a4a-360c5e3dbca2",
    difficulty: 2,
    question: {
      en: "In a computer, which component is responsible for executing instructions?",
      fr: "Dans un ordinateur, quel composant est responsable de l'exécution des instructions ?"
    },
    answers: {
      en: ["CPU", "RAM", "Hard Drive", "GPU"],
      fr: ["Le CPU", "La RAM", "Le disque dur", "Le GPU"]
    },
    correct: 0,
    explanation: {
      en: "The CPU (Central Processing Unit) executes instructions and processes data in a computer.",
      fr: "Le CPU (Central Processing Unit) exécute les instructions et traite les données dans un ordinateur."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "bb263d1b-1409-4c60-bd2a-27a70b11223b",
    difficulty: 7,
    question: {
      en: "Who is traditionally considered the 'father' of the Jewish, Christian, and Islamic faiths?",
      fr: "Qui est traditionnellement considéré comme le 'père' des religions juive, chrétienne et islamique ?"
    },
    answers: {
      en: ["Abraham", "Moses", "Noah", "Isaac"],
      fr: ["Abraham", "Moïse", "Noé", "Isaac"]
    },
    correct: 0,
    explanation: {
      en: "Abraham is regarded as a patriarch in Judaism, Christianity, and Islam.",
      fr: "Abraham est considéré comme un patriarche dans le judaïsme, le christianisme et l'islam."
    },
    tags: [TagEnum.RELIGION],
  },
  {
    id: "2f1c00d4-a991-4d62-a67d-0c90248d88db",
    difficulty: 3,
    question: {
      en: "Which empire did Genghis Khan establish in the 13th century?",
      fr: "Quel empire Gengis Khan a-t-il fondé au XIIIe siècle ?"
    },
    answers: {
      en: ["The Mongol Empire", "The Ottoman Empire", "The Persian Empire", "The Byzantine Empire"],
      fr: ["L'Empire mongol", "L'Empire ottoman", "L'Empire perse", "L'Empire byzantin"]
    },
    correct: 0,
    explanation: {
      en: "Genghis Khan founded the Mongol Empire, which became the largest contiguous land empire in history.",
      fr: "Gengis Khan fonda l'Empire mongol, qui devint le plus grand empire terrestre contigu de l'histoire."
    },
    tags: [TagEnum.HISTORY],
  },
  {
    id: "9547b6b1-b6ea-4fa5-9843-3da3d91f9c03",
    difficulty: 5,
    question: {
      en: "Which famous Italian sculptor created the statue of 'David'?",
      fr: "Quel célèbre sculpteur italien a réalisé la statue du 'David' ?"
    },
    answers: {
      en: ["Michelangelo", "Donatello", "Bernini", "Cellini"],
      fr: ["Michel-Ange", "Donatello", "Le Bernin", "Cellini"]
    },
    correct: 0,
    explanation: {
      en: "Michelangelo created the marble statue of 'David' between 1501 and 1504.",
      fr: "Michel-Ange a sculpté le 'David' en marbre entre 1501 et 1504."
    },
    tags: [TagEnum.ART],
  },
  {
    id: "8d6e01c6-d5c8-477c-9b69-8abfe806e075",
    difficulty: 3,
    question: {
      en: "In 2020 which event led to the postponement of the Tokyo Summer Olympics?",
      fr: "En 2020, quel événement a conduit au report des Jeux olympiques d'été de Tokyo ?"
    },
    answers: {
      en: ["COVID-19 pandemic", "Economic crisis", "Political unrest", "Natural disaster"],
      fr: ["La pandémie de COVID-19", "La crise économique", "Les troubles politiques", "La catastrophe naturelle"]
    },
    correct: 0,
    explanation: {
      en: "The COVID-19 pandemic led to the postponement of the Tokyo Summer Olympics from 2020 to 2021.",
      fr: "La pandémie de COVID-19 a conduit au report des Jeux olympiques d'été de Tokyo de 2020 à 2021."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "9ba43944-2bb5-4042-9ba7-884b1b1d8a0b",
    difficulty: 2,
    question: {
      en: "On 2024 Games Awards wich game won the 'Most anticipated game' award?",
      fr: "Aux Game Awards 2024 quel jeu a remporté le prix du 'Jeu le plus attendu' ?"
    },
    answers: {
      en: ["Grand Theft Auto VI", "The Elder Scrolls VI", "Cyberpunk 2077", "Halo Infinite"],
      fr: ["Grand Theft Auto VI", "The Elder Scrolls VI", "Cyberpunk 2077", "Halo Infinite"]
    },
    correct: 0,
    explanation: {
      en: "Grand Theft Auto VI won the 'Most anticipated game' award at the 2024 Game Awards.",
      fr: "Grand Theft Auto VI a remporté le prix du 'Jeu le plus attendu' aux Game Awards 2024."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "ea760cbd-bdbc-4f4c-913e-17123d1e7d01",
    difficulty: 3,
    question: {
      en: "Which body of the United Nations is responsible for maintaining international peace and security?",
      fr: "Quel organe de l'ONU est chargé du maintien de la paix et de la sécurité internationales ?"
    },
    answers: {
      en: ["The Security Council", "The General Assembly", "The Secretariat", "The Economic and Social Council"],
      fr: ["Le Conseil de sécurité", "L'Assemblée générale", "Le Secrétariat", "Le Conseil économique et social"]
    },
    correct: 0,
    explanation: {
      en: "The UN Security Council is primarily responsible for maintaining international peace and security.",
      fr: "Le Conseil de sécurité de l'ONU est principalement responsable du maintien de la paix et de la sécurité internationales."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "1984b8f4-e3b3-4759-bbc1-037c37c27190",
    difficulty: 4,
    question: {
      en: "Which political ideology advocates a classless society and the abolition of private property?",
      fr: "Quelle idéologie politique prône une société sans classes et l'abolition de la propriété privée ?"
    },
    answers: {
      en: ["Communism", "Fascism", "Liberalism", "Conservatism"],
      fr: ["Le communisme", "Le fascisme", "Le libéralisme", "Le conservatisme"]
    },
    correct: 0,
    explanation: {
      en: "Communism, as theorized by Karl Marx and Friedrich Engels, aims to create a classless, stateless society.",
      fr: "Le communisme, théorisé par Karl Marx et Friedrich Engels, vise une société sans classes et sans État."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "f20dcf56-2f78-4819-9c53-ae2105c1bacf",
    difficulty: 5,
    question: {
      en: "What is the supreme law of the United States?",
      fr: "Quelle est la loi suprême des États-Unis ?"
    },
    answers: {
      en: ["The Constitution", "The Declaration of Independence", "The Bill of Rights", "The Federalist Papers"],
      fr: ["La Constitution", "La Déclaration d'Indépendance", "La Déclaration des Droits (Bill of Rights)", "Les Federalist Papers"]
    },
    correct: 0,
    explanation: {
      en: "The U.S. Constitution is the highest law of the United States.",
      fr: "La Constitution des États-Unis est la loi suprême du pays."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "14ef1229-b71c-4a35-9ad1-b9ec5edca4b0",
    difficulty: 2,
    question: {
      en: "What term describes a system in which power is divided between a central authority and constituent units?",
      fr: "Quel terme décrit un système où le pouvoir est partagé entre une autorité centrale et des entités constitutives ?"
    },
    answers: {
      en: ["Federalism", "Unitary", "Confederation", "Monarchy"],
      fr: ["Le fédéralisme", "L'État unitaire", "La confédération", "La monarchie"]
    },
    correct: 0,
    explanation: {
      en: "Federalism divides power between national and state governments.",
      fr: "Le fédéralisme divise le pouvoir entre le niveau national et les États ou provinces."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "ae82b3b6-a6a8-4c3c-bc29-a2945221fd7a",
    difficulty: 6,
    question: {
      en: "Which international organization was founded in 1949 as a military alliance to counter the Soviet Union?",
      fr: "Quelle organisation internationale, fondée en 1949, est une alliance militaire destinée à contrer l'Union soviétique ?"
    },
    answers: {
      en: ["NATO", "Warsaw Pact", "European Union", "ASEAN"],
      fr: ["L'OTAN", "Le Pacte de Varsovie", "L'Union européenne", "L'ASEAN"]
    },
    correct: 0,
    explanation: {
      en: "The North Atlantic Treaty Organization was created in 1949.",
      fr: "L'OTAN (Organisation du Traité de l'Atlantique Nord) a été créée en 1949."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "62e96674-762b-4ff3-a510-5ec775ef803a",
    difficulty: 3,
    question: {
      en: "Which political system is characterized by a single ruler who holds all power, often inherited?",
      fr: "Quel système politique est caractérisé par un seul dirigeant détenant tout le pouvoir, souvent héréditaire ?"
    },
    answers: {
      en: ["Absolute monarchy", "Republic", "Democracy", "Oligarchy"],
      fr: ["La monarchie absolue", "La république", "La démocratie", "L'oligarchie"]
    },
    correct: 0,
    explanation: {
      en: "An absolute monarchy invests power in one monarch.",
      fr: "Une monarchie absolue confère tout le pouvoir à un seul monarque."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "7cfccc67-cea7-4e2e-8b57-d5bdc098fb7b",
    difficulty: 4,
    question: {
      en: "Which treaty established the European Union in 1993?",
      fr: "Quel traité, entré en vigueur en 1993, a établi l'Union européenne ?"
    },
    answers: {
      en: ["The Maastricht Treaty", "The Treaty of Rome", "The Treaty of Lisbon", "The Treaty of Paris"],
      fr: ["Le Traité de Maastricht", "Le Traité de Rome", "Le Traité de Lisbonne", "Le Traité de Paris"]
    },
    correct: 0,
    explanation: {
      en: "The Maastricht Treaty created the EU in 1993.",
      fr: "Le Traité de Maastricht a créé l'UE en 1993."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "dd2c5f19-264f-4b3a-80bb-f9d4c8708796",
    difficulty: 5,
    question: {
      en: "Which concept refers to the right of a people to choose their own government?",
      fr: "Quel concept fait référence au droit d'un peuple de choisir son propre gouvernement ?"
    },
    answers: {
      en: ["Self-determination", "Nationalism", "Imperialism", "Colonialism"],
      fr: ["L'autodétermination", "Le nationalisme", "L'impérialisme", "Le colonialisme"]
    },
    correct: 0,
    explanation: {
      en: "Self-determination is a key principle in international law.",
      fr: "L'autodétermination est un principe clé du droit international."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "5fa447ef-c642-4e70-8d4a-ea12c767da12",
    difficulty: 2,
    question: {
      en: "In a parliamentary democracy, who is typically the head of government?",
      fr: "Dans une démocratie parlementaire, qui est généralement le chef du gouvernement ?"
    },
    answers: {
      en: ["Prime Minister", "President", "Monarch", "Governor"],
      fr: ["Le Premier ministre", "Le Président", "Le Monarque", "Le Gouverneur"]
    },
    correct: 0,
    explanation: {
      en: "In parliamentary systems, the Prime Minister leads the government.",
      fr: "Dans les systèmes parlementaires, le Premier ministre dirige le gouvernement."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "06bacfaa-3ddb-4443-bf21-ebc5fe18f425",
    difficulty: 7,
    question: {
      en: "Which term describes a government ruled by a small group of elites?",
      fr: "Quel terme décrit un gouvernement dirigé par un petit groupe d'élites ?"
    },
    answers: {
      en: ["Oligarchy", "Plutocracy", "Theocracy", "Democracy"],
      fr: ["L'oligarchie", "La ploutocratie", "La théocratie", "La démocratie"]
    },
    correct: 0,
    explanation: {
      en: "An oligarchy is controlled by a few powerful people.",
      fr: "Une oligarchie est contrôlée par un petit groupe de personnes puissantes."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "abbc72e6-cb58-4494-aec3-e3d90c0d9ce6",
    difficulty: 4,
    question: {
      en: "Which philosopher is known for the concept of the 'social contract' in political theory?",
      fr: "Quel philosophe est connu pour le concept de 'contrat social' en théorie politique ?"
    },
    answers: {
      en: ["Jean-Jacques Rousseau", "Thomas Hobbes", "John Locke", "Immanuel Kant"],
      fr: ["Jean-Jacques Rousseau", "Thomas Hobbes", "John Locke", "Immanuel Kant"]
    },
    correct: 0,
    explanation: {
      en: "Rousseau developed the idea of the social contract.",
      fr: "Rousseau a développé l'idée du contrat social."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "3ea811d4-a912-41fa-9df3-9c951cf86930",
    difficulty: 5,
    question: {
      en: "What name is given to the ideology that emphasizes free markets, limited government, and individual liberty?",
      fr: "Quel nom est donné à l'idéologie mettant l'accent sur le libre marché, un gouvernement limité et la liberté individuelle ?"
    },
    answers: {
      en: ["Classical liberalism", "Socialism", "Anarchism", "Mercantilism"],
      fr: ["Le libéralisme classique", "Le socialisme", "L'anarchisme", "Le mercantilisme"]
    },
    correct: 0,
    explanation: {
      en: "Classical liberalism values individual freedom and minimal state intervention.",
      fr: "Le libéralisme classique valorise la liberté individuelle et une intervention étatique minimale."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "a9464cb9-82a4-4cdb-8627-97f2f6193f66",
    difficulty: 6,
    question: {
      en: "Which body in the United Kingdom is the lower house of Parliament?",
      fr: "Quelle est la chambre basse du Parlement du Royaume-Uni ?"
    },
    answers: {
      en: ["House of Commons", "House of Lords", "Privy Council", "Scottish Parliament"],
      fr: ["La Chambre des communes", "La Chambre des lords", "Le Conseil privé", "Le Parlement écossais"]
    },
    correct: 0,
    explanation: {
      en: "The House of Commons is the UK's lower house.",
      fr: "La Chambre des communes est la chambre basse du Parlement britannique."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "749bc723-a1fb-47fa-a01c-e3f6dac9a605",
    difficulty: 3,
    question: {
      en: "What political system vests the supreme power in the people, who exercise it directly or through elected representatives?",
      fr: "Quel système politique confère le pouvoir suprême au peuple, qui l'exerce directement ou par des représentants élus ?"
    },
    answers: {
      en: ["Democracy", "Totalitarianism", "Monarchy", "Theocracy"],
      fr: ["La démocratie", "Le totalitarisme", "La monarchie", "La théocratie"]
    },
    correct: 0,
    explanation: {
      en: "Democracy is rule by the people.",
      fr: "La démocratie est le gouvernement du peuple."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "2ccdd867-b4d0-43cd-8c2f-8075916ba6dd",
    difficulty: 8,
    question: {
      en: "Which ancient Greek city-state is often considered the birthplace of democracy?",
      fr: "Quelle cité-État grecque antique est souvent considérée comme le berceau de la démocratie ?"
    },
    answers: {
      en: ["Athens", "Sparta", "Thebes", "Corinth"],
      fr: ["Athènes", "Sparte", "Thèbes", "Corinthe"]
    },
    correct: 0,
    explanation: {
      en: "Athens introduced early forms of direct democracy.",
      fr: "Athènes a introduit les premières formes de démocratie directe."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "bb01fd52-f926-4c63-b938-7e26761acba1",
    difficulty: 4,
    question: {
      en: "Which document, signed in 1215, limited the powers of the English monarch?",
      fr: "Quel document, signé en 1215, limita les pouvoirs du monarque anglais ?"
    },
    answers: {
      en: ["Magna Carta", "Bill of Rights", "Petition of Right", "Act of Settlement"],
      fr: ["La Magna Carta", "La Déclaration des Droits", "La Pétition des Droits", "L'Acte d'établissement"]
    },
    correct: 0,
    explanation: {
      en: "The Magna Carta is a cornerstone of constitutional governance.",
      fr: "La Magna Carta est une pierre angulaire de la gouvernance constitutionnelle."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "fcebac3a-9d56-4b79-a27c-e2ebaa6079eb",
    difficulty: 5,
    question: {
      en: "Which term refers to a policy of extending a country's power and influence through diplomacy or military force?",
      fr: "Quel terme désigne une politique d'expansion de la puissance et de l'influence d'un pays par la diplomatie ou la force militaire ?"
    },
    answers: {
      en: ["Imperialism", "Isolationism", "Neutrality", "Disarmament"],
      fr: ["L'impérialisme", "L'isolationnisme", "La neutralité", "Le désarmement"]
    },
    correct: 0,
    explanation: {
      en: "Imperialism often involves colonization and empire-building.",
      fr: "L'impérialisme implique souvent la colonisation et la construction d'empires."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "b20994bb-90f8-45ed-bd5f-79a30b3c2831",
    difficulty: 3,
    question: {
      en: "Which principle divides government authority into legislative, executive, and judicial branches?",
      fr: "Quel principe divise l'autorité gouvernementale en trois branches : législative, exécutive et judiciaire ?"
    },
    answers: {
      en: ["Separation of powers", "Checks and balances", "Federalism", "Rule of law"],
      fr: ["La séparation des pouvoirs", "Le système de freins et contrepoids", "Le fédéralisme", "L'État de droit"]
    },
    correct: 0,
    explanation: {
      en: "Montesquieu championed separation of powers.",
      fr: "Montesquieu a défendu la séparation des pouvoirs."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "c3d7b398-fa96-4572-a9a4-55ee3145cdb3",
    difficulty: 6,
    question: {
      en: "What term describes the absence of government and absolute freedom of the individual?",
      fr: "Quel terme décrit l'absence de gouvernement et la liberté absolue de l'individu ?"
    },
    answers: {
      en: ["Anarchy", "Democracy", "Theocracy", "Bureaucracy"],
      fr: ["L'anarchie", "La démocratie", "La théocratie", "La bureaucratie"]
    },
    correct: 0,
    explanation: {
      en: "Anarchy refers to a state without governing authority.",
      fr: "L'anarchie renvoie à une situation sans autorité gouvernementale."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "756d958a-362c-47b7-9eb3-e862785d7209",
    difficulty: 5,
    question: {
      en: "Which political ideology seeks to maintain traditional institutions and is resistant to sudden change?",
      fr: "Quelle idéologie politique vise à maintenir les institutions traditionnelles et résiste aux changements brusques ?"
    },
    answers: {
      en: ["Conservatism", "Socialism", "Anarchism", "Communism"],
      fr: ["Le conservatisme", "Le socialisme", "L'anarchisme", "Le communisme"]
    },
    correct: 0,
    explanation: {
      en: "Conservatism values tradition and stability.",
      fr: "Le conservatisme valorise la tradition et la stabilité."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "944b6262-56af-49dc-9a1f-af333274c80d",
    difficulty: 4,
    question: {
      en: "What is the name of the collective decision-making body of the European Union composed of member states' leaders?",
      fr: "Quel est le nom de l'organe décisionnel collectif de l'UE composé des dirigeants des États membres ?"
    },
    answers: {
      en: ["European Council", "European Commission", "European Parliament", "Council of the EU"],
      fr: ["Le Conseil européen", "La Commission européenne", "Le Parlement européen", "Le Conseil de l'UE"]
    },
    correct: 0,
    explanation: {
      en: "The European Council is made up of the heads of state or government of EU members.",
      fr: "Le Conseil européen réunit les chefs d'État ou de gouvernement des États membres de l'UE."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "8f19f219-f6a5-4c46-946d-06105903db54",
    difficulty: 7,
    question: {
      en: "Which Latin American revolutionary leader helped liberate Venezuela, Colombia, Ecuador, Peru, and Bolivia?",
      fr: "Quel leader révolutionnaire latino-américain a contribué à libérer le Venezuela, la Colombie, l'Équateur, le Pérou et la Bolivie ?"
    },
    answers: {
      en: ["Simón Bolívar", "José de San Martín", "Che Guevara", "Pancho Villa"],
      fr: ["Simón Bolívar", "José de San Martín", "Che Guevara", "Pancho Villa"]
    },
    correct: 0,
    explanation: {
      en: "Simón Bolívar was instrumental in the independence of several South American countries.",
      fr: "Simón Bolívar a joué un rôle clé dans l'indépendance de plusieurs pays d'Amérique du Sud."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "bbd80bc7-a25f-4544-8df6-6888a0978a15",
    difficulty: 3,
    question: {
      en: "Which branch of government is typically responsible for interpreting laws?",
      fr: "Quelle branche du gouvernement est généralement chargée d'interpréter les lois ?"
    },
    answers: {
      en: ["Judiciary", "Executive", "Legislative", "Bureaucracy"],
      fr: ["Le pouvoir judiciaire", "Le pouvoir exécutif", "Le pouvoir législatif", "La bureaucratie"]
    },
    correct: 0,
    explanation: {
      en: "The judiciary interprets and applies the law.",
      fr: "Le pouvoir judiciaire interprète et applique la loi."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "ea2bf7a6-3ea8-4cef-9f30-fc9826f7ef36",
    difficulty: 6,
    question: {
      en: "Which political ideology aims to establish a society based on common ownership and the absence of social classes?",
      fr: "Quelle idéologie politique vise à établir une société fondée sur la propriété commune et l'absence de classes sociales ?"
    },
    answers: {
      en: ["Communism", "Fascism", "Liberalism", "Social democracy"],
      fr: ["Le communisme", "Le fascisme", "Le libéralisme", "La social-démocratie"]
    },
    correct: 0,
    explanation: {
      en: "Communism seeks to eliminate classes and private property.",
      fr: "Le communisme cherche à éliminer les classes sociales et la propriété privée."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "54b775ec-e4a7-4f8c-9656-e750c98b7ae8",
    difficulty: 5,
    question: {
      en: "Which American political doctrine asserted US opposition to European colonization in the Americas?",
      fr: "Quelle doctrine politique américaine affirmait l'opposition des États-Unis à la colonisation européenne dans les Amériques ?"
    },
    answers: {
      en: ["The Monroe Doctrine", "The Truman Doctrine", "The Marshall Plan", "The Roosevelt Corollary"],
      fr: ["La doctrine Monroe", "La doctrine Truman", "Le plan Marshall", "Le corollaire Roosevelt"]
    },
    correct: 0,
    explanation: {
      en: "The Monroe Doctrine (1823) opposed European interference in the Americas.",
      fr: "La doctrine Monroe (1823) s'opposait à l'ingérence européenne dans les Amériques."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "f2637407-bac5-4c13-9d18-f08cd1bd4a57",
    difficulty: 4,
    question: {
      en: "Which concept in politics refers to the rule of law rather than of individuals?",
      fr: "Quel concept en politique fait référence à la primauté de la loi plutôt qu'au pouvoir des individus ?"
    },
    answers: {
      en: ["Rule of law", "Divine right", "Patronage", "Nepotism"],
      fr: ["L'État de droit", "Le droit divin", "Le clientélisme", "Le népotisme"]
    },
    correct: 0,
    explanation: {
      en: "The rule of law ensures that all, including leaders, are subject to the law.",
      fr: "L'État de droit garantit que tous, y compris les dirigeants, sont soumis à la loi."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "696ff909-5334-47eb-9bd1-574ebe9c4467",
    difficulty: 8,
    question: {
      en: "Which political regime is characterized by total state control, a single party, and suppression of opposition?",
      fr: "Quel régime politique se caractérise par un contrôle total de l'État, un parti unique et la répression de l'opposition ?"
    },
    answers: {
      en: ["Totalitarianism", "Constitutional monarchy", "Liberal democracy", "Anarchism"],
      fr: ["Le totalitarisme", "La monarchie constitutionnelle", "La démocratie libérale", "L'anarchisme"]
    },
    correct: 0,
    explanation: {
      en: "Totalitarian regimes control all aspects of life.",
      fr: "Les régimes totalitaires contrôlent tous les aspects de la vie."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "40995cd0-69fc-4af8-844c-56b556288991",
    difficulty: 2,
    question: {
      en: "Which global intergovernmental organization replaced the League of Nations in 1945?",
      fr: "Quelle organisation intergouvernementale mondiale a remplacé la Société des Nations en 1945 ?"
    },
    answers: {
      en: ["The United Nations", "NATO", "The OAU", "The European Union"],
      fr: ["L'Organisation des Nations Unies (ONU)", "L'OTAN", "L'OUA", "L'Union européenne"]
    },
    correct: 0,
    explanation: {
      en: "The UN was established in 1945 to promote peace and cooperation.",
      fr: "L'ONU fut créée en 1945 pour promouvoir la paix et la coopération."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "b78b269c-b0f1-4c2e-9dac-9f3fa547859d",
    difficulty: 5,
    question: {
      en: "Which French philosopher’s ideas influenced the separation of powers concept?",
      fr: "Les idées de quel philosophe français ont influencé le concept de séparation des pouvoirs ?"
    },
    answers: {
      en: ["Montesquieu", "Voltaire", "Rousseau", "Diderot"],
      fr: ["Montesquieu", "Voltaire", "Rousseau", "Diderot"]
    },
    correct: 0,
    explanation: {
      en: "Montesquieu's 'Spirit of the Laws' shaped modern political structures.",
      fr: "L'Esprit des lois de Montesquieu a façonné les structures politiques modernes."
    },
    tags: [TagEnum.POLITICS],
  },
  {
    id: "942b37ec-c75f-4480-aee2-7dd34950c7b1",
    difficulty: 7,
    question: {
      en: "Which term denotes the right to vote in political elections?",
      fr: "Quel terme désigne le droit de voter aux élections politiques ?"
    },
    answers: {
      en: ["Suffrage", "Mandate", "Census", "Veto"],
      fr: ["Le suffrage", "Le mandat", "Le recensement", "Le veto"]
    },
    correct: 0,
    explanation: {
      en: "Suffrage is the right to vote in elections.",
      fr: "Le suffrage est le droit de vote lors des élections."
    },
    tags: [TagEnum.POLITICS],
  }
];

// 50 Questions: TECHNOLOGY
const newTechnologyQuestions: Question[] = [
  {
    id: "9aaa24cc-857b-4122-9f44-bfe43aa16154",
    difficulty: 3,
    question: {
      en: "Which protocol is primarily used to send emails from a mail client to a mail server?",
      fr: "Quel protocole est principalement utilisé pour envoyer des e-mails d'un client de messagerie à un serveur ?"
    },
    answers: {
      en: ["SMTP", "POP3", "IMAP", "HTTP"],
      fr: ["SMTP", "POP3", "IMAP", "HTTP"]
    },
    correct: 0,
    explanation: {
      en: "SMTP (Simple Mail Transfer Protocol) is used for sending emails.",
      fr: "SMTP (Simple Mail Transfer Protocol) est utilisé pour l'envoi d'e-mails."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "1eec608d-361b-4fc7-bd67-bdfd3115b68b",
    difficulty: 4,
    question: {
      en: "Which programming language is primarily used for iOS app development alongside Swift?",
      fr: "Quel langage de programmation est principalement utilisé pour le développement iOS aux côtés de Swift ?"
    },
    answers: {
      en: ["Objective-C", "Java", "C#", "Kotlin"],
      fr: ["Objective-C", "Java", "C#", "Kotlin"]
    },
    correct: 0,
    explanation: {
      en: "Before Swift, Objective-C was the main language for iOS development.",
      fr: "Avant Swift, Objective-C était le langage principal pour le développement iOS."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "81acc0b3-27ef-4c50-bec6-cd73aac6e314",
    difficulty: 2,
    question: {
      en: "What does 'USB' stand for?",
      fr: "Que signifie 'USB' ?"
    },
    answers: {
      en: ["Universal Serial Bus", "Universal System Board", "Unified Service Bus", "Ultra Speed Bus"],
      fr: ["Universal Serial Bus", "Universal System Board", "Unified Service Bus", "Ultra Speed Bus"]
    },
    correct: 0,
    explanation: {
      en: "USB stands for Universal Serial Bus.",
      fr: "USB signifie Universal Serial Bus."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "6b6f182d-cdb1-4a15-86bc-a88b4c8e064a",
    difficulty: 5,
    question: {
      en: "Which company developed the Android operating system before being acquired by Google?",
      fr: "Quelle société a développé le système d'exploitation Android avant d'être rachetée par Google ?"
    },
    answers: {
      en: ["Android Inc.", "Apple", "Nokia", "BlackBerry"],
      fr: ["Android Inc.", "Apple", "Nokia", "BlackBerry"]
    },
    correct: 0,
    explanation: {
      en: "Android Inc. was acquired by Google in 2005.",
      fr: "Android Inc. a été rachetée par Google en 2005."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "06363e67-8f12-4e42-9f28-a3460cd2ce39",
    difficulty: 3,
    question: {
      en: "What is the main markup language for creating web pages?",
      fr: "Quel est le principal langage de balisage pour créer des pages Web ?"
    },
    answers: {
      en: ["HTML", "CSS", "XML", "PHP"],
      fr: ["HTML", "CSS", "XML", "PHP"]
    },
    correct: 0,
    explanation: {
      en: "HTML defines the structure of web pages.",
      fr: "HTML définit la structure des pages Web."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "98efefaa-634c-4d9a-9104-a2bcf1451095",
    difficulty: 2,
    question: {
      en: "Which company is famous for the Windows operating system?",
      fr: "Quelle entreprise est célèbre pour le système d'exploitation Windows ?"
    },
    answers: {
      en: ["Microsoft", "Apple", "Google", "IBM"],
      fr: ["Microsoft", "Apple", "Google", "IBM"]
    },
    correct: 0,
    explanation: {
      en: "Microsoft developed Windows.",
      fr: "Microsoft a développé Windows."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "8d41a436-4170-4c39-99b3-79cde7b28528",
    difficulty: 4,
    question: {
      en: "What does 'CPU' stand for?",
      fr: "Que signifie 'CPU' ?"
    },
    answers: {
      en: ["Central Processing Unit", "Computer Peripheral Unit", "Core Programming Utility", "Central Power Unit"],
      fr: ["Central Processing Unit", "Computer Peripheral Unit", "Core Programming Utility", "Central Power Unit"]
    },
    correct: 0,
    explanation: {
      en: "CPU is the brain of the computer.",
      fr: "Le CPU est le cerveau de l'ordinateur."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "f6f5d1d0-7f3e-4d81-bbb3-cced314b7bec",
    difficulty: 5,
    question: {
      en: "Which language is widely used for data analysis and machine learning?",
      fr: "Quel langage est largement utilisé pour l'analyse de données et le machine learning ?"
    },
    answers: {
      en: ["Python", "Ruby", "C", "Fortran"],
      fr: ["Python", "Ruby", "C", "Fortran"]
    },
    correct: 0,
    explanation: {
      en: "Python is popular in data science.",
      fr: "Python est populaire en data science."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "4aa2a6b0-bd1e-4d41-a776-b95105c391f0",
    difficulty: 3,
    question: {
      en: "Which protocol secures data between a web server and a browser?",
      fr: "Quel protocole sécurise les données entre un serveur Web et un navigateur ?"
    },
    answers: {
      en: ["HTTPS", "FTP", "Telnet", "HTTP"],
      fr: ["HTTPS", "FTP", "Telnet", "HTTP"]
    },
    correct: 0,
    explanation: {
      en: "HTTPS adds encryption (TLS) to HTTP.",
      fr: "HTTPS ajoute le chiffrement (TLS) au HTTP."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "851535cd-d3df-4a14-ba13-ef6ebf9b5718",
    difficulty: 1,
    question: {
      en: "What does 'RAM' stand for?",
      fr: "Que signifie 'RAM' ?"
    },
    answers: {
      en: ["Random Access Memory", "Read-Access Memory", "Rapid Action Module", "Runtime Allocation Memory"],
      fr: ["Random Access Memory", "Read-Access Memory", "Rapid Action Module", "Runtime Allocation Memory"]
    },
    correct: 0,
    explanation: {
      en: "RAM is volatile memory in computers.",
      fr: "La RAM est une mémoire volatile dans les ordinateurs."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "58909bda-b15c-4cb5-9d72-e5a26902cf6e",
    difficulty: 4,
    question: {
      en: "Which OS is known for its open-source nature and penguin mascot (Tux)?",
      fr: "Quel système d'exploitation est connu pour son caractère open-source et sa mascotte pingouin (Tux)?"
    },
    answers: {
      en: ["Linux", "Windows", "macOS", "Unix"],
      fr: ["Linux", "Windows", "macOS", "Unix"]
    },
    correct: 0,
    explanation: {
      en: "Linux is open-source and uses Tux.",
      fr: "Linux est open-source et utilise Tux."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "fa3f8b83-3797-4774-9a03-b3f866ceaec2",
    difficulty: 6,
    question: {
      en: "Which database language is used to manage relational databases?",
      fr: "Quel langage de base de données est utilisé pour gérer les bases relationnelles ?"
    },
    answers: {
      en: ["SQL", "NoSQL", "JSON", "XML"],
      fr: ["SQL", "NoSQL", "JSON", "XML"]
    },
    correct: 0,
    explanation: {
      en: "SQL manages and queries relational databases.",
      fr: "SQL gère et interroge les bases de données relationnelles."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "d7c0764b-a74a-4cb6-ac60-294fc48b825c",
    difficulty: 3,
    question: {
      en: "Which global system uses satellites to determine geographical location?",
      fr: "Quel système global utilise des satellites pour déterminer une position géographique ?"
    },
    answers: {
      en: ["GPS", "NFC", "Bluetooth", "Wi-Fi"],
      fr: ["Le GPS", "NFC", "Bluetooth", "Wi-Fi"]
    },
    correct: 0,
    explanation: {
      en: "GPS provides location coordinates.",
      fr: "Le GPS fournit des coordonnées de localisation."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "2c4a2274-73c9-4ef2-8310-2c8e59197bce",
    difficulty: 5,
    question: {
      en: "Which concept refers to a network of physical objects connected to the internet?",
      fr: "Quel concept désigne un réseau d'objets physiques connectés à Internet ?"
    },
    answers: {
      en: ["Internet of Things (IoT)", "Cloud computing", "Machine learning", "Big data"],
      fr: ["L'Internet des objets (IoT)", "Le cloud computing", "Le machine learning", "Le big data"]
    },
    correct: 0,
    explanation: {
      en: "IoT connects devices online.",
      fr: "L'IoT connecte des appareils en ligne."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "b7e3171a-3c70-45b2-b7f2-b9169410e713",
    difficulty: 4,
    question: {
      en: "Which company developed the iPhone?",
      fr: "Quelle entreprise a développé l'iPhone ?"
    },
    answers: {
      en: ["Apple", "Samsung", "Nokia", "Huawei"],
      fr: ["Apple", "Samsung", "Nokia", "Huawei"]
    },
    correct: 0,
    explanation: {
      en: "Apple released the first iPhone in 2007.",
      fr: "Apple a lancé le premier iPhone en 2007."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "4e6f4076-de80-43ef-b216-02ae6c85e8c3",
    difficulty: 3,
    question: {
      en: "What does 'URL' stand for?",
      fr: "Que signifie 'URL' ?"
    },
    answers: {
      en: ["Uniform Resource Locator", "Universal Resource Link", "Unified Reference Label", "Universal Routing Line"],
      fr: ["Uniform Resource Locator", "Universal Resource Link", "Unified Reference Label", "Universal Routing Line"]
    },
    correct: 0,
    explanation: {
      en: "A URL identifies a web resource.",
      fr: "Une URL identifie une ressource web."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "8e7c02e9-4398-4bd7-a169-0a0106449f0f",
    difficulty: 2,
    question: {
      en: "Which technology is used to create virtual currencies like Bitcoin?",
      fr: "Quelle technologie est utilisée pour créer des monnaies virtuelles comme le Bitcoin ?"
    },
    answers: {
      en: ["Blockchain", "Cloud computing", "Quantum computing", "3D printing"],
      fr: ["La blockchain", "Le cloud computing", "L'informatique quantique", "L'impression 3D"]
    },
    correct: 0,
    explanation: {
      en: "Blockchain underpins cryptocurrencies.",
      fr: "La blockchain sous-tend les cryptomonnaies."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "041948ca-a6d8-4f16-9c7f-d3c9c6a86b86",
    difficulty: 5,
    question: {
      en: "Which language is primarily used for styling web pages?",
      fr: "Quel langage est principalement utilisé pour la mise en forme des pages Web ?"
    },
    answers: {
      en: ["CSS", "HTML", "JavaScript", "SQL"],
      fr: ["CSS", "HTML", "JavaScript", "SQL"]
    },
    correct: 0,
    explanation: {
      en: "CSS (Cascading Style Sheets) styles the layout.",
      fr: "Le CSS (Cascading Style Sheets) gère la mise en forme."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "1f93af88-6eeb-48c2-a7c9-925920aa3b84",
    difficulty: 4,
    question: {
      en: "Which open-source version control system is widely used by developers?",
      fr: "Quel système de contrôle de version open-source est largement utilisé par les développeurs ?"
    },
    answers: {
      en: ["Git", "SVN", "Mercurial", "CVS"],
      fr: ["Git", "SVN", "Mercurial", "CVS"]
    },
    correct: 0,
    explanation: {
      en: "Git is a distributed version control system.",
      fr: "Git est un système de contrôle de version distribué."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "f3f0e6f4-07ed-4084-8d6d-5267eb18a196",
    difficulty: 6,
    question: {
      en: "Which technology giant is known for the search engine Chrome and the Android OS?",
      fr: "Quel géant de la technologie est connu pour le moteur de recherche Chrome et le système Android ?"
    },
    answers: {
      en: ["Google", "Apple", "Microsoft", "Amazon"],
      fr: ["Google", "Apple", "Microsoft", "Amazon"]
    },
    correct: 0,
    explanation: {
      en: "Google develops Chrome and Android.",
      fr: "Google développe Chrome et Android."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "ebb67175-7eef-4a3c-869c-f3359087b105",
    difficulty: 5,
    question: {
      en: "Which markup language is used to format scientific documents and math equations?",
      fr: "Quel langage de balisage est utilisé pour formater des documents scientifiques et des équations mathématiques ?"
    },
    answers: {
      en: ["LaTeX", "Markdown", "YAML", "R Markdown"],
      fr: ["LaTeX", "Markdown", "YAML", "R Markdown"]
    },
    correct: 0,
    explanation: {
      en: "LaTeX is common in academic publishing.",
      fr: "LaTeX est courant dans l'édition académique."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "d521a6c8-fbaa-4b78-b98b-98e604ab83ad",
    difficulty: 7,
    question: {
      en: "Which methodology focuses on iterative development, customer feedback, and small rapid releases?",
      fr: "Quelle méthodologie se concentre sur le développement itératif, le feedback client et des sorties rapides et fréquentes ?"
    },
    answers: {
      en: ["Agile", "Waterfall", "Spiral", "V-Model"],
      fr: ["Agile", "Waterfall", "Spiral", "V-Model"]
    },
    correct: 0,
    explanation: {
      en: "Agile emphasizes flexibility and iteration.",
      fr: "L'Agile met l'accent sur la flexibilité et l'itération."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "6613bec6-1e2d-4f1d-9ee8-81faa154024b",
    difficulty: 4,
    question: {
      en: "Which type of malware encrypts a user's files and demands ransom?",
      fr: "Quel type de malware chiffre les fichiers d'un utilisateur et exige une rançon ?"
    },
    answers: {
      en: ["Ransomware", "Spyware", "Adware", "Trojan"],
      fr: ["Le ransomware", "Le spyware", "L'adware", "Le cheval de Troie"]
    },
    correct: 0,
    explanation: {
      en: "Ransomware encrypts files for ransom.",
      fr: "Le ransomware chiffre les fichiers pour demander une rançon."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "373b8819-044d-4f1a-b3f4-f86034d1d7ab",
    difficulty: 5,
    question: {
      en: "Which company developed the PlayStation gaming console?",
      fr: "Quelle entreprise a développé la console de jeu PlayStation ?"
    },
    answers: {
      en: ["Sony", "Nintendo", "Microsoft", "Sega"],
      fr: ["Sony", "Nintendo", "Microsoft", "Sega"]
    },
    correct: 0,
    explanation: {
      en: "Sony launched the first PlayStation in 1994.",
      fr: "Sony a lancé la première PlayStation en 1994."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "2cf70b22-9237-4568-8c7b-7e62fd8c550d",
    difficulty: 3,
    question: {
      en: "What does 'GPU' stand for?",
      fr: "Que signifie 'GPU' ?"
    },
    answers: {
      en: ["Graphics Processing Unit", "General Processing Unit", "Global Power Unit", "Graphic Protocol Utility"],
      fr: ["Graphics Processing Unit", "General Processing Unit", "Global Power Unit", "Graphic Protocol Utility"]
    },
    correct: 0,
    explanation: {
      en: "GPU handles graphics rendering.",
      fr: "Le GPU gère le rendu graphique."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "f6d90480-1bdf-4abb-b63b-63e4eb2ae6d7",
    difficulty: 4,
    question: {
      en: "Which device converts digital signals to analog and vice versa for internet access over telephone lines?",
      fr: "Quel appareil convertit les signaux numériques en signaux analogiques et inversement pour l'accès à Internet via les lignes téléphoniques ?"
    },
    answers: {
      en: ["Modem", "Router", "Switch", "Hub"],
      fr: ["Le modem", "Le routeur", "Le commutateur (switch)", "Le concentrateur (hub)"]
    },
    correct: 0,
    explanation: {
      en: "The modem modulates and demodulates signals.",
      fr: "Le modem module et démodule les signaux."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "9c313a1e-3e0b-44c2-974c-0449014bbf04",
    difficulty: 6,
    question: {
      en: "Which concept involves delivering computing services over the internet, including storage and processing?",
      fr: "Quel concept implique la fourniture de services informatiques sur Internet, y compris le stockage et le traitement ?"
    },
    answers: {
      en: ["Cloud computing", "Edge computing", "Fog computing", "Grid computing"],
      fr: ["Le cloud computing", "L'edge computing", "Le fog computing", "Le grid computing"]
    },
    correct: 0,
    explanation: {
      en: "Cloud computing provides on-demand resources.",
      fr: "Le cloud computing offre des ressources à la demande."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "a3537010-2df3-4594-b389-228dce3ed3e2",
    difficulty: 5,
    question: {
      en: "Which language was developed at Sun Microsystems and is known for its portability on the JVM?",
      fr: "Quel langage, développé par Sun Microsystems, est connu pour sa portabilité sur la JVM ?"
    },
    answers: {
      en: ["Java", "C++", "C", "Ruby"],
      fr: ["Java", "C++", "C", "Ruby"]
    },
    correct: 0,
    explanation: {
      en: "Java runs on the Java Virtual Machine.",
      fr: "Java s'exécute sur la JVM."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "1b79e365-a31b-4fbb-a7ab-a6af8db524ac",
    difficulty: 3,
    question: {
      en: "Which electronics company is known for the Galaxy line of smartphones?",
      fr: "Quelle entreprise d'électronique est connue pour sa gamme de smartphones Galaxy ?"
    },
    answers: {
      en: ["Samsung", "Huawei", "Xiaomi", "LG"],
      fr: ["Samsung", "Huawei", "Xiaomi", "LG"]
    },
    correct: 0,
    explanation: {
      en: "Samsung produces the Galaxy series.",
      fr: "Samsung produit la série Galaxy."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "05a729d3-b76a-4ee9-9ba7-507480338616",
    difficulty: 2,
    question: {
      en: "What does 'IoT' stand for?",
      fr: "Que signifie 'IoT' ?"
    },
    answers: {
      en: ["Internet of Things", "Internet of Tools", "Integration of Technology", "Interface of Transmission"],
      fr: ["Internet of Things (Internet des objets)", "Internet of Tools", "Integration of Technology", "Interface of Transmission"]
    },
    correct: 0,
    explanation: {
      en: "IoT connects everyday devices.",
      fr: "L'IoT connecte des appareils du quotidien."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "91614c09-5f89-4ad6-910d-cf9b6b8fa72d",
    difficulty: 4,
    question: {
      en: "Which web browser was developed by Mozilla?",
      fr: "Quel navigateur Web a été développé par Mozilla ?"
    },
    answers: {
      en: ["Firefox", "Chrome", "Safari", "Edge"],
      fr: ["Firefox", "Chrome", "Safari", "Edge"]
    },
    correct: 0,
    explanation: {
      en: "Firefox is Mozilla's browser.",
      fr: "Firefox est le navigateur de Mozilla."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "672684db-1f82-4143-9372-5bde2f050826",
    difficulty: 6,
    question: {
      en: "Which database model stores data as JSON-like documents?",
      fr: "Quel modèle de base de données stocke les données sous forme de documents JSON ?"
    },
    answers: {
      en: ["NoSQL document databases", "Relational databases", "Graph databases", "Key-value stores"],
      fr: ["Les bases NoSQL de type document", "Les bases relationnelles", "Les bases orientées graphe", "Les bases clé-valeur"]
    },
    correct: 0,
    explanation: {
      en: "NoSQL document stores use JSON-like formats.",
      fr: "Les bases de données NoSQL documentaires utilisent des formats JSON."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "df2bc068-30af-4f7e-9fc7-c644f84b7b43",
    difficulty: 7,
    question: {
      en: "Which cryptographic protocol provides secure communication over a computer network, widely used in HTTPS?",
      fr: "Quel protocole cryptographique fournit une communication sécurisée sur un réseau informatique, largement utilisé dans HTTPS ?"
    },
    answers: {
      en: ["TLS", "SSH", "SCP", "IPSec"],
      fr: ["TLS", "SSH", "SCP", "IPSec"]
    },
    correct: 0,
    explanation: {
      en: "TLS (Transport Layer Security) secures web traffic.",
      fr: "TLS (Transport Layer Security) sécurise le trafic Web."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "d518c4d2-cbb8-4263-b4a9-9a2b346da723",
    difficulty: 8,
    question: {
      en: "Which field of AI involves training models to learn from data without being explicitly programmed?",
      fr: "Quel domaine de l'IA implique d'entraîner des modèles à apprendre à partir de données sans programmation explicite ?"
    },
    answers: {
      en: ["Machine learning", "Expert systems", "Robotics", "Symbolic AI"],
      fr: ["Le machine learning", "Les systèmes experts", "La robotique", "L'IA symbolique"]
    },
    correct: 0,
    explanation: {
      en: "Machine learning allows systems to learn patterns from data.",
      fr: "Le machine learning permet aux systèmes d'apprendre des modèles à partir de données."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "de1f980e-74d0-454e-b62c-1d607c7142c0",
    difficulty: 5,
    question: {
      en: "Which agile framework uses 'sprints' and 'scrums' to organize work?",
      fr: "Quel cadre agile utilise des 'sprints' et des 'scrums' pour organiser le travail ?"
    },
    answers: {
      en: ["Scrum", "Kanban", "Lean", "XP (Extreme Programming)"],
      fr: ["Scrum", "Kanban", "Lean", "XP (Extreme Programming)"]
    },
    correct: 0,
    explanation: {
      en: "Scrum uses iterative sprints and daily scrums.",
      fr: "Scrum utilise des sprints itératifs et des scrums quotidiens."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "4109bb64-0f84-45ac-bfc9-bb0acaf3a83b",
    difficulty: 4,
    question: {
      en: "Which language is known as a low-level language closely related to machine code?",
      fr: "Quel langage est considéré comme un langage de bas niveau proche du code machine?"
    },
    answers: {
      en: ["Assembly", "C", "Java", "Python"],
      fr: ["L'assembleur (Assembly)", "C", "Java", "Python"]
    },
    correct: 0,
    explanation: {
      en: "Assembly is a low-level language.",
      fr: "L'assembleur est un langage de bas niveau."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "d9f8f1aa-7e4f-46ba-b18d-b64fc33eb1ab",
    difficulty: 6,
    question: {
      en: "Which company is known for the Macintosh computers and macOS?",
      fr: "Quelle entreprise est connue pour les ordinateurs Macintosh et macOS?"
    },
    answers: {
      en: ["Apple", "Microsoft", "IBM", "Dell"],
      fr: ["Apple", "Microsoft", "IBM", "Dell"]
    },
    correct: 0,
    explanation: {
      en: "Apple developed the Macintosh.",
      fr: "Apple a développé le Macintosh."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "2c9fcb4e-63bd-42df-9594-969265d70523",
    difficulty: 7,
    question: {
      en: "Which approach to software development emphasizes infrastructure as code and continuous integration/deployment?",
      fr: "Quelle approche du développement logiciel met l'accent sur l'infrastructure en tant que code et l'intégration/déploiement continus?"
    },
    answers: {
      en: ["DevOps", "MDA", "RAD", "Waterfall"],
      fr: ["Le DevOps", "MDA", "RAD", "Le Waterfall"]
    },
    correct: 0,
    explanation: {
      en: "DevOps integrates development and operations.",
      fr: "Le DevOps intègre le développement et les opérations."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "65d42345-4611-4bf2-b59a-9f966eeaa305",
    difficulty: 3,
    question: {
      en: "Which lightweight markup language is popular for documentation on platforms like GitHub?",
      fr: "Quel langage de balisage léger est populaire pour la documentation sur des plateformes comme GitHub?"
    },
    answers: {
      en: ["Markdown", "HTML", "LaTeX", "XML"],
      fr: ["Le Markdown", "HTML", "LaTeX", "XML"]
    },
    correct: 0,
    explanation: {
      en: "Markdown is common in README files.",
      fr: "Le Markdown est courant dans les fichiers README."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "5b1b9a93-cd89-48a7-b618-66f8ac562760",
    difficulty: 4,
    question: {
      en: "What does 'LAN' stand for?",
      fr: "Que signifie 'LAN' ?"
    },
    answers: {
      en: ["Local Area Network", "Large Access Node", "Linear Array Network", "Logical Address Notation"],
      fr: ["Local Area Network (réseau local)", "Large Access Node", "Linear Array Network", "Logical Address Notation"]
    },
    correct: 0,
    explanation: {
      en: "LAN refers to a local network of connected devices.",
      fr: "Un LAN désigne un réseau local d'appareils connectés."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "f9f07736-a914-4a60-b893-f5ad16c98ff9",
    difficulty: 5,
    question: {
      en: "Which software development model follows a linear and sequential approach?",
      fr: "Quel modèle de développement logiciel suit une approche linéaire et séquentielle ?"
    },
    answers: {
      en: ["Waterfall", "Agile", "Scrum", "Kanban"],
      fr: ["Le modèle en cascade (Waterfall)", "Agile", "Scrum", "Kanban"]
    },
    correct: 0,
    explanation: {
      en: "Waterfall completes each phase before moving on.",
      fr: "Le Waterfall termine chaque phase avant de passer à la suivante."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "2d373282-9f5b-44a7-8f41-1a8fd3a36318",
    difficulty: 6,
    question: {
      en: "Which company created the programming language Go (Golang)?",
      fr: "Quelle entreprise a créé le langage de programmation Go (Golang) ?"
    },
    answers: {
      en: ["Google", "Microsoft", "Apple", "Amazon"],
      fr: ["Google", "Microsoft", "Apple", "Amazon"]
    },
    correct: 0,
    explanation: {
      en: "Go was developed at Google.",
      fr: "Go a été développé chez Google."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "d65068c1-e7df-46c1-a67c-9c42c40ef784",
    difficulty: 7,
    question: {
      en: "Which term describes running multiple operating systems on one physical machine?",
      fr: "Quel terme décrit l'exécution de plusieurs systèmes d'exploitation sur une seule machine physique ?"
    },
    answers: {
      en: ["Virtualization", "Emulation", "Containerization", "Parallel computing"],
      fr: ["La virtualisation", "L'émulation", "La containerisation", "Le calcul parallèle"]
    },
    correct: 0,
    explanation: {
      en: "Virtualization uses hypervisors for multiple OS instances.",
      fr: "La virtualisation utilise des hyperviseurs pour exécuter plusieurs OS."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "ea41bf52-6fa2-4a5a-b49a-aec3bb832840",
    difficulty: 8,
    question: {
      en: "Which concept in AI focuses on building systems that simulate human conversation?",
      fr: "Quel concept en IA se concentre sur la création de systèmes simulant la conversation humaine?"
    },
    answers: {
      en: ["Chatbots", "Computer vision", "Reinforcement learning", "Expert systems"],
      fr: ["Les chatbots", "La vision par ordinateur", "L'apprentissage par renforcement", "Les systèmes experts"]
    },
    correct: 0,
    explanation: {
      en: "Chatbots simulate human dialogue.",
      fr: "Les chatbots simulent le dialogue humain."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "66f5e985-5030-4aea-bf56-d6595a2c0737",
    difficulty: 2,
    question: {
      en: "Which device provides wireless networking using radio waves?",
      fr: "Quel appareil fournit un réseau sans fil utilisant des ondes radio?"
    },
    answers: {
      en: ["Wi-Fi router", "Modem", "Ethernet switch", "Firewall"],
      fr: ["Le routeur Wi-Fi", "Le modem", "Le commutateur Ethernet", "Le pare-feu"]
    },
    correct: 0,
    explanation: {
      en: "A Wi-Fi router enables wireless internet.",
      fr: "Un routeur Wi-Fi permet une connexion sans fil."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "f7183f33-3f6e-4028-ba98-46ced5ab57af",
    difficulty: 5,
    question: {
      en: "Which principle in programming states that code should have only one reason to change?",
      fr: "Quel principe en programmation stipule qu'un morceau de code ne devrait avoir qu'une seule raison de changer?"
    },
    answers: {
      en: ["Single Responsibility Principle", "Open-Closed Principle", "Liskov Substitution Principle", "Dependency Inversion Principle"],
      fr: ["Le principe de responsabilité unique", "Le principe ouvert-fermé", "Le principe de substitution de Liskov", "Le principe d'inversion de dépendance"]
    },
    correct: 0,
    explanation: {
      en: "SRP is one of the SOLID principles.",
      fr: "Le SRP est un des principes SOLID."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "b272d620-0218-4112-bf59-b86efbfa4c04",
    difficulty: 6,
    question: {
      en: "Which distributed version control hosting service is known for 'pull requests' and 'forks'?",
      fr: "Quel service d'hébergement de contrôle de version distribué est connu pour les 'pull requests' et 'forks'?"
    },
    answers: {
      en: ["GitHub", "GitLab", "Bitbucket", "SourceForge"],
      fr: ["GitHub", "GitLab", "Bitbucket", "SourceForge"]
    },
    correct: 0,
    explanation: {
      en: "GitHub popularized pull requests.",
      fr: "GitHub a popularisé les pull requests."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "86776d0f-e037-4f90-a2c4-c5b425bed8f2",
    difficulty: 4,
    question: {
      en: "Which era of computing uses AI and machine learning to create intelligent applications?",
      fr: "Quelle ère de l'informatique utilise l'IA et le machine learning pour créer des applications intelligentes?"
    },
    answers: {
      en: ["Cognitive computing", "Cloud computing", "Mobile computing", "Mainframe computing"],
      fr: ["L'informatique cognitive", "Le cloud computing", "L'informatique mobile", "L'informatique mainframe"]
    },
    correct: 0,
    explanation: {
      en: "Cognitive computing involves AI-driven apps.",
      fr: "L'informatique cognitive implique des applications IA."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "9f6ff98b-44d7-4e1b-9399-b68fc1381594",
    difficulty: 7,
    question: {
      en: "Which software practice involves releasing code changes into production in small batches frequently?",
      fr: "Quelle pratique logicielle consiste à déployer souvent des modifications de code en petites quantités en production?"
    },
    answers: {
      en: ["Continuous delivery", "Continuous integration", "Continuous refactoring", "Continuous modeling"],
      fr: ["La livraison continue", "L'intégration continue", "Le refactoring continu", "La modélisation continue"]
    },
    correct: 0,
    explanation: {
      en: "Continuous delivery aims for frequent releases.",
      fr: "La livraison continue vise des déploiements fréquents."
    },
    tags: [TagEnum.TECHNOLOGY],
  },
  {
    id: "7a50f891-e879-4ac2-bc23-3a1b906e34dd",
    difficulty: 3,
    question: {
      en: "What does 'HTTP' stand for?",
      fr: "Que signifie 'HTTP' ?"
    },
    answers: {
      en: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "High Tech Transfer Protocol", "Host Transfer Text Protocol"],
      fr: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "High Tech Transfer Protocol", "Host Transfer Text Protocol"]
    },
    correct: 0,
    explanation: {
      en: "HTTP is the foundation of web data communication.",
      fr: "HTTP est la base de la communication de données sur le Web."
    },
    tags: [TagEnum.TECHNOLOGY],
  }
];

// 20 Questions: SPORTS
const newSportsQuestions: Question[] = [
  {
    id: "ef1147c9-85a9-4c85-8f05-4fca1997ab23",
    difficulty: 2,
    question: {
      en: "In soccer (football), how many players does each team have on the field?",
      fr: "Au football, combien de joueurs chaque équipe a-t-elle sur le terrain ?"
    },
    answers: {
      en: ["11", "10", "9", "12"],
      fr: ["11", "10", "9", "12"]
    },
    correct: 0,
    explanation: {
      en: "Each football team fields 11 players.",
      fr: "Chaque équipe de football aligne 11 joueurs."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "726c1c3c-973f-4ee9-bd04-f8c402dd41d8",
    difficulty: 3,
    question: {
      en: "In which sport is the term 'home run' used?",
      fr: "Dans quel sport utilise-t-on le terme 'home run' ?"
    },
    answers: {
      en: ["Baseball", "Cricket", "Rugby", "Basketball"],
      fr: ["Le baseball", "Le cricket", "Le rugby", "Le basket-ball"]
    },
    correct: 0,
    explanation: {
      en: "A home run is when the batter rounds all bases.",
      fr: "Un home run se produit lorsque le batteur parcourt toutes les bases."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "c254c19f-7a1d-4d6f-a1d7-39b94d6f55b1",
    difficulty: 4,
    question: {
      en: "Which country traditionally hosts the Wimbledon tennis tournament?",
      fr: "Quel pays accueille traditionnellement le tournoi de tennis de Wimbledon ?"
    },
    answers: {
      en: ["England", "France", "USA", "Australia"],
      fr: ["L'Angleterre", "La France", "Les États-Unis", "L'Australie"]
    },
    correct: 0,
    explanation: {
      en: "Wimbledon takes place in London, England.",
      fr: "Wimbledon se déroule à Londres, en Angleterre."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "8029837a-e1ab-4f16-8aa1-2d5a9c84eb5d",
    difficulty: 3,
    question: {
      en: "How many points is a touchdown worth in American football (excluding the extra point)?",
      fr: "Combien de points vaut un touchdown au football américain (sans le point supplémentaire) ?"
    },
    answers: {
      en: ["6", "3", "7", "2"],
      fr: ["6", "3", "7", "2"]
    },
    correct: 0,
    explanation: {
      en: "A touchdown is worth 6 points.",
      fr: "Un touchdown vaut 6 points."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "baf8f835-d886-4ee6-80aa-6b7ca0abaf30",
    difficulty: 5,
    question: {
      en: "Which sport uses a shuttlecock?",
      fr: "Quel sport utilise un volant (shuttlecock) ?"
    },
    answers: {
      en: ["Badminton", "Tennis", "Table tennis", "Squash"],
      fr: ["Le badminton", "Le tennis", "Le tennis de table", "Le squash"]
    },
    correct: 0,
    explanation: {
      en: "Badminton is played with a shuttlecock.",
      fr: "Le badminton se joue avec un volant."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "ce63d387-7dbf-4a87-8d86-9ed917154044",
    difficulty: 4,
    question: {
      en: "In basketball, how many points is a shot made from behind the arc worth?",
      fr: "Au basket-ball, combien de points vaut un tir réussi depuis derrière la ligne à trois points ?"
    },
    answers: {
      en: ["3", "2", "1", "4"],
      fr: ["3", "2", "1", "4"]
    },
    correct: 0,
    explanation: {
      en: "A three-point shot is worth 3 points.",
      fr: "Un tir à trois points vaut 3 points."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "7482439c-8fd4-4628-9d31-423e344adc2b",
    difficulty: 6,
    question: {
      en: "Which country won the most FIFA World Cup titles in men's football as of 2023?",
      fr: "Quel pays a remporté le plus de Coupes du Monde de la FIFA en football masculin en 2023 ?"
    },
    answers: {
      en: ["Brazil", "Germany", "Italy", "Argentina"],
      fr: ["Le Brésil", "L'Allemagne", "L'Italie", "L'Argentine"]
    },
    correct: 0,
    explanation: {
      en: "Brazil has won 5 titles.",
      fr: "Le Brésil a remporté 5 titres."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "3ca74d8f-0dc4-4046-841d-9bf2a1c3d343",
    difficulty: 2,
    question: {
      en: "In which sport would you find the Fosbury Flop technique?",
      fr: "Dans quel sport trouve-t-on la technique du Fosbury Flop ?"
    },
    answers: {
      en: ["High jump (Athletics)", "Pole vault", "Long jump", "Gymnastics"],
      fr: ["Le saut en hauteur (athlétisme)", "Le saut à la perche", "Le saut en longueur", "La gymnastique"]
    },
    correct: 0,
    explanation: {
      en: "Fosbury Flop revolutionized the high jump.",
      fr: "Le Fosbury Flop a révolutionné le saut en hauteur."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "fa3e5197-8bb8-46e4-a2c5-4a91a5153ede",
    difficulty: 3,
    question: {
      en: "In rugby union, how many points is a try worth?",
      fr: "Au rugby à XV, combien de points vaut un essai ?"
    },
    answers: {
      en: ["5", "3", "4", "2"],
      fr: ["5", "3", "4", "2"]
    },
    correct: 0,
    explanation: {
      en: "A try is worth 5 points.",
      fr: "Un essai vaut 5 points."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "21585b30-0c4c-4f97-9a60-d98408419363",
    difficulty: 4,
    question: {
      en: "Which sport features the Masters Tournament at Augusta National?",
      fr: "Quel sport présente le Masters Tournament à Augusta National ?"
    },
    answers: {
      en: ["Golf", "Tennis", "Cricket", "Snooker"],
      fr: ["Le golf", "Le tennis", "Le cricket", "Le snooker"]
    },
    correct: 0,
    explanation: {
      en: "The Masters is a major golf tournament.",
      fr: "Le Masters est un tournoi majeur de golf."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "1c0875e0-887b-44a3-9c8e-0115a3863842",
    difficulty: 5,
    question: {
      en: "In which sport do players use a mallet to hit a ball through hoops?",
      fr: "Dans quel sport les joueurs utilisent-ils un maillet pour frapper une balle à travers des arceaux ?"
    },
    answers: {
      en: ["Croquet", "Polo", "Field hockey", "Bocce"],
      fr: ["Le croquet", "Le polo", "Le hockey sur gazon", "La bocce"]
    },
    correct: 0,
    explanation: {
      en: "Croquet involves mallets and hoops.",
      fr: "Le croquet implique des maillets et des arceaux."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "a914f6e8-13bb-4993-9ae2-92d92ebde957",
    difficulty: 3,
    question: {
      en: "What is the maximum score in a single frame of snooker if achieved from the break?",
      fr: "Quel est le score maximum en une seule manche de snooker, s'il est réalisé dès la casse ?"
    },
    answers: {
      en: ["147", "155", "180", "100"],
      fr: ["147", "155", "180", "100"]
    },
    correct: 0,
    explanation: {
      en: "147 is the maximum break in snooker.",
      fr: "147 est le break maximal au snooker."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "4ec5641a-5d93-49aa-a6a3-3fef7f96000c",
    difficulty: 4,
    question: {
      en: "In which sport is the Ryder Cup contested?",
      fr: "Dans quel sport la Ryder Cup est-elle disputée ?"
    },
    answers: {
      en: ["Golf", "Rugby", "Cricket", "Tennis"],
      fr: ["Le golf", "Le rugby", "Le cricket", "Le tennis"]
    },
    correct: 0,
    explanation: {
      en: "The Ryder Cup is a golf competition between Europe and the USA.",
      fr: "La Ryder Cup est une compétition de golf entre l'Europe et les États-Unis."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "33b9541e-2193-4bda-879e-01850bdc8714",
    difficulty: 2,
    question: {
      en: "How many players are on a basketball court for one team at a time?",
      fr: "Combien de joueurs d'une même équipe sont sur un terrain de basket-ball en même temps ?"
    },
    answers: {
      en: ["5", "6", "7", "4"],
      fr: ["5", "6", "7", "4"]
    },
    correct: 0,
    explanation: {
      en: "Each basketball team fields 5 players.",
      fr: "Chaque équipe de basket-ball aligne 5 joueurs."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "d91cb1e7-5bc5-45af-9b1f-8f1c70bedac1",
    difficulty: 5,
    question: {
      en: "Which motor racing event is held annually in Monaco?",
      fr: "Quel événement de course automobile se tient chaque année à Monaco ?"
    },
    answers: {
      en: ["Monaco Grand Prix", "Indianapolis 500", "24 Hours of Le Mans", "Daytona 500"],
      fr: ["Le Grand Prix de Monaco", "Les 500 miles d'Indianapolis", "Les 24 Heures du Mans", "Le Daytona 500"]
    },
    correct: 0,
    explanation: {
      en: "The Monaco Grand Prix is a famous Formula One race.",
      fr: "Le Grand Prix de Monaco est une course de Formule 1 célèbre."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "037eedc3-888f-4cf1-bff8-5615ff7d5730",
    difficulty: 4,
    question: {
      en: "In cricket, what is the name of the player who delivers the ball to the batsman?",
      fr: "Au cricket, comment appelle-t-on le joueur qui lance la balle au batteur ?"
    },
    answers: {
      en: ["Bowler", "Batsman", "Wicket-keeper", "Fielder"],
      fr: ["Le bowler", "Le batsman", "Le wicket-keeper", "Le fielder"]
    },
    correct: 0,
    explanation: {
      en: "The bowler delivers the ball.",
      fr: "Le bowler lance la balle."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "81c74d76-f9b3-40c1-9bf5-cc6213efd659",
    difficulty: 6,
    question: {
      en: "In which sport is the term 'checkmate' used?",
      fr: "Dans quel sport utilise-t-on le terme 'échec et mat' ?"
    },
    answers: {
      en: ["Chess", "Boxing", "Fencing", "Judo"],
      fr: ["Les échecs", "La boxe", "L'escrime", "Le judo"]
    },
    correct: 0,
    explanation: {
      en: "Checkmate is a chess term.",
      fr: "Échec et mat est un terme utilisé aux échecs."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "b0aff939-cda9-4315-8a95-84289949ef4d",
    difficulty: 2,
    question: {
      en: "What is the term for three strikes in a row in bowling?",
      fr: "Quel est le terme pour trois strikes consécutifs au bowling ?"
    },
    answers: {
      en: ["Turkey", "Hat-trick", "Triple", "Birdie"],
      fr: ["Un turkey", "Un hat-trick", "Un triple", "Un birdie"]
    },
    correct: 0,
    explanation: {
      en: "Three strikes in bowling is called a turkey.",
      fr: "Trois strikes consécutifs au bowling s'appellent un 'turkey'."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "cbb2fdfd-cbf2-4d84-b9e9-88b38df1bcec",
    difficulty: 7,
    question: {
      en: "Which Olympic sport involves athletes performing routines on apparatus such as rings and pommel horse?",
      fr: "Quel sport olympique implique des athlètes effectuant des routines sur des agrès tels que les anneaux et le cheval d'arçons ?"
    },
    answers: {
      en: ["Artistic gymnastics", "Rhythmic gymnastics", "Diving", "Acrobatic gymnastics"],
      fr: ["La gymnastique artistique", "La gymnastique rythmique", "Le plongeon", "La gymnastique acrobatique"]
    },
    correct: 0,
    explanation: {
      en: "Artistic gymnastics uses various apparatus.",
      fr: "La gymnastique artistique utilise divers agrès."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "742b5f29-598a-4112-b02d-08fc9ee8eebf",
    difficulty: 3,
    question: {
      en: "In which sport do teams compete for the Stanley Cup?",
      fr: "Dans quel sport les équipes se disputent-elles la Coupe Stanley ?"
    },
    answers: {
      en: ["Ice hockey", "Field hockey", "Basketball", "Baseball"],
      fr: ["Le hockey sur glace", "Le hockey sur gazon", "Le basket-ball", "Le baseball"]
    },
    correct: 0,
    explanation: {
      en: "The Stanley Cup is awarded in NHL ice hockey.",
      fr: "La Coupe Stanley est décernée en hockey sur glace (LNH)."
    },
    tags: [TagEnum.SPORTS],
  },
  {
    id: "0ebffcf3-3cc1-4881-9395-3a446e635656",
    difficulty: 3,
    question: {
      en: "Which company created the Super Mario series?",
      fr: "Quelle entreprise a créé la série Super Mario ?"
    },
    answers: {
      en: ["Nintendo", "Sega", "Sony", "Microsoft"],
      fr: ["Nintendo", "Sega", "Sony", "Microsoft"]
    },
    correct: 0,
    explanation: {
      en: "Nintendo introduced Mario in the 1980s.",
      fr: "Nintendo a introduit Mario dans les années 1980."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "b591be48-7e1d-43aa-9491-c88d534dd4a6",
    difficulty: 4,
    question: {
      en: "Which character wields the Master Sword in 'The Legend of Zelda' series?",
      fr: "Quel personnage manie l'Épée de Légende dans la série 'The Legend of Zelda' ?"
    },
    answers: {
      en: ["Link", "Zelda", "Ganon", "Impa"],
      fr: ["Link", "Zelda", "Ganon", "Impa"]
    },
    correct: 0,
    explanation: {
      en: "Link is the hero who wields the Master Sword.",
      fr: "Link est le héros qui manie l'Épée de Légende."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "052544c5-6712-4311-b2fc-a7dfb2dad94d",
    difficulty: 5,
    question: {
      en: "Which company created the PlayStation console?",
      fr: "Quelle entreprise a créé la console PlayStation ?"
    },
    answers: {
      en: ["Sony", "Nintendo", "Sega", "Atari"],
      fr: ["Sony", "Nintendo", "Sega", "Atari"]
    },
    correct: 0,
    explanation: {
      en: "Sony released the original PlayStation in 1994.",
      fr: "Sony a lancé la PlayStation originale en 1994."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "f2804c9f-8b77-4d03-bc70-2b00257457f4",
    difficulty: 2,
    question: {
      en: "In 'Minecraft', what material is needed to craft a wooden pickaxe?",
      fr: "Dans 'Minecraft', quel matériau est nécessaire pour fabriquer une pioche en bois ?"
    },
    answers: {
      en: ["Wooden planks and sticks", "Iron and sticks", "Stone and sticks", "Diamond and sticks"],
      fr: ["Des planches de bois et des bâtons", "Du fer et des bâtons", "De la pierre et des bâtons", "Du diamant et des bâtons"]
    },
    correct: 0,
    explanation: {
      en: "A wooden pickaxe is crafted from wooden planks and sticks.",
      fr: "Une pioche en bois se fabrique avec des planches de bois et des bâtons."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "db7d5135-38a4-4aaf-bb44-513141f9c5c0",
    difficulty: 6,
    question: {
      en: "Which 1990s video game featured a plumber jumping on turtles and collecting coins?",
      fr: "Quel jeu vidéo des années 1990 mettait en scène un plombier sautant sur des tortues et récoltant des pièces ?"
    },
    answers: {
      en: ["Super Mario World", "Crash Bandicoot", "Sonic the Hedgehog", "Donkey Kong Country"],
      fr: ["Super Mario World", "Crash Bandicoot", "Sonic the Hedgehog", "Donkey Kong Country"]
    },
    correct: 0,
    explanation: {
      en: "Super Mario World, released for the SNES, starred Mario.",
      fr: "Super Mario World, sorti sur SNES, mettait en vedette Mario."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "f1d1e6a2-54af-4fc6-a5f1-c63cf97f8424",
    difficulty: 3,
    question: {
      en: "Which game is known for the phrase 'Finish Him!'?",
      fr: "Quel jeu est connu pour la phrase 'Finish Him!' ?"
    },
    answers: {
      en: ["Mortal Kombat", "Street Fighter", "Tekken", "Killer Instinct"],
      fr: ["Mortal Kombat", "Street Fighter", "Tekken", "Killer Instinct"]
    },
    correct: 0,
    explanation: {
      en: "Mortal Kombat popularized the 'Finish Him!' prompt.",
      fr: "Mortal Kombat a popularisé la phrase 'Finish Him!'"
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "1d7f54ab-1dd7-4417-9ff8-d98e29918e91",
    difficulty: 5,
    question: {
      en: "What is the name of the hero in the 'Halo' series?",
      fr: "Quel est le nom du héros dans la série 'Halo' ?"
    },
    answers: {
      en: ["Master Chief", "Marcus Fenix", "Commander Shepard", "Gordon Freeman"],
      fr: ["Le Major (Master Chief)", "Marcus Fenix", "Le Commandant Shepard", "Gordon Freeman"]
    },
    correct: 0,
    explanation: {
      en: "Master Chief Petty Officer John-117 is Halo’s protagonist.",
      fr: "Le Major John-117, connu sous le nom de Master Chief, est le protagoniste de Halo."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "b8d9dc38-0cd1-4fe7-92b9-54058f58912c",
    difficulty: 4,
    question: {
      en: "In 'Pokémon', which creature is known as the Electric-type mascot of the series?",
      fr: "Dans 'Pokémon', quelle créature est connue comme la mascotte de type Électrik de la série ?"
    },
    answers: {
      en: ["Pikachu", "Charmander", "Bulbasaur", "Eevee"],
      fr: ["Pikachu", "Salamèche", "Bulbizarre", "Évoli"]
    },
    correct: 0,
    explanation: {
      en: "Pikachu is the iconic Electric-type Pokémon.",
      fr: "Pikachu est le Pokémon de type Électrik emblématique."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "d0c69210-4f7d-4a13-b443-905aa0a3d64f",
    difficulty: 7,
    question: {
      en: "Which developer is known for the 'Final Fantasy' series?",
      fr: "Quel développeur est connu pour la série 'Final Fantasy' ?"
    },
    answers: {
      en: ["Square Enix", "Capcom", "Konami", "Bandai Namco"],
      fr: ["Square Enix", "Capcom", "Konami", "Bandai Namco"]
    },
    correct: 0,
    explanation: {
      en: "Square Enix, formerly Squaresoft, created Final Fantasy.",
      fr: "Square Enix, anciennement Squaresoft, a créé Final Fantasy."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "20d39b02-6375-42fb-88c2-d5ef14599f71",
    difficulty: 6,
    question: {
      en: "Which console was known as the first Nintendo home console launched worldwide?",
      fr: "Quelle console est connue pour avoir été la première console de salon Nintendo lancée mondialement ?"
    },
    answers: {
      en: ["Nintendo Entertainment System (NES)", "Super Nintendo (SNES)", "Nintendo 64", "Famicom (Japan-only at first)"],
      fr: ["La Nintendo Entertainment System (NES)", "La Super Nintendo (SNES)", "La Nintendo 64", "La Famicom (initialement qu’au Japon)"]
    },
    correct: 0,
    explanation: {
      en: "The NES introduced Nintendo to a global home console market.",
      fr: "La NES a introduit Nintendo sur le marché mondial des consoles de salon."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "1f7f7d07-5863-4f1e-a54a-1f9c36685dd4",
    difficulty: 3,
    question: {
      en: "Which racing game series features 'Blue Shells' and 'Rainbow Road'?",
      fr: "Quelle série de jeux de course présente des 'Carapaces bleues' et le 'Route Arc-en-ciel' ?"
    },
    answers: {
      en: ["Mario Kart", "Crash Team Racing", "F-Zero", "Gran Turismo"],
      fr: ["Mario Kart", "Crash Team Racing", "F-Zero", "Gran Turismo"]
    },
    correct: 0,
    explanation: {
      en: "Mario Kart is known for Blue Shells and Rainbow Road tracks.",
      fr: "Mario Kart est célèbre pour ses Carapaces bleues et son circuit Route Arc-en-ciel."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "1e9caf33-67bc-4fb7-b297-5e43b5c4c155",
    difficulty: 8,
    question: {
      en: "Which game features a post-apocalyptic world with vault dwellers and the Brotherhood of Steel?",
      fr: "Quel jeu met en scène un monde post-apocalyptique avec des habitants d'abris (vault dwellers) et la Confrérie de l'Acier ?"
    },
    answers: {
      en: ["Fallout", "Metro 2033", "The Last of Us", "Wasteland"],
      fr: ["Fallout", "Metro 2033", "The Last of Us", "Wasteland"]
    },
    correct: 0,
    explanation: {
      en: "Fallout is known for its vaults and the Brotherhood of Steel.",
      fr: "Fallout est connu pour ses abris et la Confrérie de l'Acier."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "5ab3d86d-3375-4f32-8b6c-afb852ed3e6a",
    difficulty: 5,
    question: {
      en: "Which company created the arcade classic 'Pac-Man'?",
      fr: "Quelle entreprise a créé le classique d'arcade 'Pac-Man' ?"
    },
    answers: {
      en: ["Namco", "Taito", "Atari", "Sega"],
      fr: ["Namco", "Taito", "Atari", "Sega"]
    },
    correct: 0,
    explanation: {
      en: "Namco created Pac-Man in 1980.",
      fr: "Namco a créé Pac-Man en 1980."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "3799ee75-bcfa-45ab-9b9c-ec6897bb9626",
    difficulty: 7,
    question: {
      en: "In 'The Elder Scrolls V: Skyrim', what are the half-human, half-beast creatures called who can transform under the full moon?",
      fr: "Dans 'The Elder Scrolls V: Skyrim', comment appelle-t-on les créatures mi-humaines mi-bêtes qui peuvent se transformer à la pleine lune ?"
    },
    answers: {
      en: ["Werewolves", "Vampires", "Gargoyles", "Spriggans"],
      fr: ["Les loups-garous", "Les vampires", "Les gargouilles", "Les spriggans"]
    },
    correct: 0,
    explanation: {
      en: "Werewolves appear as part-human, part-wolf in Skyrim.",
      fr: "Les loups-garous sont mi-humains mi-loups dans Skyrim."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "5f4f2fe4-57ea-434f-a7a4-0876fc5a4e31",
    difficulty: 6,
    question: {
      en: "Which Valve game involves solving puzzles with a portal gun?",
      fr: "Quel jeu de Valve consiste à résoudre des énigmes avec un pistolet à portails ?"
    },
    answers: {
      en: ["Portal", "Half-Life", "Team Fortress 2", "Left 4 Dead"],
      fr: ["Portal", "Half-Life", "Team Fortress 2", "Left 4 Dead"]
    },
    correct: 0,
    explanation: {
      en: "Portal challenges players with physics-based puzzles.",
      fr: "Portal met les joueurs au défi avec des énigmes basées sur la physique."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "dd01d511-bff7-45a4-b0ba-6da2baa7221b",
    difficulty: 4,
    question: {
      en: "Which iconic British archaeologist is the protagonist of the 'Tomb Raider' series?",
      fr: "Quel archéologue britannique iconique est le protagoniste de la série 'Tomb Raider' ?"
    },
    answers: {
      en: ["Lara Croft", "Nathan Drake", "Chloe Frazer", "Aloy"],
      fr: ["Lara Croft", "Nathan Drake", "Chloe Frazer", "Aloy"]
    },
    correct: 0,
    explanation: {
      en: "Lara Croft is the protagonist of Tomb Raider.",
      fr: "Lara Croft est la protagoniste de Tomb Raider."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "d3d4aa38-bb33-4bdf-a0bb-91fcd36e701e",
    difficulty: 2,
    question: {
      en: "In 'Animal Crossing', what is the name of the raccoon who manages the player’s home loans?",
      fr: "Dans 'Animal Crossing', quel est le nom du raton laveur qui gère les prêts immobiliers du joueur ?"
    },
    answers: {
      en: ["Tom Nook", "Isabelle", "Blathers", "K.K. Slider"],
      fr: ["Tom Nook", "Isabelle", "Thibou (Blathers)", "Kéké Laglisse (K.K. Slider)"]
    },
    correct: 0,
    explanation: {
      en: "Tom Nook handles your home expansions and loans.",
      fr: "Tom Nook gère vos prêts et agrandissements de maison."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "af31a64f-3152-4fd2-8320-f6bf83d70d82",
    difficulty: 8,
    question: {
      en: "Which horror franchise features animatronic characters in a pizzeria setting?",
      fr: "Quelle franchise d'horreur met en scène des personnages animatroniques dans une pizzeria ?"
    },
    answers: {
      en: ["Five Nights at Freddy’s", "Resident Evil", "Silent Hill", "Amnesia"],
      fr: ["Five Nights at Freddy’s", "Resident Evil", "Silent Hill", "Amnesia"]
    },
    correct: 0,
    explanation: {
      en: "Five Nights at Freddy’s involves haunted animatronics in a pizzeria.",
      fr: "Five Nights at Freddy’s met en scène des animatroniques hantées dans une pizzeria."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "d6f20ac4-2235-46a9-8ce6-97c84dfb8755",
    difficulty: 5,
    question: {
      en: "In 'League of Legends', what are the AI-controlled creatures that march down lanes called?",
      fr: "Dans 'League of Legends', comment appelle-t-on les créatures contrôlées par l'IA qui avancent dans les couloirs (lanes) ?"
    },
    answers: {
      en: ["Minions", "Creeps", "Golems", "Wraiths"],
      fr: ["Les sbires", "Les creeps", "Les golems", "Les spectres"]
    },
    correct: 0,
    explanation: {
      en: "Minions march down the lanes in League of Legends.",
      fr: "Les sbires avancent dans les lanes dans League of Legends."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "24ce315c-bf58-486c-a010-f97b223516d5",
    difficulty: 6,
    question: {
      en: "Which fighting game series is famous for characters like Ryu and Chun-Li?",
      fr: "Quelle série de jeux de combat est célèbre pour des personnages comme Ryu et Chun-Li ?"
    },
    answers: {
      en: ["Street Fighter", "Tekken", "Mortal Kombat", "King of Fighters"],
      fr: ["Street Fighter", "Tekken", "Mortal Kombat", "King of Fighters"]
    },
    correct: 0,
    explanation: {
      en: "Street Fighter features iconic fighters Ryu and Chun-Li.",
      fr: "Street Fighter met en scène les combattants emblématiques Ryu et Chun-Li."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "bd8e6f81-5644-4381-b7c3-50d0eabd2f62",
    difficulty: 4,
    question: {
      en: "Which open-world RPG from CD Projekt RED features Geralt of Rivia?",
      fr: "Quel RPG en monde ouvert de CD Projekt RED met en scène Geralt de Riv ?"
    },
    answers: {
      en: ["The Witcher 3: Wild Hunt", "Cyberpunk 2077", "Dragon Age: Inquisition", "Skyrim"],
      fr: ["The Witcher 3: Wild Hunt", "Cyberpunk 2077", "Dragon Age: Inquisition", "Skyrim"]
    },
    correct: 0,
    explanation: {
      en: "The Witcher 3 follows Geralt’s adventures.",
      fr: "The Witcher 3 suit les aventures de Geralt."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "67da2579-f94f-44a9-bdf8-87ae9dcb2e2d",
    difficulty: 3,
    question: {
      en: "In 'Overwatch', which character is known for wielding a rocket launcher and shouting 'Justice rains from above!'?",
      fr: "Dans 'Overwatch', quel personnage est connu pour manier un lance-roquettes et crier 'Justice rains from above!' (La justice tombe du ciel !) ?"
    },
    answers: {
      en: ["Pharah", "D.Va", "Mercy", "Tracer"],
      fr: ["Pharah", "D.Va", "Mercy", "Tracer"]
    },
    correct: 0,
    explanation: {
      en: "Pharah launches rockets from the sky.",
      fr: "Pharah tire des roquettes depuis les airs."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "2349a923-748a-4d19-bf38-00a68cc12b0f",
    difficulty: 7,
    question: {
      en: "Which game series revolves around hunting large monsters with a variety of crafted weapons?",
      fr: "Quelle série de jeux est centrée sur la chasse à de grands monstres avec une variété d'armes artisanales ?"
    },
    answers: {
      en: ["Monster Hunter", "Dauntless", "Dark Souls", "Dragons Dogma"],
      fr: ["Monster Hunter", "Dauntless", "Dark Souls", "Dragon's Dogma"]
    },
    correct: 0,
    explanation: {
      en: "Monster Hunter focuses on slaying huge creatures.",
      fr: "Monster Hunter se concentre sur la traque et l'abattage de gigantesques créatures."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "3732fbd9-a171-4ec2-8739-cd0ff68b4f1d",
    difficulty: 6,
    question: {
      en: "In 'Metal Gear Solid', what is the name of the stealth operative known as 'Solid'?",
      fr: "Dans 'Metal Gear Solid', quel est le nom de l'agent infiltré connu sous le nom de 'Solid' ?"
    },
    answers: {
      en: ["Solid Snake", "Liquid Snake", "Big Boss", "Raiden"],
      fr: ["Solid Snake", "Liquid Snake", "Big Boss", "Raiden"]
    },
    correct: 0,
    explanation: {
      en: "Solid Snake is the main stealth operative.",
      fr: "Solid Snake est l'agent d'infiltration principal."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "9c2a2c73-ec8e-4ed1-8dea-2b7b57eb0faa",
    difficulty: 8,
    question: {
      en: "Which platformer game by Playdead features a boy navigating monochromatic environments filled with traps?",
      fr: "Quel jeu de plateforme de Playdead met en scène un garçon évoluant dans des environnements monochromes remplis de pièges ?"
    },
    answers: {
      en: ["Limbo", "Inside", "Fez", "Braid"],
      fr: ["Limbo", "Inside", "Fez", "Braid"]
    },
    correct: 0,
    explanation: {
      en: "Limbo is a monochrome puzzle-platformer by Playdead.",
      fr: "Limbo est un jeu de plateforme-puzzle monochrome de Playdead."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "5c26f7e3-784f-4c87-83d2-2f7f8c02875b",
    difficulty: 5,
    question: {
      en: "In 'Assassin’s Creed', which order opposes the Assassins?",
      fr: "Dans 'Assassin’s Creed', quel ordre s'oppose aux Assassins ?"
    },
    answers: {
      en: ["Templars", "Samurai", "Spartans", "Knights of the Round"],
      fr: ["Les Templiers", "Les samouraïs", "Les Spartiates", "Les Chevaliers de la Table Ronde"]
    },
    correct: 0,
    explanation: {
      en: "The Templars are the main antagonistic order.",
      fr: "Les Templiers sont l'ordre antagoniste principal."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "27464b77-a3a2-47cc-a2ae-e93932d12193",
    difficulty: 3,
    question: {
      en: "Which game involves building defenses against hordes of zombies, often paired with the phrase 'Save the World'?",
      fr: "Quel jeu implique de construire des défenses contre des hordes de zombies, souvent associé à l'expression 'Save the World' (Sauver le monde) ?"
    },
    answers: {
      en: ["Fortnite", "Plants vs. Zombies", "Call of Duty: Zombies", "Left 4 Dead"],
      fr: ["Fortnite", "Plants vs. Zombies", "Call of Duty: Zombies", "Left 4 Dead"]
    },
    correct: 0,
    explanation: {
      en: "Fortnite’s 'Save the World' mode involves building fortifications against undead husks.",
      fr: "Le mode 'Save the World' de Fortnite implique de construire des fortifications contre des créatures zombies."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "1be860be-db8b-4440-8ad2-e5ab850f69e8",
    difficulty: 6,
    question: {
      en: "Which indie game allows players to explore a vast universe of procedurally generated planets?",
      fr: "Quel jeu indépendant permet aux joueurs d'explorer un vaste univers de planètes générées procéduralement ?"
    },
    answers: {
      en: ["No Man’s Sky", "Stardew Valley", "Terraria", "Subnautica"],
      fr: ["No Man’s Sky", "Stardew Valley", "Terraria", "Subnautica"]
    },
    correct: 0,
    explanation: {
      en: "No Man’s Sky features a virtually infinite universe.",
      fr: "No Man’s Sky propose un univers pratiquement infini."
    },
    tags: [TagEnum.VIDEOGAMES],
  },
  {
    id: "9d06b686-daf3-45b5-892b-3f6a7ceb5c92",
    difficulty: 4,
    question: {
      en: "In 'Grand Theft Auto V', what is the name of the fictional city inspired by Los Angeles?",
      fr: "Dans 'Grand Theft Auto V', quel est le nom de la ville fictive inspirée de Los Angeles ?"
    },
    answers: {
      en: ["Los Santos", "Vice City", "Liberty City", "San Fierro"],
      fr: ["Los Santos", "Vice City", "Liberty City", "San Fierro"]
    },
    correct: 0,
    explanation: {
      en: "Los Santos is the GTA V city based on L.A.",
      fr: "Los Santos est la ville de GTA V inspirée de Los Angeles."
    },
    tags: [TagEnum.VIDEOGAMES],
  }
];