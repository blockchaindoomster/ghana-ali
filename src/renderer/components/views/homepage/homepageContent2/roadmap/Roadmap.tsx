import React from 'react';
import "./index.scss";
import Tick from '../../../../../../assets/images/icons/tick2.png';

export default function RoadMap(): JSX.Element {
  return (
    <>
      <div id="roadmap" className="hp-roadmap" data-aos="fade-up">
        <div className="hp-rm-content">
          <p className="road-map">ROADMAP</p>
          <div className="roadmap-container">
            <div className="phase-container">
              <div className="phase">
                <p className="phase-title"style={{color: '#e63462'}}>Phase One - Pre Minting 500 NFTs</p>
                <p className="phase-content special"><span><img src={Tick} alt="tick" className="" /></span>Before the public fair launch, we will pre-mint random 500 Mutant Ether Babies NFTs for the team and promotion and gaming purposes, such as giveaways to grow our community and reward for our gamers in the upcoming Mebs Subway play-to-earn game.</p>
              </div>
              <div className=""></div>
            </div>

            <div className="phase-container">
              <div className="phase">
                <p className="phase-title"style={{color: '#e63462'}}>Phase Two - Community giveaways </p>
                <div className="phase-content">
                  <p><span><img src={Tick} alt="tick" className="" /></span>30% Minted - 5 ETH Giveaway to 5 lucky Meb holders & 5 ETH buyback to raise floor level</p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>50% Minted - 10 ETH Giveaway to 10 lucky Meb holders & 10 ETH buyback to raise floor level </p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>80% Minted - 10 ETH Giveaway to 10 lucky Meb holders & 10 ETH buyback to raise floor level </p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>100% Minted - 30 ETH allocated for Charities 3 Charities [ 10 Eth each ] and 20 ETH Buyback to raise floor level </p>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="phase-container">
              <div className="phase">
                <p className="phase-title"style={{color: '#e63462'}}>Phase Three - Charities</p>
                <p className="phase-content special"><span><img src={Tick} alt="tick" className="" /></span>Charities to be awarded the 30 ETH Charity Funds will be chosen by our community members - Your voices matter!</p>
				<p><span><img src={Tick} alt="tick" className="" /></span>Monthly Charity donations for 6 months [ 10k per Month ] - From Royalties on Opensea sales.</p>
              </div>
              <div className=""></div>
            </div>
            <div className="phase-container">
              <div className="phase">
                <p className="phase-title"style={{color: '#e63462'}}>Phase Four - Gaming & Metaverse</p>
                <p className="phase-content special"><span><img src={Tick} alt="tick" className="" /></span>Our Gaming platform and app will be released and our members will start earning by playing the Mebs Subway Game -</p>
                <p><span><img src={Tick} alt="tick" className="" /></span>We will buy land in the metaverse and build the Mebs Island Mebsverse</p>
                <p><span><img src={Tick} alt="tick" className="" /></span>Each Mebs holder will be airdropped a 3D version of their Mebs an which will be used in the Metaverse - Mebverse.</p>
                <p><span><img src={Tick} alt="tick" className="" /></span>We will launch our Mebs Island Metaverse and members can hang out in there and also watch their NFTs being displayed in the Mebs Gallery in the Mebverse or Metaverse.</p>
              </div>
              <div className=""></div>
            </div>
            <div className="phase-container">
              <div className="phase">
                <p className="phase-title"style={{color: '#e63462'}}>Phase Five - Website 2.0 and Verification </p>
                <p className="phase-content special"><span><img src={Tick} alt="tick" className="" /></span>Short animated movie based on MEBS and NFT.</p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>Opensea verification and buybacks.</p>
                  <p><span><img src={Tick} alt="tick" className="" /></span>Website 2.0 - Revamped and Enhanced</p>
				  <p><span><img src={Tick} alt="tick" className="" /></span>Mebs Merch Shop</p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
  