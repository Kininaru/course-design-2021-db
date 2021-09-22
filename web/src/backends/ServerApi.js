let servers = [{
  name: "kininaru server",
  host: "kininaru.dev"
}, {
  name: "baidu server",
  host: "baidu.com"
}, {
  name: "Google server",
  host: "google.com"
}]

export function addServer(server) {
  servers.push(server);
}

export function getServers() {
  return servers;
}

export function deleteServer(server) {
  for (const index in servers) {
    if (servers[index].name === server.name) {
      delete servers[index];
      return;
    }
  }
}
