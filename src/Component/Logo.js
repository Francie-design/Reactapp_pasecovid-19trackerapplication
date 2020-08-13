import React, {Component} from 'react'
import logo1 from '../img/logoo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

class Logo extends Component {
    render(){

        return( 
            <div className="container">
                <div className="row">'
                <div className="col-lg-12 mb-3">
                <img className="image" src={logo1} alt="good" width="350"></img>
               </div>
            </div>
        </div>
        )
    }
    
}
export default Logo