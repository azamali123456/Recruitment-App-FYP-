import '../style/advertise.css'
import SubAdvertise from './subAdvertise'
function Advertise({type}) {
    return (
        <div className="container-fluid    px-5 mt-1">
            {type === 'top' ?    <div className='row'>
                <div className='col-sm-8 first-advertise'>
                    <h5 className='text-uppercase first-advertise-text'>All The Part You Need</h5>
                    <h5 className='text-uppercase first-advertise-name'>FATMAX J7CX</h5>
                    <h5 className='text-uppercase first-advertise-discription'>Jump Starter</h5>
                    <span className='d-flex'>
                        <h5 className='text-uppercase first-advertise-off-no'>50%</h5>
                        <small className=' first-advertise-off-text' >Off</small>
                    </span>
                    <button className='btn first-advertise-btn'>Shop Now</button>
                </div>
                <div className='col-sm-4  '><div className='col-12  m-1 '><SubAdvertise/></div><div className='col-12  m-1 '><SubAdvertise/></div></div>
            </div> :  <div className='row'>
           {[1,2,3].map((obj,index)=> <div className='col-sm-4'><SubAdvertise/></div>)} 

            </div>}
         

           

        </div>
    );
}

export default Advertise;
