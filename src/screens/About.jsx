import bed from "../assets/bed.webp";
import '../styles/about.css'
import { ReadMore } from "./Services";

function AboutScreen() {
  return (
    <div className="about">
      <section>
        <div className="brb">
          <h1>about us</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believableThere are many variations of passages of Lorem Ipsum
            available, but the majority have able
          </p>
          <ReadMore/>
        </div>
        <div>
          <img src={bed} alt="" />
        </div>
      </section>
    </div>
  );
}

export default AboutScreen;
