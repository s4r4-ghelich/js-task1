const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];
// function nodeSort(notesList, cb) {
//   return notesList.sort((a, b) => {
//     const firstDate = new Date(a.createdAt).getTime();
//     const secondDate = new Date(b.createdAt).getTime();
//     return cb(firstDate, secondDate);
//   });
// }

// function increasly(firstDate, secondDate) {
//   return firstDate - secondDate;
// }

// function decreasly(firstDate, secondDate) {
//   return secondDate - firstDate;
// }
// console.log(nodeSort(notesList, decreasly));
// console.log(nodeSort(notesList, increasly));
