import usePost from "../hook/usePost";

export default function Result() {
  const { post } = usePost();
  return (
    <p>
      <em>
        <strong>{post.length} </strong>
      </em>
      Blog Posts Found!
    </p>
  );
}
