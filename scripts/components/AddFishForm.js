import React from 'react';

var AddFishForm = React.createClass({
  createFish: function (event) {
    event.preventDefault();
    // Take the dats from the form and create an object
    var fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value
    }
    // Add the fish to the App State 
    this.props.addFish(fish);
    this.refs.fishForm.reset();
  },

  render: function () {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish} >
        <input type="text" ref="name" placeholder="Fish Name" />
        <input type="text" ref="price" placeholder="Fish Price" />
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="Url to image" />
        <button type="submit">+ Add item</button>
      </form>
    )
  }
});

export default AddFishForm;


