import React from 'react';
import IosSwitch from '../component/IosSwitch';


export default class Bot extends React.Component {

    /*
    ToDo
    Schritt recorder

    pkm auswähler

    new pkm identifier ggf.

    kampfsystem

    flucht

    
    */


    render() {
        return (
            <main className={"container-fluid"}>

                <h1>PRO Bot</h1>

                <div className="row">
                    <div className="col-md-6">
                        <IosSwitch title="Start"/>
                    </div>
                </div>

            </main>
        );
    }
}