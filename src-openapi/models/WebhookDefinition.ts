/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateISO } from './DateISO';
import type { UUID } from './UUID';

export type WebhookDefinition = {
    id?: UUID;
    resource?: WebhookDefinition.resource;
    endpoint?: string;
    description?: string | null;
    event?: WebhookDefinition.event;
    created_at?: DateISO;
    updated_at?: DateISO;
};

export namespace WebhookDefinition {

    export enum resource {
        EVENT = 'event',
    }

    export enum event {
        ALL = 'all',
        BANK_ACCOUNT_ASSOCIATED = 'bank_account.associated',
        BANK_ACCOUNT_DELETED = 'bank_account.deleted',
        BUYER_TRANSACTION_CANCELED = 'buyer.transaction.canceled',
        BUYER_TRANSACTION_CHARGE_BACK = 'buyer.transaction.charge_back',
        BUYER_TRANSACTION_DISPUTED = 'buyer.transaction.disputed',
        BUYER_TRANSACTION_FAILED = 'buyer.transaction.failed',
        BUYER_TRANSACTION_PRE_AUTHORIZED = 'buyer.transaction.pre_authorized',
        BUYER_TRANSACTION_REVERSED = 'buyer.transaction.reversed',
        BUYER_TRANSACTION_SUCCEEDED = 'buyer.transaction.succeeded',
        BUYER_TRANSACTION_UPDATED = 'buyer.transaction.updated',
        BUYER_CARD_ASSOCIATED = 'buyer.card.associated',
        DOCUMENT_CREATED = 'document.created',
        DOCUMENT_UPDATED = 'document.updated',
        INVOICE_CREATED = 'invoice.created',
        INVOICE_CANCELED = 'invoice.canceled',
        INVOICE_OVERDUE = 'invoice.overdue',
        INVOICE_PAID = 'invoice.paid',
        INVOICE_REFUNDED = 'invoice.refunded',
        PLAN_CREATED = 'plan.created',
        PLAN_DELETED = 'plan.deleted',
        PLAN_UPDATED = 'plan.updated',
        RECEIVABLE_CANCELED = 'receivable.canceled',
        RECEIVABLE_CREATED = 'receivable.created',
        RECEIVABLE_DELETED = 'receivable.deleted',
        RECEIVABLE_PAID = 'receivable.paid',
        RECEIVABLE_REFUNDED = 'receivable.refunded',
        RECEIVABLE_SCHEDULED = 'receivable.scheduled',
        SELLER_ACTIVED = 'seller.actived',
        SELLER_CREATED = 'seller.created',
        SELLER_DELETED = 'seller.deleted',
        SELLER_DENIED = 'seller.denied',
        SELLER_ENABLED = 'seller.enabled',
        SELLER_UPDATED = 'seller.updated',
        SUBSCRIPTION_ACTIVE = 'subscription.active',
        SUBSCRIPTION_CREATED = 'subscription.created',
        SUBSCRIPTION_DELETED = 'subscription.deleted',
        SUBSCRIPTION_EXPIRED = 'subscription.expired',
        SUBSCRIPTION_SUSPENDED = 'subscription.suspended',
        SUBSCRIPTION_UPDATED = 'subscription.updated',
        SUBSCRIPTION_PAID = 'subscription.paid',
        TRANSACTION_CANCELED = 'transaction.canceled',
        TRANSACTION_CAPTURE_FAILED = 'transaction.capture.failed',
        TRANSACTION_CAPTURE_SUCCEEDED = 'transaction.capture.succeeded',
        TRANSACTION_CHARGE_BACK = 'transaction.charge_back',
        TRANSACTION_COMMISSION_SUCCEEDED = 'transaction.commission.succeeded',
        TRANSACTION_CREATED = 'transaction.created',
        TRANSACTION_DISPUTE_SUCCEEDED = 'transaction.dispute.succeeded',
        TRANSACTION_DISPUTED = 'transaction.disputed',
        TRANSACTION_FAILED = 'transaction.failed',
        TRANSACTION_PRE_AUTHORIZATION_SUCCEEDED = 'transaction.pre_authorization.succeeded',
        TRANSACTION_PRE_AUTHORIZED = 'transaction.pre_authorized',
        TRANSACTION_REVERSED = 'transaction.reversed',
        TRANSACTION_SUCCEEDED = 'transaction.succeeded',
        TRANSACTION_UPDATED = 'transaction.updated',
        TRANSACTION_VOID_FAILED = 'transaction.void.failed',
        TRANSACTION_VOID_SUCCEEDED = 'transaction.void.succeeded',
        TRANSFER_CANCELED = 'transfer.canceled',
        TRANSFER_CONFIRMED = 'transfer.confirmed',
        TRANSFER_CREATED = 'transfer.created',
        TRANSFER_FAILED = 'transfer.failed',
        TRANSFER_SUCCEEDED = 'transfer.succeeded',
    }


}