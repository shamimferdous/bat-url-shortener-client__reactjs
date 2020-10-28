import React from 'react';
import moment from 'moment';

const UrlItem = ({ url }) => {
    return (
        <>

            <div className="rsu__container">
                <p style={{ flex: '0 0 10%', fontSize: '.8rem' }}> {moment(url.timestamp).format('MM D, YY - LT')} </p>
                <span> {url.mainUrl} </span>
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrows-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="arrow"><path fill="currentColor" d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z" /></svg>
                <a href={`https://baturls.herokuapp.com/${url.shortUrl}`} rel="noreferrer" target="_blank" style={{ flex: '0 0 35%' }}> {`https://baturls.herokuapp.com/${url.shortUrl}`}  </a>
            </div>

        </>
    );
}

export default UrlItem;