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

function noteSort({ notesList, sorts, completed }) {
  const sortDates = notesList.sort((a, b) => {
    const firstDate = new Date(a.createdAt).getTime();
    const secondDate = new Date(b.createdAt).getTime();
    if (sorts === "earliest") {
      return firstDate - secondDate;
    } else if (sorts === "latest") {
      return secondDate - firstDate;
    }
  });
  const completeds = notesList.filter((e) => {
    if (completed === "completed") {
      return e.completed;
    } else if (completed === "uncompleted") {
      return !e.completed;
    } else {
      return e.completed + !e.completed;
    }
  });

  const noteTitle = notesList.filter((t) => {
    return t.title.trim().includes(" ");
  });

  return [sortDates, completeds, noteTitle];
}
console.log(
  noteSort({ notesList: notesList, sorts: "earliest", completed: "completed" })
);
