import {appSchema,tableSchema} from '@nozbe/watermelondb'

export default mySchema=appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'employees',
            columns: [
                {name: 'profile_id', type: 'string'},
                {name: 'name', type: 'string'},
                {name: 'email_id', type: 'string'},
                {name: 'company', type: 'string', isOptional: true},
                {name: 'position', type: 'string', isOptional: true},
                {name: 'domains', type: 'string'},
                {name: 'tags', type: 'string', isOptional:true},
                {name: 'linkedin_url', type: 'string', isOptional: true},
                {name: 'website_url', type: 'string', isOptional: true},
                {name: 'location', type: 'string', isOptional: true},
                {name: 'note', type: 'string', isOptional: true},
                { name: 'created_at', type: 'number' }, //CHECK required?
                { name: 'updated_at', type: 'number' }, //CHECK required?
            ]
        }),
        tableSchema({
            name: 'freelancers',
            columns:[
                {name: 'profile_id', type: 'string'},
                {name: 'name', type: 'string'},
                {name: 'email_id', type: 'string'},
                {name: 'domains', type: 'string'},
                {name: 'tags', type: 'string', isOptional:true},
                {name: 'linkedin_url', type: 'string', isOptional: true},
                {name: 'website_url', type: 'string', isOptional: true},
                {name: 'location', type: 'string', isOptional: true},
                {name: 'note', type: 'string', isOptional: true},
                { name: 'created_at', type: 'number' }, //CHECK required?
                { name: 'updated_at', type: 'number' },
            ]
        }),
        tableSchema({
            name: 'others',
            columns:[
                {name: 'profile_id', type: 'string'},
                {name: 'name', type: 'string'},
                {name: 'email_id', type: 'string'},
                {name: 'domains', type: 'string'},
                {name: 'tags', type: 'string', isOptional:true},
                {name: 'linkedin_url', type: 'string', isOptional: true},
                {name: 'website_url', type: 'string', isOptional: true},
                {name: 'location', type: 'string', isOptional: true},
                {name: 'note', type: 'string', isOptional: true},
                { name: 'created_at', type: 'number' },
                { name: 'updated_at', type: 'number' },
            ]
        }),
    ]
})