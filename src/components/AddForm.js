import React from 'react';

export default function AddForm({newText, addText}) {
    return (
        <form className="form" onSubmit={addText}>
            <textarea className="text" name="text" onChange={newText}></textarea>
            <button className="button" type="submit">Add Note</button>
        </form>
    )
}