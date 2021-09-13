import React, {Component} from "react";
import axios from "axios";

export default class EditPost extends Component {

    constructor(props){
        super(props);
            this.state={
                Item_ID:"",
                Customer_name:"",
                Item_name:""
            }
        }

        handleInputChange = (e) =>{
            const {name,value} = e.target;

            this.setState({
                ...this.state,
                [name]:value
            })
        }

        onSubmit = (e) =>{

        e.preventDefault();

        const {Item_ID,Item_name,Customer_name} = this.state;

        const data ={
            Item_ID:Item_ID,
            Customer_name:Customer_name,
            Item_name:Item_name
        }
                console.log(data)


        axios.post('http://localhost:8000/favorites/save',data).then((res) =>{

            if(res.data.success){
                alert("Successfully Added");
                this.setState(
                    {
                    Item_ID:"",
                    Customer_name:"",
                    Item_name:""
                    }    
                )
            }
        }).catch (error => {
            alert(error.message);

        });

    }



    render(){ 
        return ( 
                           
                <div className="col-md-8 mt-4 mx-auto"><br/><br/>
                    <h1 className="h3 mb-3 font-weight-normal"><center><h4 style= {{backgroundColor:"#212121" , color:"white", padding:"10px"}}>Add Item For Favorite</h4></center></h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom:"15px"}}>
                            <label style={{marginBottom:"5px"}}>Item_ID</label>
                            <input type="text"
                            className="form-control"
                            name="Item_ID"
                            placeholder="Enter Item_ID"
                            value={this.state.Item_ID}
                            onChange={this.handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:"15px"}}>
                            <label style={{marginBottom:"5px"}}>Item_name</label>
                            <input type="text"
                            className="form-control"
                            name="Item_name"
                            placeholder="Enter Item_name"
                            value={this.state.Item_name}
                            onChange={this.handleInputChange}/>
                            </div>


                        <div className="form-group" style={{marginBottom:"15px"}}>
                            <label style={{marginBottom:"5px"}}>Customer_name</label>
                            <input type="text"
                            className="form-control"
                            name="Customer_name"
                            placeholder="Enter Customer_name"
                            value={this.state.Customer_name}
                            onChange={this.handleInputChange}/>





                            </div>

                            <button className="btn btn-success" type="submit" style={{marginTop:"15px"}} onClick={this.onSubmit}>
                                <i className="far fa-check-squre"></i>
                                &nbsp; Add
                            </button>

                    </form>
                </div>
            
        )
    }
}