describe('It adds a folder', () => {
	it('adds a folder to the foldr list', () => {
		cy.visit('http://localhost:3000');

		cy.get('.add-folder').click();

		cy.get('.add-folder-input').type('Test Folder');

		cy.get('.submit-folder').click();

		cy.get('.cancel-folder').click();
	});
});
