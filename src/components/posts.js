import React from 'react'

const Posts = ({posts}) => {
    return (
        <ul>
            {posts.map((post, index) => {
                console.log(post);
                return <li key={index}>{post.title}</li>
            })}
        </ul>
    )
}
export default Posts
