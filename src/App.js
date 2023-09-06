import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Header from "./Header";
import Nav from "./Nav";
import postsList from "./PostsList";

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import About from "./About";
import Missing from "./Missing";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Podetail from "./Podetail";
import Footer from "./Footer";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  const postsList = [];
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(postsList);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [filters, setFilters] = useState([]);
  const baseURL = "http://localhost:3500/postsList";
  // console.log(postsList, "ma");

  const handleDelete = async (id) => {
    try {
      const postList = posts.filter((e) => e.id !== id);
      setPosts(postList);
      navigate("/");
      const response=await axios.delete(`${baseURL}/${id}`)
      console.log(response)
    } catch (error) {
      console.log(error.message)
      
    }
  
  };

  useEffect(() => {
    const filterResult = posts.filter(
      (posts) =>
        posts.title.toLowerCase().includes(search.toLowerCase()) ||
        posts.body.toLowerCase().includes(search.toLowerCase())
    );
    setFilters(filterResult.reverse());
  }, [posts, search]);

  useEffect(() => {
    const axiosFetch = async () => {
      try {
        const response = await axios.get(baseURL);
        // console.log(response)
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosFetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMM,dd,yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    // console.log(datetime)

    const fullPost = [...posts, newPost];
    console.log(fullPost);

    localStorage.setItem("posts", JSON.stringify(fullPost));
    setPosts(fullPost);
    console.log(posts, "dd");
    try {
      const response = await axios.post(baseURL, newPost);

      console.log(response, "post");
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="app">
      <Header head="Om sai ram" />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home posts={filters} />} />
        <Route path="/post">
          <Route
            index
            element={
              <Post
                postTitle={postTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                setPostTitle={setPostTitle}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path=":id"
            element={<Podetail posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="/about/:id" element={<About />} /> //path about/ entha path
        ahh irunthalum about component la route agum
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
