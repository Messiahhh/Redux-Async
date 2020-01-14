import React from 'react'

const Posts = ({posts}) => {
    return (
        <ul >
            {posts && posts.map((post, index) => {
                return <li key={index}>{post.title}</li>
            })}
        </ul>
    )
}
export default Posts
