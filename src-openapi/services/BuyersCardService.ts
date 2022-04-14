/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardDefinition } from '../models/CardDefinition';
import type { ListDefinition } from '../models/ListDefinition';
import type { UUID } from '../models/UUID';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BuyersCardService {

    /**
     * @param marketplaceId Identificador do marketplace
     * @param buyerId Identificador do comprador
     * @returns any Busca por todos os cartões de créditos de um comprador realilzada com sucesso
     * @throws ApiError
     */
    public static getCards(
marketplaceId: UUID,
buyerId: UUID,
): CancelablePromise<(ListDefinition & {
items?: Array<CardDefinition>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/buyers/{buyer_id}/cards',
            path: {
                'marketplace_id': marketplaceId,
                'buyer_id': buyerId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param buyerId Identificador do comprador
     * @param cardId Identificador do cartão de crédito
     * @returns CardDefinition Definir cartão de crédito padrão para um comprador realizado com sucesso
     * @throws ApiError
     */
    public static setDefaultCardForCustomer(
marketplaceId: UUID,
buyerId: UUID,
cardId: UUID,
): CancelablePromise<CardDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/buyers/{buyer_id}/cards/{card_id}/default',
            path: {
                'marketplace_id': marketplaceId,
                'buyer_id': buyerId,
                'card_id': cardId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param buyerId Identificador do comprador
     * @returns CardDefinition Busca por cartão de crédito padrão de um comprador realilzada com sucesso
     * @throws ApiError
     */
    public static getCustomerDefaultCard(
marketplaceId: UUID,
buyerId: UUID,
): CancelablePromise<CardDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/buyers/{buyer_id}/cards/default',
            path: {
                'marketplace_id': marketplaceId,
                'buyer_id': buyerId,
            },
        });
    }

}