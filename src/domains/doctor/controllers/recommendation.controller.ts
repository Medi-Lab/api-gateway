import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Controller, Get, Inject, Param, Post, Query} from "@nestjs/common";
import {DefaultParam} from "../../../core";
import {RecommendationServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";

@ApiTags('Рекомендування лікаря')
@Controller('doctor/recommendation')
export class RecommendationController {
    constructor(
        @Inject(constants.tokens.RECOMMENDATION_SERVICE_TOKEN)
        private readonly recommendationService: RecommendationServiceInterface) {
    }

    //в кверях значення і id
    @ApiOperation({summary: 'Автоматичний підбір лікаря за вказаними критеріями'})
    @ApiResponse({status: 200})
    @Post(':id')
    getRecommendedDoctor(@Param() {id}: DefaultParam, @Query() query) {
        return this.recommendationService.getRecommendedDoctor(id, query);
    }

    @ApiOperation({summary: 'Рекомендація лікарів на початковій сторінці'})
    @ApiResponse({status: 200})
    @Get(':id')
    getRecommendationList(@Param() {id}: DefaultParam) {
        return this.recommendationService.getRecommendationList(id);
    }
}