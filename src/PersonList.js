import React from 'react';

export const PersonList = (props) => {
    return (
      <div>
        <h1>User</h1>
        <div>Name: {props.user.name}</div>
        <div>Email: {props.user.email}</div>
        {props.user.userNickname ? <div>Nickname: {props.user.userNickname}</div> : null}
      </div>
    );
}