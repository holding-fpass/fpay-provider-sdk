/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceDefinition } from '../models/InvoiceDefinition';
import type { ListDefinition } from '../models/ListDefinition';
import type { UUID } from '../models/UUID';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InvoicesService {

    /**
     * @param marketplaceId Identificador do marketplace
     * @returns any Busca por todas as faturas realizada com sucesso
     * @throws ApiError
     */
    public static getInvoices(
marketplaceId: UUID,
): CancelablePromise<(ListDefinition & {
items?: Array<InvoiceDefinition>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/invoices',
            path: {
                'marketplace_id': marketplaceId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador marketplace
     * @param requestBody Informações para criar uma fatura
     * @returns InvoiceDefinition Registro de uma fatura realizado com sucesso
     * @throws ApiError
     */
    public static createInvoice(
marketplaceId: UUID,
requestBody?: InvoiceDefinition,
): CancelablePromise<InvoiceDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/invoices',
            path: {
                'marketplace_id': marketplaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param invoiceId Identificador da fatura
     * @returns InvoiceDefinition Busca de uma fatura realizada com sucesso
     * @throws ApiError
     */
    public static getInvoice(
marketplaceId: UUID,
invoiceId: UUID,
): CancelablePromise<InvoiceDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/invoices/{invoice_id}',
            path: {
                'marketplace_id': marketplaceId,
                'invoice_id': invoiceId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param invoiceId Identificador da fatura
     * @param requestBody Informações para atualizar uma fatura
     * @returns InvoiceDefinition Fatura atualizada com sucesso
     * @throws ApiError
     */
    public static updateInvoice(
marketplaceId: UUID,
invoiceId: UUID,
requestBody?: InvoiceDefinition,
): CancelablePromise<InvoiceDefinition> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/marketplaces/{marketplace_id}/invoices/{invoice_id}',
            path: {
                'marketplace_id': marketplaceId,
                'invoice_id': invoiceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param invoiceId Identificador da fatura
     * @returns any Fatura cancelada com sucesso
     * @throws ApiError
     */
    public static cancelInvoice(
marketplaceId: UUID,
invoiceId: UUID,
): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/marketplaces/{marketplace_id}/invoices/{invoice_id}',
            path: {
                'marketplace_id': marketplaceId,
                'invoice_id': invoiceId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param invoiceId Identificador da fatura
     * @returns InvoiceDefinition Fatura aprovada com sucesso
     * @throws ApiError
     */
    public static approveInvoice(
marketplaceId: UUID,
invoiceId: UUID,
): CancelablePromise<InvoiceDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/invoices/{invoice_id}/approve',
            path: {
                'marketplace_id': marketplaceId,
                'invoice_id': invoiceId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param invoiceId Identificador da fatura
     * @returns InvoiceDefinition Fatura estornada com sucesso
     * @throws ApiError
     */
    public static refundInvoice(
marketplaceId: UUID,
invoiceId: UUID,
): CancelablePromise<InvoiceDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/invoices/{invoice_id}/void',
            path: {
                'marketplace_id': marketplaceId,
                'invoice_id': invoiceId,
            },
        });
    }

}