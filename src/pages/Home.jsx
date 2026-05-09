import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search,setSearch]  =useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.slice(0,20));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="p-6">Loading posts...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }

  const filteredPosts =posts.filter((post)=>

post.title.toLowerCase().includes(search.toLowerCase()))
  
return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">
        Social Feed
      </h1>
      <input type="text"
      placeholder="Search..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="border px-4 py-2 mb-6 w-full rounded"

      />
        <div className="grid md:grid-cols-2 gap-4">
            {filteredPosts.map((post)=>(
                <PostCard 
                key={post.id}
                 post={post}/>
            
            ))}
        </div>
      
        
       
      
   
  
</div>
)


}