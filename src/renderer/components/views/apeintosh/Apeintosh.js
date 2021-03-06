import React from 'react';
import "./index.scss";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Web3 from "web3";
import {contractAddress} from '../../../../constants/address';

import Image1 from '../../../../assets/images/tokens/1.jpg'
import Image2 from '../../../../assets/images/tokens/2.jpg'
import Image3 from '../../../../assets/images/tokens/3.jpg'
import Image4 from '../../../../assets/images/tokens/4.jpg'
import Image5 from '../../../../assets/images/tokens/5.jpg'
import Image6 from '../../../../assets/images/tokens/6.jpg'

export default function Apeintosh() {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const [mintedMeb, setMintedMeb] = useState(0)

  const configs = config.gentle;

  useEffect(async () => {
    const contractABI = require("../../../../constants/contract-abi.json")
    window.web3 = new Web3(window.ethereum)
    const contract = new window.web3.eth.Contract(contractABI, contractAddress)

    const totalSupply = await contract.methods.totalSupply().call()
    setMintedMeb(totalSupply)
  }, [])

  const slides = [
    {
      key: uuidv4(),
      content: <img src={Image1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={Image2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={Image3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={Image4} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={Image5} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={Image6} alt="6" />
    }
  ]
  const [date, setDate] = useState(new Date().getHours());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    var timerID = setInterval(() => plus(), 2000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date().getHours());
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth());
    setDay(new Date().getDate());
  }

  function plus() {
    setGoToSlide(goToSlide + 1);
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const converter = (hours) => {
    if (hours > 12) {
      return hours - 12 + " P.M. EST Time";
    } else if (hours < 12) {
      return hours + " A.M. EST Time";
    }
  }
  return (
    <div
      className="apeintosh"
    >
      <div className="homepages" style={{ display: "flex" }}>
        <div className="home-image">
        </div>
        <div className="home-titles">
          <div className="children-home-title">
            <div className="firstline">Mutant Ether Babies NFT </div>
            <div className="description">10,000 unique mutant species created from mutation of cats and apes dna living on the Ethereum Blockchain. </div><p></p>
            <div className="description" style={{color: '#e63462'}}>Public Minting - 15Th November 2021 2PM EST.</div>
            <div className="timewrap" style={{ color: 'white' }}>
              {monthNames[month]} {day} date {converter(date)}
              <div className="current-time">{ }</div>
            </div>
            <p className="forthline">NFT collection Game - Metaverse</p>
            <div className="stages">
              <p className="">Minted Mebs : <span>{mintedMeb}</span></p>
              <p className="">Available Mebs : <span>{9500 - mintedMeb}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
