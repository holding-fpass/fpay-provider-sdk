/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuyerDefinition } from '../models/BuyerDefinition';
import type { ListDefinition } from '../models/ListDefinition';
import type { PlanDefinition } from '../models/PlanDefinition';
import type { UUID } from '../models/UUID';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PlansService {

    /**
     * @param marketplaceId Identificador do marketplace
     * @returns any Busca por todos os planos realizada com sucesso
     * @throws ApiError
     */
    public static getPlans(
marketplaceId: UUID,
): CancelablePromise<(ListDefinition & {
items?: Array<PlanDefinition>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/plans',
            path: {
                'marketplace_id': marketplaceId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador marketplace
     * @param requestBody Informações para criar um plano
     * @returns PlanDefinition Registro de um plano realizado com sucesso
     * @throws ApiError
     */
    public static createPlan(
marketplaceId: UUID,
requestBody?: PlanDefinition,
): CancelablePromise<PlanDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/plans',
            path: {
                'marketplace_id': marketplaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param planId Identificador do plano
     * @returns PlanDefinition Busca de um plano realizada com sucesso
     * @throws ApiError
     */
    public static getPlan(
marketplaceId: UUID,
planId: UUID,
): CancelablePromise<PlanDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/plans/{plan_id}',
            path: {
                'marketplace_id': marketplaceId,
                'plan_id': planId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param planId Identificador do plano
     * @param requestBody Informações para atualizar um plano
     * @returns BuyerDefinition Plano atualizado com sucesso
     * @throws ApiError
     */
    public static updatePlan(
marketplaceId: UUID,
planId: UUID,
requestBody?: PlanDefinition,
): CancelablePromise<BuyerDefinition> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/marketplaces/{marketplace_id}/plans/{plan_id}',
            path: {
                'marketplace_id': marketplaceId,
                'plan_id': planId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param planId Identificador do plano
     * @returns any Plano deletado com sucesso
     * @throws ApiError
     */
    public static deletePlan(
marketplaceId: UUID,
planId: UUID,
): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/marketplaces/{marketplace_id}/plans/{plan_id}',
            path: {
                'marketplace_id': marketplaceId,
                'plan_id': planId,
            },
        });
    }

}