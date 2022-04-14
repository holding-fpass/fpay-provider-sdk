/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardDefinition } from './CardDefinition';
import type { DateISO } from './DateISO';

export type TokenDefinition = {
    readonly id?: string;
    resource?: TokenDefinition.resource;
    readonly used?: boolean;
    type?: TokenDefinition.type;
    card?: CardDefinition;
    created_at?: DateISO;
    updated_at?: DateISO;
};

export namespace TokenDefinition {

    export enum resource {
        TOKEN = 'token',
    }

    export enum type {
        CARD = 'card',
    }


}