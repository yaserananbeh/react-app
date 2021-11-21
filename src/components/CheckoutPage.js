import React, { Component } from "react";
import Item from "./Item";
import "../style/checkoutPage.scss";

export class CheckoutPage extends Component {
  constructor() {
    super();
    this.state = {
      numOfItems: 0,
      data: [
        {
          id: 0,
          itemName: "itemName1",
          imageLink:
            "https://gts.jo/image/cache/catalog/products/phone/huawei/Huawei-Y9a-550x400.png",
          Quentity: 1,
        },
        {
          id: 1,
          itemName: "itemName2",
          imageLink:
            "https://gts.jo/image/cache/catalog/products/phone/huawei/Huawei-Y9a-550x400.png",
          Quentity: 1,
        },
        {
          id: 2,
          itemName: "itemName3",
          imageLink:
            "https://gts.jo/image/cache/catalog/products/phone/huawei/Huawei-Y9a-550x400.png",
          Quentity: 1,
        },
        {
          id: 3,
          itemName: "itemName3",
          imageLink:
            "https://gts.jo/image/cache/catalog/products/phone/huawei/Huawei-Y9a-550x400.png",
          Quentity: 1,
        },
      ],
    };
  }
  componentDidMount(){
      this.handleNumOfItems()
  }
  handleNumOfItems=()=>{
      let counter=0;
      this.state.data.forEach(data=>{
          counter+=data.Quentity;
          this.setState({
            numOfItems:counter
          })
          
      })
  }
  handleIncrease=(id)=>{
      let [...rest]=this.state.data;
      rest[id].Quentity+=1;
      this.setState({data:rest})
      this.handleNumOfItems();
  }


  
  handleDecrease=(id)=>{
      let [...rest]=this.state.data;
      if(rest[id].Quentity>0){
          rest[id].Quentity-=1;
          this.setState({data:rest})
      this.handleNumOfItems();
      }

  }
  render() {
    return (
      <div className="itemsWrapper">
        {this.state.data.map((item, index) => {
          return <Item key={item.itemName + index} itemData={item} increaseFunc={this.handleIncrease} decreaseFunc={this.handleDecrease} />;
        })}
        <h1>You have {this.state.numOfItems} items in your cart</h1>
        {/* <button onClick={()=>{this.handleDecrease(this.state.data[0].id)}}>-</button>
        <button onClick={()=>{this.handleIncrease(this.state.data[0].id)}}>+</button> */}
      </div>
    );
  }
}

export default CheckoutPage;
