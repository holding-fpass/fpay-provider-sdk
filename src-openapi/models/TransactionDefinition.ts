/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoletoDefinition } from './BoletoDefinition';
import type { CardDefinition } from './CardDefinition';
import type { DateISO } from './DateISO';
import type { UUID } from './UUID';

export type TransactionDefinition = {
    readonly id?: UUID;
    readonly resource?: TransactionDefinition.resource;
    readonly on_behalf_of?: string;
    readonly customer?: string | null;
    status?: TransactionDefinition.status;
    amount?: number;
    readonly originalAmount?: number;
    currency?: TransactionDefinition.currency;
    description?: string | null;
    statement_descriptor?: string | null;
    payment_type?: TransactionDefinition.payment_type;
    payment_method?: (CardDefinition | BoletoDefinition);
    readonly transaction_number?: string;
    readonly gateway_authorizer?: string;
    readonly sales_receipt?: string;
    installment_plan?: number | null;
    readonly refunded?: boolean;
    readonly voided?: boolean;
    readonly captured?: boolean;
    readonly fees?: string;
    expected_on?: DateISO;
    voided_at?: DateISO;
    history?: Array<{
readonly id?: string;
readonly amount?: string;
status?: 'new' | 'pending' | 'pre_authorized' | 'succeeded' | 'canceled' | 'failed' | 'reversed' | 'refunded' | 'dispute' | 'charge_back';
readonly authorizer?: string;
readonly created_at?: string;
readonly transaction?: string;
readonly authorizer_id?: string;
readonly response_code?: string;
readonly operation_type?: string;
readonly response_message?: string;
readonly authorization_nsu?: string;
readonly authorization_code?: string;
readonly gatewayResponseTime?: string;
}>;
    metadata?: any;
    created_at?: DateISO;
    updated_at?: DateISO;
};

export namespace TransactionDefinition {

    export enum resource {
        TRANSACTION = 'transaction',
    }

    export enum status {
        NEW = 'new',
        PENDING = 'pending',
        PRE_AUTHORIZED = 'pre_authorized',
        SUCCEEDED = 'succeeded',
        CANCELED = 'canceled',
        FAILED = 'failed',
        REVERSED = 'reversed',
        REFUNDED = 'refunded',
        DISPUTE = 'dispute',
        CHARGE_BACK = 'charge_back',
    }

    export enum currency {
        BRL = 'BRL',
    }

    export enum payment_type {
        CREDIT = 'credit',
        BOLETO = 'boleto',
    }


}