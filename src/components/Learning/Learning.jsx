export default function Learning({ selectedTable, back }) {
  const elements = selectedTable.map(({ id, task, correctAnswer }) => (
    <li key={id}>
      <span>{task}=</span>
      <span>{correctAnswer}</span>
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
      <button onClick={back}>Назад</button>
    </div>
  );
}
