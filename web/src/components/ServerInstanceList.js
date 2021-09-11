import ServerInstance from "./ServerInstance";

function ServerInstanceList(servers) {
  return <div className="mdui-panel" mdui-panel>
    { servers.map(server => ServerInstance(server)) }
    </div>;
}

export default ServerInstanceList;
