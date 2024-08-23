import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import mySchema from './schema';
import Employee from './Employee';
import Freelancer from './Freelancer';
import Other from './Other';

const adapter=new SQLiteAdapter({
    schema: mySchema
});

const database=new Database({
    adapter,
    modelClasses: [Employee, Freelancer, Other],
});

export default database;