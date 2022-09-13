import { useState } from "react";

const Home = () => {

  const [name, setName] = useState('Pavle');
  const [age, setAge] = useState(32);

  const handleClick = () => {
   setName('Danica')
   setAge(24);
  }

  return ( 
    <div className='home'>
      <h1>Homepage</h1>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
   );
}
 
export default Home;