import {CreateDoctorDto, UpdateDoctorDto} from "../dto";

export interface DoctorServiceInterface {
    createDoctor(createDoctorDto: CreateDoctorDto);

    updateDoctor(id: string, updateDoctorDto: UpdateDoctorDto);

    getDoctorById(id: string);

    getDoctors();

    getMyDoctors(userId: string);

    deleteDoctorById(id: string);
}