import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics(props) {
    const propsArray = [...Object.entries(props)];
    return <>
        <h2 className={s.title}>Statistics</h2>
        {propsArray.map(([key, value]) =>
            <p key={key} className={s.statElem}>
                <span className={s.statKey}>{key}: </span>
                <span className={s.statVal}>{value}</span>
            </p>)}
        </>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.string.isRequired,
}
