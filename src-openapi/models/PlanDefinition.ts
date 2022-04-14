/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateISO } from './DateISO';
import type { UUID } from './UUID';

export type PlanDefinition = {
    id?: UUID;
    readonly resource?: PlanDefinition.resource;
    readonly marketplace?: string;
    name?: string;
    frequency?: PlanDefinition.frequency;
    interval?: number;
    payment_methods?: string;
    amount?: number;
    setup_amount?: number;
    currency?: PlanDefinition.currency;
    description?: string | null;
    duration?: number;
    created_at?: DateISO;
    updated_at?: DateISO;
};

export namespace PlanDefinition {

    export enum resource {
        PLAN = 'plan',
    }

    export enum frequency {
        DAILY = 'daily',
        MONTHLY = 'monthly',
        WEEKLY = 'weekly',
        ANNUALLY = 'annually',
    }

    export enum currency {
        BRL = 'BRL',
    }


}