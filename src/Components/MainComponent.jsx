import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlItem from './UrlItems';

const MainComponent = () => {

    const [url, setUrl] = useState();
    const [urls, setUrls] = useState([]);
    const [shortUrl, setShortUrl] = useState(null);

    //using useEffect hook to get data from server
    useEffect(() => {
        axios.get('https://baturls.herokuapp.com/urls').then(response => {
            console.log(response.data);
            setUrls(response.data);
        })
    }, [shortUrl]);

    //defining onChangeHandler function
    const onChangeHandler = (e) => {
        setUrl(e.target.value);
        console.log(url);
    }

    //defining onSubmitHandler function
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = {
            "mainUrl": url
        }

        axios.post('https://baturls.herokuapp.com/url', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data);
            setShortUrl(`https://baturls.herokuapp.com/${response.data.shortUrl}`);
        })
    }

    return (
        <>

        {/* Logo */}
        <svg class="bat-logo" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M638.61 287.25L568.3 129.7c-5.48-12.27-17.85-19.4-30.67-19.4-5.81 0-11.7 1.46-17.1 4.57l-104.9 60.44L384 64l-50.11 48h-27.77L256 64l-31.62 111.3-104.9-60.44c-5.4-3.11-11.3-4.57-17.1-4.57-12.83 0-25.2 7.13-30.67 19.4L1.39 287.25c-5.66 12.69 6.94 25.85 20.58 21.48l16.48-5.27a69.132 69.132 0 0 1 21.07-3.29c21.83 0 42.85 10.33 55.46 28.51L153.39 384l12.31-11.82c13.11-12.59 30.14-18.75 47.09-18.75 20.13 0 40.15 8.69 53.36 25.6L320 448l53.86-68.97c13.21-16.91 33.23-25.6 53.36-25.6 16.95 0 33.98 6.16 47.09 18.75l12.3 11.82 38.41-55.33c12.61-18.17 33.63-28.51 55.46-28.51 7.02 0 14.13 1.07 21.07 3.29l16.48 5.27c13.64 4.38 26.24-8.78 20.58-21.47zm-58.13-19.08c-33.5 0-64.6 15.98-83.19 42.76l-17.32 24.95c-15.69-9.41-33.82-14.44-52.76-14.44-31.79 0-60.96 14-80.01 38.4L320 394.67l-27.2-34.83c-19.06-24.4-48.22-38.4-80.02-38.4-18.94 0-37.07 5.03-52.76 14.44l-17.32-24.95c-18.59-26.77-49.68-42.76-83.19-42.76-4.62 0-9.21.31-13.77.92l56.58-126.78 143.47 82.66 26.05-100.06 20.99 19.1h54.33l20.99-19.1 26.05 100.06 143.47-82.66 56.58 126.78c-4.55-.62-9.15-.92-13.77-.92z" class=""></path></svg>

            {/* The Main Form */}
            <form onSubmit={onSubmitHandler}>
                <input required type="URL" onChange={onChangeHandler} placeholder="Enter your url here" name="" id="" />
                <button>Shorten</button>
            </form>

            {/* Shortend Url */}
            {
                shortUrl ?
                    <>
                        <div className="surl-container">
                            <span style={{ fontSize: '.8rem', marginTop: '0rem', marginBottom: '.5rem', color: '#5A2989', textTransform: 'uppercase' }}>Shortened Url</span>
                            <a href={shortUrl} rel="noreferrer" target="_blank" style={{ fontSize: '1.5rem' }} className="surl"> {shortUrl} </a>
                        </div>
                    </>
                    : null
            }


            {/* Recent Shortner Urls */}
            <div className="rsu">
                <span style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Bat Url Shortener - Recently Shortened Urls</span>

                {/* Looping Here */}
                {
                    urls.map(theUrl => {
                        return <UrlItem url={theUrl} />
                    })
                }

            </div>

            <footer>
                <span style={{ color: 'aliceblue', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>Just another project from the Bat_Cave by <a style={{fontSize: '1rem'}} href="https://github.com/shamimferdous" rel="noreferrer" target="_blank"><svg style={{ height: '1rem', margin: '0 .3rem' }} className="github" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" className /></svg>/shamimferdous</a> </span>
                <span className="cre">Buit with Java, Spring Boot, Postgresql, Reactjs, Hibernate, and JPA</span>
            </footer>
        </>
    );
}

export default MainComponent;