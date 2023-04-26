import {Inject, Injectable} from "@nestjs/common";
import {ReactionToResponseDto} from "../dto";
import {ReactionToResponseServiceInterface} from "../interfaces/reaction-to-response.service.interface";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@Injectable()
export class ReactionToResponseService implements ReactionToResponseServiceInterface {
    constructor(
        @Inject(constants.microservices_names.response)
        private readonly responseClient: ClientProxy
    ) {
    }

    reactionToResponse(reactionToResponseDto: ReactionToResponseDto): Observable<ResponseInterface> {
        return this.responseClient
            .send('reaction_to_response', reactionToResponseDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}