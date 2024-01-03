import usePost from "../hook/usePost";

export default function SearchPost() {
  const { postField, setPostField } = usePost();
  return (
    <>
      <input
        type="text"
        value={postField.search}
        placeholder="search for post..."
        onChange={(e) =>
          setPostField((data) => ({ ...data, search: e.target.value }))
        }
      />
    </>
  );
}
