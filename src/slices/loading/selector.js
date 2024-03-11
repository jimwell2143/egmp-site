import { createSelector } from '@reduxjs/toolkit';

const NAME = 'loading';

export const loading = (state) => state[NAME]

export const isLoading = createSelector(
  loading,
  (_ , props) => props.type,
  (_loading, _type) => _loading.indexOf(_type) > -1
)

