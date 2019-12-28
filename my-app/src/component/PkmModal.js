import React from 'react'
import SimpleSelect from './SimpleSelect'

export default class PkmModal extends React.Component {




    render() {
        return(
            <>
                <button type="button" className="fas fa-plus text-light" data-toggle="modal" data-target="#exampleModalCenter" style={{  backgroundColor: 'transparent', border:0, margin:0, padding:0}}>
                </button>

                <div className="modal fade text-dark" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Pokemon hinzufügen</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body container-fluid">
                                <div className="row">
                                    <input type="text" className="form-control" name="name" placeholder="Name"></input>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">
                                        <SimpleSelect/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}