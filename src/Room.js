import React from 'react';
import {WindowContainer} from "./Window";


class Floor extends React.Component {
    render() {
        return (
            <div className="floor">
            </div>
        );
    }
}

export class Room extends React.Component {
    render() {
        return(
            <div className="room">
                <div className="flex">
                    <Floor/>
                    <WindowContainer horizontal={false}/>
                </div>
                <WindowContainer horizontal={true}/>
            </div>
        );
    }
}
