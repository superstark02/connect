import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

var network = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

var people = [
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
]

function App() {
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
            people.map((item, index) => {
              return (
                <div key={index} className="list-item" >
                  <div style={{ fontSize: "20px", marginRight: "10px" }} >
                    <AccountCircleOutlinedIcon style={{ fontSize: "50px" }} />
                  </div>

                  <div style={{display:"flex", justifyContent:"space-between", alignContent:"center", width:"100%"}} >
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

                    <div className='add' >
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
            Total People : {network[0].length} <br />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
