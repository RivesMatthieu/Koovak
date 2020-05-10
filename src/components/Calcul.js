import React,{ Component } from 'react';
import Item from './items'

class Calcul extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: '',
          items: {}
        };
        this.addItem = this.addItem.bind(this);
      }


      itemSubmit = (evt, item) => {
        console.log('ok')
        // this.setState({result: (parseInt(this.state.accuracy) + parseInt(this.state.kill))/100})
      } 

      addItem() {
        const id = Date.now().toString();
        const items = {...this.state.items}
        items[id] = {
          id: id, 
          minute: 1,
          accuracy: '',
          kill: '',
          result: accuracy + kill
        };
        this.setState({items})
      }

      handleItemChange = (evt, item, field) => {
        // const value = evt.currentTarget.value;
        const clonedItem = {...item};
        clonedItem[field] = evt.currentTarget.value;
        const clonedItems = {...this.state.items};
        clonedItems[clonedItem.id] = clonedItem;
        this.setState({ items: clonedItems });
      }

      render() {
        return (
            <form>
              <input type="button" onClick={this.addItem} value="Add a row" />
              {Object.keys(this.state.items).map((item, index) => (
                <Item 
                key={index} 
                  item={this.state.items[item]}
                  onItemChange={this.handleItemChange}
                />
              ))}
            </form>
        );
      }
    }

export default Calcul; 