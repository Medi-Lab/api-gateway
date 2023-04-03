import {CreateRecordDto, UpdateRecordDto} from "../dto";

export interface RecordServiceInterface {
    createRecord(createRecordDto: CreateRecordDto);

    updateRecord(id: string, updateRecordDto: UpdateRecordDto);

    getRecords();

    getRecordById(id: string);

    deleteRecordById(id: string);
}