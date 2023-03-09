import {Module} from '@nestjs/common';
import {AuthModule} from './domain/auth/auth.module';
import {ClinicModule} from './domain/clinic/clinic.module';
import {DoctorModule} from './domain/doctor/doctor.module';
import {RecordModule} from './domain/record/record.module';
import {ResponseModule} from './domain/response/response.module';
import {ConfigModule} from "@nestjs/config";
import {UserModule} from "./domain/user/user.module";
import {RoleModule} from './domain/role/role.module';
import {AdminModule} from './domain/admin/admin.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        UserModule,
        AuthModule,
        ClinicModule,
        DoctorModule,
        RecordModule,
        ResponseModule,
        RoleModule,
        AdminModule,
    ],
})
export class AppModule {
}
