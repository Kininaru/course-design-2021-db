import * as Base from "./Base";

export function addServer(server) {
  let fd = new FormData();
  fd.append("name", server.name);
  fd.append("host", server.host);
  return fetch(`${Base.ServerUrl}/api/add-server`, {
    method: "POST",
    body: fd,
  }).then(res => res.json());
}

export function deleteServer(id) {
  return fetch(`${Base.ServerUrl}/api/delete-server?id=${id}`, {
    method: "GET",
  }).then(res => res.json());
}

export function getServers() {
  return fetch(`${Base.ServerUrl}/api/get-servers`, {
    method: "GET",
  }).then(res => res.json());
}
