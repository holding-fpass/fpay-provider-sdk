/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuyerDefinition } from '../models/BuyerDefinition';
import type { ListDefinition } from '../models/ListDefinition';
import type { UUID } from '../models/UUID';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BuyersService {

    /**
     * @param marketaplaceId Identificador do marketplace
     * @returns any Busca por todos os compradores realizada com sucesso
     * @throws ApiError
     */
    public static getBuyers(
marketaplaceId: UUID,
): CancelablePromise<(ListDefinition & {
items?: Array<BuyerDefinition>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketaplace_id}/buyers',
            path: {
                'marketaplace_id': marketaplaceId,
            },
        });
    }

    /**
     * @param marketaplaceId Identificador do marketplace
     * @param requestBody Informações para criar um comprador
     * @returns BuyerDefinition Registro de um comprador realizado com sucesso
     * @throws ApiError
     */
    public static createBuyer(
marketaplaceId: UUID,
requestBody?: BuyerDefinition,
): CancelablePromise<BuyerDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketaplace_id}/buyers',
            path: {
                'marketaplace_id': marketaplaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketaplaceId Identificador do marketplace
     * @param buyerId Identificador do comprador
     * @returns BuyerDefinition Busca de um comprador realizada com sucesso
     * @throws ApiError
     */
    public static getBuyer(
marketaplaceId: UUID,
buyerId: UUID,
): CancelablePromise<BuyerDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketaplace_id}/buyers/{buyer_id}',
            path: {
                'marketaplace_id': marketaplaceId,
                'buyer_id': buyerId,
            },
        });
    }

    /**
     * @param marketaplaceId Identificador do marketplace
     * @param buyerId Identificador do comprador
     * @param requestBody Informações para atualizar um comprador
     * @returns BuyerDefinition Comprador atualizado com sucesso
     * @throws ApiError
     */
    public static updateBuyer(
marketaplaceId: UUID,
buyerId: UUID,
requestBody?: BuyerDefinition,
): CancelablePromise<BuyerDefinition> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/marketplaces/{marketaplace_id}/buyers/{buyer_id}',
            path: {
                'marketaplace_id': marketaplaceId,
                'buyer_id': buyerId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketaplaceId Identificador do marketplace
     * @param buyerId Identificador do comprador
     * @returns any Comprador deletado com sucesso
     * @throws ApiError
     */
    public static deleteBuyer(
marketaplaceId: UUID,
buyerId: UUID,
): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/marketplaces/{marketaplace_id}/buyers/{buyer_id}',
            path: {
                'marketaplace_id': marketaplaceId,
                'buyer_id': buyerId,
            },
        });
    }

}