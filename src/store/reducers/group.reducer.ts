import * as GroupActions from '../actions/group.action';
import { Group } from '../models/group.model';

export interface GroupState {
    group: Group,
    loading: boolean,
    error: any
}

const DEFAULT_STATE: GroupState = {
    group: null,
    loading: false,
    error: null
};

export function groupReducer(state = DEFAULT_STATE, action: GroupActions.Actions): GroupState {
    switch (action.type) {
        case GroupActions.CREATE_GROUP: {
            return {
                ...state,
                loading: true
            };
        }

        case GroupActions.CREATE_GROUP_SUCCESS: {
            return {
                ...state,
                loading: false,
                group: action.payload
            };
        }

        case GroupActions.CREATE_GROUP_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }
    }

    return state;
}

export const getGroup = store => store.group;