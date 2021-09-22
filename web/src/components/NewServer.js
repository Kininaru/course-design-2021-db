import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, TextField,
} from "@material-ui/core";
import {useState} from "react";

function NewServer(props) {
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState("");
  const [host, setHost] = useState("");

  const onAddServer = () => {
    setShowDialog(true);
  }

  return <div style={{textAlign: "center"}}>
    <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
      <DialogTitle id="form-dialog-title">Add a server</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please provide some info of the server you want to monitor.
          Server you add will update automatically every hour.
        </DialogContentText>
        <div style={{height: 20}} />
        <TextField
          style={{width: "100%"}}
          label="Server Name"
          variant="outlined"
          onChange={e => setName(e.target.value)}
        />
        <div style={{height: 10}}/>
        <TextField
          style={{width: "100%"}}
          label="Server Host"
          variant="outlined"
          onChange={e => setHost(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowDialog(false)}>
          Cancel
        </Button>
        <Button onClick={() => {
          setShowDialog(false);
          props.onSubmit({
            name: name,
            host: host,
          });
        }}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
    <Button variant="outlined" onClick={onAddServer}>
      New Server
    </Button>
  </div>;
}

export default NewServer;
