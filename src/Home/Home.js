import React,{Component} from 'react';

import Menu from '../Menu/Menu';
import Bill from '../Bill/Bill';
import axios from 'axios';
import  './home.css';
class Home extends Component {
  
  state={
    menu:[],
    bill:[],
    total: 0,
    done:false
  }
  componentDidMount(){
    axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
    .then(response=>{
      const {data}= response;
      this.setState({menu:this.reduceData(data)})
         });
  }


  reduceData(list){
 
console.log(list)
    return list;
  }
  Post=()=>{
    console.log(this.state.bill)
    let data=null;
    this.state.bill.map(item=>{
        data={
        orderUserName: "marwashatnawi",
        orderItemId: item.itemId,
        orderPrice:  item.itemPrice,
       }
      })
    axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post',data)
    .then(response=>{
    console.log(response) 
    this.setState({
      done: true
    })
   })

  }

addItem=(id)=>{
  let menu = this.state.menu;
  let bill = this.state.bill;
  let total = this.state.total;
  let index = menu.indexOf(id);
  bill.push(menu[index]);
  total = total + menu[index].itemPrice;
  menu.splice(index, 1);

 this.setState({
   menu: menu,
   total: total,
   bill: bill
  })
}

render(){
  

    return(
    <div  className="container">
      {this.state.done ? (
        <div className="done">
          <h2>Success!</h2>
          <p>Thanks,</p>
        </div>
      ) : (
        <div className="row">
      <div className="col-md-8">
      {this.state.menu.map((post, i)=>{
        return <Menu 
        key={i}
        id={post.itemId}
        type={post.itemDesc}
        price={post.itemPrice}
        delEvent={this.addItem.bind(this,post)}
        />
      })}

      </div>

      <div className="col-sm-12 col-md-4 bill-items">
      <h2 className="bill-style">Bill</h2>
      <ul className="bill-list">
      {this.state.bill.length > 0 && this.state.bill.map((item,i)=>{
        return <Bill
        key={i}
        id={item.itemId}
        type={item.itemDesc}
        price={item.itemPrice}
        />
        })}
        {this.state.bill.length === 0 &&
        <li>No item selected</li>
        }
        </ul>
        <div className="clearfix">
          <button className="pull-right btn btn-success" 
          onClick={this.Post.bind(this)} 
          disabled={this.state.bill.length ===0}>Checkout</button>
          <h3 className="pull-left">Total: {this.state.total} JOD</h3>
        </div>
        </div>
        </div>
      )}
      
    </div>

      );
}

}
export default Home;