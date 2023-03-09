import {CreateClinicDto, UpdateClinicDto} from "../dto";

export interface ClinicServiceInterface {
    createClinic(createClinicDto: CreateClinicDto);

    updateClinic(id: string, updateClinicDto: UpdateClinicDto);

    getClinicById(id: string);

    getClinics();

    deleteById(id: string);

}