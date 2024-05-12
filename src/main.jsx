import './App.css';
import Navbar from './component/navbar';
import Advertise from '../src/component/advertise'
import Qualities from './component/qualities';
import Category from './component/category'
import Product from './component/product';


function Main() {
  return (
    <div className="App">
     <Navbar/>
     <Advertise type="top"/>
     <Qualities/>
     <Category/>
     <Product title='Featured Product' discription='Check out our collection of top Featured Products that encourage conversion'/>
     <Advertise type="bottom"/>
     <Product title='New Product' discription='Check out our collection of top New Products that encourage conversion'/>  
    </div>
  );
}

export default Main;
