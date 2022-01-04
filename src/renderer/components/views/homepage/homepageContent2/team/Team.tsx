import React from 'react';
import "./index.scss";
import MonoApe from "../../../../../../assets/images/pictures/team/1.png";
import OboApe from "../../../../../../assets/images/pictures/team/2.png";
import ConorApe from "../../../../../../assets/images/pictures/team/3.png";
import Team4 from "../../../../../../assets/images/pictures/team/4.png";
import Team5 from "../../../../../../assets/images/pictures/team/5.png";
import Team6 from "../../../../../../assets/images/pictures/team/6.png";


import TeamMember from "./teamMember/TeamMember";

export default function Team(): JSX.Element {
  return (
    <div id="team" className="hp-team">
      <p className="team">THE TEAM</p>
      <div className="hp-team-list">
        <TeamMember ape={MonoApe} name="Darknite" role="Art & Design" description="Specialized in Digital Art and Designs, Best at his field and works with high profile artists."/>
        <TeamMember ape={OboApe} name="Ibraheth" role="Admin & Programmer" description="Experienced Developer in Blockchain and Game Development and Certified Cisco Network Administrator."/>
        <TeamMember ape={ConorApe} name="Doomster" role="Lead Programmer" description="Masters in Computer Science and Artificial Intelligence and Image processing. Crypto expert and developer - Blockchain."/>
      </div>
    </div>
  );
}
