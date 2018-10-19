import React from 'react';

export default function BottomBar(props) {
    return (
        <a 
            href={props.href ? props.href : 'javascript:void(0)'} 
            className={`bottom-bar ${props.className}`} 
            onClick={props.onClick}
        >
            <span>{props.text}</span>
            <span className="icon-pagination-right"></span>
        </a>
    );
}