import { useEffect, useState } from "react";
import { PostContextProvider } from "./Context/PostContextProvider";

import Button from "./components/Button";
import Section from "./pages/Section";
import Header from "./components/Header";
import Main from "./pages/Main";
import Result from "./components/Result";
import SearchPost from "./components/SearchPost";
import FormPost from "./components/FormPost";
import Footer from "./pages/Footer";
import Post from "./components/Post";
import Archive from "./components/Archieve";
import Test from "./TestComponents/Test";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode");
  }, [darkMode]);

  return (
    <Section>
      <Button
        type="btn-dark-mode"
        label={darkMode ? "🌙" : "☀️"}
        clickFunction={() => setDarkMode((data) => !data)}
      />
      <PostContextProvider>
        <Header>
          <Result />
          <SearchPost />
        </Header>
        <Main>
          <FormPost />
          <Post />
        </Main>
        <Archive />
      </PostContextProvider>
      <Footer />
    </Section>
  );
}

export default App;
