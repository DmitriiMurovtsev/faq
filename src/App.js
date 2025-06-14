import { TopLine } from "./components/TopLine/TopLine";
import { TopMenu } from "./components/TopMenu/TopMenu";
import { LeftMenu } from "./components/LeftMenu/LeftMenu";
import { CenterContent } from "./components/CenterContent/CenterContent";
import { searchForArticle } from "./api/apiArticle"; 
import { useState } from "react";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";


function App() {

  const [article, setArticle] = useState(null);               // статья

  const [searchLoading, setSearchLoading] = useState(false);  // лоадер поиска

  const [textSearch, setTextSearch] = useState('');           // текст поискового запроса
  const [textError, setTextError] = useState('');             // ошибка при поиске
  const [searchResult, setSearchResult] = useState([]);       // массив статей в поисковой выборке  

  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const admin = getCookie("a") == 'True' ? true : false;
  // const admin = true;

  // Получаем значение куки по имени
  function getCookie(name) {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.split("=")[0] == name) {
              return cookie.split("=")[1];
          };
      };
      return null;
  };

  // поиск по тексту или темам статей
   function searchArticles() {
    setTextError('');

    if (!textSearch) {
        setArticle(null);
        setSearchResult([]);
        return;
    };

    setSearchLoading(true);
    searchForArticle(textSearch).then(response => {
      setSearchLoading(false);
      setSearchResult(response.data);
      response.data.length == 0 && setTextError('Поиск не дал результатов')
    });
  };  

  return (
    <div className="container-faq-content">
      
      <div className="topMenu">
        <TopMenu
          setTextSearch={setTextSearch}
          searchArticles={searchArticles}
          textError={textError}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          setOpenMenuMobile={setOpenMenuMobile}
        />
      </div>

      <TopLine />
      
      {
        openMenuMobile &&
        <div className="mobileMenu">
          <MobileMenu
            admin={admin}
            setArticle={setArticle}
            searchArticles={searchArticles}
            setTextSearch={setTextSearch}
            textError={textError}
            article={article}
            setOpenMenu={setOpenMenuMobile}
          />
      </div>
      }

      <div className="container-faq-content__content">

        <LeftMenu
          admin={admin}
          setArticle={setArticle}
          searchArticles={searchArticles}
          setTextSearch={setTextSearch}
          textError={textError}
          article={article}
        />

        <CenterContent
          admin={admin}
          article={article}
          setArticle={setArticle}
          searchResult={searchResult}
          textSearch={textSearch}
          setSearchResult={setSearchResult}
          searchLoading={searchLoading}
        />

        {/* {
          article && 
          <TagList article={article} admin={admin} />
        } */}

      </div>

    </div>
  );
}

export default App;
