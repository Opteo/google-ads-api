import { AdGroupCriterion } from './AdGroupCriterion'
// import { ListConfig, NewEntityConfig } from './Entity';

declare namespace Keyword {
    /**
     * Keyword Interface
     * @interface
     */
    export interface Keyword extends AdGroupCriterion {
        keyword: KeywordObject,
    }

    /**
     * KeywordObject Interface
     * @interface
     * @param keyword - text of the keyword (at most 80 characters and 10 words)
     * @param match_type - match type of the keyword
     */
    interface KeywordObject {
        text: string,
        match_type: MatchType
    }

     /**
     * Enum for MatchType
     * @readonly
     * @enum {string}
     */
    enum MatchType {
        BROAD = 'BROAD',
        EXACT = 'EXACT',
        PHRASE = 'PHRASE',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }

    // /**
    //  * Interface for ListKeywordsConfig
    //  * @interface  
    //  */
    // export interface ListKeywordsConfig extends ListConfig {
    //     ad_group_id: string|number
    // }


    /**
     * Interface for NewKeywordConfig
     * @interface  
     * @param keyword - text of the keyword (at most 80 characters and 10 words)
     * @param match_type - match type of the keyword
     */
    // export interface NewKeywordConfig extends NewEntityConfig {
    //     ad_group_id: string|number
    //     keyword: {
    //         text: string,
    //         match_type: string
    //     }
    // }

}
export = Keyword