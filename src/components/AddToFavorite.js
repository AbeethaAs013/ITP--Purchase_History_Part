import React, {Component} from "react";
import axios from 'axios';
//import favorites from "../../../models/favorites";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class AddToFavorite extends Component {

        constructor(props){
          super(props);
        
          this.state={
            favorites:[]
          };
        }  
        
        componentDidMount(){
          this.retrievefavorites();
        }
        
        retrievefavorites(){
          axios.get("http://localhost:8000/favorites").then(res =>{
            if(res.data.success){
              this.setState({
                favorites:res.data.existingfavorites
              });
              
              console.log(this.state.favorites);
            }
          });
        }
        




        onDelete = (id) =>{

          axios.delete(`http://localhost:8000/favorite/delete/${id}`).then((res) =>{
            toast.success('Delete Successfully',{position:toast.POSITION.TOP_CENTER});
            this.retrievefavorites();
          })
        }




        filterData(favorites,searchKey){

          const result = favorites.filter((favorites) =>
          favorites.Item_ID.toLowerCase().includes(searchKey) ||
          favorites.Item_name.toLowerCase().includes(searchKey) ||
          favorites.Customer_name.toLowerCase().includes(searchKey)
          )
  
          this.setState({favorites:result})
      }
  
  
      handleSearchArea = (e) =>{
  
          const searchKey = e.currentTarget.value;
  
          axios.get("http://localhost:8000/favorites").then(res =>{
          if(res.data.success){
  
            this.filterData(res.data.existingfavorites,searchKey)  
            
          }  
        });
  
      }







           render(){
            return (
            <div><br/><br/>
            <center><h4 style= {{backgroundColor:"#212121" , color:"white", padding:"10px"}}>Customer Favorite Item List</h4></center>


            <div className="col-lg-3 mt-2 mb-1" className="container">
                            <input
                            className="form-control"
                            type="search"
                            placeholder="Search Item"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                            </input>
                        </div>


                <br/>
                   <table class ="table table-hover">
                   <thead>
                     <tr>
                       <th scope = "col">#</th>
                       
                       <th scope = "col">Item_ID</th>&nbsp;&nbsp;
                       <th scope = "col">Item_name</th>&nbsp;&nbsp;
                       <th scope = "col">Customer_name</th>&nbsp;&nbsp;
                       <th scope = "col">&nbsp;Action</th>
                       
                     </tr>
                     </thead> 
                        <tbody>
                            {this.state.favorites.map((favorites,index) =>(
    
                              <tr>
                                <th scope="row">{index+1}</th>
                                
                                <th>{favorites.Item_ID}</th>&nbsp;&nbsp;
                                <th>{favorites.Item_name}</th>&nbsp;&nbsp;
                                <th>{favorites.Customer_name}</th>&nbsp;&nbsp;

<td>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a className="btn btn-light" href="#!">
                                    <i className="fa fa-cart-plus"></i> &nbsp; Add To Cart
                                    </a>

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;





                                    <a className="btn btn-success" href="#!" onClick={() =>this.onDelete(favorites._id)}>
                                    <i className="fa fa-remove"></i> &nbsp; Remove from List
                                    </a>

                                    </td>
                                
                              </tr>
                            ))}
    
                          </tbody>
                        </table>  

                    </div>
        )
    }

}    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*constructor(props){
        super(props);  

        this.state={
            post:{}
        };
    }
      


    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/add/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
            }
        });
    }






    render(){

        const {Customer_ID,Customer_name,Item_ID,Price,Transaction_Date} = this.state.post;


        return(

            <div style={{marginTop:'20px'}}>
                <h4>{Customer_ID}</h4>
                <hr/>

                <dl className="row">
                    <dt className="col-sm-3">Customer_name</dt>
                    <dd className="col-sm-9">{Customer_name}</dd>

                    <dt className="col-sm-3">Item_ID</dt>
                    <dd className="col-sm-9">{Item_ID}</dd>

                    <dt className="col-sm-3">Price</dt>
                    <dd className="col-sm-9">{Price}</dd>

                    <dt className="col-sm-3">Transaction_Date</dt>
                    <dd className="col-sm-9">{Transaction_Date}</dd>


                    </dl>
                <p> Favorite Item List </p>

                
            </div>
        )
    }
}*/