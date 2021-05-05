const Bloglist = (props) => {

    const blogs = props.blogsyasha
    return ( 
        <div className="blog-list">
             {blogs.map((blog) => (
               <div className="blog-preview" key={blogs.id}>
               <h2>{blog.title}</h2>
               <p>Written by { blog.author }</p>
               </div>
               
               ))} 
        </div>
     );
}
 
export default Bloglist;