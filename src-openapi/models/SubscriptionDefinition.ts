/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateISO } from './DateISO';
import type { UUID } from './UUID';

export type SubscriptionDefinition = {
    readonly id: UUID;
    readonly resource: SubscriptionDefinition.resource;
    plan: string;
    customer: string;
    description?: string | null;
    payment_method: SubscriptionDefinition.payment_method;
    due_date: DateISO;
    due_since_date?: DateISO | null;
    readonly expiration_date: string;
    amount?: number | null;
    currency: SubscriptionDefinition.currency;
    readonly status: SubscriptionDefinition.status;
    readonly suspended_at: DateISO | null;
    readonly created_at: DateISO;
    readonly updated_at: DateISO;
};

export namespace SubscriptionDefinition {

    export enum resource {
        SUBSCRIPTION = 'subscription',
    }

    export enum payment_method {
        CREDIT = 'credit',
    }

    export enum currency {
        BRL = 'BRL',
    }

    export enum status {
        ACTIVE = 'active',
        CANCELED = 'canceled',
        EXPIRED = 'expired',
        SUSPENDED = 'suspended',
    }


}