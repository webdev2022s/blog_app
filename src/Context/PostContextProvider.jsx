import { createContext, useState, useMemo, memo, useCallback } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
    id: crypto.randomUUID(),
  };
}

const postRandom = Array.from({ length: 50 }, () => createRandomPost());

/** CREATE CONTEXT */
const PostContext = createContext();

const PostContextProvider = memo(function PostContextProviders({ children }) {
  const [postField, setPostField] = useState({ search: "" });
  const [randomPost, setRandomPost] = useState(() => postRandom);

  const archieveOption = useMemo(() => {
    return {
      showArchieve: false,
      title: `Post Archive ${randomPost.length} `,
    };
  }, [randomPost.length]);

  const addPost = useCallback(function addPost(post) {
    setRandomPost((oldData) => [
      { ...post, id: crypto.randomUUID() },
      ...oldData,
    ]);
  }, []);

  const deletePost = (id) =>
    setRandomPost((data) => data.filter((oldData) => oldData.id !== id));

  function clear() {
    if (randomPost.length) {
      const confirm = window.confirm("Youre About to clear the Post");
      if (confirm) setRandomPost([]);
    }
  }

  const searchPost =
    randomPost.length > 0
      ? randomPost.filter((data) =>
          `${data.title} ${data.body}`
            .toLowerCase()
            .includes(postField.search.toLowerCase())
        )
      : randomPost;

  const value = useMemo(() => {
    return {
      clear,
      deletePost,
      addPost,
      post: searchPost,
      postField,
      setPostField,
      archieveOption,
    };
  }, [postField, addPost, searchPost]);

  return (
    /** INPUT A VALUE ON THE CONTEXT */
    <PostContext.Provider value={value}>{children}</PostContext.Provider>
  );
});

export { PostContextProvider, PostContext };
