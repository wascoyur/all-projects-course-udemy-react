export function onChangeImportance(tasks, setTasks) {
  return (id, newImportance) => {
    const newArray = tasks.map((t) => {
      if (t.id === id) t.important = newImportance;
      return t;
    });
    // console.log(id, newImportance, newArray);
    setTasks(newArray);
  };
}
