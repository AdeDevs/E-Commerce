import '../styles/services.css'
import home from '../assets/house.webp'
import funiture from '../assets/furnitures.webp'
import office from '../assets/office.webp'
import bedroom from '../assets/bedroom.webp'

function ServicesScreen() {
  return (
    <div className='services'>
      <section className='main'>
        <h1>Our Services</h1>
        <p>There are many variations of passages of Lorem Ipsum</p>
      </section>
      <section className='options'>
        <div>
            <img src={funiture} alt="icon of a furniture"/>
            <h1>furnitures</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the</p>
            <ReadMore/>
        </div>
        <div>
            <img src={office} alt="icon of a office"/>
            <h1>office</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the</p>
            <ReadMore/>
        </div>
        <div>
            <img src={home} alt="icon of a home"/>
            <h1>home</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the</p>
            <ReadMore/>
        </div>
        <div>
            <img src={bedroom} alt="icon of a bedroom"/>
            <h1>bedroom</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the</p>
            <ReadMore/>
        </div>
      </section>
    </div>
  );
}

<style>
@import 
</style>

export function ReadMore() {
    return <button className='read-btn'>Read More</button>
}

export default ServicesScreen;
