import { createSelector } from "@reduxjs/toolkit";

const NAME = 'dropdown';

export const sourceApplication = (state) => state[NAME].sourceApplicationDropdown
export const position = (state) => state[NAME].positionDropdown

export const region = (state) => state[NAME].regionDropdown
export const province = (state) => state[NAME].provinceDropdown
export const munincipality = (state) => state[NAME].munincipalityDropdown
export const barangay = (state) => state[NAME].barangayDropdown

export const sourceApplicationDropdown = createSelector(
    sourceApplication,
    data => {
        if (data || data != undefined) {
            return data.map((value) => {
                return {
                    label: value.name,
                    value: value.id
               }
           })
        }
    }
);

export const positionDropdown = createSelector(
    position,
    data => {
        if (data || data != undefined) {
            return data.map((value) => {
                return {
                    label: value.name,
                    value: value.id
               }
           })
        }
    }
);

export const regionDropdown = createSelector(
    region,
    data => {
        if (data || data != undefined) {
            return data.map((value) => {
                return {
                    label: value.name,
                    value: value.code
               }
           })
        }
    }
);

export const provinceDropdown = createSelector(
    province,
    data => {
        if (data || data != undefined) {
            return data.map((value) => {
                return {
                    label: value.name,
                    value: value.code
               }
           })
        }
    }
);

export const munincipalityDropdown = createSelector(
    munincipality,
    data => {
        if (data || data != undefined) {
            return data.map((value) => {
                return {
                    label: value.name,
                    value: value.code
               }
           })
        }
    }
);

export const barangayDropdown = createSelector(
    barangay,
    data => {
        if (data || data != undefined) {
            return data.map((value) => {
                return {
                    label: value.name,
                    value: value.code
               }
           })
        }
    }
);
