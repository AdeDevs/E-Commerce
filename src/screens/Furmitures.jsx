import '../styles/furniture.css'
import kitchen from '../assets/kitchen.webp'
import faucet from '../assets/faucet.webp'
import search from '../assets/search.png'

function FurnituresScreen() {
    return (
        <div className='whatwesell'>
            <section>
                <h1>our furnitures</h1>
                <p>There are many variations of passages of Lorem Ipsum</p>
            </section>
            <section className='more-info'>
                <div>
                    <div className='box1'>
                        <div className='center'>
                        <span className='search-icon'><img src={search} alt="a search icon" /></span>
                        </div>
                    </div>
                    <h1>TEMPOR INCIDIDUNT UT LABORE ET DOLORE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                </div>
                <div>                    
                    <div className='box2'>
                    <div className='center'>
                        <span className='search-icon'><img src={search} alt="a search icon" /></span>
                        </div>
                    </div>
                    <h1>TEMPOR INCIDIDUNT UT LABORE ET DOLORE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p></div>
            </section>
        </div>
    )
}

export default FurnituresScreen;