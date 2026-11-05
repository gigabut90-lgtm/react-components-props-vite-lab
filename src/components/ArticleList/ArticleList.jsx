import ArticleList from "../components/ArticleList/ArticleList";
function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => {
                return (
                    <Article key={post.id}
                        title={post.title}
                        date={post.date}
                        preview={post.preview} />
                );
            })}
        </main>
    );  
}
export default ArticleList