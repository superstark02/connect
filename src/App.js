import AppBar from '@mui/material/AppBar';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


class App extends React.Component {
  state = {
    open: false,
    selected: {
      name: "Dipit",
      id: 0,
      friends: []
    },
    people: [
      {
        name: "Dipit",
        id: 0,
        friends: []
      },
      {
        name: "Iman",
        id: 1,
        friends: []
      },
      {
        name: "Dachen",
        id: 2,
        friends: []
      },
      {
        name: "Robin",
        id: 3,
        friends: []
      },
      {
        name: "Carl",
        id: 4,
        friends: []
      },
    ],
    network: [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ],
    person1: null,
    person2: null
  }

  handleClickOpen = (item) => {
    this.setState({ open: true })
    this.setState({ selected: item })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  add_as_friend = (a, b) => {

    if (this.state.network[a][b] === 0) {
      var temp = this.state.network;
      temp[a][b] = 1;
      temp[b][a] = 1;
      this.setState({ network: temp });

      temp = this.state.people
      temp[a].friends.push(this.state.people[b].name)
      temp[b].friends.push(this.state.people[a].name)
      this.setState({ people: temp })
    }

    console.log(this.state.people[a], this.state.people[b])
  }

  handleChange = (event) => {
    this.setState({person1:event.target.value});
  };

  handleChange2 = (event) => {
    this.setState({person2:event.target.value});
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h4" color="inherit" component="div" style={{ padding: "10px" }}>
              CONNECT
            </Typography>
          </Toolbar>
        </AppBar>

        <div style={{ display: 'flex', justifyContent: "space-between", height: "100%" }} >
          <div className='cont-30' >
            <Button variant="outlined"><AddIcon />ADD</Button>
            <p>
              You can add new people using the given button.
              <br />
              Click on any user to see it's name and connections with their respective connectivity.
            </p>
          </div>

          <div className='cont-60' >
            {
              this.state.people.map((item, index) => {
                return (
                  <div key={index} className="list-item" >
                    <div style={{ fontSize: "20px", marginRight: "10px" }} >
                      <AccountCircleOutlinedIcon style={{ fontSize: "50px" }} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", width: "100%" }} >
                      <div>
                        <div>
                          {item.name}
                        </div>
                        <div style={{ fontSize: "12px", color: 'grey' }} >
                          Connections: {item.friends.length}
                        </div>
                        <div className="delete" >
                          Delete
                        </div>
                      </div>

                      <div className='add' onClick={() => { this.handleClickOpen(item) }} >
                        Add Freinds
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='cont-30' >
            <div className='info' >
              Total People : {this.state.network[0].length} <br />
            </div>
            <div className='info' >
              Find Connection
              <div>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Person 1</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={this.state.person1}
                    onChange={this.handleChange}
                    autoWidth
                    label="Person 1"
                  >
                    {
                      this.state.people.map((item,index)=>{
                        return(
                          <MenuItem value={index}>{item.name}</MenuItem>
                        )
                      })
                    }
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple">Person 2</InputLabel>
                  <Select
                    labelId="demo-simple"
                    id="demo-simple"
                    value={this.state.person2}
                    onChange={this.handleChange2}
                    autoWidth
                    label="Person 2"
                  >
                    {
                      this.state.people.map((item,index)=>{
                        return(
                          <MenuItem value={index}>{item.name}</MenuItem>
                        )
                      })
                    }
                  </Select>
                </FormControl>
              </div>
              <div>
                <Button>Calculate</Button>
              </div>
            </div>
          </div>
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {this.state.selected.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>
                Friends ({this.state.selected.friends.length}): {
                  this.state.selected.friends.map(item => {
                    return item + " "
                  })
                }
              </div>

              <div>
                {this.state.people.map((item, index) => {
                  return (
                    <div className='list-item' style={{ width: "500px", display: "flex", justifyContent: "space-between", alignContent: "center" }} >
                      <div>
                        {item.name}
                      </div>
                      <div className='add-frnd' onClick={() => { this.add_as_friend(this.state.selected.id, index) }} >
                        ADD AS FRIEND
                      </div>
                    </div>
                  )
                })}
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    )
  }
}

export default App;
