import { Action } from '@ngrx/store';
import { ActionWithPayload } from '.';
import { Group } from '../models/group.model';

export const CREATE_GROUP = '[GROUP] CREATE_GROUP';
export const CREATE_GROUP_SUCCESS = '[GROUP] CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAILURE = '[GROUP] CREATE_GROUP_FAILURE';


export class CreateGroup implements ActionWithPayload<Group> {
    readonly type = CREATE_GROUP;

    constructor(public payload: Group) {}
}

export class CreateGroupSuccess implements ActionWithPayload<Group> {
    readonly type = CREATE_GROUP_SUCCESS;

    constructor(public payload: Group) {}
}

export class CreateGroupFailure implements ActionWithPayload<Error> {
    readonly type = CREATE_GROUP_FAILURE;

    constructor(public payload: Error) {}
}

export type Actions = CreateGroup | CreateGroupSuccess | CreateGroupFailure;