import { Question } from "./quizz.types"

const p1: Question[] = [
  {
    id: "9a18ce6d-9409-4ad3-91c1-c4a6570842e4",
    difficulty: 3,
    question: {
      en: "What is the capital of France?",
      fr: "Quelle est la capitale de la France ?"
    },
    answers: {
      en: ["Paris", "London", "Berlin", "Madrid"],
      fr: ["Paris", "Londres", "Berlin", "Madrid"]
    },
    correct: 0,
    explanation: {
      en: "Paris is the capital of France. It is a major cultural, political, and economic center in Europe, famous for its historical landmarks such as the Eiffel Tower, the Louvre Museum, Notre-Dame Cathedral, and its rich artistic and intellectual heritage.",
      fr: "Paris est la capitale de la France. C'est un important centre culturel, politique et économique en Europe, renommé pour ses monuments historiques tels que la Tour Eiffel, le Musée du Louvre, la Cathédrale Notre-Dame, ainsi que pour son riche patrimoine artistique et intellectuel."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "67aa7f81-4aea-4b75-9ef6-76a09064aad9",
    difficulty: 5,
    question: {
      en: "Who painted the Mona Lisa?",
      fr: "Qui a peint la Joconde ?"
    },
    answers: {
      en: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
      fr: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Donatello"]
    },
    correct: 0,
    explanation: {
      en: "Leonardo da Vinci painted the Mona Lisa in the early 16th century (circa 1503-1506). The painting is admired for its subtlety of expression and innovative use of sfumato, and it is now displayed at the Louvre Museum in Paris, attracting millions of visitors each year.",
      fr: "Léonard de Vinci a peint la Joconde au début du XVIe siècle (vers 1503-1506). Cette œuvre est célèbre pour la subtilité de son expression et son utilisation novatrice du sfumato. Elle est aujourd'hui exposée au Musée du Louvre à Paris et attire des millions de visiteurs chaque année."
    },
    tags: ["ART"]
  },
  {
    id: "11b97e86-c06d-4deb-ac74-91d501a32ac8",
    difficulty: 7,
    question: {
      en: "What is the chemical symbol for gold?",
      fr: "Quel est le symbole chimique de l'or ?"
    },
    answers: {
      en: ["Au", "Ag", "Pb", "Fe"],
      fr: ["Au", "Ag", "Pb", "Fe"]
    },
    correct: 0,
    explanation: {
      en: "The chemical symbol for gold is 'Au', derived from the Latin word 'aurum', meaning 'shining dawn' or simply 'gold.' Gold has been valued throughout human history for its rarity, luster, malleability, and use as a form of currency and ornamentation.",
      fr: "Le symbole chimique de l'or est 'Au', issu du mot latin 'aurum', signifiant 'aube brillante' ou 'or' tout simplement. L'or est prisé depuis l'Antiquité pour sa rareté, son éclat, sa malléabilité ainsi que son utilisation en tant que monnaie et ornement."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "71702a63-0cf0-4705-b13c-b1b7384a6eaf",
    difficulty: 6,
    question: {
      en: "What year did World War II end?",
      fr: "En quelle année s'est terminée la Seconde Guerre mondiale ?"
    },
    answers: {
      en: ["1945", "1939", "1940", "1950"],
      fr: ["1945", "1939", "1940", "1950"]
    },
    correct: 0,
    explanation: {
      en: "World War II ended in 1945 with Germany's surrender in May and Japan's surrender in August. This global conflict, involving most of the world’s nations, was one of the deadliest and most significant events in human history, reshaping geopolitical boundaries and global power structures.",
      fr: "La Seconde Guerre mondiale s'est achevée en 1945, avec la capitulation de l'Allemagne en mai et celle du Japon en août. Ce conflit mondial, qui a impliqué la plupart des nations, fut l'un des plus meurtriers et marquants de l'histoire, redessinant les frontières et les équilibres de puissance internationaux."
    },
    tags: ["HISTORY"]
  },
  {
    id: "584f7e40-e9fc-4045-a673-c44405a057b8",
    difficulty: 4,
    question: {
      en: "Who wrote '1984'?",
      fr: "Qui a écrit '1984' ?"
    },
    answers: {
      en: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
      fr: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"]
    },
    correct: 0,
    explanation: {
      en: "'1984' was written by George Orwell and published in 1949. This dystopian novel explores themes of totalitarianism, surveillance, and the manipulation of truth, having a profound influence on political discourse and popular culture.",
      fr: "'1984' a été écrit par George Orwell et publié en 1949. Ce roman dystopique aborde les thèmes du totalitarisme, de la surveillance et de la manipulation de la vérité, exerçant une influence durable sur le discours politique et la culture populaire."
    },
    tags: ["LITERATURE"]
  },
  {
    id: "584f7e40-e9fc-4045-a673-c44405a057b8",
    difficulty: 8,
    question: {
      en: "What is the formula for the area of a circle?",
      fr: "Quelle est la formule de l'aire d'un cercle ?"
    },
    answers: {
      en: ["πr²", "2πr", "r²", "πd"],
      fr: ["πr²", "2πr", "r²", "πd"]
    },
    correct: 0,
    explanation: {
      en: "The area of a circle is given by πr², where r is the radius. This formula is fundamental in geometry and allows for easy calculation of the region enclosed by a circle.",
      fr: "L'aire d'un cercle se calcule avec la formule πr², où r est le rayon. Cette formule fondamentale en géométrie permet de déterminer aisément la surface délimitée par un cercle."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "7e157f52-a62f-4a88-8445-86871051b0b9",
    difficulty: 2,
    question: {
      en: "Who is the Greek god of the sea?",
      fr: "Qui est le dieu grec de la mer ?"
    },
    answers: {
      en: ["Poseidon", "Zeus", "Hades", "Apollo"],
      fr: ["Poséidon", "Zeus", "Hadès", "Apollon"]
    },
    correct: 0,
    explanation: {
      en: "Poseidon is the Greek god of the sea, earthquakes, and horses. He was a major deity in ancient Greek mythology, known for his temperamental nature and association with all bodies of water.",
      fr: "Poséidon est le dieu grec de la mer, des tremblements de terre et des chevaux. Divinité majeure de la mythologie grecque, il est réputé pour son caractère impulsif et son lien avec tous les milieux aquatiques."
    },
    tags: ["RELIGION"]
  },
  {
    id: "98c8c757-821c-4311-916a-8f7a2243ad5d",
    difficulty: 6,
    question: {
      en: "What is the primary programming language used for Android development?",
      fr: "Quel est le langage de programmation principal utilisé pour le développement Android ?"
    },
    answers: {
      en: ["Java", "Python", "C++", "Swift"],
      fr: ["Java", "Python", "C++", "Swift"]
    },
    correct: 0,
    explanation: {
      en: "Historically, Java has been the primary language for Android development. In recent years, Kotlin has also become a first-class language for Android apps, offering more concise syntax and improved safety features.",
      fr: "Historiquement, Java a été le principal langage pour le développement Android. Ces dernières années, Kotlin est également devenu un langage de premier plan pour les applications Android, grâce à une syntaxe plus concise et une meilleure gestion de la sécurité."
    },
    tags: ["TECHNOLOGY"]
  },
  {
    id: "06864069-2bd1-4266-b675-08d3b08c216a",
    difficulty: 4,
    question: {
      en: "Who discovered penicillin?",
      fr: "Qui a découvert la pénicilline ?"
    },
    answers: {
      en: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Edward Jenner"],
      fr: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Edward Jenner"]
    },
    correct: 0,
    explanation: {
      en: "Alexander Fleming discovered penicillin in 1928 when he noticed that a mold (Penicillium) inhibited bacterial growth. This breakthrough led to the development of antibiotics, revolutionizing modern medicine and saving countless lives.",
      fr: "Alexander Fleming a découvert la pénicilline en 1928 après avoir observé qu'une moisissure (Penicillium) empêchait la croissance des bactéries. Cette découverte a mené à la création des antibiotiques, révolutionnant la médecine moderne et sauvant un nombre incalculable de vies."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "84a70859-9286-45f2-a4cc-be93d89d49db",
    difficulty: 9,
    question: {
      en: "What treaty ended World War I?",
      fr: "Quel traité a mis fin à la Première Guerre mondiale ?"
    },
    answers: {
      en: ["Treaty of Versailles", "Treaty of Trianon", "Treaty of Brest-Litovsk", "Treaty of Ghent"],
      fr: ["Traité de Versailles", "Traité de Trianon", "Traité de Brest-Litovsk", "Traité de Gand"]
    },
    correct: 0,
    explanation: {
      en: "The Treaty of Versailles, signed in 1919, ended World War I. It imposed heavy reparations on Germany and significantly reshaped Europe's political map, setting the stage for the interwar period.",
      fr: "Le Traité de Versailles, signé en 1919, mit fin à la Première Guerre mondiale. Il imposa de lourdes réparations à l'Allemagne et redessina considérablement la carte politique de l'Europe, influençant profondément la période de l'entre-deux-guerres."
    },
    tags: ["HISTORY"]
  },
  {
    id: "90cd551c-d9dd-4947-b848-991a703f4486",
    difficulty: 7,
    question: {
      en: "Who composed the 'Symphony No. 9'?",
      fr: "Qui a composé la 'Symphonie n° 9' ?"
    },
    answers: {
      en: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Pyotr Ilyich Tchaikovsky"],
      fr: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Piotr Ilitch Tchaïkovski"]
    },
    correct: 0,
    explanation: {
      en: "Ludwig van Beethoven composed the 'Symphony No. 9' in the early 19th century. Premiered in 1824, it is famous for its final movement, known as the 'Ode to Joy,' which has become a universal anthem for freedom and human brotherhood.",
      fr: "Ludwig van Beethoven a composé la 'Symphonie n° 9' au début du XIXe siècle. Créée en 1824, elle est particulièrement célèbre pour son dernier mouvement, l'« Ode à la joie », devenue un symbole universel de liberté et de fraternité humaine."
    },
    tags: ["MUSIC"]
  },
  {
    id: "7d2587ed-70b3-4696-9ea4-7f3bf621596b",
    difficulty: 5,
    question: {
      en: "Who wrote 'Pride and Prejudice'?",
      fr: "Qui a écrit 'Orgueil et Préjugés' ?"
    },
    answers: {
      en: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "George Eliot"],
      fr: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "George Eliot"]
    },
    correct: 0,
    explanation: {
      en: "Jane Austen wrote 'Pride and Prejudice,' published in 1813. The novel offers a keen social commentary on British Regency-era society, focusing on issues of class, marriage, and morality.",
      fr: "Jane Austen a écrit 'Orgueil et Préjugés', publié en 1813. Ce roman fournit une analyse sociale pertinente de l'Angleterre de la Régence, abordant des questions de classe, de mariage et de morale."
    },
    tags: ["LITERATURE"]
  },
  {
    id: "41b3c8eb-a1b5-42e5-a60c-040b71e5c1d9",
    difficulty: 3,
    question: {
      en: "What is the chemical symbol for water?",
      fr: "Quel est le symbole chimique de l'eau ?"
    },
    answers: {
      en: ["H²O", "O2", "CO2", "H2"],
      fr: ["H²O", "O2", "CO2", "H2"]
    },
    correct: 0,
    explanation: {
      en: "The chemical formula for water is H2O, consisting of two hydrogen atoms and one oxygen atom. Water is essential for life on Earth, playing a key role in biological processes and ecological systems.",
      fr: "La formule chimique de l'eau est H2O, comprenant deux atomes d'hydrogène et un atome d'oxygène. L'eau est indispensable à la vie sur Terre, intervenant dans les processus biologiques et les équilibres écologiques."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "a9b2d586-4e1c-4d55-9d9b-6a1a08d9c6f0",
    difficulty: 2,
    question: {
      en: "What is the largest planet in our solar system?",
      fr: "Quelle est la plus grande planète de notre système solaire ?"
    },
    answers: {
      en: ["Jupiter", "Saturn", "Earth", "Mars"],
      fr: ["Jupiter", "Saturne", "Terre", "Mars"]
    },
    correct: 0,
    explanation: {
      en: "Jupiter is the largest planet in the solar system, more than twice as massive as all the other planets combined. Its distinctive features include colorful cloud bands and the Great Red Spot, a persistent storm.",
      fr: "Jupiter est la plus grande planète du système solaire, plus de deux fois plus massive que toutes les autres réunies. Elle se distingue par ses bandes nuageuses colorées et sa Grande Tache Rouge, une tempête permanente."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "f7c9e146-5185-4e4a-9b24-837b1e56c4df",
    difficulty: 4,
    question: {
      en: "Who discovered gravity?",
      fr: "Qui a découvert la gravité ?"
    },
    answers: {
      en: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
      fr: ["Isaac Newton", "Galilée", "Albert Einstein", "Nikola Tesla"]
    },
    correct: 0,
    explanation: {
      en: "Isaac Newton did not merely discover gravity but formulated a universal law of gravitation in the 17th century, providing a mathematical framework to explain how objects attract each other. His work laid the foundation for classical mechanics and influenced centuries of scientific thought.",
      fr: "Isaac Newton n'a pas simplement découvert la gravité, il en a formulé la loi universelle au XVIIe siècle, fournissant une base mathématique expliquant l'attraction mutuelle des objets. Ses travaux ont jeté les fondements de la mécanique classique et influencé la pensée scientifique pendant plusieurs siècles."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "c13b62c4-e916-4c08-97f8-b6c6e2e22b43",
    difficulty: 3,
    question: {
      en: "Which organ pumps blood in the human body?",
      fr: "Quel organe pompe le sang dans le corps humain ?"
    },
    answers: {
      en: ["Heart", "Lungs", "Liver", "Kidneys"],
      fr: ["Cœur", "Poumons", "Foie", "Reins"]
    },
    correct: 0,
    explanation: {
      en: "The heart is the organ responsible for pumping blood throughout the circulatory system. It delivers oxygen and nutrients to cells and removes carbon dioxide and waste products, maintaining life-sustaining circulation.",
      fr: "Le cœur est l'organe chargé de pomper le sang dans le système circulatoire. Il fournit de l'oxygène et des nutriments aux cellules, tout en évacuant le dioxyde de carbone et les déchets, assurant ainsi une circulation vitale."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "d4e7a345-1e6d-49c7-a52d-909cb8e72a6e",
    difficulty: 5,
    question: {
      en: "Who was the first President of the United States?",
      fr: "Qui était le premier président des États-Unis ?"
    },
    answers: {
      en: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
      fr: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"]
    },
    correct: 0,
    explanation: {
      en: "George Washington served as the first President of the United States from 1789 to 1797. A key figure in the nation's founding, he led the Continental Army to victory during the American Revolutionary War and is revered as the 'Father of His Country.'",
      fr: "George Washington fut le premier président des États-Unis, exerçant son mandat de 1789 à 1797. Figure clé dans la fondation de la nation, il mena l'Armée continentale à la victoire pendant la Guerre d'indépendance américaine et est vénéré comme le 'Père de son pays'."
    },
    tags: ["HISTORY"]
  },
  {
    id: "e0f9d3a6-5f3e-4dbe-8b12-f6f497ce6b57",
    difficulty: 7,
    question: {
      en: "What is the speed of light in vacuum?",
      fr: "Quelle est la vitesse de la lumière dans le vide ?"
    },
    answers: {
      en: ["299,792 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"],
      fr: ["299 792 km/s", "150 000 km/s", "1 000 km/s", "3 000 km/s"]
    },
    correct: 0,
    explanation: {
      en: "The speed of light in a vacuum is approximately 299,792 kilometers per second. It represents a fundamental constant in physics, denoted as 'c', and forms the basis for Einstein’s theories of relativity.",
      fr: "La vitesse de la lumière dans le vide est d'environ 299 792 kilomètres par seconde. Elle constitue une constante fondamentale en physique, notée 'c', et sert de base aux théories de la relativité d'Einstein."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "bb7385cc-f948-492a-b38b-c9a4e9a3e021",
    difficulty: 6,
    question: {
      en: "Who was known as the 'Maid of Orléans'?",
      fr: "Qui était connue comme la 'Pucelle d'Orléans' ?"
    },
    answers: {
      en: ["Joan of Arc", "Marie Antoinette", "Catherine de' Medici", "Anne of Brittany"],
      fr: ["Jeanne d'Arc", "Marie-Antoinette", "Catherine de Médicis", "Anne de Bretagne"]
    },
    correct: 0,
    explanation: {
      en: "Joan of Arc, called the 'Maid of Orléans,' was a French heroine who led French forces to critical victories during the Hundred Years' War. She was later captured, tried for heresy, and executed, but eventually canonized as a saint.",
      fr: "Jeanne d'Arc, surnommée la 'Pucelle d'Orléans', fut une héroïne française qui mena l'armée française à des victoires décisives durant la Guerre de Cent Ans. Capturée, jugée pour hérésie et exécutée, elle fut ultérieurement canonisée et élevée au rang de sainte."
    },
    tags: ["HISTORY"]
  },
  {
    id: "a7b2e84c-0b3f-4c3e-ae9b-d0cb3e6a5de2",
    difficulty: 8,
    question: {
      en: "What is the primary language spoken in Brazil?",
      fr: "Quelle est la langue principale parlée au Brésil ?"
    },
    answers: {
      en: ["Portuguese", "Spanish", "English", "French"],
      fr: ["Portugais", "Espagnol", "Anglais", "Français"]
    },
    correct: 0,
    explanation: {
      en: "Portuguese is the official and predominant language of Brazil, a legacy of its colonial history under Portuguese rule.",
      fr: "Le portugais est la langue officielle et prédominante au Brésil, hérité de l'histoire coloniale du pays sous la domination portugaise."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "f0a4b357-0bce-4c34-940c-cd9ecdc4b14e",
    difficulty: 3,
    question: {
      en: "What does DNA stand for?",
      fr: "Que signifie ADN ?"
    },
    answers: {
      en: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Nucleic Acid", "Deoxyribose Acid"],
      fr: ["Acide Désoxyribonucléique", "Acide Ribonucléique", "Acide Nucléique", "Acide Désoxyribose"]
    },
    correct: 0,
    explanation: {
      en: "DNA stands for Deoxyribonucleic Acid. It is the hereditary material in almost all organisms, carrying genetic instructions essential for development, functioning, growth, and reproduction.",
      fr: "ADN signifie Acide Désoxyribonucléique. C'est la molécule qui porte l'information génétique chez la plupart des organismes, assurant le développement, le fonctionnement, la croissance et la reproduction."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "7e2589df-92f7-49a8-91b6-3a4c0e7a0eaf",
    difficulty: 9,
    question: {
      en: "Who was the author of 'The Divine Comedy'?",
      fr: "Qui était l'auteur de 'La Divine Comédie' ?"
    },
    answers: {
      en: ["Dante Alighieri", "Virgil", "Homer", "Ovid"],
      fr: ["Dante Alighieri", "Virgile", "Homère", "Ovide"]
    },
    correct: 0,
    explanation: {
      en: "Dante Alighieri wrote 'The Divine Comedy' in the early 14th century. This epic poem, divided into 'Inferno,' 'Purgatorio,' and 'Paradiso,' has had a profound impact on literature and moral philosophy.",
      fr: "Dante Alighieri a écrit 'La Divine Comédie' au début du XIVe siècle. Ce poème épique, divisé en 'Enfer', 'Purgatoire' et 'Paradis', a profondément influencé la littérature et la philosophie morale."
    },
    tags: ["LITERATURE"]
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
      en: "The Nile, in Africa, is traditionally considered the longest river in the world, stretching approximately 6,650 kilometers. Its waters have supported civilizations for millennia.",
      fr: "Le Nil en Afrique est traditionnellement considéré comme le plus long fleuve du monde, avec environ 6 650 kilomètres. Ses eaux ont soutenu des civilisations pendant des millénaires."
    },
    tags: ["GEOGRAPHY"]
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
      en: "Hydrogen is the most abundant element in the universe, making up about 75% of its elemental mass. It played a critical role in the formation of stars and galaxies.",
      fr: "L'hydrogène est l'élément le plus abondant dans l'univers, représentant environ 75% de sa masse élémentaire. Il a joué un rôle essentiel dans la formation des étoiles et des galaxies."
    },
    tags: ["SCIENCE"]
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
      en: "The French Revolution began in 1789, with the storming of the Bastille on July 14th. It fundamentally transformed French society and inspired political upheavals worldwide.",
      fr: "La Révolution française a débuté en 1789, avec la prise de la Bastille le 14 juillet. Elle a profondément transformé la société française et inspiré des bouleversements politiques dans le monde entier."
    },
    tags: ["HISTORY"]
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
      en: "Miguel de Cervantes wrote 'Don Quixote,' published in two parts (1605 and 1615). Often considered the first modern novel, it satirizes chivalric romance and remains a cornerstone of Western literature.",
      fr: "Miguel de Cervantes a écrit 'Don Quichotte', publié en deux parties (1605 et 1615). Souvent considéré comme le premier roman moderne, l'ouvrage tourne en dérision les romans de chevalerie et demeure une œuvre phare de la littérature occidentale."
    },
    tags: ["LITERATURE"]
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
      en: "Antonio Vivaldi composed 'The Four Seasons' (circa 1720), a set of four violin concertos each representing a season. Its innovative use of musical imagery makes it one of the most famous works of the Baroque era.",
      fr: "Antonio Vivaldi a composé 'Les Quatre Saisons' (vers 1720), un ensemble de quatre concertos pour violon symbolisant chacun une saison. Son utilisation novatrice de l'imagerie musicale en fait l'une des œuvres baroques les plus célèbres."
    },
    tags: ["MUSIC"]
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
      en: "Tim Berners-Lee invented the World Wide Web in 1989 at CERN. His creation enabled the linking of documents via hyperlinks, shaping the modern internet and revolutionizing global information exchange.",
      fr: "Tim Berners-Lee a inventé le World Wide Web en 1989 au CERN. Son invention a permis de lier des documents via des hyperliens, façonnant l'Internet moderne et révolutionnant l'échange d'informations à l'échelle mondiale."
    },
    tags: ["TECHNOLOGY"]
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
      en: "The cell is the smallest unit of life that can carry out all life processes. It is the basic building block of all organisms, whether single-celled bacteria or complex multicellular organisms.",
      fr: "La cellule est la plus petite unité du vivant capable d'accomplir toutes les fonctions vitales. Elle constitue l'unité de base de tous les organismes, des bactéries unicellulaires aux organismes multicellulaires complexes."
    },
    tags: ["SCIENCE"]
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
      en: "Canberra is the capital of Australia, chosen in 1908 as a compromise between rivals Sydney and Melbourne. It is a planned city known for its national institutions and green spaces.",
      fr: "Canberra est la capitale de l'Australie, choisie en 1908 comme compromis entre les villes rivales de Sydney et Melbourne. C'est une ville planifiée, réputée pour ses institutions nationales et ses nombreux espaces verts."
    },
    tags: ["GEOGRAPHY"]
  }
]

const p2: Question[] = [
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
      en: "Marie Curie was the first woman to win a Nobel Prize, awarded in Physics in 1903 (shared with Pierre Curie and Henri Becquerel) for research on radioactivity. She later won a second Nobel Prize in Chemistry, making her the only person to win Nobel Prizes in two different sciences.",
      fr: "Marie Curie a été la première femme à obtenir un prix Nobel, celui de Physique en 1903 (partagé avec Pierre Curie et Henri Becquerel) pour ses recherches sur la radioactivité. Elle obtiendra plus tard un second prix Nobel, en Chimie, devenant ainsi la seule personne à avoir reçu des Nobel dans deux disciplines scientifiques différentes."
    },
    tags: ["HISTORY"]
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
      en: "'The Republic' was written by the philosopher Plato. Written as a Socratic dialogue, it explores justice, the ideal state, and the nature of knowledge, profoundly influencing Western political philosophy.",
      fr: "'La République' a été écrite par le philosophe Platon. Présentée sous forme de dialogue socratique, elle interroge la justice, l'État idéal et la nature du savoir, exerçant une influence majeure sur la philosophie politique occidentale."
    },
    tags: ["PHILOSOPHY"]
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
      en: "Sumo wrestling is considered the national sport of Japan. It has centuries-old traditions, with wrestlers (rikishi) undergoing rigorous training and performing highly ritualized matches.",
      fr: "Le sumo est considéré comme le sport national du Japon. Il possède des traditions séculaires, avec des lutteurs (rikishi) soumis à un entraînement intensif et des combats très codifiés."
    },
    tags: ["SPORTS"]
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
      en: "The United States has the world's largest economy by nominal GDP. Its economic leadership has influenced global markets and financial systems, although China is a close second and continues to grow rapidly.",
      fr: "Les États-Unis possèdent la plus grande économie mondiale en termes de PIB nominal. Leur position économique dominante a façonné les marchés et les systèmes financiers internationaux, même si la Chine les talonne de près avec une croissance soutenue."
    },
    tags: ["ECONOMY"]
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
      en: "Quentin Tarantino directed 'Pulp Fiction' (1994). Known for its nonlinear storyline, sharp dialogue, and eclectic soundtrack, the film revitalized independent cinema and became a cultural landmark.",
      fr: "Quentin Tarantino a réalisé 'Pulp Fiction' (1994). Connu pour sa narration non linéaire, ses dialogues incisifs et sa bande-son éclectique, ce film a revitalisé le cinéma indépendant et marqué la culture populaire."
    },
    tags: ["CINEMA"]
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
      en: "India recently surpassed China as the world’s most populous country, with a population of over 1.4 billion people, reflecting significant demographic shifts.",
      fr: "L'Inde a récemment dépassé la Chine pour devenir le pays le plus peuplé, avec plus de 1,4 milliard d'habitants, reflétant d'importants changements démographiques."
    },
    tags: ["SOCIETY"]
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
      en: "Ottawa is the capital of Canada, located in the province of Ontario. Known for its cultural institutions such as the National Gallery and Parliament Hill, Ottawa reflects the country’s bilingual and multicultural character.",
      fr: "Ottawa est la capitale du Canada, située dans la province de l'Ontario. Réputée pour ses institutions culturelles comme la Colline du Parlement et le Musée des beaux-arts du Canada, elle reflète le caractère bilingue et multiculturel du pays."
    },
    tags: ["GEOGRAPHY"]
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
      en: "Leo Tolstoy wrote 'War and Peace,' published in 1869. This monumental novel blends history, philosophy, and detailed character studies set against the backdrop of the Napoleonic Wars.",
      fr: "Léon Tolstoï a écrit 'Guerre et Paix', publié en 1869. Ce roman monumental allie histoire, philosophie et étude approfondie des personnages, sur fond de guerres napoléoniennes."
    },
    tags: ["LITERATURE"]
  },
  {
    id: "e928ab9e-1a14-4e7a-b730-f07a9d94dc28",
    difficulty: 3,
    question: {
      en: "What is the capital of Italy?",
      fr: "Quelle est la capitale de l'Italie ?"
    },
    answers: {
      en: ["Rome", "Milan", "Venice", "Florence"],
      fr: ["Rome", "Milan", "Venise", "Florence"]
    },
    correct: 0,
    explanation: {
      en: "Rome is the capital of Italy, famed for its historical legacy as the heart of the Roman Empire. Its ancient ruins, Renaissance art, and Vatican City attract millions of visitors annually.",
      fr: "Rome est la capitale de l'Italie, réputée pour son héritage historique en tant que cœur de l'Empire romain. Ses ruines antiques, son art de la Renaissance et la Cité du Vatican attirent des millions de visiteurs chaque année."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "6da86804-4eeb-4253-b05b-37559421b013",
    difficulty: 7,
    question: {
      en: "Who wrote 'Thus Spoke Zarathustra'?",
      fr: "Qui a écrit 'Ainsi parlait Zarathoustra' ?"
    },
    answers: {
      en: ["Friedrich Nietzsche", "Immanuel Kant", "Arthur Schopenhauer", "Georg Wilhelm Friedrich Hegel"],
      fr: ["Friedrich Nietzsche", "Immanuel Kant", "Arthur Schopenhauer", "Georg Wilhelm Friedrich Hegel"]
    },
    correct: 0,
    explanation: {
      en: "Friedrich Nietzsche wrote 'Thus Spoke Zarathustra' (1883–1885). This philosophical work presents the prophet Zarathustra’s ideas on morality, religion, and the concept of the Übermensch, challenging traditional values.",
      fr: "Friedrich Nietzsche a écrit 'Ainsi parlait Zarathoustra' (1883–1885). Cette œuvre philosophique met en scène le prophète Zarathoustra, portant un regard critique sur la morale, la religion, et introduisant le concept du Surhomme, remettant en cause les valeurs établies."
    },
    tags: ["PHILOSOPHY"]
  },
  {
    id: "d7f7c13e-c3ba-4bb6-8176-023554d1d1c3",
    difficulty: 5,
    question: {
      en: "Who was the first female Prime Minister of the United Kingdom?",
      fr: "Qui a été la première femme Premier ministre du Royaume-Uni ?"
    },
    answers: {
      en: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Elizabeth II"],
      fr: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Elizabeth II"]
    },
    correct: 0,
    explanation: {
      en: "Margaret Thatcher served as the first female Prime Minister of the UK (1979–1990). Known as the 'Iron Lady,' she implemented conservative economic policies and influenced global politics during the Cold War era.",
      fr: "Margaret Thatcher fut la première femme Premier ministre du Royaume-Uni (1979–1990). Surnommée la 'Dame de fer', elle mit en œuvre des politiques économiques conservatrices et exerça une influence sur la scène politique mondiale pendant la Guerre froide."
    },
    tags: ["POLITICS"]
  },
  {
    id: "3a83f830-494e-4e95-bc3b-7cd6d2842e47",
    difficulty: 2,
    question: {
      en: "What is the largest mammal on Earth?",
      fr: "Quel est le plus grand mammifère sur Terre ?"
    },
    answers: {
      en: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
      fr: ["Baleine bleue", "Éléphant d'Afrique", "Girafe", "Hippopotame"]
    },
    correct: 0,
    explanation: {
      en: "The Blue Whale is the largest mammal on Earth, reaching lengths of over 30 meters. Despite its enormous size, it feeds primarily on tiny shrimp-like creatures called krill.",
      fr: "La baleine bleue est le plus grand mammifère sur Terre, pouvant dépasser 30 mètres de long. Malgré sa taille gigantesque, elle se nourrit principalement de petites crevettes appelées krill."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "041775f5-cf31-44f2-912d-5c0d1567c041",
    difficulty: 4,
    question: {
      en: "Which religion is the Bhagavad Gita associated with?",
      fr: "À quelle religion est associée la Bhagavad Gita ?"
    },
    answers: {
      en: ["Hinduism", "Buddhism", "Christianity", "Islam"],
      fr: ["L'hindouisme", "Le bouddhisme", "Le christianisme", "L'islam"]
    },
    correct: 0,
    explanation: {
      en: "The Bhagavad Gita is a sacred Hindu scripture, part of the Mahabharata. It conveys philosophical and spiritual teachings through a dialogue between Prince Arjuna and the god Krishna.",
      fr: "La Bhagavad Gita est un texte sacré de l'hindouisme, faisant partie du Mahabharata. Elle transmet des enseignements philosophiques et spirituels à travers le dialogue entre le prince Arjuna et le dieu Krishna."
    },
    tags: ["RELIGION"]
  },
  {
    id: "16f3d1d4-7ea7-4c73-b2ae-4c76623d3b65",
    difficulty: 6,
    question: {
      en: "Who is known as the father of the computer?",
      fr: "Qui est considéré comme le père de l'ordinateur ?"
    },
    answers: {
      en: ["Charles Babbage", "Alan Turing", "John von Neumann", "Konrad Zuse"],
      fr: ["Charles Babbage", "Alan Turing", "John von Neumann", "Konrad Zuse"]
    },
    correct: 0,
    explanation: {
      en: "Charles Babbage is often regarded as the father of the computer due to his work on the Analytical Engine, a mechanical general-purpose computing machine conceptualized in the 19th century.",
      fr: "Charles Babbage est souvent considéré comme le père de l'ordinateur pour ses travaux sur la Machine analytique, une machine à calculer mécanique à usage général conçue au XIXe siècle."
    },
    tags: ["TECHNOLOGY"]
  },
  {
    id: "fd80b8a0-4d3b-43f4-bf8f-af62755f921b",
    difficulty: 3,
    question: {
      en: "Who wrote 'Les Misérables'?",
      fr: "Qui a écrit 'Les Misérables' ?"
    },
    answers: {
      en: ["Victor Hugo", "Honoré de Balzac", "Gustave Flaubert", "Émile Zola"],
      fr: ["Victor Hugo", "Honoré de Balzac", "Gustave Flaubert", "Émile Zola"]
    },
    correct: 0,
    explanation: {
      en: "Victor Hugo wrote 'Les Misérables,' published in 1862. This epic novel explores themes of justice, redemption, and social inequality in 19th-century France.",
      fr: "Victor Hugo a écrit 'Les Misérables', publié en 1862. Ce roman épique traite de la justice, de la rédemption et des inégalités sociales dans la France du XIXe siècle."
    },
    tags: ["LITERATURE"]
  },
  {
    id: "ff59c5da-3d57-4fe0-9524-bc0e1586f60f",
    difficulty: 5,
    question: {
      en: "Who directed 'The Godfather'?",
      fr: "Qui a réalisé 'Le Parrain' ?"
    },
    answers: {
      en: ["Francis Ford Coppola", "Steven Spielberg", "Stanley Kubrick", "Francis Veber"],
      fr: ["Francis Ford Coppola", "Steven Spielberg", "Stanley Kubrick", "Francis Veber"]
    },
    correct: 0,
    explanation: {
      en: "Francis Ford Coppola directed 'The Godfather' (1972), a landmark crime film that examines family, power, and morality in the Mafia underworld.",
      fr: "Francis Ford Coppola a réalisé 'Le Parrain' (1972), un film emblématique du genre mafieux, explorant la famille, le pouvoir et la morale dans le monde criminel."
    },
    tags: ["CINEMA"]
  },
  {
    id: "3bc1a886-f894-4d25-a3ff-9710f4581cdb",
    difficulty: 5,
    question: {
      en: "Who composed 'Rhapsody in Blue'?",
      fr: "Qui a composé 'Rhapsody in Blue' ?"
    },
    answers: {
      en: ["George Gershwin", "Aaron Copland", "Leonard Bernstein", "Duke Ellington"],
      fr: ["George Gershwin", "Aaron Copland", "Leonard Bernstein", "Duke Ellington"]
    },
    correct: 0,
    explanation: {
      en: "George Gershwin composed 'Rhapsody in Blue' (1924), blending classical music with jazz elements. It remains a defining piece of American music.",
      fr: "George Gershwin a composé 'Rhapsody in Blue' (1924), mêlant musique classique et influences jazz. Cette œuvre est devenue un jalon de la musique américaine."
    },
    tags: ["MUSIC"]
  },
  {
    id: "1f7aaafe-9eff-427c-bda9-84d7cc92a084",
    difficulty: 4,
    question: {
      en: "Which country has won the most FIFA World Cup titles?",
      fr: "Quel pays a remporté le plus de titres de Coupe du Monde de la FIFA ?"
    },
    answers: {
      en: ["Brazil", "Germany", "Italy", "Argentina"],
      fr: ["Brésil", "Allemagne", "Italie", "Argentine"]
    },
    correct: 0,
    explanation: {
      en: "Brazil holds the record for the most FIFA World Cup victories in men's football, with five titles. Their fluid style of play and legendary players have made them a football powerhouse.",
      fr: "Le Brésil détient le record du plus grand nombre de titres de Coupe du Monde de la FIFA en football masculin, avec cinq victoires. Son style de jeu fluide et ses joueurs légendaires en font une puissance incontournable du football."
    },
    tags: ["SPORTS"]
  },
  {
    id: "fa439ec2-8bc8-47b1-9907-3112753b393f",
    difficulty: 6,
    question: {
      en: "In what year did the Berlin Wall fall?",
      fr: "En quelle année le mur de Berlin est-il tombé ?"
    },
    answers: {
      en: ["1989", "1990", "1987", "1991"],
      fr: ["1989", "1990", "1987", "1991"]
    },
    correct: 0,
    explanation: {
      en: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War and paving the way for German reunification and significant geopolitical changes in Europe.",
      fr: "Le mur de Berlin est tombé en 1989, symbolisant la fin de la Guerre froide et ouvrant la voie à la réunification allemande ainsi qu'à d'importants changements géopolitiques en Europe."
    },
    tags: ["HISTORY"]
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
      en: "The Universal Declaration of Human Rights (1948) established a global standard for human rights, emphasizing freedom, equality, and dignity for all individuals.",
      fr: "La Déclaration universelle des droits de l'homme (1948) a établi une norme mondiale pour les droits humains, mettant l'accent sur la liberté, l'égalité et la dignité de chaque individu."
    },
    tags: ["SOCIETY"]
  },
  {
    id: "f61b3241-cce8-4f5c-8c71-fc31b09c1845",
    difficulty: 2,
    question: {
      en: "What is the currency of Japan?",
      fr: "Quelle est la monnaie du Japon ?"
    },
    answers: {
      en: ["Yen", "Dollar", "Euro", "Won"],
      fr: ["Yen", "Dollar", "Euro", "Won"]
    },
    correct: 0,
    explanation: {
      en: "The official currency of Japan is the Yen (JPY). It is widely used in international trade and reflects Japan’s position as a major economic power.",
      fr: "La monnaie officielle du Japon est le Yen (JPY). Elle est largement utilisée dans le commerce international, reflétant le statut du Japon en tant que puissance économique majeure."
    },
    tags: ["ECONOMY"]
  },
  {
    id: "0fc5e803-9c4f-4f7d-9e84-680d299be508",
    difficulty: 6,
    question: {
      en: "Which painter is famous for 'The Persistence of Memory'?",
      fr: "Quel peintre est célèbre pour 'La Persistance de la mémoire' ?"
    },
    answers: {
      en: ["Salvador Dalí", "Pablo Picasso", "Claude Monet", "Andy Warhol"],
      fr: ["Salvador Dalí", "Pablo Picasso", "Claude Monet", "Andy Warhol"]
    },
    correct: 0,
    explanation: {
      en: "'The Persistence of Memory' (1931) is a famous work by the Surrealist painter Salvador Dalí, known for its melting clocks, symbolizing the fluidity of time.",
      fr: "'La Persistance de la mémoire' (1931) est une œuvre célèbre du peintre surréaliste Salvador Dalí, reconnaissable à ses montres molles symbolisant la nature changeante et subjective du temps."
    },
    tags: ["ART"]
  },
  {
    id: "4c701f46-d363-4dc1-935a-0f14b98e07df",
    difficulty: 1,
    question: {
      en: "On which continent is the Sahara Desert located?",
      fr: "Sur quel continent se trouve le désert du Sahara ?"
    },
    answers: {
      en: ["Africa", "Asia", "South America", "Australia"],
      fr: ["Afrique", "Asie", "Amérique du Sud", "Australie"]
    },
    correct: 0,
    explanation: {
      en: "The Sahara Desert is located in North Africa. It is the largest hot desert in the world, covering vast regions and influencing the climate and biodiversity of the continent.",
      fr: "Le désert du Sahara se trouve en Afrique du Nord. C'est le plus grand désert chaud du monde, recouvrant d'immenses étendues et influençant le climat ainsi que la biodiversité du continent."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "5e6db2c6-ebb2-4cb7-9a5b-37f39f862e86",
    difficulty: 8,
    question: {
      en: "Which philosopher wrote 'Critique of Pure Reason'?",
      fr: "Quel philosophe a écrit la 'Critique de la raison pure' ?"
    },
    answers: {
      en: ["Immanuel Kant", "René Descartes", "John Locke", "David Hume"],
      fr: ["Immanuel Kant", "René Descartes", "John Locke", "David Hume"]
    },
    correct: 0,
    explanation: {
      en: "Immanuel Kant wrote the 'Critique of Pure Reason' (1781). This foundational work of modern philosophy examines the limits and structure of human knowledge, profoundly influencing metaphysics and epistemology.",
      fr: "Immanuel Kant a écrit la 'Critique de la raison pure' (1781). Cette œuvre fondamentale de la philosophie moderne explore les limites et la structure de la connaissance humaine, influençant en profondeur la métaphysique et l'épistémologie."
    },
    tags: ["PHILOSOPHY"]
  },
  {
    id: "b0d02f11-a8fb-4890-8519-507d69bdf4ed",
    difficulty: 3,
    question: {
      en: "What gas do plants primarily absorb for photosynthesis?",
      fr: "Quel gaz les plantes absorbent-elles principalement pour la photosynthèse ?"
    },
    answers: {
      en: ["Carbon dioxide (CO2)", "Oxygen (O2)", "Nitrogen (N2)", "Argon (Ar)"],
      fr: ["Dioxyde de carbone (CO2)", "Oxygène (O2)", "Azote (N2)", "Argon (Ar)"]
    },
    correct: 0,
    explanation: {
      en: "Plants primarily absorb carbon dioxide (CO2) during photosynthesis. They use sunlight to convert CO2 and water into glucose and oxygen, forming the basis of most life’s food supply.",
      fr: "Les plantes absorbent principalement le dioxyde de carbone (CO2) lors de la photosynthèse. Elles utilisent l'énergie solaire pour transformer le CO2 et l'eau en glucose et en oxygène, constituant ainsi la base de l'approvisionnement alimentaire de la plupart des formes de vie."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "922da7a9-722c-495c-aa54-acaad7df0b08",
    difficulty: 5,
    question: {
      en: "What does 'HTTP' stand for?",
      fr: "Que signifie 'HTTP' ?"
    },
    answers: {
      en: ["HyperText Transfer Protocol", "HyperText Transmission Process", "Hyperlink Text Transfer Program", "HighTech Transfer Protocol"],
      fr: ["HyperText Transfer Protocol", "HyperText Transmission Process", "Hyperlink Text Transfer Program", "HighTech Transfer Protocol"]
    },
    correct: 0,
    explanation: {
      en: "HTTP stands for HyperText Transfer Protocol. It underpins the World Wide Web, enabling the transfer of hypertext documents and forming the foundation of online data communication.",
      fr: "HTTP signifie HyperText Transfer Protocol. Il sous-tend le World Wide Web, permettant le transfert de documents hypertexte et constituant la base de la communication de données en ligne."
    },
    tags: ["TECHNOLOGY"]
  },
  {
    id: "6bfcff41-1311-4f8d-b48e-a3a68c0716f6",
    difficulty: 8,
    question: {
      en: "Who wrote 'The Canterbury Tales'?",
      fr: "Qui a écrit 'Les Contes de Canterbury' ?"
    },
    answers: {
      en: ["Geoffrey Chaucer", "William Shakespeare", "Christopher Marlowe", "Thomas More"],
      fr: ["Geoffrey Chaucer", "William Shakespeare", "Christopher Marlowe", "Thomas More"]
    },
    correct: 0,
    explanation: {
      en: "Geoffrey Chaucer wrote 'The Canterbury Tales' in the late 14th century. This collection of stories, told by a group of pilgrims, offers a vivid portrait of medieval English society.",
      fr: "Geoffrey Chaucer a écrit 'Les Contes de Canterbury' à la fin du XIVe siècle. Cette collection d'histoires, racontées par un groupe de pèlerins, dresse un portrait vivant de la société anglaise médiévale."
    },
    tags: ["LITERATURE"]
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
      en: "Islam is a major world religion that follows the teachings of the Prophet Muhammad as revealed in the Quran. It emphasizes submission to the will of God (Allah) and the Five Pillars of faith.",
      fr: "L'islam est une grande religion mondiale qui suit les enseignements du Prophète Mahomet, tels que révélés dans le Coran. Elle met l'accent sur la soumission à la volonté de Dieu (Allah) et sur les Cinq Piliers de la foi."
    },
    tags: ["RELIGION"]
  },
  {
    id: "3e3b2e3b-dc45-420c-b9fa-19e0889fc6a7",
    difficulty: 2,
    question: {
      en: "What is the capital of Argentina?",
      fr: "Quelle est la capitale de l'Argentine ?"
    },
    answers: {
      en: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
      fr: ["Buenos Aires", "Lima", "Bogotá", "Santiago"]
    },
    correct: 0,
    explanation: {
      en: "Buenos Aires is the capital of Argentina. Known for its vibrant culture, tango music, and European-style architecture, it is a political, economic, and cultural hub in South America.",
      fr: "Buenos Aires est la capitale de l'Argentine. Réputée pour sa culture dynamique, le tango et son architecture d'inspiration européenne, la ville constitue un centre politique, économique et culturel en Amérique du Sud."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "fdf50382-6344-40d3-9b33-d58f5a48df5f",
    difficulty: 5,
    question: {
      en: "Who discovered the law of universal gravitation?",
      fr: "Qui a découvert la loi de la gravitation universelle ?"
    },
    answers: {
      en: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Albert Einstein"],
      fr: ["Isaac Newton", "Galilée", "Johannes Kepler", "Albert Einstein"]
    },
    correct: 0,
    explanation: {
      en: "Isaac Newton formulated the law of universal gravitation in the late 17th century, explaining how all masses attract each other. This law revolutionized the understanding of motion and celestial mechanics.",
      fr: "Isaac Newton a formulé la loi de la gravitation universelle à la fin du XVIIe siècle, expliquant comment toutes les masses s'attirent mutuellement. Cette loi a révolutionné la compréhension du mouvement et de la mécanique céleste."
    },
    tags: ["SCIENCE"]
  }
]

const p3: Question[] = [
  {
    id: "522a98b4-87f3-49b5-b5c4-c55acac97a60",
    difficulty: 7,
    question: {
      en: "Who wrote 'The Count of Monte Cristo'?",
      fr: "Qui a écrit 'Le Comte de Monte-Cristo' ?"
    },
    answers: {
      en: ["Alexandre Dumas", "Victor Hugo", "Honoré de Balzac", "Émile Zola"],
      fr: ["Alexandre Dumas", "Victor Hugo", "Honoré de Balzac", "Émile Zola"]
    },
    correct: 0,
    explanation: {
      en: "'The Count of Monte Cristo' was written by Alexandre Dumas and published in 1844-1845. This adventure novel explores themes of justice, vengeance, mercy, and forgiveness, set against the historical backdrop of early 19th-century France and Italy.",
      fr: "'Le Comte de Monte-Cristo' a été écrit par Alexandre Dumas et publié en 1844-1845. Ce roman d'aventures aborde des thèmes comme la justice, la vengeance, la miséricorde et le pardon, sur fond de France et d'Italie du début du XIXe siècle."
    },
    tags: ["LITERATURE"]
  },
  {
    id: "e06b83dc-0286-49a5-b131-049952ed4a63",
    difficulty: 3,
    question: {
      en: "Which element has the chemical symbol 'Na'?",
      fr: "Quel élément a pour symbole chimique 'Na' ?"
    },
    answers: {
      en: ["Sodium", "Nitrogen", "Neon", "Nickel"],
      fr: ["Sodium", "Azote", "Néon", "Nickel"]
    },
    correct: 0,
    explanation: {
      en: "The chemical symbol 'Na' stands for Sodium. A highly reactive alkali metal, sodium is essential for living organisms and is commonly found as sodium chloride (table salt).",
      fr: "Le symbole chimique 'Na' désigne le sodium. Métal alcalin très réactif, le sodium est essentiel aux organismes vivants et se trouve couramment sous forme de chlorure de sodium (sel de table)."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "1e573c60-1ee6-41d9-9edc-9d3ca662dd90",
    difficulty: 4,
    question: {
      en: "In which city was the famous Colosseum built?",
      fr: "Dans quelle ville a été construit le célèbre Colisée ?"
    },
    answers: {
      en: ["Rome", "Athens", "Carthage", "Alexandria"],
      fr: ["Rome", "Athènes", "Carthage", "Alexandrie"]
    },
    correct: 0,
    explanation: {
      en: "The Colosseum was built in Rome, Italy, around 70-80 AD. A grand amphitheater, it hosted gladiatorial contests, public spectacles, and remains one of the greatest symbols of the Roman Empire.",
      fr: "Le Colisée fut construit à Rome, en Italie, vers 70-80 apr. J.-C. Cet amphithéâtre monumental accueillait des combats de gladiateurs et d'autres spectacles publics, restant aujourd'hui l'un des plus grands symboles de l'Empire romain."
    },
    tags: ["HISTORY"]
  },
  {
    id: "d5c8d4c2-e9f7-47ca-b25b-7211a75ba723",
    difficulty: 6,
    question: {
      en: "Who painted 'Guernica'?",
      fr: "Qui a peint 'Guernica' ?"
    },
    answers: {
      en: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Vincent van Gogh"],
      fr: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Vincent van Gogh"]
    },
    correct: 0,
    explanation: {
      en: "'Guernica' was painted by Pablo Picasso in 1937. This large mural-sized painting is a powerful anti-war statement, created in response to the bombing of the Spanish town of Guernica during the Spanish Civil War.",
      fr: "'Guernica' a été peint par Pablo Picasso en 1937. Cette peinture monumentale est un puissant manifeste contre la guerre, réalisée en réaction au bombardement de la ville espagnole de Guernica pendant la guerre civile espagnole."
    },
    tags: ["ART"]
  },
  {
    id: "54a10ab3-bdc0-49a2-9656-23caa764e3fb",
    difficulty: 8,
    question: {
      en: "Who composed the opera 'Carmen'?",
      fr: "Qui a composé l'opéra 'Carmen' ?"
    },
    answers: {
      en: ["Georges Bizet", "Giuseppe Verdi", "Giacomo Puccini", "Wolfgang Amadeus Mozart"],
      fr: ["Georges Bizet", "Giuseppe Verdi", "Giacomo Puccini", "Wolfgang Amadeus Mozart"]
    },
    correct: 0,
    explanation: {
      en: "'Carmen' was composed by Georges Bizet and premiered in 1875. Set in Spain, this opera is known for its passionate characters, vivid melodies, and tragic storyline, becoming one of the most frequently performed operas worldwide.",
      fr: "'Carmen' a été composé par Georges Bizet et créé en 1875. Situé en Espagne, cet opéra est célèbre pour ses personnages passionnés, ses mélodies marquantes et son histoire tragique, faisant de lui l'un des opéras les plus joués dans le monde."
    },
    tags: ["MUSIC"]
  },
  {
    id: "cc88a42f-95ef-47cc-8e7f-b0da8a3c6689",
    difficulty: 2,
    question: {
      en: "What is the chemical symbol for Silver?",
      fr: "Quel est le symbole chimique de l'argent ?"
    },
    answers: {
      en: ["Ag", "Au", "Pb", "Pt"],
      fr: ["Ag", "Au", "Pb", "Pt"]
    },
    correct: 0,
    explanation: {
      en: "The chemical symbol for Silver is 'Ag', derived from its Latin name 'Argentum.' Silver is valued for its luster, conductivity, and use in jewelry, electronics, and photography.",
      fr: "Le symbole chimique de l'argent est 'Ag', issu du terme latin 'Argentum'. L'argent est prisé pour son éclat, sa conductivité et ses usages dans la joaillerie, l'électronique et la photographie."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "b658ba26-613f-4971-8be9-3c64f07ee9d3",
    difficulty: 9,
    question: {
      en: "Which philosopher wrote 'Meditations on First Philosophy'?",
      fr: "Quel philosophe a écrit 'Méditations Métaphysiques' ?"
    },
    answers: {
      en: ["René Descartes", "Baruch Spinoza", "Gottfried Wilhelm Leibniz", "John Locke"],
      fr: ["René Descartes", "Baruch Spinoza", "Gottfried Wilhelm Leibniz", "John Locke"]
    },
    correct: 0,
    explanation: {
      en: "René Descartes wrote 'Meditations on First Philosophy' (1641). In this work, he explores the nature of knowledge, doubt, and the existence of God, laying the foundations of modern Western philosophy.",
      fr: "René Descartes a écrit les 'Méditations Métaphysiques' (1641). Dans cet ouvrage, il explore la nature de la connaissance, du doute et l'existence de Dieu, posant ainsi les fondations de la philosophie moderne occidentale."
    },
    tags: ["PHILOSOPHY"]
  },
  {
    id: "8d7ec0b0-20b0-4f60-86c5-0228a60a74e5",
    difficulty: 1,
    question: {
      en: "What is the main programming language used for iOS development?",
      fr: "Quel est le langage de programmation principal utilisé pour le développement iOS ?"
    },
    answers: {
      en: ["Swift", "Java", "C#", "Kotlin"],
      fr: ["Swift", "Java", "C#", "Kotlin"]
    },
    correct: 0,
    explanation: {
      en: "Swift is the main language for modern iOS development, introduced by Apple in 2014. It offers safety features, modern syntax, and compatibility with existing Objective-C code.",
      fr: "Swift est le langage principal pour le développement iOS moderne, introduit par Apple en 2014. Il offre des fonctionnalités de sécurité, une syntaxe moderne et une compatibilité avec l'Objective-C existant."
    },
    tags: ["TECHNOLOGY"]
  },
  {
    id: "d5f6680e-273b-4a5f-8f96-2f285564ff5e",
    difficulty: 5,
    question: {
      en: "Which planet is known as the 'Red Planet'?",
      fr: "Quelle planète est connue comme la 'planète rouge' ?"
    },
    answers: {
      en: ["Mars", "Jupiter", "Venus", "Mercury"],
      fr: ["Mars", "Jupiter", "Vénus", "Mercure"]
    },
    correct: 0,
    explanation: {
      en: "Mars is called the 'Red Planet' due to its iron oxide-rich soil, giving it a reddish appearance. It has been a focus of exploration in the search for past or present life.",
      fr: "Mars est surnommée la 'planète rouge' en raison de son sol riche en oxyde de fer, lui donnant une teinte rougeâtre. Elle est un sujet d'exploration majeur dans la recherche de traces de vie passée ou présente."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "fa22fc58-3d2d-4571-bb74-08544a8b8bbb",
    difficulty: 7,
    question: {
      en: "Who was the first person to run a sub-four-minute mile?",
      fr: "Qui a été la première personne à courir un mile en moins de quatre minutes ?"
    },
    answers: {
      en: ["Roger Bannister", "Haile Gebrselassie", "Emil Zátopek", "Sebastian Coe"],
      fr: ["Roger Bannister", "Haile Gebrselassie", "Emil Zátopek", "Sebastian Coe"]
    },
    correct: 0,
    explanation: {
      en: "Roger Bannister broke the four-minute mile barrier in 1954, running it in 3 minutes 59.4 seconds. His achievement redefined what was considered physically possible in middle-distance running.",
      fr: "Roger Bannister a passé la barrière des quatre minutes au mile en 1954, le courant en 3 minutes 59,4 secondes. Son exploit a redéfini les limites du possible dans la course de demi-fond."
    },
    tags: ["SPORTS"]
  },
  {
    id: "ef57d3bd-7a73-4f3b-8840-95fb29dc3cf1",
    difficulty: 3,
    question: {
      en: "What is the largest continent on Earth?",
      fr: "Quel est le plus grand continent sur Terre ?"
    },
    answers: {
      en: ["Asia", "Africa", "North America", "Europe"],
      fr: ["L'Asie", "L'Afrique", "L'Amérique du Nord", "L'Europe"]
    },
    correct: 0,
    explanation: {
      en: "Asia is the largest continent by both area and population. It spans diverse landscapes and cultures, influencing global economy, history, and politics.",
      fr: "L'Asie est le plus grand continent tant par sa superficie que par sa population. Elle englobe une grande diversité de paysages et de cultures, influençant l'économie, l'histoire et la politique mondiales."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "5b30aa77-4c3e-4c81-883c-f47772dc77f4",
    difficulty: 8,
    question: {
      en: "Who wrote the philosophical work 'Being and Nothingness'?",
      fr: "Qui a écrit l'ouvrage philosophique 'L'Être et le Néant' ?"
    },
    answers: {
      en: ["Jean-Paul Sartre", "Simone de Beauvoir", "Martin Heidegger", "Albert Camus"],
      fr: ["Jean-Paul Sartre", "Simone de Beauvoir", "Martin Heidegger", "Albert Camus"]
    },
    correct: 0,
    explanation: {
      en: "Jean-Paul Sartre wrote 'Being and Nothingness' (1943), a foundational text of existentialist philosophy that examines consciousness, freedom, and the nature of human existence.",
      fr: "Jean-Paul Sartre a écrit 'L'Être et le Néant' (1943), texte fondateur de l'existentialisme qui examine la conscience, la liberté et la nature de l'existence humaine."
    },
    tags: ["PHILOSOPHY"]
  },
  {
    id: "391d640d-10fc-4a64-9c1e-560cb09d7fb7",
    difficulty: 6,
    question: {
      en: "What does GDP stand for?",
      fr: "Que signifie PIB ?"
    },
    answers: {
      en: ["Gross Domestic Product", "Gross Development Potential", "Global Domestic Power", "General Demographic Profile"],
      fr: ["Produit Intérieur Brut", "Potentiel de Développement Intérieur", "Puissance Domestique Globale", "Profil Démographique Général"]
    },
    correct: 0,
    explanation: {
      en: "GDP stands for Gross Domestic Product. It measures the total value of goods and services produced within a country’s borders in a given period, serving as a key economic indicator.",
      fr: "PIB signifie Produit Intérieur Brut. Il mesure la valeur totale des biens et services produits à l'intérieur des frontières d'un pays sur une période donnée, constituant un indicateur économique clé."
    },
    tags: ["ECONOMY"]
  },
  {
    id: "5779a6c6-27ac-4aba-bc7d-ca4edaa6857e",
    difficulty: 2,
    question: {
      en: "Who directed the film 'Jaws'?",
      fr: "Qui a réalisé le film 'Les Dents de la mer' ?"
    },
    answers: {
      en: ["Steven Spielberg", "George Lucas", "Alfred Hitchcock", "Stanley Kubrick"],
      fr: ["Steven Spielberg", "George Lucas", "Alfred Hitchcock", "Stanley Kubrick"]
    },
    correct: 0,
    explanation: {
      en: "Steven Spielberg directed 'Jaws' (1975), a blockbuster that revolutionized the summer movie industry and terrified audiences worldwide with its portrayal of a great white shark.",
      fr: "Steven Spielberg a réalisé 'Les Dents de la mer' (1975), un film à succès qui a révolutionné la saison cinématographique estivale et terrifié le public mondial avec son grand requin blanc."
    },
    tags: ["CINEMA"]
  },
  {
    id: "9309460f-65a8-45b4-b01e-ca69902f1be3",
    difficulty: 4,
    question: {
      en: "What is the largest religion by number of followers?",
      fr: "Quelle est la plus grande religion par nombre de fidèles ?"
    },
    answers: {
      en: ["Christianity", "Islam", "Hinduism", "Buddhism"],
      fr: ["Le christianisme", "L'islam", "L'hindouisme", "Le bouddhisme"]
    },
    correct: 0,
    explanation: {
      en: "Christianity is currently the world’s largest religion by number of adherents. Its various denominations and traditions have shaped cultures and societies across the globe.",
      fr: "Le christianisme est actuellement la religion la plus pratiquée dans le monde par le nombre de fidèles. Ses différentes confessions et traditions ont façonné des cultures et des sociétés à travers le globe."
    },
    tags: ["RELIGION"]
  },
  {
    id: "520eb1d2-ae0f-4ade-8f51-45f381d3f66a",
    difficulty: 9,
    question: {
      en: "Which philosopher wrote 'The World as Will and Representation'?",
      fr: "Quel philosophe a écrit 'Le Monde comme Volonté et Représentation' ?"
    },
    answers: {
      en: ["Arthur Schopenhauer", "Friedrich Nietzsche", "Georg Wilhelm Friedrich Hegel", "Martin Heidegger"],
      fr: ["Arthur Schopenhauer", "Friedrich Nietzsche", "Georg Wilhelm Friedrich Hegel", "Martin Heidegger"]
    },
    correct: 0,
    explanation: {
      en: "Arthur Schopenhauer wrote 'The World as Will and Representation' (1818). He presents the world as driven by a blind, ceaseless will, influencing existential and postmodern philosophies.",
      fr: "Arthur Schopenhauer a écrit 'Le Monde comme Volonté et Représentation' (1818). Il décrit le monde comme mû par une volonté aveugle et incessante, influençant ainsi les philosophies existentialistes et postmodernes."
    },
    tags: ["PHILOSOPHY"]
  },
  {
    id: "1a2b8763-2c51-4db5-a76b-1948c1e35ce4",
    difficulty: 3,
    question: {
      en: "Who wrote 'The Adventures of Huckleberry Finn'?",
      fr: "Qui a écrit 'Les Aventures de Huckleberry Finn' ?"
    },
    answers: {
      en: ["Mark Twain", "Herman Melville", "Ernest Hemingway", "F. Scott Fitzgerald"],
      fr: ["Mark Twain", "Herman Melville", "Ernest Hemingway", "F. Scott Fitzgerald"]
    },
    correct: 0,
    explanation: {
      en: "Mark Twain wrote 'The Adventures of Huckleberry Finn,' published in 1884. Considered a classic of American literature, it addresses themes of freedom, morality, and social norms.",
      fr: "Mark Twain a écrit 'Les Aventures de Huckleberry Finn', publié en 1884. Considéré comme un classique de la littérature américaine, le roman aborde des thèmes tels que la liberté, la moralité et les normes sociales."
    },
    tags: ["LITERATURE"]
  },
  {
    id: "d81c3c31-385b-4c75-9e1f-541d884237e4",
    difficulty: 4,
    question: {
      en: "Which country was the first to send a satellite into space?",
      fr: "Quel pays a été le premier à envoyer un satellite dans l'espace ?"
    },
    answers: {
      en: ["Soviet Union", "United States", "United Kingdom", "France"],
      fr: ["Union soviétique", "États-Unis", "Royaume-Uni", "France"]
    },
    correct: 0,
    explanation: {
      en: "The Soviet Union launched Sputnik 1 in 1957, the first artificial satellite. This event initiated the space race, leading to rapid advancements in space exploration.",
      fr: "L'Union soviétique a lancé Spoutnik 1 en 1957, le premier satellite artificiel. Cet événement marqua le début de la course à l'espace, entraînant des progrès rapides en exploration spatiale."
    },
    tags: ["TECHNOLOGY"]
  },
  {
    id: "64ae856c-7e84-42d3-9a16-25e548d37c35",
    difficulty: 1,
    question: {
      en: "What is the primary religion of Saudi Arabia?",
      fr: "Quelle est la religion principale de l'Arabie Saoudite ?"
    },
    answers: {
      en: ["Islam", "Christianity", "Hinduism", "Judaism"],
      fr: ["L'islam", "Le christianisme", "L'hindouisme", "Le judaïsme"]
    },
    correct: 0,
    explanation: {
      en: "Islam is the official and dominant religion in Saudi Arabia. Islamic law and traditions shape the nation’s cultural, political, and social institutions.",
      fr: "L'islam est la religion officielle et dominante en Arabie Saoudite. La loi et les traditions islamiques influencent les institutions culturelles, politiques et sociales du pays."
    },
    tags: ["RELIGION"]
  },
  {
    id: "c24667a8-6919-4fad-9e0f-572732d2db63",
    difficulty: 2,
    question: {
      en: "Who directed 'E.T. the Extra-Terrestrial'?",
      fr: "Qui a réalisé 'E.T. l'extra-terrestre' ?"
    },
    answers: {
      en: ["Steven Spielberg", "Ridley Scott", "James Cameron", "George Lucas"],
      fr: ["Steven Spielberg", "Ridley Scott", "James Cameron", "George Lucas"]
    },
    correct: 0,
    explanation: {
      en: "Steven Spielberg directed 'E.T. the Extra-Terrestrial' (1982). The film is a beloved family classic, emphasizing friendship, empathy, and the wonder of the unknown.",
      fr: "Steven Spielberg a réalisé 'E.T. l'extra-terrestre' (1982). Ce film familial est un classique, mettant l'accent sur l'amitié, l'empathie et la découverte de l'inconnu."
    },
    tags: ["CINEMA"]
  },
  {
    id: "027f0784-8fe3-4a72-b510-8af2cb3a8f2f",
    difficulty: 7,
    question: {
      en: "Who proposed the theory of evolution by natural selection?",
      fr: "Qui a proposé la théorie de l'évolution par sélection naturelle ?"
    },
    answers: {
      en: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Louis Pasteur"],
      fr: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Louis Pasteur"]
    },
    correct: 0,
    explanation: {
      en: "Charles Darwin proposed the theory of evolution by natural selection in 'On the Origin of Species' (1859). His work revolutionized biology, explaining the diversity of life through gradual change.",
      fr: "Charles Darwin a proposé la théorie de l'évolution par sélection naturelle dans 'De l'Origine des espèces' (1859). Ses travaux ont révolutionné la biologie, expliquant la diversité du vivant par des changements progressifs."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "7c7ea39a-a6b7-4257-9a69-74efa2824a85",
    difficulty: 5,
    question: {
      en: "Which river flows through London?",
      fr: "Quel fleuve traverse Londres ?"
    },
    answers: {
      en: ["Thames", "Seine", "Danube", "Rhine"],
      fr: ["La Tamise", "La Seine", "Le Danube", "Le Rhin"]
    },
    correct: 0,
    explanation: {
      en: "The River Thames flows through London, the capital of the United Kingdom. It has played a crucial role in the city’s history, commerce, and transportation.",
      fr: "La Tamise traverse Londres, la capitale du Royaume-Uni. Elle a joué un rôle crucial dans l'histoire, le commerce et les transports de la ville."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "7267ffcc-5e95-4217-9ab1-5bee679d66fb",
    difficulty: 3,
    question: {
      en: "Which artist painted the ceiling of the Sistine Chapel?",
      fr: "Quel artiste a peint le plafond de la chapelle Sixtine ?"
    },
    answers: {
      en: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Titian"],
      fr: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Titien"]
    },
    correct: 0,
    explanation: {
      en: "Michelangelo painted the ceiling of the Sistine Chapel (1508–1512), a masterpiece of High Renaissance art depicting scenes from the Book of Genesis and other biblical narratives.",
      fr: "Michel-Ange a peint le plafond de la chapelle Sixtine (1508–1512), chef-d'œuvre de la Haute Renaissance représentant des scènes de la Genèse et d'autres récits bibliques."
    },
    tags: ["ART"]
  },
  {
    id: "0e223678-8268-4967-b08a-2dd95537951b",
    difficulty: 8,
    question: {
      en: "Who composed the Brandenburg Concertos?",
      fr: "Qui a composé les Concertos Brandebourgeois ?"
    },
    answers: {
      en: ["Johann Sebastian Bach", "George Frideric Handel", "Antonio Vivaldi", "Johann Pachelbel"],
      fr: ["Johann Sebastian Bach", "Georg Friedrich Haendel", "Antonio Vivaldi", "Johann Pachelbel"]
    },
    correct: 0,
    explanation: {
      en: "Johann Sebastian Bach composed the Brandenburg Concertos, presented in 1721. These six concertos are celebrated examples of Baroque orchestral music.",
      fr: "Johann Sebastian Bach a composé les Concertos Brandebourgeois, présentés en 1721. Ces six concertos sont des exemples célèbres de la musique orchestrale baroque."
    },
    tags: ["MUSIC"]
  },
  {
    id: "c6aef31d-5ae1-4c25-8d12-fa428ccb3bb8",
    difficulty: 4,
    question: {
      en: "Which French leader became Emperor in 1804?",
      fr: "Quel leader français est devenu empereur en 1804 ?"
    },
    answers: {
      en: ["Napoleon Bonaparte", "Louis XIV", "Charlemagne", "Louis Napoleon (Napoleon III)"],
      fr: ["Napoléon Bonaparte", "Louis XIV", "Charlemagne", "Louis Napoléon (Napoléon III)"]
    },
    correct: 0,
    explanation: {
      en: "Napoleon Bonaparte crowned himself Emperor of the French in 1804, dominating European politics and waging numerous wars before his eventual defeat.",
      fr: "Napoléon Bonaparte s'est couronné Empereur des Français en 1804. Il a dominé la politique européenne et mené de nombreuses guerres avant d'être finalement vaincu."
    },
    tags: ["HISTORY"]
  },
  {
    id: "f6275a27-e6d7-48e6-b535-b053ef741b22",
    difficulty: 6,
    question: {
      en: "What is the primary muscle used for breathing?",
      fr: "Quel est le muscle principal utilisé pour respirer ?"
    },
    answers: {
      en: ["Diaphragm", "Heart", "Lung", "Intercostal muscles"],
      fr: ["Le diaphragme", "Le cœur", "Le poumon", "Les muscles intercostaux"]
    },
    correct: 0,
    explanation: {
      en: "The diaphragm is the main muscle involved in breathing. Its contraction and relaxation change lung volume, enabling inhalation and exhalation.",
      fr: "Le diaphragme est le muscle principal de la respiration. Sa contraction et son relâchement modifient le volume pulmonaire, permettant l'inspiration et l'expiration."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "bfd2f353-5b67-4f2c-a305-55f4f2ce5273",
    difficulty: 5,
    question: {
      en: "Who was the first Prime Minister of India?",
      fr: "Qui a été le premier Premier ministre de l'Inde ?"
    },
    answers: {
      en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Rajendra Prasad"],
      fr: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Rajendra Prasad"]
    },
    correct: 0,
    explanation: {
      en: "Jawaharlal Nehru served as the first Prime Minister of India from 1947 to 1964. He played a pivotal role in shaping the modern Indian state, its democratic institutions, and secular policies.",
      fr: "Jawaharlal Nehru fut le premier Premier ministre de l'Inde, de 1947 à 1964. Il a joué un rôle clé dans la formation de l'État indien moderne, de ses institutions démocratiques et de ses politiques laïques."
    },
    tags: ["POLITICS"]
  },
  {
    id: "7ab90459-bbc8-4cb5-ae66-3fbb4316fef0",
    difficulty: 2,
    question: {
      en: "What does 'CPU' stand for in computing?",
      fr: "Que signifie 'CPU' en informatique ?"
    },
    answers: {
      en: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Central Program Uplink"],
      fr: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Central Program Uplink"]
    },
    correct: 0,
    explanation: {
      en: "CPU stands for Central Processing Unit, the brain of the computer that executes instructions and processes data. Its performance greatly influences the overall speed of a system.",
      fr: "CPU signifie Central Processing Unit. C'est le cerveau de l'ordinateur, exécutant les instructions et traitant les données. Ses performances influencent considérablement la rapidité globale du système."
    },
    tags: ["TECHNOLOGY"]
  },
  {
    id: "5bf6f4b8-1112-435f-a89b-b17b3c7851c0",
    difficulty: 4,
    question: {
      en: "Who wrote 'Moby-Dick'?",
      fr: "Qui a écrit 'Moby-Dick' ?"
    },
    answers: {
      en: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "Edgar Allan Poe"],
      fr: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "Edgar Allan Poe"]
    },
    correct: 0,
    explanation: {
      en: "Herman Melville wrote 'Moby-Dick' (1851), a novel about the obsessive quest of Captain Ahab for the white whale Moby Dick, reflecting deep themes of fate, nature, and morality.",
      fr: "Herman Melville a écrit 'Moby-Dick' (1851), un roman traitant de la quête obsessionnelle du capitaine Achab pour la baleine blanche Moby Dick, abordant des thèmes profonds comme le destin, la nature et la morale."
    },
    tags: ["LITERATURE"]
  },
  {
    id: "ccdb3911-059f-4d77-b29b-7614898ff5b4",
    difficulty: 8,
    question: {
      en: "What is the philosophical term for the study of being?",
      fr: "Quel est le terme philosophique pour l'étude de l'être ?"
    },
    answers: {
      en: ["Ontology", "Epistemology", "Aesthetics", "Ethics"],
      fr: ["L'ontologie", "L'épistémologie", "L'esthétique", "L'éthique"]
    },
    correct: 0,
    explanation: {
      en: "Ontology is the branch of philosophy concerned with the nature of being, existence, and reality. It examines what entities exist and how they can be categorized.",
      fr: "L'ontologie est la branche de la philosophie qui s'intéresse à la nature de l'être, de l'existence et de la réalité. Elle examine quelles entités existent et comment les classer."
    },
    tags: ["PHILOSOPHY"]
  },
  {
    id: "5df33fc0-13ed-4e57-af26-1742852c56ae",
    difficulty: 1,
    question: {
      en: "What is the currency of the United Kingdom?",
      fr: "Quelle est la monnaie du Royaume-Uni ?"
    },
    answers: {
      en: ["Pound Sterling", "Euro", "Dollar", "Franc"],
      fr: ["La livre sterling", "L'euro", "Le dollar", "Le franc"]
    },
    correct: 0,
    explanation: {
      en: "The currency of the United Kingdom is the Pound Sterling (GBP). It is one of the oldest and most traded currencies in the world.",
      fr: "La monnaie du Royaume-Uni est la livre sterling (GBP). C'est l'une des devises les plus anciennes et les plus échangées au monde."
    },
    tags: ["ECONOMY"]
  },
  {
    id: "42f9d043-4ea6-4a84-9795-a266afc7c944",
    difficulty: 5,
    question: {
      en: "Which empire built Machu Picchu?",
      fr: "Quel empire a construit le Machu Picchu ?"
    },
    answers: {
      en: ["Inca Empire", "Aztec Empire", "Mayan Empire", "Roman Empire"],
      fr: ["L'Empire inca", "L'Empire aztèque", "L'Empire maya", "L'Empire romain"]
    },
    correct: 0,
    explanation: {
      en: "Machu Picchu was built by the Inca Empire in the 15th century. Located in the Andes, it remains a symbol of Inca engineering, culture, and spirituality.",
      fr: "Le Machu Picchu a été construit par l'Empire inca au XVe siècle. Situé dans les Andes, il est un symbole de l'ingénierie, de la culture et de la spiritualité incas."
    },
    tags: ["HISTORY"]
  },
  {
    id: "ecafcfc0-6357-48ab-aed6-a9356a384eb9",
    difficulty: 6,
    question: {
      en: "Who is known as the 'King of Pop'?",
      fr: "Qui est connu comme le 'Roi de la Pop' ?"
    },
    answers: {
      en: ["Michael Jackson", "Elvis Presley", "Prince", "Freddie Mercury"],
      fr: ["Michael Jackson", "Elvis Presley", "Prince", "Freddie Mercury"]
    },
    correct: 0,
    explanation: {
      en: "Michael Jackson is widely referred to as the 'King of Pop' for his groundbreaking music, dance moves, and global cultural impact throughout the late 20th century.",
      fr: "Michael Jackson est largement connu comme le 'Roi de la Pop' pour sa musique révolutionnaire, ses chorégraphies emblématiques et son impact culturel mondial à la fin du XXe siècle."
    },
    tags: ["MUSIC"]
  },
  {
    id: "c1b47007-1f4e-4571-8da6-658d705a3dae",
    difficulty: 2,
    question: {
      en: "What does 'HTML' stand for?",
      fr: "Que signifie 'HTML' ?"
    },
    answers: {
      en: ["HyperText Markup Language", "HyperTool Multi Language", "HighText Machine Language", "Hyperlink Text Mainframe Language"],
      fr: ["HyperText Markup Language", "HyperTool Multi Language", "HighText Machine Language", "Hyperlink Text Mainframe Language"]
    },
    correct: 0,
    explanation: {
      en: "HTML stands for HyperText Markup Language. It defines the structure and content of web pages, forming the backbone of the World Wide Web.",
      fr: "HTML signifie HyperText Markup Language. Il définit la structure et le contenu des pages Web, formant la base du World Wide Web."
    },
    tags: ["TECHNOLOGY"]
  },
  {
    id: "009ceaab-1c6a-4ed6-9ca5-d5adcb3dac2f",
    difficulty: 3,
    question: {
      en: "What gas makes up most of the Earth's atmosphere?",
      fr: "Quel gaz compose la majeure partie de l'atmosphère terrestre ?"
    },
    answers: {
      en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
      fr: ["L'azote", "L'oxygène", "Le dioxyde de carbone", "L'argon"]
    },
    correct: 0,
    explanation: {
      en: "Nitrogen makes up about 78% of the Earth's atmosphere. Oxygen, argon, and trace gases compose the remainder.",
      fr: "L'azote constitue environ 78% de l'atmosphère terrestre. L'oxygène, l'argon et d'autres gaz en faibles quantités complètent la composition."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "446de347-34ba-4b23-99af-a1a1b2652f31",
    difficulty: 4,
    question: {
      en: "What is the capital of Egypt?",
      fr: "Quelle est la capitale de l'Égypte ?"
    },
    answers: {
      en: ["Cairo", "Alexandria", "Giza", "Luxor"],
      fr: ["Le Caire", "Alexandrie", "Gizeh", "Louxor"]
    },
    correct: 0,
    explanation: {
      en: "Cairo is the capital of Egypt, a historic city along the Nile River. Known for its proximity to the Giza pyramids, it is a cultural and political center in the Middle East.",
      fr: "Le Caire est la capitale de l'Égypte, une ville historique située sur le Nil. Connue pour sa proximité avec les pyramides de Gizeh, elle est un centre culturel et politique du Moyen-Orient."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "0818880f-1180-457f-b723-abdc87692fb8",
    difficulty: 9,
    question: {
      en: "Which philosopher wrote 'The Phenomenology of Spirit'?",
      fr: "Quel philosophe a écrit 'La Phénoménologie de l'esprit' ?"
    },
    answers: {
      en: ["G.W.F. Hegel", "Immanuel Kant", "Karl Marx", "Friedrich Nietzsche"],
      fr: ["G.W.F. Hegel", "Immanuel Kant", "Karl Marx", "Friedrich Nietzsche"]
    },
    correct: 0,
    explanation: {
      en: "Georg Wilhelm Friedrich Hegel wrote 'The Phenomenology of Spirit' (1807). This complex work examines consciousness, self-awareness, and the evolution of ideas throughout history.",
      fr: "Georg Wilhelm Friedrich Hegel a écrit 'La Phénoménologie de l'esprit' (1807). Cet ouvrage complexe étudie la conscience, la prise de conscience de soi et l'évolution des idées au cours de l'histoire."
    },
    tags: ["PHILOSOPHY"]
  },
  {
    id: "fc1a17f6-7a02-4c2d-b021-2d071dfd54e0",
    difficulty: 3,
    question: {
      en: "Who wrote 'The Old Man and the Sea'?",
      fr: "Qui a écrit 'Le Vieil Homme et la Mer' ?"
    },
    answers: {
      en: ["Ernest Hemingway", "John Steinbeck", "William Faulkner", "James Joyce"],
      fr: ["Ernest Hemingway", "John Steinbeck", "William Faulkner", "James Joyce"]
    },
    correct: 0,
    explanation: {
      en: "Ernest Hemingway wrote 'The Old Man and the Sea' (1952). This novella earned him the Pulitzer Prize and contributed to his Nobel Prize in Literature, symbolizing resilience and the human spirit.",
      fr: "Ernest Hemingway a écrit 'Le Vieil Homme et la Mer' (1952). Cette nouvelle lui valut le prix Pulitzer et contribua à son prix Nobel de littérature, symbolisant la résilience et la force de l'esprit humain."
    },
    tags: ["LITERATURE"]
  },
  {
    id: "c6c58422-7b68-45a3-8767-2c9238ed26d9",
    difficulty: 5,
    question: {
      en: "When did the United States Declaration of Independence occur?",
      fr: "Quand la Déclaration d'indépendance des États-Unis a-t-elle eu lieu ?"
    },
    answers: {
      en: ["1776", "1789", "1804", "1750"],
      fr: ["1776", "1789", "1804", "1750"]
    },
    correct: 0,
    explanation: {
      en: "The United States Declaration of Independence was adopted on July 4, 1776. It proclaimed the thirteen colonies' separation from British rule, laying the foundation for a new nation.",
      fr: "La Déclaration d'indépendance des États-Unis a été adoptée le 4 juillet 1776. Elle proclama la séparation des treize colonies de la tutelle britannique, jetant ainsi les bases d'une nouvelle nation."
    },
    tags: ["HISTORY"]
  },
  {
    id: "53922f20-713e-488a-af14-20e0acc22d53",
    difficulty: 6,
    question: {
      en: "Which company created the Android operating system?",
      fr: "Quelle entreprise a créé le système d'exploitation Android ?"
    },
    answers: {
      en: ["Google", "Apple", "Microsoft", "IBM"],
      fr: ["Google", "Apple", "Microsoft", "IBM"]
    },
    correct: 0,
    explanation: {
      en: "Android was originally developed by Android Inc., founded in 2003, and later acquired by Google in 2005. It has become the world’s most widely used mobile OS.",
      fr: "Android a initialement été développé par Android Inc., fondée en 2003, puis rachetée par Google en 2005. Il est devenu le système d'exploitation mobile le plus largement utilisé dans le monde."
    },
    tags: ["TECHNOLOGY"]
  },
  {
    id: "c865aad5-e8d8-4751-85a1-bd023d53ba28",
    difficulty: 8,
    question: {
      en: "Who composed 'Boléro'?",
      fr: "Qui a composé le 'Boléro' ?"
    },
    answers: {
      en: ["Maurice Ravel", "Claude Debussy", "Camille Saint-Saëns", "Erik Satie"],
      fr: ["Maurice Ravel", "Claude Debussy", "Camille Saint-Saëns", "Erik Satie"]
    },
    correct: 0,
    explanation: {
      en: "'Boléro' was composed by Maurice Ravel and premiered in 1928. Known for its steady, hypnotic rhythm and gradual crescendo, it’s one of the most recognizable orchestral works.",
      fr: "Le 'Boléro' a été composé par Maurice Ravel et créé en 1928. Connu pour son rythme régulier, hypnotique, et son crescendo progressif, c'est l'une des œuvres orchestrales les plus reconnaissables."
    },
    tags: ["MUSIC"]
  },
  {
    id: "2df17c6c-cfe1-43d3-a3c6-1f128c0c14b5",
    difficulty: 2,
    question: {
      en: "Who is considered the father of modern physics for his work on relativity?",
      fr: "Qui est considéré comme le père de la physique moderne pour ses travaux sur la relativité ?"
    },
    answers: {
      en: ["Albert Einstein", "Niels Bohr", "Max Planck", "Erwin Schrödinger"],
      fr: ["Albert Einstein", "Niels Bohr", "Max Planck", "Erwin Schrödinger"]
    },
    correct: 0,
    explanation: {
      en: "Albert Einstein is considered the father of modern physics, especially for his theories of special and general relativity, which revolutionized our understanding of space, time, and gravity.",
      fr: "Albert Einstein est considéré comme le père de la physique moderne, notamment pour ses théories de la relativité restreinte et générale, qui ont révolutionné notre compréhension de l'espace, du temps et de la gravité."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "805d4b39-495a-4f38-bdb9-e9d8d0b5d0e6",
    difficulty: 5,
    question: {
      en: "What is the capital city of Sweden?",
      fr: "Quelle est la capitale de la Suède ?"
    },
    answers: {
      en: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
      fr: ["Stockholm", "Oslo", "Copenhague", "Helsinki"]
    },
    correct: 0,
    explanation: {
      en: "Stockholm is the capital of Sweden, spread across numerous islands and renowned for its clean environment, innovation, and rich cultural scene.",
      fr: "Stockholm est la capitale de la Suède, s'étendant sur de nombreuses îles. Elle est réputée pour son environnement propre, son innovation et sa scène culturelle dynamique."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "b6d66d54-5f9a-4c6b-8c51-12708599d149",
    difficulty: 4,
    question: {
      en: "Which painter is famous for cutting off part of his own ear?",
      fr: "Quel peintre est célèbre pour s'être coupé une partie de l'oreille ?"
    },
    answers: {
      en: ["Vincent van Gogh", "Paul Gauguin", "Henri de Toulouse-Lautrec", "Edgar Degas"],
      fr: ["Vincent van Gogh", "Paul Gauguin", "Henri de Toulouse-Lautrec", "Edgar Degas"]
    },
    correct: 0,
    explanation: {
      en: "Vincent van Gogh famously cut off part of his left ear in 1888 during a period of mental distress. Despite his struggles, he produced some of history’s most celebrated paintings.",
      fr: "Vincent van Gogh s'est tristement coupé une partie de l'oreille gauche en 1888, durant une période de détresse mentale. Malgré ses difficultés, il a réalisé parmi les tableaux les plus admirés de l'histoire de l'art."
    },
    tags: ["ART"]
  },
  {
    id: "02e02a5c-5144-438b-a3f1-4f8faee8c662",
    difficulty: 7,
    question: {
      en: "Who composed the opera cycle 'The Ring of the Nibelung'?",
      fr: "Qui a composé le cycle d'opéras 'L'Anneau du Nibelung' ?"
    },
    answers: {
      en: ["Richard Wagner", "Richard Strauss", "Johannes Brahms", "Giacomo Puccini"],
      fr: ["Richard Wagner", "Richard Strauss", "Johannes Brahms", "Giacomo Puccini"]
    },
    correct: 0,
    explanation: {
      en: "Richard Wagner composed 'The Ring of the Nibelung' (Der Ring des Nibelungen), a cycle of four epic operas premiered between 1876 and 1877. They drew on Germanic myths and revolutionized opera.",
      fr: "Richard Wagner a composé 'L'Anneau du Nibelung' (Der Ring des Nibelungen), un cycle de quatre opéras épiques créés entre 1876 et 1877. Ils s'inspirent des mythes germaniques et ont révolutionné l'opéra."
    },
    tags: ["MUSIC"]
  },
  {
    id: "665a96c5-06f5-4433-bca8-b0f9979c84af",
    difficulty: 3,
    question: {
      en: "Who discovered the circulation of blood?",
      fr: "Qui a découvert la circulation du sang ?"
    },
    answers: {
      en: ["William Harvey", "Andreas Vesalius", "Galen", "Hippocrates"],
      fr: ["William Harvey", "Andreas Vesalius", "Galien", "Hippocrate"]
    },
    correct: 0,
    explanation: {
      en: "William Harvey, in the early 17th century, described the systemic circulation of blood pumped by the heart. His work overturned centuries of medical assumptions.",
      fr: "William Harvey, au début du XVIIe siècle, a décrit la circulation systémique du sang pompé par le cœur. Ses travaux ont renversé des siècles de croyances médicales."
    },
    tags: ["SCIENCE"]
  },
  {
    id: "4eb71fad-1a96-4e6f-838d-f74042c1de88",
    difficulty: 2,
    question: {
      en: "What is the capital of Russia?",
      fr: "Quelle est la capitale de la Russie ?"
    },
    answers: {
      en: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],
      fr: ["Moscou", "Saint-Pétersbourg", "Kazan", "Novossibirsk"]
    },
    correct: 0,
    explanation: {
      en: "Moscow is the capital of Russia, known for its historical Kremlin, Red Square, and cultural institutions. It is the political, economic, and cultural center of the country.",
      fr: "Moscou est la capitale de la Russie, connue pour son Kremlin historique, la Place Rouge et ses institutions culturelles. Elle constitue le centre politique, économique et culturel du pays."
    },
    tags: ["GEOGRAPHY"]
  },
  {
    id: "640a2b6c-d8de-4ecc-83d3-7d52390e0c4a",
    difficulty: 6,
    question: {
      en: "Who coined the term 'Surrealism'?",
      fr: "Qui a inventé le terme 'Surréalisme' ?"
    },
    answers: {
      en: ["Guillaume Apollinaire", "André Breton", "Max Ernst", "Salvador Dalí"],
      fr: ["Guillaume Apollinaire", "André Breton", "Max Ernst", "Salvador Dalí"]
    },
    correct: 0,
    explanation: {
      en: "French poet Guillaume Apollinaire coined the term 'Surréalisme' in 1917. André Breton later developed Surrealism into a literary and artistic movement, emphasizing the unconscious and unexpected juxtapositions.",
      fr: "Le poète français Guillaume Apollinaire a inventé le terme 'Surréalisme' en 1917. André Breton développera par la suite le surréalisme en un mouvement littéraire et artistique, mettant en avant l'inconscient et les associations inattendues."
    },
    tags: ["ART"]
  },
  {
    id: "2af50dc8-cd65-40cc-8864-5349078b0dfb",
    difficulty: 5,
    question: {
      en: "Which international body protects children's rights?",
      fr: "Quel organisme international est chargé de la protection des droits de l'enfant ?"
    },
    answers: {
      en: ["UNICEF", "UNESCO", "WHO", "ILO"],
      fr: ["UNICEF", "UNESCO", "OMS", "OIT"]
    },
    correct: 0,
    explanation: {
      en: "UNICEF (United Nations Children's Fund) is the UN agency responsible for protecting children’s rights, providing humanitarian aid, and ensuring education and healthcare for children worldwide.",
      fr: "L'UNICEF (Fonds des Nations Unies pour l'enfance) est l'agence de l'ONU chargée de protéger les droits de l'enfant, de fournir une aide humanitaire et d'assurer l'éducation et les soins de santé des enfants dans le monde."
    },
    tags: ["SOCIETY"]
  }
]

export const questions: Question[] = [
  ...p1,
  ...p2,
  ...p3,
]