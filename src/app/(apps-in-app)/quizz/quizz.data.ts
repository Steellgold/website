import { Question, TagEnum } from "./quizz.types"

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
    explanation: {
      en: "Paris is the capital of France. It is a major cultural, political, and economic center in Europe, famous for its historical landmarks such as the Eiffel Tower, the Louvre Museum, Notre-Dame Cathedral, and its rich artistic and intellectual heritage.",
      fr: "Paris est la capitale de la France. C'est un important centre culturel, politique et économique en Europe, renommé pour ses monuments historiques tels que la Tour Eiffel, le Musée du Louvre, la Cathédrale Notre-Dame, ainsi que pour son riche patrimoine artistique et intellectuel."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Leonardo da Vinci painted the Mona Lisa in the early 16th century (circa 1503-1506). The painting is admired for its subtlety of expression and innovative use of sfumato, and it is now displayed at the Louvre Museum in Paris, attracting millions of visitors each year.",
      fr: "Léonard de Vinci a peint la Joconde au début du XVIe siècle (vers 1503-1506). Cette œuvre est célèbre pour la subtilité de son expression et son utilisation novatrice du sfumato. Elle est aujourd'hui exposée au Musée du Louvre à Paris et attire des millions de visiteurs chaque année."
    },
    tags: [TagEnum.ART]
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
    explanation: {
      en: "The chemical symbol for gold is 'Au', derived from the Latin word 'aurum', meaning 'shining dawn' or simply 'gold.' Gold has been valued throughout human history for its rarity, luster, malleability, and use as a form of currency and ornamentation.",
      fr: "Le symbole chimique de l'or est 'Au', issu du mot latin 'aurum', signifiant 'aube brillante' ou 'or' tout simplement. L'or est prisé depuis l'Antiquité pour sa rareté, son éclat, sa malléabilité ainsi que son utilisation en tant que monnaie et ornement."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "World War II ended in 1945 with Germany's surrender in May and Japan's surrender in August. This global conflict, involving most of the world’s nations, was one of the deadliest and most significant events in human history, reshaping geopolitical boundaries and global power structures.",
      fr: "La Seconde Guerre mondiale s'est achevée en 1945, avec la capitulation de l'Allemagne en mai et celle du Japon en août. Ce conflit mondial, qui a impliqué la plupart des nations, fut l'un des plus meurtriers et marquants de l'histoire, redessinant les frontières et les équilibres de puissance internationaux."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "'1984' was written by George Orwell and published in 1949. This dystopian novel explores themes of totalitarianism, surveillance, and the manipulation of truth, having a profound influence on political discourse and popular culture.",
      fr: "'1984' a été écrit par George Orwell et publié en 1949. Ce roman dystopique aborde les thèmes du totalitarisme, de la surveillance et de la manipulation de la vérité, exerçant une influence durable sur le discours politique et la culture populaire."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "The area of a circle is given by πr², where r is the radius. This formula is fundamental in geometry and allows for easy calculation of the region enclosed by a circle.",
      fr: "L'aire d'un cercle se calcule avec la formule πr², où r est le rayon. Cette formule fondamentale en géométrie permet de déterminer aisément la surface délimitée par un cercle."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Poseidon is the Greek god of the sea, earthquakes, and horses. He was a major deity in ancient Greek mythology, known for his temperamental nature and association with all bodies of water.",
      fr: "Poséidon est le dieu grec de la mer, des tremblements de terre et des chevaux. Divinité majeure de la mythologie grecque, il est réputé pour son caractère impulsif et son lien avec tous les milieux aquatiques."
    },
    tags: [TagEnum.RELIGION]
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
    explanation: {
      en: "Historically, Java has been the primary language for Android development. In recent years, Kotlin has also become a first-class language for Android apps, offering more concise syntax and improved safety features.",
      fr: "Historiquement, Java a été le principal langage pour le développement Android. Ces dernières années, Kotlin est également devenu un langage de premier plan pour les applications Android, grâce à une syntaxe plus concise et une meilleure gestion de la sécurité."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Alexander Fleming discovered penicillin in 1928 when he noticed that a mold (Penicillium) inhibited bacterial growth. This breakthrough led to the development of antibiotics, revolutionizing modern medicine and saving countless lives.",
      fr: "Alexander Fleming a découvert la pénicilline en 1928 après avoir observé qu'une moisissure (Penicillium) empêchait la croissance des bactéries. Cette découverte a mené à la création des antibiotiques, révolutionnant la médecine moderne et sauvant un nombre incalculable de vies."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "The Treaty of Versailles, signed in 1919, ended World War I. It imposed heavy reparations on Germany and significantly reshaped Europe's political map, setting the stage for the interwar period.",
      fr: "Le Traité de Versailles, signé en 1919, mit fin à la Première Guerre mondiale. Il imposa de lourdes réparations à l'Allemagne et redessina considérablement la carte politique de l'Europe, influençant profondément la période de l'entre-deux-guerres."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "Ludwig van Beethoven composed the 'Symphony No. 9' in the early 19th century. Premiered in 1824, it is famous for its final movement, known as the 'Ode to Joy,' which has become a universal anthem for freedom and human brotherhood.",
      fr: "Ludwig van Beethoven a composé la 'Symphonie n° 9' au début du XIXe siècle. Créée en 1824, elle est particulièrement célèbre pour son dernier mouvement, l'« Ode à la joie », devenue un symbole universel de liberté et de fraternité humaine."
    },
    tags: [TagEnum.MUSIC]
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
    explanation: {
      en: "Jane Austen wrote 'Pride and Prejudice,' published in 1813. The novel offers a keen social commentary on British Regency-era society, focusing on issues of class, marriage, and morality.",
      fr: "Jane Austen a écrit 'Orgueil et Préjugés', publié en 1813. Ce roman fournit une analyse sociale pertinente de l'Angleterre de la Régence, abordant des questions de classe, de mariage et de morale."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "The chemical formula for water is H2O, consisting of two hydrogen atoms and one oxygen atom. Water is essential for life on Earth, playing a key role in biological processes and ecological systems.",
      fr: "La formule chimique de l'eau est H2O, comprenant deux atomes d'hydrogène et un atome d'oxygène. L'eau est indispensable à la vie sur Terre, intervenant dans les processus biologiques et les équilibres écologiques."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Jupiter is the largest planet in the solar system, more than twice as massive as all the other planets combined. Its distinctive features include colorful cloud bands and the Great Red Spot, a persistent storm.",
      fr: "Jupiter est la plus grande planète du système solaire, plus de deux fois plus massive que toutes les autres réunies. Elle se distingue par ses bandes nuageuses colorées et sa Grande Tache Rouge, une tempête permanente."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Isaac Newton did not merely discover gravity but formulated a universal law of gravitation in the 17th century, providing a mathematical framework to explain how objects attract each other. His work laid the foundation for classical mechanics and influenced centuries of scientific thought.",
      fr: "Isaac Newton n'a pas simplement découvert la gravité, il en a formulé la loi universelle au XVIIe siècle, fournissant une base mathématique expliquant l'attraction mutuelle des objets. Ses travaux ont jeté les fondements de la mécanique classique et influencé la pensée scientifique pendant plusieurs siècles."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "The heart is the organ responsible for pumping blood throughout the circulatory system. It delivers oxygen and nutrients to cells and removes carbon dioxide and waste products, maintaining life-sustaining circulation.",
      fr: "Le cœur est l'organe chargé de pomper le sang dans le système circulatoire. Il fournit de l'oxygène et des nutriments aux cellules, tout en évacuant le dioxyde de carbone et les déchets, assurant ainsi une circulation vitale."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "George Washington served as the first President of the United States from 1789 to 1797. A key figure in the nation's founding, he led the Continental Army to victory during the American Revolutionary War and is revered as the 'Father of His Country.'",
      fr: "George Washington fut le premier président des États-Unis, exerçant son mandat de 1789 à 1797. Figure clé dans la fondation de la nation, il mena l'Armée continentale à la victoire pendant la Guerre d'indépendance américaine et est vénéré comme le 'Père de son pays'."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "The speed of light in a vacuum is approximately 299,792 kilometers per second. It represents a fundamental constant in physics, denoted as 'c', and forms the basis for Einstein’s theories of relativity.",
      fr: "La vitesse de la lumière dans le vide est d'environ 299 792 kilomètres par seconde. Elle constitue une constante fondamentale en physique, notée 'c', et sert de base aux théories de la relativité d'Einstein."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Joan of Arc, called the 'Maid of Orléans,' was a French heroine who led French forces to critical victories during the Hundred Years' War. She was later captured, tried for heresy, and executed, but eventually canonized as a saint.",
      fr: "Jeanne d'Arc, surnommée la 'Pucelle d'Orléans', fut une héroïne française qui mena l'armée française à des victoires décisives durant la Guerre de Cent Ans. Capturée, jugée pour hérésie et exécutée, elle fut ultérieurement canonisée et élevée au rang de sainte."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "Portuguese is the official and predominant language of Brazil, a legacy of its colonial history under Portuguese rule.",
      fr: "Le portugais est la langue officielle et prédominante au Brésil, hérité de l'histoire coloniale du pays sous la domination portugaise."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "DNA stands for Deoxyribonucleic Acid. It is the hereditary material in almost all organisms, carrying genetic instructions essential for development, functioning, growth, and reproduction.",
      fr: "ADN signifie Acide Désoxyribonucléique. C'est la molécule qui porte l'information génétique chez la plupart des organismes, assurant le développement, le fonctionnement, la croissance et la reproduction."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Dante Alighieri wrote 'The Divine Comedy' in the early 14th century. This epic poem, divided into 'Inferno,' 'Purgatorio,' and 'Paradiso,' has had a profound impact on literature and moral philosophy.",
      fr: "Dante Alighieri a écrit 'La Divine Comédie' au début du XIVe siècle. Ce poème épique, divisé en 'Enfer', 'Purgatoire' et 'Paradis', a profondément influencé la littérature et la philosophie morale."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "The Nile, in Africa, is traditionally considered the longest river in the world, stretching approximately 6,650 kilometers. Its waters have supported civilizations for millennia.",
      fr: "Le Nil en Afrique est traditionnellement considéré comme le plus long fleuve du monde, avec environ 6 650 kilomètres. Ses eaux ont soutenu des civilisations pendant des millénaires."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Hydrogen is the most abundant element in the universe, making up about 75% of its elemental mass. It played a critical role in the formation of stars and galaxies.",
      fr: "L'hydrogène est l'élément le plus abondant dans l'univers, représentant environ 75% de sa masse élémentaire. Il a joué un rôle essentiel dans la formation des étoiles et des galaxies."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "The French Revolution began in 1789, with the storming of the Bastille on July 14th. It fundamentally transformed French society and inspired political upheavals worldwide.",
      fr: "La Révolution française a débuté en 1789, avec la prise de la Bastille le 14 juillet. Elle a profondément transformé la société française et inspiré des bouleversements politiques dans le monde entier."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "Miguel de Cervantes wrote 'Don Quixote,' published in two parts (1605 and 1615). Often considered the first modern novel, it satirizes chivalric romance and remains a cornerstone of Western literature.",
      fr: "Miguel de Cervantes a écrit 'Don Quichotte', publié en deux parties (1605 et 1615). Souvent considéré comme le premier roman moderne, l'ouvrage tourne en dérision les romans de chevalerie et demeure une œuvre phare de la littérature occidentale."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "Antonio Vivaldi composed 'The Four Seasons' (circa 1720), a set of four violin concertos each representing a season. Its innovative use of musical imagery makes it one of the most famous works of the Baroque era.",
      fr: "Antonio Vivaldi a composé 'Les Quatre Saisons' (vers 1720), un ensemble de quatre concertos pour violon symbolisant chacun une saison. Son utilisation novatrice de l'imagerie musicale en fait l'une des œuvres baroques les plus célèbres."
    },
    tags: [TagEnum.MUSIC]
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
    explanation: {
      en: "Tim Berners-Lee invented the World Wide Web in 1989 at CERN. His creation enabled the linking of documents via hyperlinks, shaping the modern internet and revolutionizing global information exchange.",
      fr: "Tim Berners-Lee a inventé le World Wide Web en 1989 au CERN. Son invention a permis de lier des documents via des hyperliens, façonnant l'Internet moderne et révolutionnant l'échange d'informations à l'échelle mondiale."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "The cell is the smallest unit of life that can carry out all life processes. It is the basic building block of all organisms, whether single-celled bacteria or complex multicellular organisms.",
      fr: "La cellule est la plus petite unité du vivant capable d'accomplir toutes les fonctions vitales. Elle constitue l'unité de base de tous les organismes, des bactéries unicellulaires aux organismes multicellulaires complexes."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Canberra is the capital of Australia, chosen in 1908 as a compromise between rivals Sydney and Melbourne. It is a planned city known for its national institutions and green spaces.",
      fr: "Canberra est la capitale de l'Australie, choisie en 1908 comme compromis entre les villes rivales de Sydney et Melbourne. C'est une ville planifiée, réputée pour ses institutions nationales et ses nombreux espaces verts."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Marie Curie was the first woman to win a Nobel Prize, awarded in Physics in 1903 (shared with Pierre Curie and Henri Becquerel) for research on radioactivity. She later won a second Nobel Prize in Chemistry, making her the only person to win Nobel Prizes in two different sciences.",
      fr: "Marie Curie a été la première femme à obtenir un prix Nobel, celui de Physique en 1903 (partagé avec Pierre Curie et Henri Becquerel) pour ses recherches sur la radioactivité. Elle obtiendra plus tard un second prix Nobel, en Chimie, devenant ainsi la seule personne à avoir reçu des Nobel dans deux disciplines scientifiques différentes."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "'The Republic' was written by the philosopher Plato. Written as a Socratic dialogue, it explores justice, the ideal state, and the nature of knowledge, profoundly influencing Western political philosophy.",
      fr: "'La République' a été écrite par le philosophe Platon. Présentée sous forme de dialogue socratique, elle interroge la justice, l'État idéal et la nature du savoir, exerçant une influence majeure sur la philosophie politique occidentale."
    },
    tags: [TagEnum.PHILOSOPHY]
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
    explanation: {
      en: "Sumo wrestling is considered the national sport of Japan. It has centuries-old traditions, with wrestlers (rikishi) undergoing rigorous training and performing highly ritualized matches.",
      fr: "Le sumo est considéré comme le sport national du Japon. Il possède des traditions séculaires, avec des lutteurs (rikishi) soumis à un entraînement intensif et des combats très codifiés."
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
    explanation: {
      en: "The United States has the world's largest economy by nominal GDP. Its economic leadership has influenced global markets and financial systems, although China is a close second and continues to grow rapidly.",
      fr: "Les États-Unis possèdent la plus grande économie mondiale en termes de PIB nominal. Leur position économique dominante a façonné les marchés et les systèmes financiers internationaux, même si la Chine les talonne de près avec une croissance soutenue."
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
    explanation: {
      en: "Quentin Tarantino directed 'Pulp Fiction' (1994). Known for its nonlinear storyline, sharp dialogue, and eclectic soundtrack, the film revitalized independent cinema and became a cultural landmark.",
      fr: "Quentin Tarantino a réalisé 'Pulp Fiction' (1994). Connu pour sa narration non linéaire, ses dialogues incisifs et sa bande-son éclectique, ce film a revitalisé le cinéma indépendant et marqué la culture populaire."
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
    explanation: {
      en: "India recently surpassed China as the world’s most populous country, with a population of over 1.4 billion people, reflecting significant demographic shifts.",
      fr: "L'Inde a récemment dépassé la Chine pour devenir le pays le plus peuplé, avec plus de 1,4 milliard d'habitants, reflétant d'importants changements démographiques."
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
    explanation: {
      en: "Ottawa is the capital of Canada, located in the province of Ontario. Known for its cultural institutions such as the National Gallery and Parliament Hill, Ottawa reflects the country’s bilingual and multicultural character.",
      fr: "Ottawa est la capitale du Canada, située dans la province de l'Ontario. Réputée pour ses institutions culturelles comme la Colline du Parlement et le Musée des beaux-arts du Canada, elle reflète le caractère bilingue et multiculturel du pays."
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
    explanation: {
      en: "Leo Tolstoy wrote 'War and Peace,' published in 1869. This monumental novel blends history, philosophy, and detailed character studies set against the backdrop of the Napoleonic Wars.",
      fr: "Léon Tolstoï a écrit 'Guerre et Paix', publié en 1869. Ce roman monumental allie histoire, philosophie et étude approfondie des personnages, sur fond de guerres napoléoniennes."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "Rome is the capital of Italy, famed for its historical legacy as the heart of the Roman Empire. Its ancient ruins, Renaissance art, and Vatican City attract millions of visitors annually.",
      fr: "Rome est la capitale de l'Italie, réputée pour son héritage historique en tant que cœur de l'Empire romain. Ses ruines antiques, son art de la Renaissance et la Cité du Vatican attirent des millions de visiteurs chaque année."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Friedrich Nietzsche wrote 'Thus Spoke Zarathustra' (1883–1885). This philosophical work presents the prophet Zarathustra’s ideas on morality, religion, and the concept of the Übermensch, challenging traditional values.",
      fr: "Friedrich Nietzsche a écrit 'Ainsi parlait Zarathoustra' (1883–1885). Cette œuvre philosophique met en scène le prophète Zarathoustra, portant un regard critique sur la morale, la religion, et introduisant le concept du Surhomme, remettant en cause les valeurs établies."
    },
    tags: [TagEnum.PHILOSOPHY]
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
    explanation: {
      en: "Margaret Thatcher served as the first female Prime Minister of the UK (1979–1990). Known as the 'Iron Lady,' she implemented conservative economic policies and influenced global politics during the Cold War era.",
      fr: "Margaret Thatcher fut la première femme Premier ministre du Royaume-Uni (1979–1990). Surnommée la 'Dame de fer', elle mit en œuvre des politiques économiques conservatrices et exerça une influence sur la scène politique mondiale pendant la Guerre froide."
    },
    tags: [TagEnum.POLITICS]
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
    explanation: {
      en: "The Blue Whale is the largest mammal on Earth, reaching lengths of over 30 meters. Despite its enormous size, it feeds primarily on tiny shrimp-like creatures called krill.",
      fr: "La baleine bleue est le plus grand mammifère sur Terre, pouvant dépasser 30 mètres de long. Malgré sa taille gigantesque, elle se nourrit principalement de petites crevettes appelées krill."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "The Bhagavad Gita is a sacred Hindu scripture, part of the Mahabharata. It conveys philosophical and spiritual teachings through a dialogue between Prince Arjuna and the god Krishna.",
      fr: "La Bhagavad Gita est un texte sacré de l'hindouisme, faisant partie du Mahabharata. Elle transmet des enseignements philosophiques et spirituels à travers le dialogue entre le prince Arjuna et le dieu Krishna."
    },
    tags: [TagEnum.RELIGION]
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
    explanation: {
      en: "Charles Babbage is often regarded as the father of the computer due to his work on the Analytical Engine, a mechanical general-purpose computing machine conceptualized in the 19th century.",
      fr: "Charles Babbage est souvent considéré comme le père de l'ordinateur pour ses travaux sur la Machine analytique, une machine à calculer mécanique à usage général conçue au XIXe siècle."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Victor Hugo wrote 'Les Misérables,' published in 1862. This epic novel explores themes of justice, redemption, and social inequality in 19th-century France.",
      fr: "Victor Hugo a écrit 'Les Misérables', publié en 1862. Ce roman épique traite de la justice, de la rédemption et des inégalités sociales dans la France du XIXe siècle."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "Francis Ford Coppola directed 'The Godfather' (1972), a landmark crime film that examines family, power, and morality in the Mafia underworld.",
      fr: "Francis Ford Coppola a réalisé 'Le Parrain' (1972), un film emblématique du genre mafieux, explorant la famille, le pouvoir et la morale dans le monde criminel."
    },
    tags: [TagEnum.CINEMA]
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
    explanation: {
      en: "George Gershwin composed 'Rhapsody in Blue' (1924), blending classical music with jazz elements. It remains a defining piece of American music.",
      fr: "George Gershwin a composé 'Rhapsody in Blue' (1924), mêlant musique classique et influences jazz. Cette œuvre est devenue un jalon de la musique américaine."
    },
    tags: [TagEnum.MUSIC]
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
    explanation: {
      en: "Brazil holds the record for the most FIFA World Cup victories in men's football, with five titles. Their fluid style of play and legendary players have made them a football powerhouse.",
      fr: "Le Brésil détient le record du plus grand nombre de titres de Coupe du Monde de la FIFA en football masculin, avec cinq victoires. Son style de jeu fluide et ses joueurs légendaires en font une puissance incontournable du football."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War and paving the way for German reunification and significant geopolitical changes in Europe.",
      fr: "Le mur de Berlin est tombé en 1989, symbolisant la fin de la Guerre froide et ouvrant la voie à la réunification allemande ainsi qu'à d'importants changements géopolitiques en Europe."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "The Universal Declaration of Human Rights (1948) established a global standard for human rights, emphasizing freedom, equality, and dignity for all individuals.",
      fr: "La Déclaration universelle des droits de l'homme (1948) a établi une norme mondiale pour les droits humains, mettant l'accent sur la liberté, l'égalité et la dignité de chaque individu."
    },
    tags: [TagEnum.SOCIETY]
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
    explanation: {
      en: "The official currency of Japan is the Yen (JPY). It is widely used in international trade and reflects Japan’s position as a major economic power.",
      fr: "La monnaie officielle du Japon est le Yen (JPY). Elle est largement utilisée dans le commerce international, reflétant le statut du Japon en tant que puissance économique majeure."
    },
    tags: [TagEnum.ECONOMY]
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
    explanation: {
      en: "'The Persistence of Memory' (1931) is a famous work by the Surrealist painter Salvador Dalí, known for its melting clocks, symbolizing the fluidity of time.",
      fr: "'La Persistance de la mémoire' (1931) est une œuvre célèbre du peintre surréaliste Salvador Dalí, reconnaissable à ses montres molles symbolisant la nature changeante et subjective du temps."
    },
    tags: [TagEnum.ART]
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
    explanation: {
      en: "The Sahara Desert is located in North Africa. It is the largest hot desert in the world, covering vast regions and influencing the climate and biodiversity of the continent.",
      fr: "Le désert du Sahara se trouve en Afrique du Nord. C'est le plus grand désert chaud du monde, recouvrant d'immenses étendues et influençant le climat ainsi que la biodiversité du continent."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Immanuel Kant wrote the 'Critique of Pure Reason' (1781). This foundational work of modern philosophy examines the limits and structure of human knowledge, profoundly influencing metaphysics and epistemology.",
      fr: "Immanuel Kant a écrit la 'Critique de la raison pure' (1781). Cette œuvre fondamentale de la philosophie moderne explore les limites et la structure de la connaissance humaine, influençant en profondeur la métaphysique et l'épistémologie."
    },
    tags: [TagEnum.PHILOSOPHY]
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
    explanation: {
      en: "Plants primarily absorb carbon dioxide (CO2) during photosynthesis. They use sunlight to convert CO2 and water into glucose and oxygen, forming the basis of most life’s food supply.",
      fr: "Les plantes absorbent principalement le dioxyde de carbone (CO2) lors de la photosynthèse. Elles utilisent l'énergie solaire pour transformer le CO2 et l'eau en glucose et en oxygène, constituant ainsi la base de l'approvisionnement alimentaire de la plupart des formes de vie."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "HTTP stands for HyperText Transfer Protocol. It underpins the World Wide Web, enabling the transfer of hypertext documents and forming the foundation of online data communication.",
      fr: "HTTP signifie HyperText Transfer Protocol. Il sous-tend le World Wide Web, permettant le transfert de documents hypertexte et constituant la base de la communication de données en ligne."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Geoffrey Chaucer wrote 'The Canterbury Tales' in the late 14th century. This collection of stories, told by a group of pilgrims, offers a vivid portrait of medieval English society.",
      fr: "Geoffrey Chaucer a écrit 'Les Contes de Canterbury' à la fin du XIVe siècle. Cette collection d'histoires, racontées par un groupe de pèlerins, dresse un portrait vivant de la société anglaise médiévale."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "Islam is a major world religion that follows the teachings of the Prophet Muhammad as revealed in the Quran. It emphasizes submission to the will of God (Allah) and the Five Pillars of faith.",
      fr: "L'islam est une grande religion mondiale qui suit les enseignements du Prophète Mahomet, tels que révélés dans le Coran. Elle met l'accent sur la soumission à la volonté de Dieu (Allah) et sur les Cinq Piliers de la foi."
    },
    tags: [TagEnum.RELIGION]
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
    explanation: {
      en: "Buenos Aires is the capital of Argentina. Known for its vibrant culture, tango music, and European-style architecture, it is a political, economic, and cultural hub in South America.",
      fr: "Buenos Aires est la capitale de l'Argentine. Réputée pour sa culture dynamique, le tango et son architecture d'inspiration européenne, la ville constitue un centre politique, économique et culturel en Amérique du Sud."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Isaac Newton formulated the law of universal gravitation in the late 17th century, explaining how all masses attract each other. This law revolutionized the understanding of motion and celestial mechanics.",
      fr: "Isaac Newton a formulé la loi de la gravitation universelle à la fin du XVIIe siècle, expliquant comment toutes les masses s'attirent mutuellement. Cette loi a révolutionné la compréhension du mouvement et de la mécanique céleste."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "'The Count of Monte Cristo' was written by Alexandre Dumas and published in 1844-1845. This adventure novel explores themes of justice, vengeance, mercy, and forgiveness, set against the historical backdrop of early 19th-century France and Italy.",
      fr: "'Le Comte de Monte-Cristo' a été écrit par Alexandre Dumas et publié en 1844-1845. Ce roman d'aventures aborde des thèmes comme la justice, la vengeance, la miséricorde et le pardon, sur fond de France et d'Italie du début du XIXe siècle."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "The chemical symbol 'Na' stands for Sodium. A highly reactive alkali metal, sodium is essential for living organisms and is commonly found as sodium chloride (table salt).",
      fr: "Le symbole chimique 'Na' désigne le sodium. Métal alcalin très réactif, le sodium est essentiel aux organismes vivants et se trouve couramment sous forme de chlorure de sodium (sel de table)."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "The Colosseum was built in Rome, Italy, around 70-80 AD. A grand amphitheater, it hosted gladiatorial contests, public spectacles, and remains one of the greatest symbols of the Roman Empire.",
      fr: "Le Colisée fut construit à Rome, en Italie, vers 70-80 apr. J.-C. Cet amphithéâtre monumental accueillait des combats de gladiateurs et d'autres spectacles publics, restant aujourd'hui l'un des plus grands symboles de l'Empire romain."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "'Guernica' was painted by Pablo Picasso in 1937. This large mural-sized painting is a powerful anti-war statement, created in response to the bombing of the Spanish town of Guernica during the Spanish Civil War.",
      fr: "'Guernica' a été peint par Pablo Picasso en 1937. Cette peinture monumentale est un puissant manifeste contre la guerre, réalisée en réaction au bombardement de la ville espagnole de Guernica pendant la guerre civile espagnole."
    },
    tags: [TagEnum.ART]
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
    explanation: {
      en: "'Carmen' was composed by Georges Bizet and premiered in 1875. Set in Spain, this opera is known for its passionate characters, vivid melodies, and tragic storyline, becoming one of the most frequently performed operas worldwide.",
      fr: "'Carmen' a été composé par Georges Bizet et créé en 1875. Situé en Espagne, cet opéra est célèbre pour ses personnages passionnés, ses mélodies marquantes et son histoire tragique, faisant de lui l'un des opéras les plus joués dans le monde."
    },
    tags: [TagEnum.MUSIC]
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
    explanation: {
      en: "The chemical symbol for Silver is 'Ag', derived from its Latin name 'Argentum.' Silver is valued for its luster, conductivity, and use in jewelry, electronics, and photography.",
      fr: "Le symbole chimique de l'argent est 'Ag', issu du terme latin 'Argentum'. L'argent est prisé pour son éclat, sa conductivité et ses usages dans la joaillerie, l'électronique et la photographie."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "René Descartes wrote 'Meditations on First Philosophy' (1641). In this work, he explores the nature of knowledge, doubt, and the existence of God, laying the foundations of modern Western philosophy.",
      fr: "René Descartes a écrit les 'Méditations Métaphysiques' (1641). Dans cet ouvrage, il explore la nature de la connaissance, du doute et l'existence de Dieu, posant ainsi les fondations de la philosophie moderne occidentale."
    },
    tags: [TagEnum.PHILOSOPHY]
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
    explanation: {
      en: "Swift is the main language for modern iOS development, introduced by Apple in 2014. It offers safety features, modern syntax, and compatibility with existing Objective-C code.",
      fr: "Swift est le langage principal pour le développement iOS moderne, introduit par Apple en 2014. Il offre des fonctionnalités de sécurité, une syntaxe moderne et une compatibilité avec l'Objective-C existant."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Mars is called the 'Red Planet' due to its iron oxide-rich soil, giving it a reddish appearance. It has been a focus of exploration in the search for past or present life.",
      fr: "Mars est surnommée la 'planète rouge' en raison de son sol riche en oxyde de fer, lui donnant une teinte rougeâtre. Elle est un sujet d'exploration majeur dans la recherche de traces de vie passée ou présente."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Roger Bannister broke the four-minute mile barrier in 1954, running it in 3 minutes 59.4 seconds. His achievement redefined what was considered physically possible in middle-distance running.",
      fr: "Roger Bannister a passé la barrière des quatre minutes au mile en 1954, le courant en 3 minutes 59,4 secondes. Son exploit a redéfini les limites du possible dans la course de demi-fond."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "Asia is the largest continent by both area and population. It spans diverse landscapes and cultures, influencing global economy, history, and politics.",
      fr: "L'Asie est le plus grand continent tant par sa superficie que par sa population. Elle englobe une grande diversité de paysages et de cultures, influençant l'économie, l'histoire et la politique mondiales."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Jean-Paul Sartre wrote 'Being and Nothingness' (1943), a foundational text of existentialist philosophy that examines consciousness, freedom, and the nature of human existence.",
      fr: "Jean-Paul Sartre a écrit 'L'Être et le Néant' (1943), texte fondateur de l'existentialisme qui examine la conscience, la liberté et la nature de l'existence humaine."
    },
    tags: [TagEnum.PHILOSOPHY]
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
    explanation: {
      en: "GDP stands for Gross Domestic Product. It measures the total value of goods and services produced within a country’s borders in a given period, serving as a key economic indicator.",
      fr: "PIB signifie Produit Intérieur Brut. Il mesure la valeur totale des biens et services produits à l'intérieur des frontières d'un pays sur une période donnée, constituant un indicateur économique clé."
    },
    tags: [TagEnum.ECONOMY]
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
    explanation: {
      en: "Steven Spielberg directed 'Jaws' (1975), a blockbuster that revolutionized the summer movie industry and terrified audiences worldwide with its portrayal of a great white shark.",
      fr: "Steven Spielberg a réalisé 'Les Dents de la mer' (1975), un film à succès qui a révolutionné la saison cinématographique estivale et terrifié le public mondial avec son grand requin blanc."
    },
    tags: [TagEnum.CINEMA]
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
    explanation: {
      en: "Christianity is currently the world’s largest religion by number of adherents. Its various denominations and traditions have shaped cultures and societies across the globe.",
      fr: "Le christianisme est actuellement la religion la plus pratiquée dans le monde par le nombre de fidèles. Ses différentes confessions et traditions ont façonné des cultures et des sociétés à travers le globe."
    },
    tags: [TagEnum.RELIGION]
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
    explanation: {
      en: "Arthur Schopenhauer wrote 'The World as Will and Representation' (1818). He presents the world as driven by a blind, ceaseless will, influencing existential and postmodern philosophies.",
      fr: "Arthur Schopenhauer a écrit 'Le Monde comme Volonté et Représentation' (1818). Il décrit le monde comme mû par une volonté aveugle et incessante, influençant ainsi les philosophies existentialistes et postmodernes."
    },
    tags: [TagEnum.PHILOSOPHY]
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
    explanation: {
      en: "Mark Twain wrote 'The Adventures of Huckleberry Finn,' published in 1884. Considered a classic of American literature, it addresses themes of freedom, morality, and social norms.",
      fr: "Mark Twain a écrit 'Les Aventures de Huckleberry Finn', publié en 1884. Considéré comme un classique de la littérature américaine, le roman aborde des thèmes tels que la liberté, la moralité et les normes sociales."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "The Soviet Union launched Sputnik 1 in 1957, the first artificial satellite. This event initiated the space race, leading to rapid advancements in space exploration.",
      fr: "L'Union soviétique a lancé Spoutnik 1 en 1957, le premier satellite artificiel. Cet événement marqua le début de la course à l'espace, entraînant des progrès rapides en exploration spatiale."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Islam is the official and dominant religion in Saudi Arabia. Islamic law and traditions shape the nation’s cultural, political, and social institutions.",
      fr: "L'islam est la religion officielle et dominante en Arabie Saoudite. La loi et les traditions islamiques influencent les institutions culturelles, politiques et sociales du pays."
    },
    tags: [TagEnum.RELIGION]
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
    explanation: {
      en: "Steven Spielberg directed 'E.T. the Extra-Terrestrial' (1982). The film is a beloved family classic, emphasizing friendship, empathy, and the wonder of the unknown.",
      fr: "Steven Spielberg a réalisé 'E.T. l'extra-terrestre' (1982). Ce film familial est un classique, mettant l'accent sur l'amitié, l'empathie et la découverte de l'inconnu."
    },
    tags: [TagEnum.CINEMA]
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
    explanation: {
      en: "Charles Darwin proposed the theory of evolution by natural selection in 'On the Origin of Species' (1859). His work revolutionized biology, explaining the diversity of life through gradual change.",
      fr: "Charles Darwin a proposé la théorie de l'évolution par sélection naturelle dans 'De l'Origine des espèces' (1859). Ses travaux ont révolutionné la biologie, expliquant la diversité du vivant par des changements progressifs."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "The River Thames flows through London, the capital of the United Kingdom. It has played a crucial role in the city’s history, commerce, and transportation.",
      fr: "La Tamise traverse Londres, la capitale du Royaume-Uni. Elle a joué un rôle crucial dans l'histoire, le commerce et les transports de la ville."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Michelangelo painted the ceiling of the Sistine Chapel (1508–1512), a masterpiece of High Renaissance art depicting scenes from the Book of Genesis and other biblical narratives.",
      fr: "Michel-Ange a peint le plafond de la chapelle Sixtine (1508–1512), chef-d'œuvre de la Haute Renaissance représentant des scènes de la Genèse et d'autres récits bibliques."
    },
    tags: [TagEnum.ART]
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
    explanation: {
      en: "Johann Sebastian Bach composed the Brandenburg Concertos, presented in 1721. These six concertos are celebrated examples of Baroque orchestral music.",
      fr: "Johann Sebastian Bach a composé les Concertos Brandebourgeois, présentés en 1721. Ces six concertos sont des exemples célèbres de la musique orchestrale baroque."
    },
    tags: [TagEnum.MUSIC]
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
    explanation: {
      en: "Napoleon Bonaparte crowned himself Emperor of the French in 1804, dominating European politics and waging numerous wars before his eventual defeat.",
      fr: "Napoléon Bonaparte s'est couronné Empereur des Français en 1804. Il a dominé la politique européenne et mené de nombreuses guerres avant d'être finalement vaincu."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "The diaphragm is the main muscle involved in breathing. Its contraction and relaxation change lung volume, enabling inhalation and exhalation.",
      fr: "Le diaphragme est le muscle principal de la respiration. Sa contraction et son relâchement modifient le volume pulmonaire, permettant l'inspiration et l'expiration."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Jawaharlal Nehru served as the first Prime Minister of India from 1947 to 1964. He played a pivotal role in shaping the modern Indian state, its democratic institutions, and secular policies.",
      fr: "Jawaharlal Nehru fut le premier Premier ministre de l'Inde, de 1947 à 1964. Il a joué un rôle clé dans la formation de l'État indien moderne, de ses institutions démocratiques et de ses politiques laïques."
    },
    tags: [TagEnum.POLITICS]
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
    explanation: {
      en: "CPU stands for Central Processing Unit, the brain of the computer that executes instructions and processes data. Its performance greatly influences the overall speed of a system.",
      fr: "CPU signifie Central Processing Unit. C'est le cerveau de l'ordinateur, exécutant les instructions et traitant les données. Ses performances influencent considérablement la rapidité globale du système."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Herman Melville wrote 'Moby-Dick' (1851), a novel about the obsessive quest of Captain Ahab for the white whale Moby Dick, reflecting deep themes of fate, nature, and morality.",
      fr: "Herman Melville a écrit 'Moby-Dick' (1851), un roman traitant de la quête obsessionnelle du capitaine Achab pour la baleine blanche Moby Dick, abordant des thèmes profonds comme le destin, la nature et la morale."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "Ontology is the branch of philosophy concerned with the nature of being, existence, and reality. It examines what entities exist and how they can be categorized.",
      fr: "L'ontologie est la branche de la philosophie qui s'intéresse à la nature de l'être, de l'existence et de la réalité. Elle examine quelles entités existent et comment les classer."
    },
    tags: [TagEnum.PHILOSOPHY]
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
    explanation: {
      en: "The currency of the United Kingdom is the Pound Sterling (GBP). It is one of the oldest and most traded currencies in the world.",
      fr: "La monnaie du Royaume-Uni est la livre sterling (GBP). C'est l'une des devises les plus anciennes et les plus échangées au monde."
    },
    tags: [TagEnum.ECONOMY]
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
    explanation: {
      en: "Machu Picchu was built by the Inca Empire in the 15th century. Located in the Andes, it remains a symbol of Inca engineering, culture, and spirituality.",
      fr: "Le Machu Picchu a été construit par l'Empire inca au XVe siècle. Situé dans les Andes, il est un symbole de l'ingénierie, de la culture et de la spiritualité incas."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "Michael Jackson is widely referred to as the 'King of Pop' for his groundbreaking music, dance moves, and global cultural impact throughout the late 20th century.",
      fr: "Michael Jackson est largement connu comme le 'Roi de la Pop' pour sa musique révolutionnaire, ses chorégraphies emblématiques et son impact culturel mondial à la fin du XXe siècle."
    },
    tags: [TagEnum.MUSIC]
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
    explanation: {
      en: "HTML stands for HyperText Markup Language. It defines the structure and content of web pages, forming the backbone of the World Wide Web.",
      fr: "HTML signifie HyperText Markup Language. Il définit la structure et le contenu des pages Web, formant la base du World Wide Web."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Nitrogen makes up about 78% of the Earth's atmosphere. Oxygen, argon, and trace gases compose the remainder.",
      fr: "L'azote constitue environ 78% de l'atmosphère terrestre. L'oxygène, l'argon et d'autres gaz en faibles quantités complètent la composition."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Cairo is the capital of Egypt, a historic city along the Nile River. Known for its proximity to the Giza pyramids, it is a cultural and political center in the Middle East.",
      fr: "Le Caire est la capitale de l'Égypte, une ville historique située sur le Nil. Connue pour sa proximité avec les pyramides de Gizeh, elle est un centre culturel et politique du Moyen-Orient."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Georg Wilhelm Friedrich Hegel wrote 'The Phenomenology of Spirit' (1807). This complex work examines consciousness, self-awareness, and the evolution of ideas throughout history.",
      fr: "Georg Wilhelm Friedrich Hegel a écrit 'La Phénoménologie de l'esprit' (1807). Cet ouvrage complexe étudie la conscience, la prise de conscience de soi et l'évolution des idées au cours de l'histoire."
    },
    tags: [TagEnum.PHILOSOPHY]
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
    explanation: {
      en: "Ernest Hemingway wrote 'The Old Man and the Sea' (1952). This novella earned him the Pulitzer Prize and contributed to his Nobel Prize in Literature, symbolizing resilience and the human spirit.",
      fr: "Ernest Hemingway a écrit 'Le Vieil Homme et la Mer' (1952). Cette nouvelle lui valut le prix Pulitzer et contribua à son prix Nobel de littérature, symbolisant la résilience et la force de l'esprit humain."
    },
    tags: [TagEnum.LITERATURE]
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
    explanation: {
      en: "The United States Declaration of Independence was adopted on July 4, 1776. It proclaimed the thirteen colonies' separation from British rule, laying the foundation for a new nation.",
      fr: "La Déclaration d'indépendance des États-Unis a été adoptée le 4 juillet 1776. Elle proclama la séparation des treize colonies de la tutelle britannique, jetant ainsi les bases d'une nouvelle nation."
    },
    tags: [TagEnum.HISTORY]
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
    explanation: {
      en: "Android was originally developed by Android Inc., founded in 2003, and later acquired by Google in 2005. It has become the world’s most widely used mobile OS.",
      fr: "Android a initialement été développé par Android Inc., fondée en 2003, puis rachetée par Google en 2005. Il est devenu le système d'exploitation mobile le plus largement utilisé dans le monde."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "'Boléro' was composed by Maurice Ravel and premiered in 1928. Known for its steady, hypnotic rhythm and gradual crescendo, it’s one of the most recognizable orchestral works.",
      fr: "Le 'Boléro' a été composé par Maurice Ravel et créé en 1928. Connu pour son rythme régulier, hypnotique, et son crescendo progressif, c'est l'une des œuvres orchestrales les plus reconnaissables."
    },
    tags: [TagEnum.MUSIC]
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
    explanation: {
      en: "Albert Einstein is considered the father of modern physics, especially for his theories of special and general relativity, which revolutionized our understanding of space, time, and gravity.",
      fr: "Albert Einstein est considéré comme le père de la physique moderne, notamment pour ses théories de la relativité restreinte et générale, qui ont révolutionné notre compréhension de l'espace, du temps et de la gravité."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Stockholm is the capital of Sweden, spread across numerous islands and renowned for its clean environment, innovation, and rich cultural scene.",
      fr: "Stockholm est la capitale de la Suède, s'étendant sur de nombreuses îles. Elle est réputée pour son environnement propre, son innovation et sa scène culturelle dynamique."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "Vincent van Gogh famously cut off part of his left ear in 1888 during a period of mental distress. Despite his struggles, he produced some of history’s most celebrated paintings.",
      fr: "Vincent van Gogh s'est tristement coupé une partie de l'oreille gauche en 1888, durant une période de détresse mentale. Malgré ses difficultés, il a réalisé parmi les tableaux les plus admirés de l'histoire de l'art."
    },
    tags: [TagEnum.ART]
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
    explanation: {
      en: "Richard Wagner composed 'The Ring of the Nibelung' (Der Ring des Nibelungen), a cycle of four epic operas premiered between 1876 and 1877. They drew on Germanic myths and revolutionized opera.",
      fr: "Richard Wagner a composé 'L'Anneau du Nibelung' (Der Ring des Nibelungen), un cycle de quatre opéras épiques créés entre 1876 et 1877. Ils s'inspirent des mythes germaniques et ont révolutionné l'opéra."
    },
    tags: [TagEnum.MUSIC]
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
    explanation: {
      en: "William Harvey, in the early 17th century, described the systemic circulation of blood pumped by the heart. His work overturned centuries of medical assumptions.",
      fr: "William Harvey, au début du XVIIe siècle, a décrit la circulation systémique du sang pompé par le cœur. Ses travaux ont renversé des siècles de croyances médicales."
    },
    tags: [TagEnum.SCIENCE]
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
    explanation: {
      en: "Moscow is the capital of Russia, known for its historical Kremlin, Red Square, and cultural institutions. It is the political, economic, and cultural center of the country.",
      fr: "Moscou est la capitale de la Russie, connue pour son Kremlin historique, la Place Rouge et ses institutions culturelles. Elle constitue le centre politique, économique et culturel du pays."
    },
    tags: [TagEnum.GEOGRAPHY]
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
    explanation: {
      en: "French poet Guillaume Apollinaire coined the term 'Surréalisme' in 1917. André Breton later developed Surrealism into a literary and artistic movement, emphasizing the unconscious and unexpected juxtapositions.",
      fr: "Le poète français Guillaume Apollinaire a inventé le terme 'Surréalisme' en 1917. André Breton développera par la suite le surréalisme en un mouvement littéraire et artistique, mettant en avant l'inconscient et les associations inattendues."
    },
    tags: [TagEnum.ART]
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
    explanation: {
      en: "UNICEF (United Nations Children's Fund) is the UN agency responsible for protecting children’s rights, providing humanitarian aid, and ensuring education and healthcare for children worldwide.",
      fr: "L'UNICEF (Fonds des Nations Unies pour l'enfance) est l'agence de l'ONU chargée de protéger les droits de l'enfant, de fournir une aide humanitaire et d'assurer l'éducation et les soins de santé des enfants dans le monde."
    },
    tags: [TagEnum.SOCIETY]
  }
]

const p4: Question[] = [
  {
    id: "4903a5aa-d70a-4cb3-bb78-409722cd22bf",
    difficulty: 6,
    question: {
      en: "Which social movement marked France in 1968?",
      fr: "Quel mouvement social a marqué la France en 1968 ?"
    },
    answers: {
      en: ["May 68 events", "Paris Commune", "1848 Revolution", "Canuts revolt"],
      fr: ["Les événements de Mai 68", "La Commune de Paris", "La Révolution de 1848", "La révolte des Canuts"]
    },
    explanation: {
      en: "The May 1968 events in France were a period of civil unrest, involving student protests, general strikes, and occupations of universities and factories. They profoundly influenced French society, politics, and culture.",
      fr: "Les événements de Mai 68 en France furent une période de contestation sociale, marquée par des manifestations étudiantes, des grèves générales et l'occupation d'universités et d'usines. Ils ont profondément influencé la société, la politique et la culture françaises."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "87db08b7-64e0-4f88-a2e8-d25f407ceff6",
    difficulty: 2,
    question: {
      en: "What is the legal age of majority in France?",
      fr: "Quel est l'âge de la majorité légale en France ?"
    },
    answers: {
      en: ["18", "16", "21", "20"],
      fr: ["18 ans", "16 ans", "21 ans", "20 ans"]
    },
    explanation: {
      en: "The age of majority in France is 18 years. At this age, individuals acquire full legal rights and responsibilities, including the right to vote and enter into contracts.",
      fr: "L'âge de la majorité légale en France est de 18 ans. À cet âge, les individus obtiennent la pleine capacité juridique ainsi que tous les droits et responsabilités, dont le droit de vote et la possibilité de signer des contrats."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "49ec8ae1-cbb7-4932-bb50-31b8f7d92e0f",
    difficulty: 7,
    question: {
      en: "Which sociological concept refers to geographic mobility for work?",
      fr: "Quel concept sociologique désigne la mobilité géographique des individus cherchant un emploi ?"
    },
    answers: {
      en: ["Migration", "Tourism", "Sedentism", "Nomadism"],
      fr: ["La migration", "Le tourisme", "La sédentarité", "Le nomadisme"]
    },
    explanation: {
      en: "Migration refers to the movement of people from one place to another, often in search of better job opportunities or living conditions. It can shape demographics, economies, and cultures.",
      fr: "La migration désigne le déplacement des individus d'un lieu à un autre, souvent à la recherche de meilleures opportunités d'emploi ou de conditions de vie. Elle influe sur la démographie, l'économie et la culture."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "b143c1e2-02e0-4d01-8381-48f0ea6dd46c",
    difficulty: 3,
    question: {
      en: "What term describes equal chances for men and women?",
      fr: "Quel terme décrit l'égalité des chances entre les hommes et les femmes ?"
    },
    answers: {
      en: ["Gender equality", "Matriarchy", "Patriarchy", "Segregation"],
      fr: ["L'égalité de genre", "Le matriarcat", "Le patriarcat", "La ségrégation"]
    },
    explanation: {
      en: "Gender equality refers to providing equal rights, responsibilities, and opportunities to individuals of all genders. It seeks to eliminate discrimination and bias based on gender.",
      fr: "L'égalité de genre vise à garantir les mêmes droits, responsabilités et opportunités à toutes les personnes, quels que soient leur sexe ou leur genre. Elle cherche à éliminer les discriminations et les préjugés basés sur le genre."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "709eb4c3-3dce-4fe5-9b15-908f52d612c1",
    difficulty: 4,
    question: {
      en: "What is the term for the concentration of population in large megacities?",
      fr: "Comment nomme-t-on le phénomène de concentration urbaine dans de grandes mégapoles ?"
    },
    answers: {
      en: ["Urbanization", "Rural life", "Eco-village", "Decentralization"],
      fr: ["L'urbanisation", "La ruralité", "L'éco-village", "La décentralisation"]
    },
    explanation: {
      en: "Urbanization is the process where an increasing proportion of a population lives in urban areas, often attracted by economic opportunities, services, and infrastructure.",
      fr: "L'urbanisation est le processus par lequel une proportion croissante de la population s'installe dans des zones urbaines, souvent attirée par les opportunités économiques, les services et les infrastructures."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "054c13c2-6b78-4349-823a-f02d0454cf18",
    difficulty: 5,
    question: {
      en: "What term refers to favoring someone due to their ethnic origin?",
      fr: "Quel terme désigne le fait de favoriser un individu en raison de son origine ethnique ?"
    },
    answers: {
      en: ["Racism", "Sexism", "Ageism", "Classism"],
      fr: ["Le racisme", "Le sexisme", "L'âgisme", "Le classisme"]
    },
    explanation: {
      en: "Racism refers to discrimination or prejudice based on a person’s race or ethnicity. It can manifest in personal biases, institutional practices, and social structures.",
      fr: "Le racisme désigne la discrimination ou les préjugés fondés sur la race ou l'origine ethnique d'une personne. Il se manifeste dans les biais individuels, les pratiques institutionnelles et les structures sociales."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "1cd99b68-95a9-4a49-8319-b37bc4cfe548",
    difficulty: 4,
    question: {
      en: "Which indicator measures education, life expectancy, and income in a country?",
      fr: "Quel indicateur mesure le niveau d'éducation, d'espérance de vie et de revenu d'un pays ?"
    },
    answers: {
      en: ["HDI", "GDP", "CPI", "Literacy rate"],
      fr: ["L'IDH (Indice de Développement Humain)", "Le PIB", "L'IPC", "Le taux d'alphabétisation"]
    },
    explanation: {
      en: "The Human Development Index (HDI) measures a country's average achievements in health (life expectancy), education, and income, providing a more holistic view of development than GDP alone.",
      fr: "L'Indice de Développement Humain (IDH) évalue les performances moyennes d'un pays en matière de santé (espérance de vie), d'éducation et de revenu, offrant une vision plus globale du développement que le PIB seul."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "8bd09b85-6eb4-4138-b415-b9b74fc0fe20",
    difficulty: 1,
    question: {
      en: "What is the study of human populations and their characteristics?",
      fr: "Comment appelle-t-on l'étude des populations humaines et de leurs caractéristiques ?"
    },
    answers: {
      en: ["Demography", "Sociology", "Anthropology", "Psychology"],
      fr: ["La démographie", "La sociologie", "L'anthropologie", "La psychologie"]
    },
    explanation: {
      en: "Demography is the statistical study of populations, examining size, structure, and distribution, as well as changes due to birth, migration, and aging.",
      fr: "La démographie est l'étude statistique des populations, examinant leur taille, leur structure et leur répartition, ainsi que les changements dus aux naissances, aux migrations et au vieillissement."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "891b53eb-3898-4611-8f12-e449269d8515",
    difficulty: 3,
    question: {
      en: "What is discrimination based on age called?",
      fr: "Quel terme désigne la discrimination basée sur l'âge d'un individu ?"
    },
    answers: {
      en: ["Ageism", "Sexism", "Racism", "Xenophobia"],
      fr: ["L'âgisme", "Le sexisme", "Le racisme", "La xénophobie"]
    },
    explanation: {
      en: "Ageism is discrimination against individuals based on their age. It can affect both older and younger people, influencing employment, health care, and social attitudes.",
      fr: "L'âgisme est la discrimination envers les individus en raison de leur âge. Il peut toucher aussi bien les personnes âgées que les plus jeunes, influençant l'emploi, les soins de santé et les attitudes sociales."
    },
    tags: [TagEnum.SOCIETY]
  },
  {
    id: "9147b1db-1c66-476f-9704-4129a06ca618",
    difficulty: 2,
    question: {
      en: "Which main language is used alongside HTML and CSS for web development?",
      fr: "Quel est le langage principal utilisé pour le développement de pages Web, aux côtés du HTML et du CSS ?"
    },
    answers: {
      en: ["JavaScript", "Python", "Java", "C++"],
      fr: ["JavaScript", "Python", "Java", "C++"]
    },
    explanation: {
      en: "JavaScript is the primary scripting language used alongside HTML and CSS to create interactive and dynamic web pages.",
      fr: "JavaScript est le langage de script principal utilisé avec HTML et CSS pour créer des pages Web interactives et dynamiques."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "468a0f9b-7e93-442a-9cbd-a1daefc487c5",
    difficulty: 3,
    question: {
      en: "Which connected device is mainly used to track sports activity and heart rate?",
      fr: "Quel objet connecté est principalement utilisé pour suivre l'activité sportive et la fréquence cardiaque ?"
    },
    answers: {
      en: ["Smartwatch", "VR headset", "Tablet", "Smartphone"],
      fr: ["La montre connectée", "Le casque de réalité virtuelle", "La tablette", "Le smartphone"]
    },
    explanation: {
      en: "A smartwatch is commonly used to track physical activity, heart rate, and other health metrics, often syncing with mobile apps to provide insights and goals.",
      fr: "Une montre connectée est couramment utilisée pour suivre l'activité physique, la fréquence cardiaque et d'autres paramètres de santé, se synchronisant souvent avec des applications mobiles pour fournir des analyses et fixer des objectifs."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "1db052b7-a5f3-4de8-b189-9d3cb5fe6a9b",
    difficulty: 4,
    question: {
      en: "What concept describes storing and accessing data remotely via the Internet?",
      fr: "Quel concept informatique décrit le stockage et l'accès aux données sur des serveurs distants via Internet ?"
    },
    answers: {
      en: ["Cloud computing", "Machine learning", "Big data", "Virtualization"],
      fr: ["Le cloud computing", "Le machine learning", "Le big data", "La virtualisation"]
    },
    explanation: {
      en: "Cloud computing allows users to access and store data on remote servers rather than local machines, offering scalability, flexibility, and cost-efficiency.",
      fr: "Le cloud computing permet aux utilisateurs d'accéder à et de stocker des données sur des serveurs distants au lieu de leurs machines locales, offrant évolutivité, flexibilité et efficacité en termes de coûts."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "0139f7b7-1d78-408c-b35b-433c94c7aa38",
    difficulty: 5,
    question: {
      en: "Which open-source mobile OS was originally developed by Android Inc.?",
      fr: "Quel système d'exploitation mobile open source a été développé à l'origine par Android Inc. ?"
    },
    answers: {
      en: ["Android", "iOS", "Windows Phone", "BlackBerry OS"],
      fr: ["Android", "iOS", "Windows Phone", "BlackBerry OS"]
    },
    explanation: {
      en: "Android is an open-source mobile operating system originally developed by Android Inc. and acquired by Google, now powering billions of devices worldwide.",
      fr: "Android est un système d'exploitation mobile open source initialement développé par Android Inc. puis racheté par Google, alimentant aujourd'hui des milliards d'appareils à travers le monde."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "363c45db-3db3-4c83-9743-5bd91917ffc7",
    difficulty: 6,
    question: {
      en: "What do we call a malicious program designed to harm a computer system?",
      fr: "Quel terme désigne un programme malveillant conçu pour endommager ou exploiter des failles dans un système informatique ?"
    },
    answers: {
      en: ["Malware", "Freeware", "Shareware", "Adware"],
      fr: ["Un malware", "Un freeware", "Un shareware", "Un adware"]
    },
    explanation: {
      en: "Malware (malicious software) includes viruses, trojans, worms, and other harmful code that can compromise security, steal data, or disrupt systems.",
      fr: "Un malware (logiciel malveillant) inclut virus, chevaux de Troie, vers et autres codes nuisibles pouvant compromettre la sécurité, voler des données ou perturber les systèmes."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "da098199-3e89-4303-8caa-e187aa7f3042",
    difficulty: 1,
    question: {
      en: "What is the French acronym for Artificial Intelligence?",
      fr: "Quel acronyme désigne l'intelligence artificielle ?"
    },
    answers: {
      en: ["IA", "AR", "VR", "IoT"],
      fr: ["IA", "AR", "VR", "IoT"]
    },
    explanation: {
      en: "IA is the French acronym for 'Intelligence Artificielle', which translates to Artificial Intelligence (AI) in English.",
      fr: "IA est l'acronyme de 'Intelligence Artificielle', correspondant au terme anglais Artificial Intelligence (AI)."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "f2f2117a-81d8-43b0-9cd2-193f0044be75",
    difficulty: 2,
    question: {
      en: "What is the name of the global network of interconnected computers?",
      fr: "Quel est le nom du réseau mondial d'ordinateurs interconnectés ?"
    },
    answers: {
      en: ["Internet", "Intranet", "Ethernet", "Extranet"],
      fr: ["Internet", "Intranet", "Ethernet", "Extranet"]
    },
    explanation: {
      en: "The Internet is a global network connecting millions of computers, enabling communication, information exchange, and commerce worldwide.",
      fr: "Internet est un réseau mondial reliant des millions d'ordinateurs, permettant la communication, l'échange d'informations et le commerce à l'échelle planétaire."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "2919363a-0099-450c-8cb4-e39287405c80",
    difficulty: 4,
    question: {
      en: "Which field focuses on analyzing massive datasets?",
      fr: "Quel domaine de l'informatique se concentre sur l'analyse et le traitement des données massives ?"
    },
    answers: {
      en: ["Big data", "Cryptography", "Software engineering", "Microcomputing"],
      fr: ["Le big data", "La cryptographie", "Le génie logiciel", "La micro-informatique"]
    },
    explanation: {
      en: "Big data deals with extremely large and complex data sets, applying advanced analytics to reveal patterns, trends, and associations, often using machine learning.",
      fr: "Le big data traite des ensembles de données extrêmement volumineux et complexes, en appliquant des analyses avancées pour révéler des schémas, des tendances et des corrélations, souvent à l'aide du machine learning."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "18eae736-70b5-4f7e-838f-83971b81c831",
    difficulty: 2,
    question: {
      en: "Which standard protocol is used for transferring web pages?",
      fr: "Quel est le protocole standard pour transférer des pages Web sur Internet ?"
    },
    answers: {
      en: ["HTTP", "FTP", "SMTP", "DNS"],
      fr: ["HTTP", "FTP", "SMTP", "DNS"]
    },
    explanation: {
      en: "HTTP (HyperText Transfer Protocol) is the standard protocol for transferring web pages. It underlies the World Wide Web, enabling browsers to request and display pages.",
      fr: "HTTP (HyperText Transfer Protocol) est le protocole standard pour transférer des pages Web. Il sous-tend le World Wide Web, permettant aux navigateurs de demander et d'afficher des pages."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "b4c94504-db3e-4226-b6fb-7f1acca724b4",
    difficulty: 3,
    question: {
      en: "What concept refers to simulating a real environment in a virtual world?",
      fr: "Quel concept décrit la reproduction d'un environnement réel dans un monde virtuel, souvent à l'aide d'un casque spécial ?"
    },
    answers: {
      en: ["Virtual reality", "Augmented reality", "Domotics", "Robotics"],
      fr: ["La réalité virtuelle", "La réalité augmentée", "La domotique", "La robotique"]
    },
    explanation: {
      en: "Virtual reality (VR) immerses users in a computer-generated environment that mimics real-life experiences, often using a headset and motion tracking.",
      fr: "La réalité virtuelle (VR) plonge l'utilisateur dans un environnement généré par ordinateur qui imite des expériences réelles, généralement à l'aide d'un casque et d'un suivi de mouvements."
    },
    tags: [TagEnum.TECHNOLOGY]
  },
  {
    id: "8982423f-ae1d-465f-b1b9-e18501f23bc3",
    difficulty: 2,
    question: {
      en: "Which indicator measures the total goods and services produced by a country?",
      fr: "Quel indicateur économique mesure la production de biens et services d'un pays sur une période donnée ?"
    },
    answers: {
      en: ["GDP", "HDI", "GNP", "CPI"],
      fr: ["Le PIB (Produit Intérieur Brut)", "L'IDH", "Le PNB", "L'IPC"]
    },
    explanation: {
      en: "GDP (Gross Domestic Product) measures the monetary value of all goods and services produced within a country’s borders over a specific time period.",
      fr: "Le PIB (Produit Intérieur Brut) mesure la valeur monétaire de tous les biens et services produits à l'intérieur des frontières d'un pays sur une période donnée."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "a318921d-6d0d-4b19-b3c9-640d6a62d1fd",
    difficulty: 3,
    question: {
      en: "What do we call a general increase in prices?",
      fr: "Quel terme décrit la hausse générale des prix des biens et services dans une économie ?"
    },
    answers: {
      en: ["Inflation", "Deflation", "Stagflation", "Recession"],
      fr: ["L'inflation", "La déflation", "La stagflation", "La récession"]
    },
    explanation: {
      en: "Inflation is the general rise in prices over time, reducing the purchasing power of money and affecting consumers, businesses, and economies.",
      fr: "L'inflation est la hausse générale et continue des prix au fil du temps, diminuant le pouvoir d'achat de la monnaie et affectant consommateurs, entreprises et économies."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "6c68acc9-e274-4c01-b1b6-8f86511bd997",
    difficulty: 5,
    question: {
      en: "Which institution sets monetary policy in the Eurozone?",
      fr: "Quelle institution est responsable de la politique monétaire au sein de la zone euro ?"
    },
    answers: {
      en: ["ECB", "Bank of France", "Bank of England", "World Bank"],
      fr: ["La Banque centrale européenne (BCE)", "La Banque de France", "La Banque d'Angleterre", "La Banque mondiale"]
    },
    explanation: {
      en: "The European Central Bank (ECB) sets monetary policy for the Eurozone, maintaining price stability and overseeing the Euro currency.",
      fr: "La Banque centrale européenne (BCE) définit la politique monétaire de la zone euro, maintenant la stabilité des prix et supervisant la monnaie unique, l'euro."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "cf65db80-37fb-425f-b809-960445b320b0",
    difficulty: 6,
    question: {
      en: "Which economic theory advocates minimal state intervention in markets?",
      fr: "Quel est le nom de la théorie économique qui prône la non-intervention de l'État dans les marchés ?"
    },
    answers: {
      en: ["Economic liberalism", "Keynesianism", "Marxism", "Protectionism"],
      fr: ["Le libéralisme économique", "Le keynésianisme", "Le marxisme", "Le protectionnisme"]
    },
    explanation: {
      en: "Economic liberalism favors free markets with minimal state intervention, believing that competition and individual initiative lead to optimal outcomes.",
      fr: "Le libéralisme économique favorise les marchés libres avec une intervention minimale de l'État, estimant que la concurrence et l'initiative individuelle aboutissent à des résultats optimaux."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "da9dad58-70e2-416a-8690-84abb0e2aacf",
    difficulty: 4,
    question: {
      en: "What term describes a long period of economic slowdown and high unemployment?",
      fr: "Quel terme désigne une période prolongée de ralentissement économique et de forte hausse du chômage ?"
    },
    answers: {
      en: ["Economic depression", "Growth", "Boom", "Expansion"],
      fr: ["La dépression économique", "La croissance", "Le boom économique", "L'expansion"]
    },
    explanation: {
      en: "An economic depression is a severe and prolonged downturn in economic activity, characterized by high unemployment, low output, and reduced consumer spending.",
      fr: "Une dépression économique est une baisse sévère et prolongée de l'activité économique, caractérisée par un chômage élevé, une faible production et une baisse de la consommation."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "b162a558-25d8-4116-b217-cc9b3bf4d7a6",
    difficulty: 7,
    question: {
      en: "Which international institution loans money to developing countries?",
      fr: "Quelle institution internationale octroie des prêts aux pays en développement pour lutter contre la pauvreté ?"
    },
    answers: {
      en: ["World Bank", "IMF", "WTO", "ECB"],
      fr: ["La Banque mondiale", "Le FMI", "L'OMC", "La BCE"]
    },
    explanation: {
      en: "The World Bank provides loans and grants to developing countries, aiming to reduce poverty and foster sustainable development.",
      fr: "La Banque mondiale accorde des prêts et des subventions aux pays en développement, visant à réduire la pauvreté et favoriser un développement durable."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "2e150a61-c9f5-422a-af35-cdc9a8b33f46",
    difficulty: 5,
    question: {
      en: "What is the difference between a country's imports and exports called?",
      fr: "Comment appelle-t-on la différence entre les importations et les exportations d'un pays ?"
    },
    answers: {
      en: ["Trade balance", "GDP", "Exchange rate", "Public debt"],
      fr: ["La balance commerciale", "Le PIB", "Le taux de change", "La dette publique"]
    },
    explanation: {
      en: "The trade balance is the difference between a country's exports and imports. A positive trade balance (surplus) occurs when exports exceed imports, and a negative one (deficit) when imports surpass exports.",
      fr: "La balance commerciale est la différence entre les exportations et les importations d'un pays. Une balance commerciale positive (excédent) se produit lorsque les exportations dépassent les importations, et une balance négative (déficit) dans le cas inverse."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "8977aaaf-eb3f-43ae-8a24-97444df3f76c",
    difficulty: 4,
    question: {
      en: "Which international body aims to facilitate trade?",
      fr: "Quel organisme international a pour but de faciliter le commerce entre les pays ?"
    },
    answers: {
      en: ["WTO", "IMF", "OECD", "ILO"],
      fr: ["L'Organisation mondiale du commerce (OMC)", "Le FMI", "L'OCDE", "L'OIT"]
    },
    explanation: {
      en: "The World Trade Organization (WTO) sets global rules for international trade, aiming to reduce tariffs, settle disputes, and promote open and fair markets.",
      fr: "L'Organisation mondiale du commerce (OMC) établit des règles internationales pour le commerce, visant à réduire les tarifs douaniers, résoudre les différends et promouvoir des marchés ouverts et équitables."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "0cb99024-1267-4224-a1a4-4d38b453ad72",
    difficulty: 6,
    question: {
      en: "What do we call the inability of a borrower to repay debt?",
      fr: "Quel terme décrit l'incapacité d'un emprunteur à rembourser sa dette ?"
    },
    answers: {
      en: ["Default", "Inflation", "Sovereign debt", "Devaluation"],
      fr: ["Le défaut de paiement", "L'inflation", "La dette souveraine", "La dévaluation"]
    },
    explanation: {
      en: "A default occurs when a borrower cannot meet the required payments on their debt. It can have serious consequences for creditworthiness and market stability.",
      fr: "Le défaut de paiement survient lorsqu'un emprunteur ne peut pas honorer ses échéances de remboursement. Il peut avoir de graves conséquences sur la solvabilité et la stabilité des marchés."
    },
    tags: [TagEnum.ECONOMY]
  },
  {
    id: "5d4fe8fa-a3dd-4bd7-a377-11f7e410bbf8",
    difficulty: 2,
    question: {
      en: "What is the common currency used by most EU countries?",
      fr: "Quel est le nom de la monnaie commune utilisée par la majorité des pays de l'Union européenne ?"
    },
    answers: {
      en: ["Euro", "Dollar", "Pound", "Swiss franc"],
      fr: ["L'euro", "Le dollar", "La livre sterling", "Le franc suisse"]
    },
    explanation: {
      en: "The Euro is the common currency used by the Eurozone countries within the European Union, facilitating trade, travel, and economic coordination.",
      fr: "L'euro est la monnaie commune utilisée par les pays de la zone euro au sein de l'Union européenne, facilitant le commerce, les déplacements et la coordination économique."
    },
    tags: [TagEnum.ECONOMY]
  }
]

const p5: Question[] = [
  {
    id: "0efacd66-fc30-473c-9435-de31e8a0704b",
    difficulty: 2,
    question: {
      en: "Which subatomic particle carries a negative charge?",
      fr: "Quelle est la particule subatomique portant une charge négative ?"
    },
    answers: {
      en: ["Electron", "Proton", "Neutron", "Quark"],
      fr: ["L'électron", "Le proton", "Le neutron", "Le quark"]
    },
    explanation: {
      en: "The electron is a subatomic particle with a negative electric charge. It orbits the atomic nucleus and plays a crucial role in chemical bonding, electricity, and magnetism.",
      fr: "L'électron est une particule subatomique de charge électrique négative. Il gravite autour du noyau atomique et joue un rôle essentiel dans les liaisons chimiques, l'électricité et le magnétisme."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "333ecc29-7b55-4a45-997d-d46b413d4955",
    difficulty: 4,
    question: {
      en: "What optical phenomenon separates white light into a spectrum of colors?",
      fr: "Quel phénomène optique explique la séparation de la lumière blanche en un spectre de couleurs ?"
    },
    answers: {
      en: ["Dispersion", "Reflection", "Refraction", "Diffraction"],
      fr: ["La dispersion", "La réflexion", "La réfraction", "La diffraction"]
    },
    explanation: {
      en: "Dispersion is the optical phenomenon by which white light is separated into its constituent colors when passing through a medium like a prism. Each wavelength is refracted at a slightly different angle.",
      fr: "La dispersion est le phénomène optique par lequel la lumière blanche se sépare en ses couleurs constitutives lorsqu'elle traverse un milieu comme un prisme. Chaque longueur d'onde est réfractée sous un angle légèrement différent."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "75ec1cc4-d50e-4195-93a3-19f9e97ff22d",
    difficulty: 3,
    question: {
      en: "Which molecule is the main energy source for living cells?",
      fr: "Quelle molécule est la principale source d'énergie pour les cellules vivantes ?"
    },
    answers: {
      en: ["Glucose", "CO2", "Nitrogen", "Methane"],
      fr: ["Le glucose", "Le dioxyde de carbone", "L'azote", "Le méthane"]
    },
    explanation: {
      en: "Glucose (a simple sugar) is a primary energy source for living cells. It is broken down during cellular respiration to produce ATP, the energy currency of the cell.",
      fr: "Le glucose (un sucre simple) est une source d'énergie primordiale pour les cellules vivantes. Il est dégradé lors de la respiration cellulaire pour produire de l'ATP, la monnaie énergétique de la cellule."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "4e1e4a4e-1dfa-47dd-a3c6-23025c9b7111",
    difficulty: 5,
    question: {
      en: "Which scientist proposed the theory of special relativity in 1905?",
      fr: "Quel scientifique a proposé la théorie de la relativité restreinte en 1905 ?"
    },
    answers: {
      en: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo"],
      fr: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galilée"]
    },
    explanation: {
      en: "Albert Einstein proposed the theory of special relativity in 1905. It introduced concepts such as the constancy of the speed of light and the relativity of simultaneity, fundamentally altering our understanding of space and time.",
      fr: "Albert Einstein a proposé la théorie de la relativité restreinte en 1905. Cette théorie introduit des concepts tels que la constance de la vitesse de la lumière et la relativité de la simultanéité, modifiant radicalement notre compréhension de l'espace et du temps."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "94f7cc38-8edc-419f-b5b8-dc667b1dea65",
    difficulty: 1,
    question: {
      en: "Which science studies living beings and their environment?",
      fr: "Comment appelle-t-on la science qui étudie les êtres vivants et leur environnement ?"
    },
    answers: {
      en: ["Biology", "Chemistry", "Physics", "Geology"],
      fr: ["La biologie", "La chimie", "La physique", "La géologie"]
    },
    explanation: {
      en: "Biology is the science that studies living organisms, their structure, function, growth, evolution, and interactions with their environment.",
      fr: "La biologie est la science qui étudie les êtres vivants, leur structure, leur fonctionnement, leur croissance, leur évolution et leurs interactions avec leur environnement."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "2c02b1be-e694-416d-a73c-8fbc74e456ea",
    difficulty: 2,
    question: {
      en: "Which organ is responsible for pumping blood in the human body?",
      fr: "Quel organe est responsable du pompage du sang dans le corps humain ?"
    },
    answers: {
      en: ["Heart", "Liver", "Kidneys", "Lungs"],
      fr: ["Le cœur", "Le foie", "Les reins", "Les poumons"]
    },
    explanation: {
      en: "The heart pumps blood throughout the body, delivering oxygen and nutrients to cells and removing waste products. It is a vital organ essential to circulation and life.",
      fr: "Le cœur pompe le sang à travers le corps, fournissant de l'oxygène et des nutriments aux cellules tout en éliminant les déchets. C'est un organe vital essentiel à la circulation et à la vie."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "beb4300b-39bf-4e05-866b-a47f745d6fd7",
    difficulty: 3,
    question: {
      en: "Which planet is closest to the Sun?",
      fr: "Quelle est la planète la plus proche du Soleil ?"
    },
    answers: {
      en: ["Mercury", "Venus", "Earth", "Mars"],
      fr: ["Mercure", "Vénus", "Terre", "Mars"]
    },
    explanation: {
      en: "Mercury is the planet closest to the Sun. Due to its proximity, it experiences extreme temperature variations and has a very thin atmosphere.",
      fr: "Mercure est la planète la plus proche du Soleil. En raison de sa proximité, elle subit d'importantes variations de température et possède une atmosphère très ténue."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "d7ddd71a-7267-4c66-b7cf-50eea517b5eb",
    difficulty: 6,
    question: {
      en: "What natural phenomenon occurs when meteoroids burn in the atmosphere?",
      fr: "Quel phénomène naturel correspond à la chute de météorites traversant l'atmosphère ?"
    },
    answers: {
      en: ["Shooting stars", "Auroras", "Eclipses", "Rainbows"],
      fr: ["Les étoiles filantes", "Les aurores", "Les éclipses", "Les arcs-en-ciel"]
    },
    explanation: {
      en: "Shooting stars (meteors) are produced when meteoroids enter the Earth's atmosphere and burn due to friction, creating a bright streak of light.",
      fr: "Les étoiles filantes (météores) se produisent lorsque des météoroïdes pénètrent dans l'atmosphère terrestre et brûlent sous l'effet de la friction, formant une traînée lumineuse."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "2bac0d18-a821-4e2e-9d07-fa787c06ab17",
    difficulty: 2,
    question: {
      en: "Which gas is most abundant in Earth's atmosphere?",
      fr: "Quel gaz est le plus abondant dans l'atmosphère terrestre ?"
    },
    answers: {
      en: ["Nitrogen", "Oxygen", "CO2", "Argon"],
      fr: ["L'azote", "L'oxygène", "Le dioxyde de carbone", "L'argon"]
    },
    explanation: {
      en: "Nitrogen makes up about 78% of the Earth's atmosphere, making it the most abundant gas. Oxygen is the second most abundant.",
      fr: "L'azote compose environ 78% de l'atmosphère terrestre, en faisant le gaz le plus abondant. L'oxygène est le deuxième gaz le plus abondant."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "9e4eaed6-84ae-4259-9ec4-49deeb4ffa63",
    difficulty: 4,
    question: {
      en: "What is a group of stars forming a pattern in the sky called?",
      fr: "Quel nom donne-t-on à un groupement d'étoiles formant une figure particulière dans le ciel ?"
    },
    answers: {
      en: ["Constellation", "Galaxy", "Nebula", "Globular cluster"],
      fr: ["Une constellation", "Une galaxie", "Une nébuleuse", "Un amas globulaire"]
    },
    explanation: {
      en: "A constellation is a group of stars forming a recognizable pattern as seen from Earth. Different cultures throughout history have named and interpreted these patterns.",
      fr: "Une constellation est un groupe d'étoiles formant un motif reconnaissable depuis la Terre. Différentes cultures au fil de l'histoire ont nommé et interprété ces motifs."
    },
    tags: [TagEnum.SCIENCE]
  },
  {
    id: "d19da6c3-43e0-46b0-83e1-b2a175be461f",
    difficulty: 3,
    question: {
      en: "Which revolution began in France in 1789?",
      fr: "Quelle révolution a commencé en 1789 en France ?"
    },
    answers: {
      en: ["French Revolution", "American Revolution", "Industrial Revolution", "Russian Revolution"],
      fr: ["La Révolution française", "La Révolution américaine", "La Révolution industrielle", "La Révolution russe"]
    },
    explanation: {
      en: "The French Revolution began in 1789, drastically transforming French society and influencing political thought and revolutions worldwide.",
      fr: "La Révolution française a débuté en 1789, transformant radicalement la société française et influençant la pensée politique ainsi que d'autres révolutions à travers le monde."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "5bc9820f-fb8a-4e15-9ee6-182ea49fef9c",
    difficulty: 5,
    question: {
      en: "Who was the first Roman Emperor?",
      fr: "Qui était le premier empereur romain ?"
    },
    answers: {
      en: ["Augustus", "Julius Caesar", "Nero", "Caligula"],
      fr: ["Auguste", "Jules César", "Néron", "Caligula"]
    },
    explanation: {
      en: "Augustus (Octavian) became the first Roman Emperor in 27 BC. His reign initiated the Roman Empire and the Pax Romana, a long period of relative peace and stability.",
      fr: "Auguste (Octavien) est devenu le premier empereur romain en 27 av. J.-C. Son règne a inauguré l'Empire romain et la Pax Romana, une longue période de paix et de stabilité relative."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "57091688-0e0f-45b5-9286-976ee2141af2",
    difficulty: 6,
    question: {
      en: "Which treaty ended WWI in 1919?",
      fr: "Quel traité signé en 1919 a mis fin à la Première Guerre mondiale ?"
    },
    answers: {
      en: ["Treaty of Versailles", "Brest-Litovsk", "Trianon", "Sevres"],
      fr: ["Le traité de Versailles", "Le traité de Brest-Litovsk", "Le traité de Trianon", "Le traité de Sèvres"]
    },
    explanation: {
      en: "The Treaty of Versailles, signed in 1919, ended World War I. It imposed harsh reparations on Germany and reshaped Europe’s political landscape.",
      fr: "Le traité de Versailles, signé en 1919, mit fin à la Première Guerre mondiale. Il imposa de lourdes réparations à l'Allemagne et redessina la carte politique de l'Europe."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "55b01c03-0c64-41d2-93f8-763e66de9012",
    difficulty: 4,
    question: {
      en: "Which Italian explorer 'discovered' America in 1492?",
      fr: "Quel explorateur italien est connu pour avoir 'découvert' l'Amérique en 1492 ?"
    },
    answers: {
      en: ["Christopher Columbus", "Vasco da Gama", "Magellan", "Amerigo Vespucci"],
      fr: ["Christophe Colomb", "Vasco de Gama", "Fernand de Magellan", "Amerigo Vespucci"]
    },
    explanation: {
      en: "Christopher Columbus, sailing for Spain, reached the Americas in 1492. Although indigenous peoples already inhabited the lands, his arrival marked a pivotal moment in world history.",
      fr: "Christophe Colomb, naviguant pour le compte de l'Espagne, atteignit l'Amérique en 1492. Bien que des peuples autochtones y vivaient déjà, son arrivée marqua un moment clé dans l'histoire mondiale."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "5cd2199a-3719-4585-ae33-4f154ed83dab",
    difficulty: 3,
    question: {
      en: "Which revolution led to the independence of the United States?",
      fr: "Quelle révolution a conduit à l'indépendance des États-Unis ?"
    },
    answers: {
      en: ["American War of Independence", "French Revolution", "Russian Revolution", "Wars of the Roses"],
      fr: ["La Guerre d'Indépendance américaine", "La Révolution française", "La Révolution russe", "La Guerre des Deux-Roses"]
    },
    explanation: {
      en: "The American War of Independence (1775–1783) freed the thirteen colonies from British rule and led to the founding of the United States.",
      fr: "La Guerre d'Indépendance américaine (1775–1783) a libéré les treize colonies de la tutelle britannique et conduit à la fondation des États-Unis."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "24845ffe-4a23-4c6a-81a2-73f50013b6f6",
    difficulty: 2,
    question: {
      en: "Which French military leader crowned himself emperor in 1804?",
      fr: "Qui était le chef militaire français couronné empereur en 1804 ?"
    },
    answers: {
      en: ["Napoleon Bonaparte", "Louis XIV", "Charlemagne", "Philip II"],
      fr: ["Napoléon Bonaparte", "Louis XIV", "Charlemagne", "Philippe II"]
    },
    explanation: {
      en: "Napoleon Bonaparte crowned himself Emperor of the French in 1804. He instituted numerous reforms and led a series of wars that reshaped Europe before his downfall.",
      fr: "Napoléon Bonaparte s'est couronné Empereur des Français en 1804. Il initia de nombreuses réformes et mena une série de guerres qui redessinèrent l'Europe avant sa chute."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "7789d85b-2a2b-43ed-9e00-41debcc52a01",
    difficulty: 4,
    question: {
      en: "Which wall, a symbol of the Cold War, fell in 1989?",
      fr: "Quel mur, symbole de la Guerre froide, est tombé en 1989 ?"
    },
    answers: {
      en: ["Berlin Wall", "Trench Wall", "Great Wall of China", "Wall of Federates"],
      fr: ["Le mur de Berlin", "Le mur de la Tranchée", "La Grande Muraille de Chine", "Le mur des Fédérés"]
    },
    explanation: {
      en: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War and paving the way for German reunification and major geopolitical changes in Europe.",
      fr: "Le mur de Berlin est tombé en 1989, symbolisant la fin de la Guerre froide et ouvrant la voie à la réunification allemande ainsi qu'à d'importants changements géopolitiques en Europe."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "41a7a41c-9455-46ed-bc72-81f649b663df",
    difficulty: 1,
    question: {
      en: "Which ancient civilization built the Giza pyramids?",
      fr: "Quelle civilisation ancienne a construit les pyramides de Gizeh ?"
    },
    answers: {
      en: ["Ancient Egypt", "Ancient Greece", "Mayas", "Romans"],
      fr: ["L'Égypte antique", "La Grèce antique", "Les Mayas", "Les Romains"]
    },
    explanation: {
      en: "The Giza pyramids were built by the ancient Egyptians around 2500 BC. They served as monumental tombs for pharaohs and are among the most iconic structures in human history.",
      fr: "Les pyramides de Gizeh ont été construites par les Égyptiens de l'Antiquité vers 2500 av. J.-C. Servant de tombes monumentales pour les pharaons, elles figurent parmi les constructions les plus emblématiques de l'histoire humaine."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "264eb2a8-9212-42e6-bea0-d15211a2eb52",
    difficulty: 5,
    question: {
      en: "Which pre-Columbian empire was centered in present-day Peru?",
      fr: "Quel empire précolombien était centré sur l'actuel Pérou ?"
    },
    answers: {
      en: ["Inca Empire", "Aztec Empire", "Maya Empire", "Toltec Empire"],
      fr: ["L'Empire inca", "L'Empire aztèque", "L'Empire maya", "L'Empire tolteque"]
    },
    explanation: {
      en: "The Inca Empire was centered in the Andes region of present-day Peru. Before Spanish conquest, it was the largest empire in pre-Columbian America, known for advanced engineering and agriculture.",
      fr: "L'Empire inca était centré dans la région des Andes, sur le territoire de l'actuel Pérou. Avant la conquête espagnole, c'était le plus grand empire de l'Amérique précolombienne, renommé pour son ingénierie et son agriculture avancées."
    },
    tags: [TagEnum.HISTORY]
  },
  {
    id: "ace2105a-a0e1-45bb-a3a2-daea7343f410",
    difficulty: 3,
    question: {
      en: "What happened on July 14, 1789, in France?",
      fr: "Quel événement historique s'est produit le 14 juillet 1789 en France ?"
    },
    answers: {
      en: ["Storming of the Bastille", "Tuileries take", "Tennis Court Oath", "Flight to Varennes"],
      fr: ["La prise de la Bastille", "La prise des Tuileries", "Le Serment du Jeu de Paume", "La fuite à Varennes"]
    },
    explanation: {
      en: "The Storming of the Bastille on July 14, 1789, marked a key moment of the French Revolution, symbolizing the end of absolute monarchy and the rise of the people's power.",
      fr: "La prise de la Bastille le 14 juillet 1789 fut un moment clé de la Révolution française, symbolisant la fin de la monarchie absolue et l'ascension du pouvoir populaire."
    },
    tags: [TagEnum.HISTORY]
  }
]

const p6: Question[] = [
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
    explanation: {
      en: "SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending emails. It ensures messages are properly routed from a mail client to the recipient’s mail server.",
      fr: "SMTP (Simple Mail Transfer Protocol) est le protocole standard pour l'envoi d'e-mails. Il garantit que les messages sont correctement transmis d'un client de messagerie au serveur de messagerie du destinataire."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Before Swift’s introduction, Objective-C was the main language for iOS development. Although Swift is now preferred, legacy projects and some libraries still use Objective-C.",
      fr: "Avant l'arrivée de Swift, Objective-C était le langage principal pour le développement iOS. Bien que Swift soit désormais privilégié, certains projets et bibliothèques reposent encore sur Objective-C."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "USB stands for Universal Serial Bus, a standard for connecting devices to computers, enabling data transfer and power supply with ease.",
      fr: "USB signifie Universal Serial Bus, une norme pour connecter des périphériques à des ordinateurs, facilitant le transfert de données et l'alimentation électrique."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Android Inc. developed the Android OS, and Google acquired it in 2005. The open-source platform now powers the majority of smartphones worldwide.",
      fr: "Android Inc. a développé le système d'exploitation Android, avant que Google ne le rachète en 2005. Cette plateforme open source équipe aujourd'hui la majorité des smartphones dans le monde."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "HTML (HyperText Markup Language) defines the structure and content of a webpage. Together with CSS and JavaScript, it forms the foundation of most websites.",
      fr: "HTML (HyperText Markup Language) définit la structure et le contenu d'une page Web. Associé au CSS et au JavaScript, il constitue la base de la plupart des sites Internet."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Microsoft is known for developing the Windows OS, one of the most widely used operating systems on personal computers.",
      fr: "Microsoft est connue pour avoir développé le système d'exploitation Windows, l'un des plus utilisés sur les ordinateurs personnels."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "CPU stands for Central Processing Unit, the core component of a computer that executes instructions and processes data.",
      fr: "CPU signifie Central Processing Unit, le composant central d'un ordinateur qui exécute les instructions et traite les données."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "Python is popular in data science and machine learning due to its extensive libraries (like NumPy, pandas, TensorFlow) and readable syntax.",
      fr: "Python est populaire en data science et machine learning grâce à ses nombreuses bibliothèques (NumPy, pandas, TensorFlow) et sa syntaxe claire."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "HTTPS (HTTP Secure) adds encryption (TLS/SSL) to the standard HTTP protocol, ensuring that data exchanged is private and protected.",
      fr: "HTTPS (HTTP Secure) ajoute un chiffrement (TLS/SSL) au protocole HTTP standard, garantissant que les données échangées sont privées et protégées."
    },
    tags: [TagEnum.TECHNOLOGY]
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
    explanation: {
      en: "RAM stands for Random Access Memory. It is a volatile form of computer memory that temporarily stores data for quick read and write access.",
      fr: "RAM signifie Random Access Memory. Il s'agit d'une mémoire volatile de l'ordinateur qui stocke temporairement les données, permettant un accès rapide en lecture et en écriture."
    },
    tags: [TagEnum.TECHNOLOGY]
  }
]

const p7: Question[] = [
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
    explanation: {
      en: "Each soccer team fields 11 players at once, including the goalkeeper. The game involves strategy, teamwork, and skill, making it the world’s most popular sport.",
      fr: "Chaque équipe de football aligne 11 joueurs sur le terrain, y compris le gardien de but. Le jeu implique stratégie, esprit d'équipe et habileté, ce qui en fait le sport le plus populaire au monde."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "A home run is used in baseball. It occurs when a batter hits the ball out of the field of play in fair territory, allowing them to round all bases and score.",
      fr: "Le terme 'home run' est utilisé au baseball. Il se produit lorsqu'un batteur frappe la balle hors du terrain en zone valable, lui permettant ainsi de parcourir toutes les bases et de marquer un point."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "Wimbledon, one of the four Grand Slam tennis tournaments, takes place in England, at the All England Club. It’s known for its grass courts and strict dress code.",
      fr: "Wimbledon, l'un des quatre tournois du Grand Chelem de tennis, se déroule en Angleterre, au All England Club. Il est réputé pour ses courts en gazon et son code vestimentaire strict."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "A touchdown in American football is worth 6 points. After scoring a touchdown, teams can attempt extra points (1 or 2) to increase their score.",
      fr: "Un touchdown au football américain vaut 6 points. Après avoir marqué un touchdown, les équipes peuvent tenter des points supplémentaires (1 ou 2) pour augmenter leur score."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "Badminton is played with a shuttlecock (or birdie) and rackets. Players hit the shuttlecock back and forth over a net, aiming to prevent it from touching the ground.",
      fr: "Le badminton se joue avec un volant (shuttlecock) et des raquettes. Les joueurs s'échangent le volant au-dessus d'un filet, cherchant à l'empêcher de toucher le sol."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "A three-point shot in basketball is worth 3 points. Shots taken inside the arc are worth 2 points, and free throws are worth 1 point.",
      fr: "Un tir à trois points au basket-ball vaut 3 points. Les tirs effectués à l'intérieur de la ligne valent 2 points et les lancers francs 1 point."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "Brazil has won the most FIFA World Cup titles, with a total of five. They are renowned for their skillful play and have produced many legendary footballers.",
      fr: "Le Brésil a remporté le plus de Coupes du Monde de football masculin, avec cinq titres. Renommé pour son jeu technique, il a produit de nombreux footballeurs légendaires."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "The Fosbury Flop is a high jump technique where the athlete arches their back and clears the bar head-first and back down. Invented by Dick Fosbury, it revolutionized the event.",
      fr: "Le Fosbury Flop est une technique de saut en hauteur où l'athlète arque son dos et franchit la barre tête la première, le dos tourné vers la barre. Inventée par Dick Fosbury, elle a révolutionné cette épreuve."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "In rugby union, a try is worth 5 points. After scoring a try, a conversion kick can add an additional 2 points.",
      fr: "Au rugby à XV, un essai vaut 5 points. Après avoir marqué un essai, une transformation peut ajouter 2 points supplémentaires."
    },
    tags: [TagEnum.SPORTS]
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
    explanation: {
      en: "The Masters is a major golf tournament held annually at Augusta National Golf Club in Georgia, USA. It is one of the four major championships in men's professional golf.",
      fr: "Le Masters est un tournoi majeur de golf qui se tient chaque année à l'Augusta National Golf Club, en Géorgie (États-Unis). Il fait partie des quatre tournois majeurs du golf professionnel masculin."
    },
    tags: [TagEnum.SPORTS]
  }
]

const p8: Question[] = [
  {
    id: "9ba43944-2bb5-4042-9ba7-884b1b1d8a0b",
    difficulty: 2,
    question: {
      en: "On 2024 Games Awards which game won the 'Most anticipated game' award?",
      fr: "Aux Game Awards 2024, quel jeu a remporté le prix du 'Jeu le plus attendu' ?"
    },
    answers: {
      en: ["Grand Theft Auto VI", "The Elder Scrolls VI", "Cyberpunk 2077", "Halo Infinite"],
      fr: ["Grand Theft Auto VI", "The Elder Scrolls VI", "Cyberpunk 2077", "Halo Infinite"]
    },
    explanation: {
      en: "Grand Theft Auto VI received the 'Most anticipated game' award at the 2024 Game Awards.",
      fr: "Grand Theft Auto VI a reçu le prix du 'Jeu le plus attendu' aux Game Awards 2024."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Nintendo introduced Mario in the 1980s, making him one of the most iconic video game characters.",
      fr: "Nintendo a introduit Mario dans les années 1980, en faisant l'un des personnages de jeu vidéo les plus emblématiques."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Link, the hero of the Zelda series, wields the Master Sword to fight evil.",
      fr: "Link, le héros de la série Zelda, manie l'Épée de Légende pour combattre le mal."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Sony launched the original PlayStation in 1994, revolutionizing home gaming.",
      fr: "Sony a lancé la PlayStation originale en 1994, révolutionnant le jeu vidéo à domicile."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "A wooden pickaxe requires wooden planks and sticks, basic materials available early in the game.",
      fr: "Une pioche en bois se fabrique avec des planches de bois et des bâtons, des matériaux de base disponibles dès le début du jeu."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "'Super Mario World' (1990, SNES) starred Mario, collecting coins and defeating Koopa Troopas.",
      fr: "'Super Mario World' (1990, SNES) mettait en vedette Mario, récoltant des pièces et vainquant des Koopa Troopas."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Mortal Kombat is famous for 'Finish Him!' prompting a finishing move at the end of a fight.",
      fr: "Mortal Kombat est célèbre pour le 'Finish Him!' incitant à effectuer un coup final à la fin d'un combat."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Master Chief, or John-117, is the main protagonist of the Halo series.",
      fr: "Le Major John-117, appelé Master Chief, est le protagoniste principal de la série Halo."
    },
    tags: [TagEnum.VIDEOGAMES]
  },
  {
    id: "b8d9dc38-0cd1-4fe7-92b9-54058f58912c",
    difficulty: 4,
    question: {
      en: "In 'Pokémon', which creature is the Electric-type mascot of the series?",
      fr: "Dans 'Pokémon', quelle créature est la mascotte de type Électrik de la série ?"
    },
    answers: {
      en: ["Pikachu", "Charmander", "Bulbasaur", "Eevee"],
      fr: ["Pikachu", "Salamèche", "Bulbizarre", "Évoli"]
    },
    explanation: {
      en: "Pikachu is the iconic Electric-type mascot of the Pokémon franchise.",
      fr: "Pikachu est la mascotte emblématique de type Électrik de la franchise Pokémon."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Square Enix (formerly Squaresoft) created 'Final Fantasy', a classic JRPG series.",
      fr: "Square Enix (anciennement Squaresoft) est à l'origine de 'Final Fantasy', une série de JRPG classique."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "The NES was the first Nintendo home console to see a global release.",
      fr: "La NES fut la première console de salon Nintendo à connaître un lancement mondial."
    },
    tags: [TagEnum.VIDEOGAMES]
  },
  {
    id: "1f7f7d07-5863-4f1e-a54a-1f9c36685dd4",
    difficulty: 3,
    question: {
      en: "Which racing game series features 'Blue Shells' and 'Rainbow Road'?",
      fr: "Quelle série de jeux de course présente des 'Carapaces bleues' et la 'Route Arc-en-ciel' ?"
    },
    answers: {
      en: ["Mario Kart", "Crash Team Racing", "F-Zero", "Gran Turismo"],
      fr: ["Mario Kart", "Crash Team Racing", "F-Zero", "Gran Turismo"]
    },
    explanation: {
      en: "Mario Kart is famous for its Blue Shell power-up and the challenging Rainbow Road track.",
      fr: "Mario Kart est célèbre pour sa Carapace bleue et son circuit difficile, la Route Arc-en-ciel."
    },
    tags: [TagEnum.VIDEOGAMES]
  },
  {
    id: "1e9caf33-67bc-4fb7-b297-5e43b5c4c155",
    difficulty: 8,
    question: {
      en: "Which game features a post-apocalyptic world with vault dwellers and the Brotherhood of Steel?",
      fr: "Quel jeu met en scène un monde post-apocalyptique avec des habitants d'abris et la Confrérie de l'Acier ?"
    },
    answers: {
      en: ["Fallout", "Metro 2033", "The Last of Us", "Wasteland"],
      fr: ["Fallout", "Metro 2033", "The Last of Us", "Wasteland"]
    },
    explanation: {
      en: "Fallout is set in a post-apocalyptic world featuring vault dwellers and the Brotherhood of Steel.",
      fr: "Fallout se déroule dans un monde post-apocalyptique mettant en scène des habitants d'abris (vault dwellers) et la Confrérie de l'Acier."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Namco created 'Pac-Man' in 1980, one of the most iconic arcade games.",
      fr: "Namco a créé 'Pac-Man' en 1980, l'un des jeux d'arcade les plus emblématiques."
    },
    tags: [TagEnum.VIDEOGAMES]
  },
  {
    id: "3799ee75-bcfa-45ab-9b9c-ec6897bb9626",
    difficulty: 7,
    question: {
      en: "In 'The Elder Scrolls V: Skyrim', what are the half-human, half-beast creatures called who transform under the full moon?",
      fr: "Dans 'The Elder Scrolls V: Skyrim', comment appelle-t-on les créatures mi-humaines mi-bêtes qui se transforment à la pleine lune ?"
    },
    answers: {
      en: ["Werewolves", "Vampires", "Gargoyles", "Spriggans"],
      fr: ["Les loups-garous", "Les vampires", "Les gargouilles", "Les spriggans"]
    },
    explanation: {
      en: "Werewolves in Skyrim are humans cursed to transform into a wolf-like creature under the full moon.",
      fr: "Les loups-garous dans Skyrim sont des humains maudits se transformant en créature lupine à la pleine lune."
    },
    tags: [TagEnum.VIDEOGAMES]
  },
  {
    id: "f6f20ac4-2235-46a9-8ce6-97c84dfb8755",
    difficulty: 6,
    question: {
      en: "Which Valve game involves solving puzzles with a portal gun?",
      fr: "Quel jeu de Valve consiste à résoudre des énigmes à l'aide d'un pistolet à portails ?"
    },
    answers: {
      en: ["Portal", "Half-Life", "Team Fortress 2", "Left 4 Dead"],
      fr: ["Portal", "Half-Life", "Team Fortress 2", "Left 4 Dead"]
    },
    explanation: {
      en: "'Portal' challenges players to solve physics-based puzzles by creating portals to navigate environments.",
      fr: "'Portal' met les joueurs au défi de résoudre des énigmes basées sur la physique en créant des portails pour se déplacer dans l'environnement."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Lara Croft is the iconic British archaeologist starring as the protagonist of Tomb Raider.",
      fr: "Lara Croft est l'archéologue britannique iconique protagoniste de Tomb Raider."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "Tom Nook is the raccoon who oversees home loans and expansions in Animal Crossing.",
      fr: "Tom Nook est le raton laveur qui gère les prêts immobiliers et les agrandissements de maisons dans Animal Crossing."
    },
    tags: [TagEnum.VIDEOGAMES]
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
    explanation: {
      en: "'Five Nights at Freddy’s' involves surviving nights in a pizzeria filled with haunted animatronics.",
      fr: "'Five Nights at Freddy’s' consiste à survivre plusieurs nuits dans une pizzeria peuplée d'animatroniques hantées."
    },
    tags: [TagEnum.VIDEOGAMES]
  }
]

export const questions: Question[] = [
  ...p1,
  ...p2,
  ...p3,
  ...p4,
  ...p5,
  ...p6,
  ...p7,
  ...p8
]