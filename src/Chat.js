import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";
import React from "react";
import "./Chat.css";
function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Group Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Punit</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message chat_receiver">
          <span className="chat_name">Punit</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Punit</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a Message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}
export default Chat;
