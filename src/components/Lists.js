const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

export default function Lists() {
  return list.map((l) => (
    <ul key={l.objectID}>
      <li>{l.title}</li>
      <li>{l.url}</li>
      <li>{l.author}</li>
      <li>{l.num_comments}</li>
      <li>{l.points}</li>
      <li>{l.objectID}</li>
    </ul>
  ));
}
