// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {
    transformCustomEmojiRecord,
    transformRoleRecord,
    transformSystemRecord,
    transformTermsOfServiceRecord,
} from '@database/operator/server_data_operator/transformers/general';
import {createTestConnection} from '@database/operator/utils/create_test_connection';
import {OperationType} from '@typings/database/enums';

describe('*** Role Prepare Records Test ***', () => {
    it('=> transformRoleRecord: should return an array of type Role', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'isolated_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformRoleRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    id: 'role-1',
                    name: 'role-name-1',
                    permissions: [],
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('RoleModel');
    });
});

describe('*** System Prepare Records Test ***', () => {
    it('=> transformSystemRecord: should return an array of type System', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'isolated_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformSystemRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {id: 'system-1', name: 'system-name-1', value: 'system'},
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('SystemModel');
    });
});

describe('*** TOS Prepare Records Test ***', () => {
    it('=> transformTermsOfServiceRecord: should return an array of type TermsOfService', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'isolated_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformTermsOfServiceRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    id: 'tos-1',
                    accepted_at: 1,
                    create_at: 1613667352029,
                    user_id: 'user1613667352029',
                    text: '',
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('TermsOfServiceModel');
    });
});

describe('*** CustomEmoj Prepare Records Test ***', () => {
    it('=> transformCustomEmojiRecord: should return an array of type CustomEmoji', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'isolated_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformCustomEmojiRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    id: 'i',
                    create_at: 1580913641769,
                    update_at: 1580913641769,
                    delete_at: 0,
                    creator_id: '4cprpki7ri81mbx8efixcsb8jo',
                    name: 'boomI',
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('CustomEmojiModel');
    });
});

