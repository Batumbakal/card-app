import React from 'react';
import {Card} from '../card/card.comp';
import './card-list.comp.css';

export const CardList = props => {
	return (<div className="card-list">
				{props.members.map((member, inc) => (
					<Card mID={member.id} member={member} imgs={props.imgsrcs[parseInt(member.id)-1]}/>
				))} 
			</div>);
};