import { useNavigate } from 'react-router-dom'
import riya from '../img/riya.png'
import mridul from '../img/mridul.png'
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="HomePage">
      <div className="container">
        <div className="homePage">
        <div className="homePageDetails">
      <h3 className='home-title'>Grow Your Business With Us</h3>
        <p className='home-des'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sequi voluptatum tempore laborum numquam at ipsa excepturi cumque quos esse.</p>
        <button onClick={()=>{navigate('/contact')}} className='homeContactBtn'>Contact Us</button>
      </div>

      <div className="homePageImg">
        <div className="image-f">
          <div className="img first">
            <img src={mridul} alt="" className='overflow'/>
          </div>
        </div>
        <div className="image-s">
          <div className="img second">
            <img src={riya} alt="" />
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
