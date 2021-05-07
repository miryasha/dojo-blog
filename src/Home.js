import { useState } from "react";
import Bloglist from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "ebsite", body: "loremidf", author:"yasha", id:1},
        {title: "Party", body: "loremidf", author:"Ben", id:2},
        {title: "karty", body: "loremidf", author:"Men", id:3},
        {title: "louty", body: "loremidf", author:"Finn", id:4}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) =>  blog.id !== id);
        setBlogs(newBlogs)
    }

       
    return ( 
        <div className="home">
          <Bloglist blogsyasha={blogs}  handleDelete={handleDelete} />
       </div>
     );
}
 
export default Home;