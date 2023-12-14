import './Home.css';
import DummyCard from './DummyCard'; 

const Home = () => {
    return (
        <div className='main'>
            <div className="buffer"></div>
            <DummyCard/>
            <DummyCard/>
            <DummyCard/>
        </div>
    );
}
 
export default Home;