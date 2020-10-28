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

        axios.post('https://baturls.herokuapp.com/url', formData, {headers: {
            'Content-Type': 'application/json'
        }}).then(response=>{
            console.log(response.data);
            setShortUrl(`https://baturls.herokuapp.com/${response.data.shortUrl}`);
        })
    }

    return (
        <>

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
                <span style={{fontSize: '.8rem', marginTop: '0rem', marginBottom: '.5rem', color: '#5A2989', textTransform: 'uppercase'}}>Shortend Url</span>
                <a href={shortUrl} rel="noreferrer" target="_blank" style={{fontSize: '1.5rem'}} className="surl"> {shortUrl} </a>
                </div>
                </>
                : null
            }


            {/* Recent Shortner Urls */}
            <div className="rsu">
                <span style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Recently Shortend Urls</span>
                
                {/* Looping Here */}
                {
                    urls.map(theUrl=>{
                        return <UrlItem url={theUrl} />
                    })
                }

            </div>
        </>
    );
}

export default MainComponent;