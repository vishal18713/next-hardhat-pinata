"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { useRouter } from "next/router";

const Nav = () => {
  const connectMetamask = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnectedAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting Metamask:", error);
      }
    } else {
      alert("Please download Metamask");
    }
  };

  return (
    <nav className="flex-between w-full mb-16 pt-3 gap-10 pl-16 pr-16">
      <Link href="/" className="flex gap-2 flex-center">
        <p className="logo_text">Noktua</p>
      </Link>
      <div className="flex-between ml-8 mr-4 gap-4">
        <p className="logo_text">Home</p>
        <p className="logo_text">Drop</p>
        <p className="logo_text">Stats</p>
        <p className="logo_text">Create</p>
      </div>
      <input type="text" placeholder="Search..." required className="search_input30 peer" />
      <button className="black_btn" onClick={connectMetamask}>
        Login
      </button>
    </nav>
  );
};

export default Nav;
