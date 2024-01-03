import { useState, memo } from "react";
import { faker } from "@faker-js/faker";
import usePost from "../hook/usePost";

import Button from "./Button";
import styles from "./Archieve.module.css";

function createRandomArcieve() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const Archive = memo(function ArchiveMemo() {
  const { addPost, archieveOption } = usePost();
  const [archievePost] = useState(() =>
    Array.from({ length: 15000 }, () => createRandomArcieve())
  );

  const [showArchieve, setShowArchieve] = useState(archieveOption.showArchieve);
  return (
    <>
      <aside className={styles.archieve}>
        <h2>{archieveOption.title}</h2>
        <Button
          label="Archieve Post"
          clickFunction={() => setShowArchieve((data) => !data)}
        />
        {showArchieve && (
          <ArchiveList archievePost={archievePost} addPost={addPost} />
        )}
      </aside>
    </>
  );
});

const ArchiveList = memo(function ArchieveList({ archievePost, addPost }) {
  return (
    <>
      <ul>
        {archievePost.map((data, i) => (
          <ArchiveItem data={data} key={i} addPost={addPost} />
        ))}
      </ul>
    </>
  );
});

const ArchiveItem = memo(function ArchieveItem({ data, addPost }) {
  const { title, body } = data;

  return (
    <>
      <li>
        <p>
          <strong>{title}: </strong> {body}
        </p>
        <Button label="Return in Post" clickFunction={() => addPost(data)} />
      </li>
    </>
  );
});

export default Archive;
