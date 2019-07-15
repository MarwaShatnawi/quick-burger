import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectMenuItem } from '../actions/menuActions';
import './add-item.css';

class AddItem extends Component {
    state = {
        itemDesc: null,
        itemPrice: null,
        done: false
    }

    postItem(e){
        e.preventDefault();
    //     let data={
    //         itemDesc: this.state.itemDesc,
    //         itemPrice: this.state.itemPrice,
    //        };
    //     if(this.state.itemDesc && this.state.itemPrice){
    //         axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu',data)
    //     .then(response=>{
    //     console.log(response) 
    //     this.setState({
    //         done: true
    //     })
    //    })
        if(this.state.itemDesc && this.state.itemPrice){
            let menu = this.props.menu;
            let newItem = {
                itemId: menu.length + 1,
                itemDesc: this.state.itemDesc,
                itemPrice: this.state.itemPrice
            }
            menu.push(newItem);
            this.props.selectMenuItem(menu);
            this.setState({
                done: true
            })
        }
    }
    
  inputChange(e){
    let value = e.target.value
    let name = e.target.name
    this.setState({
        [name]: value
    })
  }
  addNewItem(){
      this.setState({
        itemDesc: null,
        itemPrice: null,
        done: false
      })
  }
  render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 add-item">
                    {this.state.done ? (
                        <div>
                            <h2>Success!</h2>
                            <p>Thanks,</p>
                            <button className="btn btn-success btn-block" 
                            onClick={this.addNewItem.bind(this)}>Add Item</button>
                        </div>
                    ) : (
                        <form onSubmit={this.postItem.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="item-name">Item Name</label>
                                <input 
                                    name="itemDesc"
                                    defaultValue={this.state.itemDesc} 
                                    type="text" 
                                    className="form-control" 
                                    id="item-name" 
                                    placeholder="eg. Burger"
                                    onChange={this.inputChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-price">Item Price</label>
                                <input 
                                    name="itemPrice" 
                                    defaultValue={this.state.itemPrice} 
                                    type="number" 
                                    className="form-control" 
                                    id="item-price"
                                    placeholder="eg. 10" 
                                    onChange={this.inputChange.bind(this)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Add Item</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
  }

}

const mapPropsToState = (state) => {
    return {
      menu: state.menu
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      selectMenuItem: (item) => {
        dispatch(selectMenuItem(item))
      }
    }
  }
  
  export default connect(mapPropsToState, mapDispatchToProps)(AddItem);


