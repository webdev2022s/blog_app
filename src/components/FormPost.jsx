import { useState } from "react";
import usePost from "../hook/usePost";

import Button from "./Button";
import styles from "./FormPost.module.css";
export default function FormPost() {
  const { addPost } = usePost();
  const [formValue, setFormValue] = useState({ title: "", body: "" });

  const HandleForm = (e) => {
    e.preventDefault();
    if (!formValue.body || !formValue.title) return;
    addPost(formValue);
    setFormValue({ title: "", body: "" });
  };
  return (
    <form className={styles.form} onSubmit={HandleForm}>
      <input
        type="text"
        placeholder="Title . . ."
        className={styles.title}
        value={formValue.title}
        onChange={(e) =>
          setFormValue((data) => ({ ...data, title: e.target.value }))
        }
      />
      <textarea
        type="summary"
        className={styles.summary}
        placeholder="Description . . . "
        value={formValue.body}
        onChange={(e) =>
          setFormValue((data) => ({ ...data, body: e.target.value }))
        }
      />
      <Button label="Add Post" />
    </form>
  );
}
