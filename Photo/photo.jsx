import {useEffect, useState} from 'react';
import axios from 'axios';

function App(){
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios.get('https://images.unsplash.com/example.jpg?ixid=123123123')
    .then((res) => {
      setPics(res.small);
    })
  },[])

return (
  <div>
    <h2>Photo App!</h2>
    {pics.map((pics, key) => {
      console.log(pics);
      return (
        <img src={}/>
      )
    })}
    </div>
);

}

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
