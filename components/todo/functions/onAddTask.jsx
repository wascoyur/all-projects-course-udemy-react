export function onAddTask(tasks, setTasks) {
  return (task, importance) => {
    const ids = tasks
      .map((t) => t.id)
      .reduce((acc, n) => {
        return n > acc ? n : acc;
      });
    const nextId = Math.max(ids) + 1;
    const neTask = {
      id: nextId,
      name: task,
      important: Number(importance),
      status: "active",
    };
    setTasks((tasks) => [...tasks, { ...neTask }]);
    console.log("max id==>", task, "task:", task);
  };
}
