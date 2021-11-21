import React, { Component } from 'react'
import '../style/item.scss'


export class Item extends Component {
    constructor(props){
        super(props)
        this.state={
            itemData:this.props.itemData
        }
    }
    render() {
        let itemData=this.state.itemData;
        return (
            <div className="itemContainer">
                <h3>{itemData.itemName}</h3>
                <div className="quantityController">
                <button onClick={()=>{this.props.decreaseFunc(itemData.id)}}>-</button>
                <h3>{itemData.Quentity}</h3>
                <button onClick={()=>{this.props.increaseFunc(itemData.id)}}>+</button>
                </div>
                <img src={itemData.imageLink} alt={itemData.itemName+" image"}/>
            </div>
        )
    }
}

export default Item
