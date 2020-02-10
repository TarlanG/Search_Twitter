import React from 'react';

function User (props){
  return(
    <div className="inner-body">
      <div className="name">
        {props.status.user.name}
      </div>
      <div className="handle">
        @{props.status.user.screen_name}
      </div>
      <div className="date">
        &#183; {props.status.created_at.slice(3,11)}
      </div>
    </div>
  );
};

export default User;
