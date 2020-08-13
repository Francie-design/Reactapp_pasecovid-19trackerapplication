import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo1 from '../img/blk.jpg'
import logo2 from '../img/img.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../img/img1.jpg'
import Slider2 from '../img/img4.jpg'
import Slider3 from '../img/blk1.jpg'




class Sidebar extends Component {
    render(){
        return( 

        <div className="col-md-4" >
        <div   className="card text-center m-2 ">
      <div  className="card-body"><h4><button className="btn btn-danger">Health Tips</button></h4><img classname="" src={logo1} alt="good"width="100%" height="200px"></img>
      <img src={logo2}></img></div>
      </div>
       <div  className="card text-center m-2  ">
      <div className="card-body"><h4><button class="btn btn-danger">News Update</button></h4>  
      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider1}
      alt="First slide"/>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider2}
      alt="Third slide"/>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider3}
      alt="Third slide"/>
  </Carousel.Item>
</Carousel>
        <p>Covid-19 on the low</p>
      </div>
   </div>
  </div>
      
        )
    }
    
}
export default Sidebar