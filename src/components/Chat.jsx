import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NoProfile from '../assets/img/NoProfile.png';
import icon from '../assets/img/icon.png';
import author from '../assets/img/author.jpeg';


const Chat = (props) => {
  const isQuestion = (props.type === 'my-question');
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return(
    <ListItem className={classes}>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="icon" src={author} />
          ) : (
            <Avatar alt="icon" src={NoProfile} />
          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat;