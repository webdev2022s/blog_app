import usePost from "../hook/usePost";
import styles from "./Post.module.css";

function Post() {
  const { post, deletePost } = usePost();
  return (
    <ul className={styles.post}>
      {post.map((data, i) => (
        <ListPost post={data} key={i} deletePost={deletePost} />
      ))}
    </ul>
  );
}

export default Post;

function ListPost({ post }) {
  const { deletePost } = usePost();
  const { title, body, id } = post;

  return (
    <>
      <li onClick={() => deletePost(id)}>
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    </>
  );
}
