import "../styles/home.css";

function HomeScreen() {
  return (
    <div className="container">
      <header>
      <div className="top">
        <h1>VINTAGEFUR</h1>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">services</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">shop</a></li>
          <li><a href="#">contact</a></li>
        </ul>
        <h2><a href="#">LOGIN</a></h2>
      </div>
      <div className="furniture">
        <h1>FURNITURE</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>


      <button className="ctc-btn"><a href="#">contact us</a></button>
      </div>
      </header>
    </div>
  );
}

export default HomeScreen;
