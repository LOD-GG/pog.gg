import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/LolLayout';

const Lodgg = ({ Component }) => {
    return (
        <>
            <Head>
                <title>pog.gg</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" rel="stylesheet"/>
            </Head>
            <Component/>
            <style jsx global>{`
                td {
                    border-top: 1px solid #ced4da;
                }
                body {
                    margin: 0;
                    background-color: #f5f5f5;
                }
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                a {
                    text-decoration: none;
                    color: white;
                }
            `}
            </style>
        </>
    )
}

export default Lodgg;