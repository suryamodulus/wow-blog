import React from "react"
import db from "../../data/db.json"

export default function Home() {
  return (
    <div>
        <h1>Blogs Posts</h1>
        <ul>
          {db.posts.map((post, index) => {
            const slug = post.title.toLowerCase().replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
            return <li key={slug}><a href={"/blog/"+slug}>{post.title}</a></li>
          })}
        </ul>
    </div>
  )
}
