import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Narayanganj" special="division"></District>
      <District name="Narshindi" special="Thana"></District>
      <District></District>

    </div>
  );
}

function LoadPosts() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h2>Posts:{posts.length} </h2>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post(props) {
  return (
    <div style={{ backgroundColor: 'lightgray', margin: '20px', border: '4px' }}>
      <h2>Title:{props.title} </h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'pink',
  margin: '20px',
  padding: '20px',
  borderRadius: '20px'
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  )
}
export default App;
