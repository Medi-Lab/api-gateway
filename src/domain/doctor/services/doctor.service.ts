import {Injectable} from '@nestjs/common';
import {CreateDoctorDto, UpdateDoctorDto} from "../dto";
import {DoctorServiceInterface} from "../interfaces";

@Injectable()
export class DoctorService implements DoctorServiceInterface {
    createDoctor(createDoctorDto: CreateDoctorDto) {
        return createDoctorDto;
    }

    updateDoctor(id: string, updateDoctorDto: UpdateDoctorDto) {
        return {id, updateDoctorDto};
    }

    getDoctorById(id: string) {
        return id;
    }

    getDoctors() {
        return [];
    }

    getMyDoctors(userId: string) {
        return [userId]
    }

    deleteDoctorById(id: string) {
        return id;
    }
}
