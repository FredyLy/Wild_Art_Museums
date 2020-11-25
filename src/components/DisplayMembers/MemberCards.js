import React, { useState, useEffect } from 'react';
import { ListMembers } from './ListMembers';
import DisplayMembers from './DisplayMembers';
import Location from '../Location/Location';
import './MemberCards.css';

const MemberCards = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const newArray = ListMembers.map((ListMember) => ListMember);
    setMembers(newArray);
  }, []);

  return (
    <div className="MemberCards">
        {
          members.map(member => <DisplayMembers key={member.id} avatar={member.avatar} name={member.name}
            lastname={member.lastName} linkedin={member.linkedin} github={member.github} />)
          }
        <Location title="ABOUT US" />
    </div>
  );
};

export default MemberCards;
