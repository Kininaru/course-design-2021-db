import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Input, InputLabel,
} from "@material-ui/core";
import {useState} from "react";

function NewServer(props) {
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState("");
  const [host, setHost] = useState("");

  const onAddServer = () => {
    setShowDialog(true);
  }

  const submitNewServer = (server) => {
    props.onSubmit(server);
  }

  return <div style={{textAlign: "center"}}>
    <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
      <DialogTitle id="form-dialog-title">Add Server</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please provide some info of the server you want to monitor.
        </DialogContentText>
        <div style={{display: "inline-block"}}>
          <InputLabel htmlFor="my-input">Server Name</InputLabel>
          <Input
            autoFocus
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div style={{height: 10}}/>
        <div style={{display: "inline-block"}}>
          <InputLabel htmlFor="my-input">Server Host</InputLabel>
          <Input
            autoFocus
            onChange={e => setHost(e.target.value)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowDialog(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => submitNewServer({
          "name": name,
          "host": host,
        })} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
    <Button variant="contained" color="primary" onClick={onAddServer}>New Server</Button>
  </div>;
}

export default NewServer;
