import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = (theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


class SimpleSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            status:"hp",
            value:0,
            statusList:[],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddStatus = this.handleAddStatus.bind(this)
    }

    handleChange(event){
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        
        this.setState({
            [name]: value
          })
    
    }


    handleAddStatus(){

        let array = this.state.statusList;

        array = array.filter(e=>e.status !== this.state.status)

        array.push({status:this.state.status, value:this.state.value})
        this.setState({statusList:array}, ()=>{
            this.props.handleAddStatus(this.state.statusList)
        })
    }



    render(){
        const {classes}=this.props;
        return(
            <>
            <div className="row">
                <div className="col">
                    <FormControl className={classes.formControl}>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.status}
                        onChange={this.handleChange}
                        name="status"
                        >
                        <MenuItem value={"hp"}>HP</MenuItem>
                        <MenuItem value={"atk"}>ATK</MenuItem>
                        <MenuItem value={"spatk"}>SPATK</MenuItem>
                        <MenuItem value={"def"}>DEF</MenuItem>
                        <MenuItem value={"spdef"}>SPDEF</MenuItem>
                        <MenuItem value={"init"}>INIT</MenuItem>

                        </Select>
                    </FormControl>
                </div>
                <div className="col">
                    <input type="number" name="value" className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="col">
                    <button type="button" className="fas fa-plus" style={{  backgroundColor: 'transparent', border:0, margin:0, padding:0}} onClick={this.handleAddStatus}/>

                </div>
            
             </div>
             {this.state.statusList.map(pair=><div key={pair.status}>
                 {pair.status} = {pair.value}
             </div>)}
            </>
        )
    }


}

export default withStyles(styles)(SimpleSelect);