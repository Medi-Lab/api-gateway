import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Body, Controller, Inject, Post} from "@nestjs/common";
import {ReactionToResponseDto} from "../dto";
import {constants} from "../../../core/constants";
import {ReactionToResponseServiceInterface} from "../interfaces/reaction-to-response.service.interface";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@Controller('response-reaction')
export class ReactionToResponseController {
    constructor(
        @Inject(constants.tokens.REACTION_TO_RESPONSE_SERVICE_TOKEN)
        private readonly reactionToResponseService: ReactionToResponseServiceInterface) {
    }

    @ApiOperation({summary: 'Лайкнути відгук або дизлайкнути відгук'})
    @ApiResponse({status: 200})
    @Post()
    reactionToResponse(
        @Body() reactionToResponseDto: ReactionToResponseDto
    ): Observable<ResponseInterface> {
        return this.reactionToResponseService.reactionToResponse(reactionToResponseDto);
    }
}