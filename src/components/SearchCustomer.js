import React, {Component} from "react";
import axios from 'axios';

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
  
    
    filterData(posts,searchKey){

        const result = posts.filter((posts) =>
        posts.Customer_ID.toLowerCase().includes(searchKey) ||
        posts.Customer_name.toLowerCase().includes(searchKey) ||
        posts.Item_ID.toLowerCase().includes(searchKey) ||
        posts.Price.toLowerCase().includes(searchKey) ||
        posts.Transaction_Date.toLowerCase().includes(searchKey)
        )

        this.setState({posts:result})
    }


    handleSearchArea = (e) =>{

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8000/posts").then(res =>{
        if(res.data.success){

          this.filterData(res.data.existingposts,searchKey)  
          
        }  
      });

    }
      
    
    render(){
        return(
            
            <div className="container"><br/>
            <hr/>
                  <center><h4 style= {{backgroundColor:"#212121" , color:"white", padding:"10px"}}>Search Specific Customer</h4></center>
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                        
                        </div>
                        <div className="col-lg-3 mt-2 mb-2" className="container">
                            <input
                            className="form-control"
                            type="search"
                            placeholder="Search Specific Customer"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                            </input>
                        </div>
                </div>


                   <table className ="table table-hover" style={{marginTop:'40px',}}>
                   <thead>
                     <tr>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>#</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Customer_ID</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Customer_name</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Item_ID</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Price</th>
                       <th scope = "col" style={{backgroundColor:"#607d8b" , color:"white" , padding:"5px"}}>Transaction_Date</th>
                       
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

                               
    
    
                                </td>
                                    
                                </tr>
                            ))}
    
                          </tbody>
                        </table>  

                        <button className = "btn btn-info"><a href="/search" style={{textDecoration:'none',color:'white'}}><i className="far fa-file-alt"></i> &nbsp; Generate Report</a></button>


                        </div>
                        
        )
      }
    }