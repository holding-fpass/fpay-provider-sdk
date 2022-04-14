/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceDefinition } from '../models/InvoiceDefinition';
import type { ListDefinition } from '../models/ListDefinition';
import type { UUID } from '../models/UUID';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BuyersInvoicesService {

    /**
     * @param marketplaceId Identificador do marketplace
     * @param buyerId Identificador do comprador
     * @returns any Busca por todas as faturas de um comprador realilzada com sucesso
     * @throws ApiError
     */
    public static getInvoicesByBuyer(
marketplaceId: UUID,
buyerId: UUID,
): CancelablePromise<(ListDefinition & {
items?: Array<InvoiceDefinition>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/buyers/{buyer_id}/invoices',
            path: {
                'marketplace_id': marketplaceId,
                'buyer_id': buyerId,
            },
        });
    }

}