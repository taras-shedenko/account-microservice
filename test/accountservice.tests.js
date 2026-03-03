import * as chai from 'chai';
import sinon from 'sinon';
const expect = chai.expect;
import * as accountService from '../src/services/account.js';
import account from '../src/models/account.js'

describe('getAccountById service', () => {
    let findByIdStub;
 
    beforeEach(() => {
        findByIdStub = sinon.stub(account, 'findById');
    });

    afterEach(async () => {
        await findByIdStub.restore();
    });

    it('should return the account if found by  id', async () => {
        const expectedAccountId = '12345';
        const expectedAccount = { name: 'Test Account', number: '123-456-7890' };
        findByIdStub.withArgs(expectedAccountId).resolves(expectedAccount);

        const account = await accountService.getAccountById(expectedAccountId);

        expect(account).to.include(expectedAccount);
        expect(findByIdStub.calledOnceWith(expectedAccountId)).to.be.true;
    });

    it('should return null if account not found', async () => {
        const expectedAccountId = '54321';
        findByIdStub.withArgs(expectedAccountId).resolves(null);

        const account = await accountService.getAccountById(expectedAccountId);

        expect(account).to.be.null;
        expect(findByIdStub.calledOnceWith(expectedAccountId)).to.be.true;
    });

    it('should rethrow errors from findById', async () => {
        const expectedAccountId = '98765';
        const expectedError = new Error('Database error');
        findByIdStub.withArgs(expectedAccountId).rejects(expectedError);

        try {
            await accountService.getAccountById(expectedAccountId);
        } catch (error) {
            expect(error).to.equal(expectedError);
            expect(findByIdStub.calledOnceWith(expectedAccountId)).to.be.true;
        }
    });
});
