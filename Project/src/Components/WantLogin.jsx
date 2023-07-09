import React from 'react'
import { Navigate } from 'react-router-dom';
import { useStore } from '../Store/useStore'
import Login from './Login';

const WantLogin = () => {
    const item = useStore((state) => state.item)
    return item === "true" ? <Navigate to="/" replace={true}/> : <Login />
}

export default WantLogin