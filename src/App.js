import { Button, Input } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [foundRecord, setFoundRecord] = useState();

  useEffect(() => {
    axios.get('https://api.coinpaprika.com/v1/tickers').then((res) => {
      setData(res.data);
    });
  }, []);
  const handleSubmit = () => {
    axios.post(
      `https://www.toptal.com/developers/postbin/1677762682421-4454333710018?value=${value}`,
      null
    );
    setFoundRecord(data.find((item) => item.id === value));
  };
  return (
    <div className="App">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={handleSubmit}>Submit</Button>
      <div>{foundRecord ? foundRecord.name : 'error'}</div>
    </div>
  );
}

export default App;
