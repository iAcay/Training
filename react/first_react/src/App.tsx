import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  return (
    <>
      <div>
        <ListGroup items={items} heading="Cities" onSelectItem={(item) => console.log(item) }/>
      </div>
      <div>
        <Alert>
          <span>Hello World</span>
        </Alert>
      </div>
    </>
  )
}

export default App;
