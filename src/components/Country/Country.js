import React from 'react';

const Country = (props) => {
    // console.log(props);
    const {name, population, region, flag} = props.country;
    const flagStyle = { height: '100px'}
    const countryStyle = {
        border: '2px solid black',
        margin: '10px',
        padding: '10px'
    }
    const handelAddCountry = props.handelAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is a {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handelAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;