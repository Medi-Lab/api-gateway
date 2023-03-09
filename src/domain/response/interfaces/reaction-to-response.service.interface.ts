import {ReactionToResponseDto} from "../dto";

export interface ReactionToResponseServiceInterface {
    likeResponse(reactionToResponseDto: ReactionToResponseDto);

    dislikeResponse(reactionToResponseDto: ReactionToResponseDto);
    
}