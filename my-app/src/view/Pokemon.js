import React from 'react';
import PKTable from '../component/PKTable';


export default class Pokemon extends React.Component {


    render() {
        return (
            <main className={"container-fluid"}>

                <h1>Pokemons</h1>
                <PKTable/>

            </main>
        );
    }
}