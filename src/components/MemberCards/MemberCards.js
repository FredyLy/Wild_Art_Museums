import React, { useState, useEffect } from 'react';
import { ListMembers } from '../ListMembers/ListMembers';
import DisplayMembers from '../DisplayMembers/DisplayMembers';
import Location from '../Location/Location';

const MemberCards = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const newArray = ListMembers.map((ListMember) => ListMember);
    setMembers(newArray);
  }, []);

  return (
    <div>
    <div>
      {
       members.map(member => <DisplayMembers key={member.id} avatar={member.avatar} name={member.name}
       linkedin={member.linkedin} github={member.github}/>)
      }
    </div>
    <Location />
    </div>
  );
};

export default MemberCards;
