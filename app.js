// TODO
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceries={['Beer', 'Pizza']}/>
  </div>
);

var GroceryListLItem = (props) => (
  <li>{props.el}</li>
)

function GroceryList(props) {
  return (
    <ul>
      {props.groceries.map((el)=> (
        <GroceryListLItem el = {el}/>
      ))}
    </ul>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));