import './LoginSignup.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  return (
      <div className='box'>
        <div className="buffer"></div>
        <p className='paras'>Already a user? <Link to="/login"><span className='textdecor'><strong>Click Here</strong></span></Link> to Login.</p>
        <p className='paras'>New to TradeTreasure? <Link to="/signup"><span className='textdecor'><strong>Click Here</strong></span></Link> to Register.</p>
      </div>
  );
}

export default LoginSignup;
