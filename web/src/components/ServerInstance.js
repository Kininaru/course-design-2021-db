import RecordList from "./RecordList";
import {Accordion} from "@mui/material";
import {AccordionDetails, AccordionSummary} from "@material-ui/core";
import * as React from "react";

function ServerInstance(server) {
  const [expanded, setExpanded] = React.useState(false);

  const change = () => {
    setExpanded(!expanded);
  }
  return <div className="mdui-panel-item">
    <div className="mdui-panel-item-header">
      <div className="mdui-panel-item-title">Trip name</div>
      <div className="mdui-panel-item-summary">Carribean cruise</div>
      <i className="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <div className="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <div className="mdui-panel-item-actions">
        <button className="mdui-btn mdui-ripple" mdui-panel-item-close>cancel</button>
        <button className="mdui-btn mdui-ripple">save</button>
      </div>
    </div>
  </div>;
}

export default ServerInstance;
