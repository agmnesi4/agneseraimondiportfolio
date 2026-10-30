/* I TUOI PROGETTI
   Per aggiungerne uno: copia un blocco { ... }, cambia i testi e i nomi delle immagini.
   "slug" = nome breve nell'indirizzo (solo minuscole e trattini).
   Le immagini vanno nella cartella images/project/ */
const PROJECTS = [
  {
    slug: "project-one",
    title: "Project One",
    year: "2026",
    focus: ["Biomaterials", "Regenerative design", "Installation"],
    location: "City, Country",
    description: [
      "Write the first paragraph about this project here: the idea, the material and the question behind it.",
      "Write the second paragraph here: how the work developed, what you learned and where it was shown."
    ],
    preview: 3, // quante immagini mostrare come anteprima nella home (le prime della lista)
    images: ["images/project/project-one-1.jpg", "images/project/project-one-2.jpg", "images/project/project-one-3.jpg", "images/project/project-one-4.jpg"]
  },
  {
    slug: "project-two",
    title: "Project Two",
    year: "2025",
    focus: ["Bio-art", "Workshop"],
    location: "City, Country",
    description: [
      "First paragraph of the second project.",
      "Second paragraph of the second project."
    ],
    images: ["images/project/project-two-1.jpg", "images/project/project-two-2.jpg"]
  },
  {
    slug: "project-three",
    title: "Project Three",
    year: "2024",
    focus: ["Collaboration", "Material research"],
    location: "City, Country",
    description: [
      "First paragraph of the third project.",
      "Second paragraph of the third project."
    ],
    images: ["images/project/project-three-1.jpg", "images/project/project-three-2.jpg"]
  }
];
