import React, { useState, useEffect } from 'react';
import { ListMembers } from '../ListMembers/ListMembers';
import DisplayMembers from '../DisplayMembers/DisplayMembers';
import './MemberCards.css';

const MemberCards = () => {
  const [members, setMembers] = useState([]);
  console.log(members);

  useEffect(() => {
    const newArray = ListMembers.map((ListMember) => ListMember);
    setMembers(newArray);
  }, []);

  return (
    <div className='memberCardsDiv'>
      <DisplayMembers />
    </div>
  );
};

export default MemberCards;
