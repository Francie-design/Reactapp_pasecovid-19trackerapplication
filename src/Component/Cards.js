import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Style.css'



class Cards extends Component {
    render(){
        return(    
       
          <div className="row">
          <div class="col-md-3 mb-2">
                <div class="card" >
                    <div class="card-body">
                      <h5 class="card-title">Total Cases
                        <svg class="bi bi-caret-up-fill" width="2em" height="1.5em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                                          </svg></h5>
                      <h3 class="card-subtitle mb-2 text-muted">1,500,200</h3>
                          
                    </div>
                  </div>
                </div>

                
          <div class="col-md-3 mb-2">
            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Recovered<svg class="bi bi-caret-down-fill" width="2em" height="1.5em" viewBox="0 0 16 16" fill="green" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg></h5>
                  <h3 class="card-subtitle mb-2 text-muted">1,500,200</h3>
                       
                </div>
              </div>
            </div>
            

            <div class="col-md-3 mb-2">
            <div class="card" >
                <div class="card-body">
                  <h5 class="card-title">Active Cases<svg class="bi bi-caret-up-fill" width="2em" height="1.5em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                                      </svg></h5>
                  <h3 class="card-subtitle mb-2 text-muted">1,500,200</h3>
                       
                </div>
              </div>
            </div>

            <div class="col-md-3 mb-2">
                <div class="card" >
                    <div class="card-body">
                      <h5 class="card-title">Total Death
                        <svg class="bi bi-caret-up-fill" width="2em" height="1.5em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                                          </svg></h5>
                      <h3 class="card-subtitle mb-2 text-muted">1,500,200</h3>
                           
                    </div>
                  </div>
                </div>




            </div>
          
           
         
           
            
           
        
        )
    }
    
}
export default Cards