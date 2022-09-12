import spinner from './img/spinner.svg'
import React, { forwardRef } from 'react';

export const Preloader = forwardRef(({styles}, ref) => {

    return (
        <div className={`preloader ${styles}`} ref={ref}>
            <img alt='Loading...' src={spinner} width='100' height='100' />
        </div>
    )
})
 