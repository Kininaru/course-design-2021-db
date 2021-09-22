import './App.css';
import {useState} from "react";
import NewServer from "./components/NewServer";
import ServerInstanceList from "./components/ServerInstanceList";
import {addServer, getServers} from "./backends/ServerApi";

function App() {
  const [servers, setServers] = useState(getServers());

  return (
    <div style={{textAlign: "center"}}>
      <ServerInstanceList
        onServerChange={() => {
          setServers(getServers());
        }}
        servers={servers}
      />
      <NewServer
        onSubmit={server => {
          addServer(server);
          setServers(getServers());
        }}
      />
    </div>
  );
}

export default App;
