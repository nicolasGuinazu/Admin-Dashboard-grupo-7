import "./App.css";
import Container from "./components/AdminTools/Container";
import Header from "./components/UI/Header";
import { Route } from "react-router-dom";
import Sidebar from "./components/UI/Sidebar";
import { useState, useEffect } from "react";
import Menu from "./components/UI/Menu";
import Genres from "./components/AdminTools/Genres";
import Last from "./components/AdminTools/Last";
import book from "../src/components/AdminTools/imagen.jpg";
import user from "./user.png";
function App() {
  const [clicked, setclicked] = useState(false);
  const [genres, setGenres] = useState(false);
  const [productsInfo, setProductsInfo] = useState("");
  const [genresInfo, setGenresInfo] = useState("");
  const [genreCount, setGenreCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [lastProduct, setLastProduct] = useState('');
  const [lastProductImage, setLastProductImage] = useState('');
  const [lastUser, setLastUser] = useState('');
  const [lastUserImage, setLastUserImage] = useState('');
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setLastProduct(data.data.products[data.data.products.length-1].name)
        setLastProductImage(data.data.products[data.data.products.length-1].image)
        setProductsInfo(data.meta.count);
        setGenresInfo(data.meta.countByGenre);
        setGenreCount(
          data.meta.countByGenre.length
        );
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(()=>{
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersCount(data.meta.count);
        setLastUser(data.data.usersApi[data.data.usersApi.length-1].name)
        setLastUserImage(data.data.usersApi[data.data.usersApi.length-1].avatar)
      })
      .catch((err) => console.log(err));
  }, []);

  const clickHanlder = () => {
    setclicked(!clicked);
  };
  const closeSideBarHandler = () => {
    setclicked(false);
  };
  const showGenres = () => {
    setGenres(!genres);
  };

  return (
    <>
      <Header clicked={clickHanlder} />
      <Sidebar show={clicked} hide={closeSideBarHandler} />
      <div className="main" onClick={closeSideBarHandler}>
        <Route path="/products-pannel" exact>
          <Container />
        </Route>
        <Route path="/" exact>
          <Menu clicked={showGenres} info={productsInfo} genre={genreCount} user={usersCount}/>
          {genres && <Genres genreInfo={genresInfo} />}
          {!genres && (
            <div className="last">
              <Last
                image={book}
                key={1}
                title={"product"}
                data={[{ title: lastProduct,image:lastProductImage }]}
              />
              <Last
                image={user}
                key={2}
                title={"user"}
                data={[{ title: lastUser,image:lastUserImage }]}
              />
            </div>
          )}
        </Route>
      </div>
    </>
  );
}

export default App;
