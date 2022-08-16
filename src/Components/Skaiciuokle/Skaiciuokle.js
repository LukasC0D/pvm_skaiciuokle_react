import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Skaiciuokle.css';
import 'bootstrap/dist/css/bootstrap.css'

const Skaiciuokle  = () => {
  let [amount, setAmount] = useState(0);
  let [pvm, setPvm] = useState(21);
  return (
  <div className="container text-center ">

    <h1><i>Pvm</i> Skaičiuoklė</h1>

    <div className="mt-5 mb-3">

      <label className="px-3"><strong><i>PVM</i></strong></label>

      <select   onChange={(e) => setPvm(+e.target.value)}>

        <option value="21">21%</option>

        <option value="9">9%</option>

        <option value="5">5%</option>

      </select>

    </div>

   

        <div className='box'>
          <p>Suma be <strong><i>PVM</i></strong></p>
          <input type="text" onChange={(e) => setAmount(+e.target.value)}/>
          <p><strong><i>PVM</i></strong> Suma</p>
          <input type="text" value={(amount/100)*pvm} disabled="disabled" />
          <p><i>Bendra suma</i> </p>
          <input type="text" value={((amount/100)*pvm) + amount} />
        </div>
  </div>
  )}



Skaiciuokle.propTypes = {};

Skaiciuokle.defaultProps = {};

export default Skaiciuokle;
