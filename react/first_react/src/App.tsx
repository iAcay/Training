import { useState } from "react";
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const [listGroupVisible, setListGroupVisibility] = useState(false)
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        { alertVisible && <Alert onClose={() => setAlertVisibility(false)}><span>Hello World</span></Alert> }
      </div>
      <div>
        { listGroupVisible && <ListGroup items={items} heading="Cities" onSelectItem={(item) => console.log(item) }/>}
      </div>
      <div>
        <Button color='primary' onClick={() => setAlertVisibility(true)}>Hello Alert</Button>
        <Button color='secondary' onClick={() => setListGroupVisibility(true)}>Show List Group</Button>
        <Button color='danger' onClick={() => setListGroupVisibility(false)}>Show List Group</Button>
      </div>
    </>
  )
}

export default App;
