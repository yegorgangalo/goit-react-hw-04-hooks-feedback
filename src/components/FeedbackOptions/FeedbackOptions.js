import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions(props) {
    const { options, onLeaveFeedback} = props;
    return <>
        {options.map(option =>
            <button
                key={option}
                type='button'
                className={s.button}
                value={option}
                onClick={({ target }) =>
                    onLeaveFeedback(target.value)
                }>
                {option}
            </button>)}
        </>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}