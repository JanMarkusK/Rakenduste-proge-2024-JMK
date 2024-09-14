//"Sharing data between components"
import React from "react" 
import { useState } from 'react';

function MyButtonTest({ count, onClick }) {

   return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
 }

 export default MyButtonTest;