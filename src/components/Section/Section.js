import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section(props) {
    const { title, children } = props;
    return <section className={s.section}>
            <h1 className={s.title}>{title}</h1>
            {children}
        </section>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
}