/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListDefinition } from '../models/ListDefinition';
import type { SubscriptionDefinition } from '../models/SubscriptionDefinition';
import type { UUID } from '../models/UUID';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubscriptionsService {

    /**
     * @param marketplaceId Identificador do marketplace
     * @returns any Busca por todas as assinaturas realizada com sucesso
     * @throws ApiError
     */
    public static getSubscriptions(
marketplaceId: UUID,
): CancelablePromise<(ListDefinition & {
items?: Array<(SubscriptionDefinition & {
readonly due_since_date: any;
readonly amount: any;
readonly description: any;
})>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/subscriptions',
            path: {
                'marketplace_id': marketplaceId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador marketplace
     * @param requestBody Informações para criar uma assinatura
     * @returns any Registro de uma assinatura realizado com sucesso
     * @throws ApiError
     */
    public static createSubscription(
marketplaceId: UUID,
requestBody?: SubscriptionDefinition,
): CancelablePromise<(SubscriptionDefinition & {
readonly due_since_date: any;
readonly amount: any;
readonly description: any;
})> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/subscriptions',
            path: {
                'marketplace_id': marketplaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param subscriptionId Identificador da assinatura
     * @returns any Busca de uma assinatura realizada com sucesso
     * @throws ApiError
     */
    public static getSubscription(
marketplaceId: UUID,
subscriptionId: UUID,
): CancelablePromise<(SubscriptionDefinition & {
readonly due_since_date: any;
readonly amount: any;
readonly description: any;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/subscriptions/{subscription_id}',
            path: {
                'marketplace_id': marketplaceId,
                'subscription_id': subscriptionId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param subscriptionId Identificador da assinatura
     * @param requestBody Informações para atualizar uma assinatura
     * @returns any Assinatura atualizada com sucesso
     * @throws ApiError
     */
    public static updateSubscription(
marketplaceId: UUID,
subscriptionId: UUID,
requestBody?: SubscriptionDefinition,
): CancelablePromise<(SubscriptionDefinition & {
readonly due_since_date: any;
readonly amount: any;
readonly description: any;
})> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/marketplaces/{marketplace_id}/subscriptions/{subscription_id}',
            path: {
                'marketplace_id': marketplaceId,
                'subscription_id': subscriptionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param subscriptionId Identificador da assinatura
     * @returns any Assinatura cancelada com sucesso
     * @throws ApiError
     */
    public static cancelSubscription(
marketplaceId: UUID,
subscriptionId: UUID,
): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/marketplaces/{marketplace_id}/subscriptions/{subscription_id}',
            path: {
                'marketplace_id': marketplaceId,
                'subscription_id': subscriptionId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param subscriptionId Identificador da assinatura
     * @returns any Assinatura suspensa com sucesso
     * @throws ApiError
     */
    public static suspendSubscription(
marketplaceId: UUID,
subscriptionId: UUID,
): CancelablePromise<(SubscriptionDefinition & {
readonly due_since_date: any;
readonly amount: any;
readonly description: any;
})> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/subscriptions/{subscription_id}/suspend',
            path: {
                'marketplace_id': marketplaceId,
                'subscription_id': subscriptionId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param subscriptionId Identificador da assinatura
     * @returns any Assinatura ativada com sucesso
     * @throws ApiError
     */
    public static reactivateSubscription(
marketplaceId: UUID,
subscriptionId: UUID,
): CancelablePromise<(SubscriptionDefinition & {
readonly due_since_date: any;
readonly amount: any;
readonly description: any;
})> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/subscriptions/{subscription_id}/reactivate',
            path: {
                'marketplace_id': marketplaceId,
                'subscription_id': subscriptionId,
            },
        });
    }

}