import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "componentes/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  const postsFiltrado = posts.filter(
    (post) => post.id !== Number(parametros.id)
  );

  const embaralhado = postsFiltrado.sort(() => Math.random() - 0.5);
  const postsRecomendacao = embaralhado.slice(0, 4);

  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.jpg`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
                <h3>Outros posts que você pode gostar:</h3>
              </div>
              <div className="posts-recomendacao">
                {postsRecomendacao.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
