import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {ReactionToResponseDto} from "../dto";

export interface ReactionToResponseServiceInterface {
    reactionToResponse(reactionToResponseDto: ReactionToResponseDto): Observable<ResponseInterface>;
}