import React, { useState, useEffect } from 'react';
import { ListMembers } from '../ListMembers/ListMembers';
import DisplayMembers from '../DisplayMembers/DisplayMembers';

const MemberCards = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const newArray = ListMembers.map((ListMember) => ListMember);
    setMembers(newArray);
  }, []);

  return (
    <div className='memberCardsDiv'>
      {
       members.map(member => <DisplayMembers key={member.id} avatar={member.avatar} name={member.name}
       linkedin={member.linkedin} github={member.github}/>)
      }
    </div>
  );
};

export default MemberCards;
