export interface RecommendationServiceInterface {
    getRecommendedDoctor(id: string, query: any);

    getRecommendationList(userId: string);
}