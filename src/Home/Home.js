import React,{Component} from 'react';

import Menu from '../Menu/Menu';
import Bill from '../Bill/Bill';
import axios from 'axios';
import  './home.css';
import { connect } from 'react-redux';
import { billAddItem } from '../actions/billActions';
import { selectMenuItem } from '../actions/menuActions';
import { total } from '../actions/totalActions';
class Home extends Component {
  
  state={
    done:false
  }

  componentDidMount(){
    axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
    .then(response=>{
      const {data} = response;
      //this.setState({menu:data})
    });
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
    let menu = this.props.menu;
    let bill = this.props.bill;
    let total = this.props.total;
    let index = menu.indexOf(id);
    bill.push(menu[index]);
    total = total + menu[index].itemPrice;
    menu.splice(index, 1);
  
    this.props.billAddItem(bill);
    this.props.selectMenuItem(menu);
    this.props.setTotal(total);
    /*
    this.setState({
      menu: menu
    })
    */
  }
  


  render(){
    console.log(this.props.menu)
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
              {this.props.menu.map((post, i)=>{
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
                {this.props.bill.length > 0 && this.props.bill.map((item,i)=>{
                  return <Bill
                    key={i}
                    id={item.itemId}
                    type={item.itemDesc}
                    price={item.itemPrice}
                  />
                })}
                {this.props.bill.length === 0 &&
                  <li>No item selected</li>
                }
              </ul>
              <div className="clearfix">
                <button className="pull-right btn btn-success" 
                onClick={this.Post.bind(this)} 
                disabled={this.props.bill.length ===0}>Checkout</button>
                <h3 className="pull-left">Total: {this.props.total} JOD</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

}

const mapPropsToState = (state) => {
  debugger;
  return {
    bill: state.bill,
    total: state.total,
    menu: state.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    billAddItem: (item) => {
      dispatch(billAddItem(item))
    },
    selectMenuItem: (item) => {
      dispatch(selectMenuItem(item))
    },
    setTotal: (num) =>{
      dispatch(total(num))
    }
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(Home);


