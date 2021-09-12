import './App.css';
import {useState} from "react";
import NewServer from "./components/NewServer";
import {createTheme, MuiThemeProvider} from "@material-ui/core";

function App() {
  const [password, setPassword] = useState(window.localStorage.getItem("password"));
  const [servers, setServers] = useState([]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: "#ffffff",
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
