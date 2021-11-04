import styles from "../styles/Home.module.css";

const Destructing = () => {
  const dict = {
    duck: "dick",
    dog: "wuff",
    mouse: "squeak",
    hamster: "squeak",
  };
  const res = Object.entries(dict);

  console.log(
    "res==>",
    res.filter(([, i]) => i === "squeak").map(([key]) => key)
  );
  return (
    <div className={styles.card}>
      <div>
        <h2>Destructing</h2>
      </div>

      {res.map((i) => (
        <div className={styles.code} key={i}>
          ключ: {i[0]} значение:{i[1]}
        </div>
      ))}
    </div>
  );
};

export default Destructing;
