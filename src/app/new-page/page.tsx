"use client";

import React, { useState } from "react";

export default function NewPage() {
  return (
    <div class="border-color: orange" >
      <h1></h1>
      <Left1></Left1>
    </div>
  )
};

function Left1(props: any){
  return(
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  )
};


function Left2(props: any){
  return(
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  )
};


function Left3(props : any){
  return(
    <div>
      <h1>Left3</h1>
    </div>
  )
};

