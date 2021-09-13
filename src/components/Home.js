import React, { Component } from 'react';
import axios from 'axios';
//import posts from '../../models/posts';


export default class Home extends Component {
    constructor(props){
      super(props);
    
      this.state={
        posts:[]
      };
    }  
    
    componentDidMount(){
      this.retrieveposts();
    }
    
    retrieveposts(){
      axios.get("http://localhost:8000/posts").then(res =>{
        if(res.data.success){
          this.setState({
            posts:res.data.existingposts
          });
          
          console.log(this.state.posts);
        }
      });
    }
    
    
    onDelete = (id) =>{

      axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) =>{
        alert("Delete Successfully");
        this.retrieveposts();
      })
    }


    
    render(){
        return(
           
            <div><br/>
             
                  <center><h4 className="container" style={{backgroundColor:"#212121" , color:"white", padding:"10px" , position:"fixed"}}>Customer Transaction History</h4></center><br/><br/>
                    <br/>
                   <table class ="table" className="container" style={{position:"fixed"}}>
                   <thead>
                     <tr>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>#</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Customer_ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Customer_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Item_ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Transaction_Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}><center>Actions</center></th><br/>
                     </tr>
                     </thead> 
                        <tbody>
                            {this.state.posts.map((posts,index) =>(
    
                              <tr>
                                <th scope="row">{index+1}</th>
                                <td>{posts.Customer_ID}</td>
                                <td>{posts.Customer_name}</td>
                                <td>{posts.Item_ID}</td>
                                <td>{posts.Price}</td>
                                <td>{posts.Transaction_Date}</td>
    
                                <td> 

                                <a className="btn btn-secondary" href="/fav/save">
                                    <i className="fas fa-edit"></i> &nbsp; Favorite +
                                    </a>
    
                                    &nbsp;
    
    
                                    <a className="btn btn-warning" href="#!">
                                    <i className="fas fa-edit"></i> &nbsp; Re-Order
                                    </a>
    
                                    &nbsp;
    
                                    
                                    <a className="btn btn-danger" href="#!" onClick={() =>this.onDelete(posts._id)}>
                                    <i className="far fa-trash-alt"></i> &nbsp; Delete
                                    </a>
    
                                </td>
                                    
                                </tr>
                            ))}
    
                          </tbody>
                          <br/>

                          <button className = "btn btn-dark" style={{position:"fixed"}} ><a href="/search" style={{textDecoration:'none',color:'white',}}><i className="fas fa-chevron-circle-right"></i> &nbsp; Search customer</a></button>

                        </table>  
                        <br/>
                        <br/>
                        <br/>
                        <br/>


                      
                        
                </div>
                
                
        )
      }
    }