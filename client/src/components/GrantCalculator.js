import React, { useState } from 'react';
const EhgLogic = require("./EHGLogic");
const Ehg = new EhgLogic();

const GrantCalculator = () => {
    const [income, setIncome] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(income);
        setIncome('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Income:</label>
                <input type="number" value={income} required onChange={(e) => setIncome(e.target.value)} />
                <input type="submit" value="Enter" />
            </form>
            grant: {Ehg.ehg(income)}
        </div>
    )
}

export default GrantCalculator