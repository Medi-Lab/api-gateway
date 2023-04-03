import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {convertToObjectWithNumbers, formOrderBy, transformToArray} from "../helpers";

export const QueryDb = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const query = request.query;
        const params: any = {};
        let {sort, select, limit, offset, include, ...fields} = query;

        if (sort) {
            let orderBy;
            const isOrderByArray = sort.includes('[') && sort.includes(']');

            if (isOrderByArray) {
                orderBy = transformToArray(sort);
                orderBy = orderBy.map(orderItem => formOrderBy(orderItem));
            }

            if (!isOrderByArray) {
                orderBy = formOrderBy(sort.replaceAll(' ', ''));
            }

            params.orderBy = orderBy;
        }

        if (select) {
            let fieldsToSelect = transformToArray(select);

            select = {};
            fieldsToSelect.forEach(field => {
                select[field] = true;
            })

            params.select = select;
        }

        if (limit) {
            params.take = Number(limit);
        }

        if (offset) {
            params.skip = Number(offset);
        }

        if (include) {
            params.include = transformToArray(include);
        }

        if (fields) {
            params.where = convertToObjectWithNumbers(fields);
        }

        return params;
    },
);
