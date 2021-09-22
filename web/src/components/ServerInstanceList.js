// import ServerInstance from "./ServerInstance";
// import * as React from "react";
//
// function ServerInstanceList(servers) {
//   if (servers === null) return null;
//   return <div className="mdui-panel" mdui-panel>
//     { servers.map(server => ServerInstance(server)) }
//     </div>;
// }

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import RecordList from "./RecordList";
import {deleteServer} from "../backends/ServerApi";

function ServerInstanceList(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{margin: 100}}>
      {props.servers.map(server =>
        <Accordion style={{width: "100%"}} expanded={expanded === server.name} onChange={handleChange(server.name)}>
          <AccordionSummary
            expandIcon={<div>↓</div>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div sx={{ width: '33%', flexShrink: 0 }}>
              {server.name}
            </div>
          </AccordionSummary>
          <AccordionDetails style={{width: "100%"}}>
            {RecordList(server)}
            <div
              style={{width: "95%", textAlign: "right", color: "red"}}
              onClick={() => {
                deleteServer(server);
                props.onServerChange()
              }}
            >
              删除
            </div>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
}


export default ServerInstanceList;
