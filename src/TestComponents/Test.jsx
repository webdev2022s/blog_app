import { useState } from "react";
import Button from "../components/Button";
import styles from "../components/Post.module.css";

const data = Array.from({ length: 20 }, (_, i) => `${i + 1} + Word `);

function SlowRender() {
  const [test, setTest] = useState(data);

  function deleteMe(id) {
    setTest((dataList) => dataList.filter((oldData) => oldData !== id));
  }

  return (
    <>
      <ul className={styles.post}>
        {test.map((data, i) => (
          <ListItem data={data} key={i} deleteMe={deleteMe} />
        ))}
      </ul>
    </>
  );
}

function ListItem({ data, deleteMe }) {
  return (
    <li onClick={() => deleteMe(data)}>
      <p>{data}</p>
    </li>
  );
}

function Counter({ children }) {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ marginTop: "2rem" }}>
      <Button
        label={`set counter :  ${counter}`}
        clickFunction={() => setCounter((data) => data + 1)}
      />
      <div>{children}</div>
    </div>
  );
}

export default function Test() {
  return (
    <>
      <Counter>
        <SlowRender />
      </Counter>
    </>
  );
}
