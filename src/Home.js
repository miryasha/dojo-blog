import { useState } from "react";

const Home = () => {

    const [name, setName] = useState("sdfsdf");
    const [age, setAge] = useState(25)
    const handleClick = () => {
        setName("Behnam")
        setAge(444)
    }

    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}is { age } old</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
     );
}
 
export default Home;