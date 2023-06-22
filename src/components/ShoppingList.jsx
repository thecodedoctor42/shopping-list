import React from "react";

export default function ShoppingList(props){
    
    const listItemsHtml = getListItemsHtml()
    
    function getListItemsHtml() {
        const items = props.itemsArray
        return items.map((item, index) => 
            <div key={item.id} id={item.id} className="list-item" {...props.handleLongPress}>
                <div id={item.id} className="item-info">
                    <span id={item.id}>{item.amount}</span>
                    <span id={item.id}>x</span>
                    <label id={item.id} className="item-info-label" htmlFor={`item${index}`}>{item.name}</label>
                </div>
                <input 
                    className="item-cb" 
                    type="checkbox" 
                    id={item.id}
                    name="isChecked" 
                    checked={item.isChecked}
                    onChange={props.handleChange}
                ></input>
            </div>
        )
    }
    
    return (
        <form className="shopping-list">
            <h2 className="list-title">Shopping list:</h2>
            {listItemsHtml}
        </form>
    )
}