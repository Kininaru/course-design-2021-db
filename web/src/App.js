import './App.css';
import {useState} from "react";
import NewServer from "./components/NewServer";
import {createTheme, MuiThemeProvider} from "@material-ui/core";

function App() {
  const [password, setPassword] = useState("");
  const [servers, setServers] = useState([]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#42a5f5',
      },
      secondary: {
        main: "#111111",
      }
    },
  });

  return (
    <MuiThemeProvider theme={theme} style={{textAlign: "center"}}>
      <NewServer/>
    </MuiThemeProvider>
  );
}

export default App;
