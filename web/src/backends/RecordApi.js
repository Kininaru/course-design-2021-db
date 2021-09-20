import * as Base from "./Base";

export function getRecords(id) {
  return fetch(`${Base.ServerUrl}/api/get-records?id=${id}`, {
    method: "GET",
  }).then(res => res.json());
}
