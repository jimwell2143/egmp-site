import { createSelector } from "@reduxjs/toolkit";

const NAME = 'profile';

export const profileSelected = (state) => state[NAME].profileSelected

