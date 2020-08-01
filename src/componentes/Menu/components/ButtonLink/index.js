import React from 'react';

function ButtonLink(props) {
    // props => {"O que alguém passar", href: "/"}
    console.log(props);
    return (
        <a href="/" className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;