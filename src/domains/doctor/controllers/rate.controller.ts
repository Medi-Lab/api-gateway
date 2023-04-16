import {Body, Controller, Get, Inject, Param, Post, Query} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateRateDto, GetUserRateDto} from "../dto";
import {RateServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@ApiTags('Рейтинг')
@Controller('rate')
export class RateController {
    constructor(
        @Inject(constants.tokens.RATE_SERVICE_TOKEN)
        private readonly rateService: RateServiceInterface) {
    }

    @ApiOperation({summary: 'Оцінити лікаря'})
    @ApiResponse({status: 200})
    @Post()
    rateDoctor(@Body() createRateDto: CreateRateDto): Observable<ResponseInterface | CreateRateDto> {
        return this.rateService.rateDoctor(createRateDto);
    }

    @ApiOperation({summary: 'Отримати середній рейтинг лікаря'})
    @ApiResponse({status: 200})
    @Get('average/:id')
    getAverageRateOfDoctor(@Param() {id}): Observable<ResponseInterface> {
        return this.rateService.getAverageRateOfDoctor(id);
    }

    //?id_user=1&id_doctor=2
    @ApiOperation({summary: 'Отримати дані про те як користуваач оцінив лікаря'})
    @ApiResponse({status: 200})
    @Get()
    getUserRate(@Query() query: GetUserRateDto): Observable<ResponseInterface> {
        return this.rateService.getUserRate(query);
    }
}