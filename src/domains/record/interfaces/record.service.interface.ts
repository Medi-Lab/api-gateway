import {CreateRecordDto, UpdateRecordDto} from "../dto";
import {Observable} from "rxjs";

export interface RecordServiceInterface {
    createRecord(createRecordDto: CreateRecordDto): Observable<CreateRecordDto>;

    updateRecord(id: string, updateRecordDto: UpdateRecordDto): Observable<CreateRecordDto>;

    getRecordById(id: string): Observable<CreateRecordDto>;

    getRecords(query): Observable<CreateRecordDto[]>;

    deleteRecordById(id: string): Observable<CreateRecordDto>;
}