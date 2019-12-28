import React from 'react';  
import CircularProgress from '@material-ui/core/CircularProgress';
import SimpleSelect from './SimpleSelect';

const axios = require('axios');


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pkmOriginList:[],
            pkmList:[],
            name:"",
            statusList:[],
            hp:0,
            atk:0,
            spatk:0,
            def:0,
            spdef:0,
            init:0,
            isLoading:true,
            pixels:[]
        }
        this.handleAddStatus = this.handleAddStatus.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    getPixels(){
        
        axios.get('http://localhost:8000/bot/position')
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>console.log(err))
            

    }

    handleAddStatus(array) {
        this.setState({statusList:array})
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        if(value === '' && name !== "name") {
            value = 0;
        }
    
        this.setState({
          [name]: value
        }, () => {
            let pkms = this.state.pkmOriginList;

        let filteredpkms = pkms.filter(
                pkm=>
                {
                    let name = pkm.name.toLowerCase();
                    let hp = pkm.hp >=0 ? pkm.hp:0;
                    let atk = pkm.atk >=0 ? pkm.atk:0;
                    let spatk = pkm.spatk >=0 ? pkm.spatk:0;
                    let def = pkm.def >=0 ? pkm.def:0;
                    let spdef = pkm.spdef >=0 ? pkm.spdef:0;
                    let init = pkm.init >=0 ? pkm.init:0;

                    let bool =
                        hp>=this.state.hp && 
                        atk>=this.state.atk && 
                        spatk>=this.state.spatk && 
                        def>=this.state.def &&
                        spdef>=this.state.spdef &&
                        init>=this.state.init

                   return (name.includes(this.state.name.toLowerCase()) && bool)
                    
                }
        )

        this.setState({pkmList:filteredpkms});
        });

        

      }


    //ToDo:
    /*
    axios get

    express server aufstellen

    Create & Delete
    */

    componentDidMount(){

        axios.get('http://localhost:8000')
            .then(res=>{
                this.setState({pkmList:res.data, pkmOriginList:res.data, isLoading:false})
            })
            .catch(err=>console.log(err))

        
    }


    render() {
        return (
            <div>

                
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <div className="card-body">

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" name="name" placeholder="Name"></input>
                                        </div>
                                        <div className="col-md-4">
                                            <SimpleSelect handleAddStatus={this.handleAddStatus}/>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="button" className="btn btn-outline-danger" onClick={this.getPixels}>Get Pixels</button>
                                        </div>
                                    </div>
                                </div>


                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Name <input type="text" name='name' className="form-control" onChange={this.handleInputChange}></input></th>
                                            <th scope="col"> HP <input type="number" name='hp' className="form-control" onChange={this.handleInputChange}></input></th>
                                            <th scope="col"> ATK <input type="number" name='atk' className="form-control" onChange={this.handleInputChange}></input></th>
                                            <th scope="col"> SpATK <input type="number" name='spatk' className="form-control" onChange={this.handleInputChange}></input></th>
                                            <th scope="col"> DEF <input type="number" name='def' className="form-control" onChange={this.handleInputChange}></input></th>
                                            <th scope="col"> SpDef <input type="number" name='spdef' className="form-control" onChange={this.handleInputChange}></input></th>
                                            <th scope="col"> INIT <input type="number" name='init' className="form-control" onChange={this.handleInputChange}></input></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.isLoading ? 
                                            <tr>
                                                <td align='center' colSpan={8}>
                                                    <CircularProgress/>
                                                </td>
                                            </tr>
                                            
                                            :
                                            <>
                                            {
                                                this.state.pkmList.map(pkm=>{
    
                                                    return(
                                                        <tr key={pkm.name}>
                                                            <td> {pkm.name} </td>
                                                            <td align='center'> {(pkm.hp >=0)?pkm.hp:0} </td>
                                                            <td align='center'> {(pkm.atk >=0)?pkm.atk:0} </td>
                                                            <td align='center'> {(pkm.spatk >=0)?pkm.spatk:0} </td>
                                                            <td align='center'> {(pkm.def >=0)?pkm.def:0} </td>
                                                            <td align='center'> {(pkm.spdef >=0)?pkm.spdef:0} </td>
                                                            <td align='center'> {(pkm.init >=0)?pkm.init:0} </td>
                                                            <td>
                                                                <i className="fas fa-trash"></i>
                                                            </td>
                                                        </tr>
                                                    )
    
    
                                                })
                                            }
                                            </>
                                        }
                                    
                                    </tbody>
                                </table>

                            </div>

                        </div>
                
            </div>
        );
        
    }
}