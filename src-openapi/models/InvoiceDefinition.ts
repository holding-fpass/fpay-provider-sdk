/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateISO } from './DateISO';
import type { UUID } from './UUID';

export type InvoiceDefinition = {
    id?: UUID;
    resource?: InvoiceDefinition.resource;
    readonly subscription?: string;
    readonly customer?: string;
    description?: string | null;
    readonly payment_method?: string;
    due_date?: string;
    expiration_date?: DateISO;
    amount?: number;
    currency?: InvoiceDefinition.currency;
    paid_at?: DateISO;
    voided_at?: DateISO;
    readonly retries?: number;
    readonly max_retries?: number;
    status?: InvoiceDefinition.status;
    metadata?: any;
    created_at?: DateISO;
    updated_at?: DateISO;
};

export namespace InvoiceDefinition {

    export enum resource {
        INVOICE = 'invoice',
    }

    export enum currency {
        BRL = 'BRL',
    }

    export enum status {
        PAID = 'paid',
        PENDING = 'pending',
        CANCELED = 'canceled',
        FAILED = 'failed',
    }


}