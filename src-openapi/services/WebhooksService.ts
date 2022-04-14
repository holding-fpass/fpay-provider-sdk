/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListDefinition } from '../models/ListDefinition';
import type { UUID } from '../models/UUID';
import type { WebhookDefinition } from '../models/WebhookDefinition';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WebhooksService {

    /**
     * @param marketplaceId Identificador do marketplace
     * @returns any Busca por todos os webhooks realizada com sucesso
     * @throws ApiError
     */
    public static getWebhooks(
marketplaceId: UUID,
): CancelablePromise<(ListDefinition & {
items?: Array<WebhookDefinition>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/webhooks',
            path: {
                'marketplace_id': marketplaceId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador marketplace
     * @param requestBody Informações para criar um webhoook
     * @returns WebhookDefinition Registro de um webhook realizado com sucesso
     * @throws ApiError
     */
    public static createWebhook(
marketplaceId: UUID,
requestBody?: WebhookDefinition,
): CancelablePromise<WebhookDefinition> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/marketplaces/{marketplace_id}/webhooks',
            path: {
                'marketplace_id': marketplaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param webhookId Identificador do webhook
     * @returns WebhookDefinition Busca de um webhook realizada com sucesso
     * @throws ApiError
     */
    public static getWebhook(
marketplaceId: UUID,
webhookId: UUID,
): CancelablePromise<WebhookDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/marketplaces/{marketplace_id}/webhooks/{webhook_id}',
            path: {
                'marketplace_id': marketplaceId,
                'webhook_id': webhookId,
            },
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param webhookId Identificador do webhook
     * @param requestBody Informações para atualizar um webhook
     * @returns WebhookDefinition Webhook atualizado com sucesso
     * @throws ApiError
     */
    public static updateWebhook(
marketplaceId: UUID,
webhookId: UUID,
requestBody?: WebhookDefinition,
): CancelablePromise<WebhookDefinition> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/marketplaces/{marketplace_id}/webhooks/{webhook_id}',
            path: {
                'marketplace_id': marketplaceId,
                'webhook_id': webhookId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param marketplaceId Identificador do marketplace
     * @param webhookId Identificador do webhook
     * @returns any Webhook deletado com sucesso
     * @throws ApiError
     */
    public static deleteWebhook(
marketplaceId: UUID,
webhookId: UUID,
): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/marketplaces/{marketplace_id}/webhooks/{webhook_id}',
            path: {
                'marketplace_id': marketplaceId,
                'webhook_id': webhookId,
            },
        });
    }

}