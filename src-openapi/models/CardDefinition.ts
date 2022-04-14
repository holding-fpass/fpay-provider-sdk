/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateISO } from './DateISO';

export type CardDefinition = {
    readonly id?: string;
    resource?: CardDefinition.resource;
    readonly customer?: string | null;
    description?: string | null;
    first4digits?: string;
    last4digits?: string;
    card_brand?: string;
    expiration_month?: string;
    expiration_year?: string;
    holder_name?: string;
    created_at?: DateISO;
    updated_at?: DateISO;
};

export namespace CardDefinition {

    export enum resource {
        CARD = 'card',
    }


}