import React from 'react';

export const Card = props => {
	return	(<div className="card">
				<img alt={props.member.username} src={props.imgs} />
				<h2 key={props.mID}>{props.member.name} ({props.member.username})</h2>
				<i><span key={props.mID}>{props.member.email}</span></i>
			</div>);
};