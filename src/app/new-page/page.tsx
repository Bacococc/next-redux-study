"use client";

import React, { useState } from "react";
import {createStore} from "redux";

function reducer(currentState, action){
  return (
    
  )
}

export default function NewPage() {
  const [number, setNumber] = useState(1);

  return (
    <div className="m-auto border border-pink-300 p-4">
      <h1>Root {number} </h1>
      <div className="flex justify-between">
        <Left1 number={number} />
        <Right1 number={number} onIncrease={() => {setNumber(number + 1)}}/>
      </div>
    </div>
  )
};

function Left1(props: any){
  return(
    <div className="w-80 border border-orange-500 m-0.5">
      <h1>Left1 {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  )
};

function Left2(props: any){
  return(
    <div className="w-72 border border-orange-500 m-0.5">
      <h1>Left2 {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  )
};

function Left3(props : any){
  return(
    <div className="w-64 border border-orange-500 m-0.5">
      <h1>Left3 {props.number}</h1>
    </div>
  )
};

function Right1(props: any) {
  return(
    <div className="border border-green-400 w-80 m-0.5">
      <h1>Right1 {props.number}</h1>
      <Right2 number={props.number} onIncrease={() => {props.onIncrease()}}></Right2>
    </div>
  )
};

function Right2(props: any) {
  return(
    <div className="border border-green-400 w-72 m-0.5">
      <h1>Right2 {props.number}</h1>
      <Right3 number={props.number} onIncrease={() => {props.onIncrease()}}></Right3>
    </div>
  )
};

function Right3(props: any) {
  return(
    <div className="border border-green-400 w-64 m-0.5">
      <h1>Right3 {props.number}</h1>
      <input type="button" value="+" onClick={props.onIncrease}></input>
    </div>
  )
};