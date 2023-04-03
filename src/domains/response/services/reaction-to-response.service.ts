import {Injectable} from "@nestjs/common";
import {ReactionToResponseDto} from "../dto";
import {ReactionToResponseServiceInterface} from "../interfaces/reaction-to-response.service.interface";

@Injectable()
export class ReactionToResponseService implements ReactionToResponseServiceInterface {
    likeResponse(reactionToResponseDto: ReactionToResponseDto) {
        return reactionToResponseDto;
    }

    dislikeResponse(reactionToResponseDto: ReactionToResponseDto) {
        return reactionToResponseDto;
    }
}