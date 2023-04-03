import {Module} from '@nestjs/common';
import {AuthModule} from './domains/auth/auth.module';
import {ClinicModule} from './domains/clinic/clinic.module';
import {DoctorModule} from './domains/doctor/doctor.module';
import {RecordModule} from './domains/record/record.module';
import {ResponseModule} from './domains/response/response.module';
import {ConfigModule} from "@nestjs/config";
import {UserModule} from "./domains/user/user.module";
import {AdminModule} from './domains/admin/admin.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        UserModule,
        AuthModule,
        ClinicModule,
        DoctorModule,
        RecordModule,
        ResponseModule,
        AdminModule,
    ],
})
export class AppModule {
}
