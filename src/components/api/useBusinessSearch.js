import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(latitude, longitude, location, price, foodtype, num_reviews, rating) {
    const [businesses, setBusinesses] = useState([]);
    const [searchParams, setSearchParams] = useState({latitude, longitude, location, price, foodtype, num_reviews, rating});

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, searchParams, setSearchParams];
}