import React, { useState, useEffect } from 'react';
import { ListMembers } from './ListMembers';
import DisplayMembers from './DisplayMembers';
import Location from '../Location/Location';
import LocationMobile from '../LocationMobile/LocationMobile';
import './MemberCards.css';

const MemberCards = () => {
  const [members, setMembers] = useState([]);
  const [title] = useState('ABOUT US');

  useEffect(() => {
    const newArray = ListMembers.map((ListMember) => ListMember);
    setMembers(newArray);
  }, []);

  return (
    <div>
      <div className="aboutus-bloc">
        <div className="aboutus-intro">
          <h1>Our team members</h1>
          <p>
            We are students from the Wild Code School Paris Campus and are proud to present you our vision of the Harvard Art Museums.
            Simplicity and aesthetic were the main objectives in our project to provide a refine website.
            We hope you&apos;ll browse the Wild Art Museums website with great pleasure.
          </p>
        </div>
        <div>
        {
          members.map(member => <DisplayMembers key={member.id} avatar={member.avatar} name={member.name}
            lastname={member.lastName} linkedin={member.linkedin} github={member.github} />)
          }
        </div>
      </div>
      <div className="aboutUs-location">
        <Location title={title} />
      </div>
      <div className="aboutUs-locationMob">
        <LocationMobile />
      </div>
    </div>
  );
};

export default MemberCards;
