import React from 'react';

// CHILD: CardList
const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", border: "5px solid teal", height: "800px"}}>
            {props.children}
        </div>
    );
};

export default Scroll;