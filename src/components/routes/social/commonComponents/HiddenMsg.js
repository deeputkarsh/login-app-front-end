import React from 'react';

export default function HiddenMsg(props) {
    const text1 = props.text1 || 'Post Hidden',
        text2 = props.text2 || 'This post is hidden from your customers';
    return (
        <div className="hidden-msg jd-font-roboto-medium">
            <span className="icon-hide"></span>
            <div className="right-section">
                <div className="text-1">
                    {text1}
                </div>
                <div className="text-2">
                    {text2}
                </div>
            </div>
        </div>
    );
}