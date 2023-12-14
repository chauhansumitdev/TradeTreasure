import './DummyCard.css'; 
import { IoChatboxEllipsesOutline } from "react-icons/io5";


const DummyCard = () => {
    return (
        <div className="product-card">
            <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww" alt="Product" className="product-image" />
            <div className="product-info">
                <h2 className="product-title">Laptop</h2>
                <p className="product-description">Affordable and reliable second-hand laptop with decent performance for everyday tasks and productivity on a budget.</p>
                <p className="product-price">Rs35,000</p>
                <div>
                <button className="product-button">Add to Cart</button>
                <button className="product-button resale"><strong>Chat  <IoChatboxEllipsesOutline />
</strong></button>
                </div>
            </div>
        </div>
    );
};

export default DummyCard;
