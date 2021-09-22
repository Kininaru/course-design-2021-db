import {getRecords} from "../backends/RecordApi";

function RecordList(server) {
  let records = getRecords(server.name);
  if (records === undefined || records === null) return null;
  return <div style={{width: "100%"}}>
    {records.map(record => <div>{record}</div>)}
  </div>;
}

export default RecordList;
