import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoCard from '../components/CryptoCard';
import './Home.css';

const Home = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [globalStats, setGlobalStats] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            // Fetch top 10 cryptocurrencies
            const cryptoResponse = await axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
            );
            setCryptoData(cryptoResponse.data);

            // Fetch global crypto stats
            const globalResponse = await axios.get('https://api.coingecko.com/api/v3/global');
            setGlobalStats(globalResponse.data.data);
        };
        fetchData();
    }, []);

    return ( <
        div className = "home" >
        <
        h1 className = "dashboard-title" > CryptoWorld < /h1>

        { /* Global Crypto Stats */ } {
            globalStats && ( <
                div className = "global-stats" >
                <
                h2 className = "stats-heading" > Global Crypto stats < /h2> <
                div className = "stats-grid" >
                <
                div className = "stat-item" >
                <
                strong > Total Market Cap: < /strong> ${globalStats.total_market_cap.usd.toLocaleString()} < /
                div > <
                div className = "stat-item" >
                <
                strong > Total 24 x7 Volume: < /strong> ${globalStats.total_volume.usd.toLocaleString()} < /
                div > <
                div className = "stat-item" >
                <
                strong > Active Cryptocurrencies: < /strong> {globalStats.active_cryptocurrencies} < /
                div > <
                /div> < /
                div >
            )
        }

        { /* List of Cryptocurrencies */ } <
        h2 className = "crypto-heading" > Cryptocurrencies < /h2> <
        div className = "crypto-grid" > {
            cryptoData.map((crypto) => ( <
                CryptoCard key = { crypto.id }
                id = { crypto.id }
                name = { crypto.name }
                image = { crypto.image }
                price = { crypto.current_price }
                />
            ))
        } <
        /div> < /
        div >
    );
};

export default Home;