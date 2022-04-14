/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListDefinition = {
    resource?: ListDefinition.resource;
    items?: Array<any>;
    limit?: number;
    offset?: number;
    page?: number;
    total?: number;
    total_pages?: number;
    has_more?: boolean;
};

export namespace ListDefinition {

    export enum resource {
        LIST = 'list',
    }


}