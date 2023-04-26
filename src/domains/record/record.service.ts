import {Inject, Injectable} from '@nestjs/common';
import {CreateRecordDto, UpdateRecordDto} from "./dto";
import {RecordServiceInterface} from "./interfaces/record.service.interface";
import {constants} from "../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {catchError, map, Observable, of} from "rxjs";

@Injectable()
export class RecordService implements RecordServiceInterface {
    constructor(
        @Inject(constants.microservices_names.record)
        private readonly recordClient: ClientProxy
    ) {
    }

    createRecord(createRecordDto: CreateRecordDto): Observable<CreateRecordDto> {
        return this.recordClient
            .send('create_record', createRecordDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateRecord(id: string, updateRecordDto: UpdateRecordDto): Observable<CreateRecordDto> {
        return this.recordClient
            .send('update_record', {id: Number(id), data: updateRecordDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getRecordById(id: string): Observable<CreateRecordDto> {
        return this.recordClient
            .send('get_record_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getRecords(query): Observable<CreateRecordDto[]> {
        return this.recordClient
            .send('get_records', query)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteRecordById(id: string): Observable<CreateRecordDto> {
        return this.recordClient
            .send('delete_record_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}
