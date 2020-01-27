import React from 'react'

function RemoveCommentButton(props) {
    const handleRemove = () => {
        props.removeComment(props.comment_id)
    }
    return (
        <div>
            <button onClick={handleRemove} className="small-remove-comment-button">
                Remove Comment
            </button>
            <button onClick={handleRemove} className="remove-comment-button">
                Remove Comment
            </button>
        </div>
    )
}

export default RemoveCommentButton


