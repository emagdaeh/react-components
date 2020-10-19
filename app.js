// TODO
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceries={['Beer', 'Pizza']}/>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      // if (this.state.hover) {
      //   style = {textDecoration: 'bold'}
      // }
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>{this.props.groceries}</li>
    );
  };
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map((groceries)=> (
      <GroceryListItem groceries = {groceries}/>
    ))}
  </ul>
);

ReactDOM.render(<App />, document.getElementById("app"));