import React from 'react';

export default class MoreOptions extends React.Component {
    items = [
        {
            key: 'hide',
            icon: 'icon-hide',
            text: 'Hide Post'
        }, 
        {
            key: 'unhide',
            icon: 'icon-hide',
            text: 'Unhide Post'
        },
        {
            key: 'remove',
            icon: 'icon-bin',
            text: 'Remove Post'
        }
    ]

    state = {
        showTooltip: false
    }

    showHideTooltip = () => {
        this.setState((prevState) => {
            return {
                showTooltip: !prevState.showTooltip
            }
        });
    }

    onItemClick = (key) => {
        this.setState({
            showTooltip: false
        });
        if(this.props.onItemClick) {
            this.props.onItemClick(key);
        }
    }

    getTooltip = () => {
        const itemHtml = this.props.options.map((option, index) => {
            const item = this.items.find(item => item.key == option);

            return (
                <div 
                    className = "more-item" 
                    key = {index}
                    onClick = {() => this.onItemClick(item.key)}
                >
                    <span className = {`item-icon ${item.icon}`}></span>
                    <span>{item.text}</span>
                </div>
            );
        });

        return (
            <div className = {`more-tooltip ${this.state.showTooltip ? '' : 'dn'}`} >
                {itemHtml}
            </div>
        );
    }

    render() {
        return (
            <div className = "more-options">
                <div 
                    className = "icon-wrapper"
                    onClick = {this.showHideTooltip}
                >
                    <span className = "icon-more"></span>
                </div>
                {this.getTooltip()}
            </div>
        );
    }
}