
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsFavorites } from '../favorites/favorites.slice';

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(()=>
    bindActionCreators(actionsFavorites, dispatch), [dispatch])
}