import { createSelector } from 'reselect';
import { Skills, Roles } from '@hackjunction/shared';

export const searchResults = state => state.recruitment.searchResults.data.data;

export const searchResultsCount = state =>
    state.recruitment.searchResults.data.count;

export const searchResultsLoading = state =>
    state.recruitment.searchResults.loading;
export const searchResultsError = state =>
    state.recruitment.searchResults.error;
export const searchResultsUpdated = state =>
    state.recruitment.searchResults.updated;
