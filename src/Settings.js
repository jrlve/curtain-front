import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowSettings = this.handleShowSettings.bind(this);
        this.handleHideSettings = this.handleHideSettings.bind(this);
        this.state = {showSettings: false};
    }

    handleShowSettings() {
        this.setState({showSettings: true});
    }

    handleHideSettings() {
        this.setState({showSettings: false});
    }

    render() {
        const showSettings = this.state.showSettings;
        let settings;
        if (showSettings) {
            settings = <OpenSettings handleHideSettings={this.handleHideSettings}/>
        } else {
            settings = <ClosedSettings handleShowSettings={this.handleShowSettings}/>
        }
        return (
          settings
        );
    }
}

class OpenSettings extends React.Component {
    render() {
        return (
            <div className="settings">
                <div className="close-settings" onClick={this.props.handleHideSettings}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </div>
            </div>
        )
    }
}


class ClosedSettings extends React.Component {
    render() {
        return (
            <button className="closed-settings" onClick={this.props.handleShowSettings}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
        )
    }
}
