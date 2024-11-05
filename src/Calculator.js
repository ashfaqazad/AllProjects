import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS ko import karna

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px', backgroundColor: '#000', padding: '20px', borderRadius: '10px' }}>
      <h1 className="text-center mb-4" style={{ color: '#fff' }}> Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        className="form-control mb-3"
        style={{ height: '50px', fontSize: '22px', textAlign: 'right', backgroundColor: '#333', color: '#fff', border: 'none' }}
      />
      <div className="row">
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('1')}>1</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('2')}>2</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('3')}>3</button>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary btn-block" onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('4')}>4</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('5')}>5</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('6')}>6</button>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary btn-block" onClick={() => handleClick('-')}>-</button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('7')}>7</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('8')}>8</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('9')}>9</button>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary btn-block" onClick={() => handleClick('*')}>*</button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <button className="btn btn-danger btn-block" onClick={handleClear}>C</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-block" onClick={() => handleClick('0')}>0</button>
        </div>
        <div className="col-3">
          <button className="btn btn-success btn-block" onClick={handleCalculate}>=</button>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary btn-block" onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
