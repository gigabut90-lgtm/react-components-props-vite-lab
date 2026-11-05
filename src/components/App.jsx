import React from "react";
import blogData from "../data/blog";
import About from './About.jsx';
import Header from './Header.jsx';
import ArticleList from './ArticleList/ArticleList.jsx'

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image}
      about={blogData.about} />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
