import {Model} from '@nozbe/watermelondb'
import {field, text, date, readonly,json} from '@nozbe/watermelondb/decorators'

export default class Freelancer extends Model{
    static table='freelancers'

    static sanitizeDomains=(rawDomains)=>{
        return rawDomains;
    }

    static sanitizeTags=(rawTags)=>{
        return rawTags;
    }

    @readonly @text('profile_id') profileId
    @text('name') name
    @text('email_id') emailId
    @json('domains',json=>json) domains
    @json('tags',json=>json) tags
    @text('linkedin_url') linkedinUrl
    @text('website_url') websiteUrl
    @text('location') location
    @text('note') note
    @readonly @date('created_at') createdAt
    @readonly @date('updated_at') updatedAt
}