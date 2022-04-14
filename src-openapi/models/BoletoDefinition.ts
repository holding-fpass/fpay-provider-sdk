/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateISO } from './DateISO';
import type { UUID } from './UUID';

export type BoletoDefinition = {
    id?: UUID;
    resource?: BoletoDefinition.resource;
    readonly customer?: string;
    status?: BoletoDefinition.status;
    description?: string | null;
    expiration_date?: DateISO;
    payment_limit_date?: DateISO;
    paid_at?: DateISO;
    readonly bank_code?: string;
    readonly recipient?: string;
    readonly uri?: string;
    readonly barcode?: string;
    readonly address?: string | null;
    readonly accepted?: boolean;
    readonly printed?: boolean;
    readonly downloaded?: boolean;
    metadata?: any;
    created_at?: DateISO;
    updated_at?: DateISO;
};

export namespace BoletoDefinition {

    export enum resource {
        BOLETO = 'boleto',
    }

    export enum status {
        PAID = 'paid',
        NOT_PAID = 'not_paid',
    }


}