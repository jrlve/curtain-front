import React from 'react';

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {status: "open"};
    }

    handleClick() {
        console.log("handleclick");
        if (this.state.status === "open") {
            this.setState(
                {
                    status: "closed"
                }
            );
        } else if (this.state.status === "closed") {
            this.setState(
                {
                    status: "open"
                }
            );
        }
    }

    render() {
        return (
            <button className={this.props.hidden? "window hidden": "window " + this.state.status} onClick={this.handleClick}>
            </button>
        );
    }
}

class HorizontalWindowContainer extends React.Component {
    render() {
        return (
            <div className="horizontal-windows">
                <Window />
                <Window />
                <Window />
                <Window />
                <Window hidden={true} />
            </div>
        );
    }
}

class VerticallWindowContainer extends React.Component {
    render() {
        return (
            <div className="vertical-windows">
                <Window />
                <Window />
            </div>
        );
    }
}

export function WindowContainer(props) {
    const isHorizontal = props.horizontal;
    if (isHorizontal) {
        return <HorizontalWindowContainer/>
    }
    return <VerticallWindowContainer/>
}

// this.props.orientation === 'horizontal' ? "horizontal-windows": "vertical-windows"
