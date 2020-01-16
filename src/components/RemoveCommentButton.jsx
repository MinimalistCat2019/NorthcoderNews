import React from 'react'

function RemoveCommentButton(props) {
    const handleRemove = () => {
        props.removeComment(props.comment_id)
    }
    return (
        <button onClick={handleRemove}>
            Remove Comment
        </button>
    )
}

export default RemoveCommentButton


