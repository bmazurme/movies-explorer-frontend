import NavTab from "../Main/NavTab/NavTab";

function Header() {
  return(
  <>
    <div className="logo"></div>
    <NavTab/>
    <a className="" href="/movies">Фильмы</a>
    <a className="" href="/saved-movies">Сохранённые фильмы</a>
    <a className="" href="/profile">Аккаунт</a>
  </>
  );
}

export default Header;