import { useState } from "react"
export default function PostCard({post}){
const [liked,setLiked]=useState(false)  
    return(
        <div className="bg-white   p-4 rounded shadow hover:shadow-md transition">
            <h2 
            className="font-semibold text-lg mb-2 text-green-600"
            >{post.title}
            </h2>

            <p className="text-gray-600">
                {post.body}
            </p>
            <button
            onClick={()=>setLiked(!liked)}
            className={`px-3 py-1 rounded ${
                liked
                ?"text-white"
                :"bg-gray-200"
            }`}
            >
                {liked ? "❤️ Liked" : "🤍 Like"}
            </button>


        </div>
    )
}