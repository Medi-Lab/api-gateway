import {Injectable} from '@nestjs/common';
import {CreateRecordDto, UpdateRecordDto} from "./dto";
import {RecordServiceInterface} from "./interfaces/record.service.interface";

@Injectable()
export class RecordService implements RecordServiceInterface {
    createRecord(createRecordDto: CreateRecordDto) {
        return createRecordDto;
    }

    updateRecord(id: string, updateRecordDto: UpdateRecordDto) {
        return {id, updateRecordDto}
    }

    getRecords() {
        return [];
    }

    getRecordById(id: string) {
        return id;
    }

    deleteRecordById(id: string) {
        return id;
    }
}
