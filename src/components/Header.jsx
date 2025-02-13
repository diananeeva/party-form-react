import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#"><i className="fa-solid fa-ellipsis"></i></a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Beach</a></li>
          <li><a href="#">Summer</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
