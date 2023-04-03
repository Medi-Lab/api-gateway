import {Injectable} from "@nestjs/common";
import {RecommendationServiceInterface} from "../interfaces";

@Injectable()
export class RecommendationService implements RecommendationServiceInterface {
    getRecommendedDoctor(id: string, query: any) {
        return {query, id}
    }

    getRecommendationList(userId: string) {
        return userId;
    }
}