import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Controller, Inject, Post} from "@nestjs/common";
import {ReactionToResponseDto} from "../dto";
import {constants} from "../../../core/constants";
import {ReactionToResponseServiceInterface} from "../interfaces/reaction-to-response.service.interface";

@Controller('reaction-to-response')
export class ReactionToResponseController {
    constructor(
        @Inject(constants.tokens.REACTION_TO_RESPONSE_SERVICE_TOKEN)
        private readonly reactionToResponseService: ReactionToResponseServiceInterface) {
    }

    @ApiOperation({summary: 'Лайкнути відгук'})
    @ApiResponse({status: 200})
    @Post('like')
    likeResponse(reactionToResponseDto: ReactionToResponseDto) {
        return this.reactionToResponseService.likeResponse(reactionToResponseDto);
    }

    @ApiOperation({summary: 'Дизлайкнути відгук'})
    @ApiResponse({status: 200})
    @Post('dislike')
    dislikeResponse(reactionToResponseDto: ReactionToResponseDto) {
        return this.reactionToResponseService.dislikeResponse(reactionToResponseDto);
    }
}