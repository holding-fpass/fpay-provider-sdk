/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardDefinition } from '../models/CardDefinition';
import type { TokenDefinition } from '../models/TokenDefinition';
import type { UUID } from '../models/UUID';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CardsService {

    /**
     * @param marketplaceId Identificador do marketplace
     * @param requestBody Informações para associar um cartão de crédito a um comprador
     * @returns CardDefinition Associação de um cartão de crédito a um comprador realizado com sucesso
     * @throws ApiError
     */
    public static associateCardWithCustomer(
marketplaceId: UUID,
requestBody?: {
token?: string;
customer?: string;
},
): CancelablePromise<CardDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/cards',
            path: {
                'marketplace_id': marketplaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param cardId Identificador do cartão de crédito
     * @returns CardDefinition Busca de um cartão de crédito realizado com sucesso
     * @throws ApiError
     */
    public static getCard(
marketplaceId: UUID,
cardId: UUID,
): CancelablePromise<CardDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/cards/{card_id}',
            path: {
                'marketplace_id': marketplaceId,
                'card_id': cardId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param cardId Identificador do cartão de crédito
     * @returns any Cartão crédito deletado com sucesso
     * @throws ApiError
     */
    public static deleteCard(
marketplaceId: UUID,
cardId: UUID,
): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/marketplaces/{marketplace_id}/cards/{card_id}',
            path: {
                'marketplace_id': marketplaceId,
                'card_id': cardId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param requestBody Informações para gerar um token de um cartão de crédito
     * @returns TokenDefinition Registro de um cartão de crédito realizado com sucesso
     * @throws ApiError
     */
    public static generateCardToken(
marketplaceId: UUID,
requestBody?: {
holder_name?: string;
expiration_month?: string;
expiration_year?: string;
card_number?: string;
security_code?: string;
},
): CancelablePromise<TokenDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/cards/tokens',
            path: {
                'marketplace_id': marketplaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}