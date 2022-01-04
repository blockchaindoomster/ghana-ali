import React from 'react';
import "./index.scss";
import { useMediaQuery } from "react-responsive";

import SingleCarousel from '../../../apeintosh/SingleCarousel';

export default function About(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:1024px)",
  });
  return (
    <>
      <p id="about-title" className="about-title">ABOUT</p>
      <div id="about" className="hp-about" data-aos="fade-up">
        <div className="hp-a-content">
          <p className="sub-title"style={{color: '#e63462'}}>Genetically Engineered Species - Mutant Ether Babies</p>
          <p>
            10,000 unique species living on the Ethereum ERC721 Network
          </p>
          <ul>
            <li><p>These are the next BlueChip NFTs</p></li>
            <li><p>Expertly engineered with 340+ traits</p></li>
            <li><p>Owning a Meb will serve as a pass to play the Mebs Subway Game</p></li>
            <li><p>Meb Gamers will be rewarded with Meb NFTs </p></li>
            <li><p>300 Meb NFTs will be pre-minted and allocated to Gaming wallet</p></li>
            <li><p>Daily and weekly giveaway contests to members</p></li>
            <li><p>200 Mebs NFTs will be allocated to giveaway wallet </p></li>
            <li><p>Huge weekly Buybacks to raise floor levels</p></li>
          </ul>
          <p>
          <div className="subtext"style={{color: '#e63462'}}> Welcome to the Mebs Island </div>
          </p>
          <p>Our community members are of top most importance to us therefore we will not hold pre-sales or private sales whatsoever. Our sales will be fair and just and each member will have the chance to mint rare Mebs and also mint as many Mebs as possible. Fairness to every member because everyone matters to us!</p>
        </div>
        <div className="about-images">
          <SingleCarousel />
          <SingleCarousel />
        </div>
      </div>
    </>
  );
}
