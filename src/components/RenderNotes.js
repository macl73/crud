import React from 'react';

export default function RenderNotes({data, onDelete}) {
    return (
        <div className="notes">
            {data.map((note, index) => <div key={index} className={note.id}>
                <button type="submit" className="button button-delete" onClick={onDelete}>Del Note</button>
                <div>{note.text}</div>
                </div>)}
        </div>
    )
}