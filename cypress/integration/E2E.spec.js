describe('It adds a folder, adds a todo inside that folder, and then deletes the folder', () => {
	it('adds a folder to the foldr list', () => {
		// Visit the website URL
		cy.visit('http://localhost:3000');

		// Click the plus to render the input
		cy.get('.add-folder').click();

		// Select and type folder name
		cy.get('.add-folder-input').type('Test Folder');

		// Submit the form and create the folder
		cy.get('.submit-folder').click();

		// Make sure the folder is on the page
		cy.contains('Test Folder');

		// Open the folder
		cy.get('.folder').contains('Test Folder').click();

		// Adds todo
		cy.get('.add-todo-input').type('Test Todo');
		cy.get('.add-todo').click();

		// Makes sure the todo shows up on the page
		cy.contains('Test Todo');

		// "Complete" the todo
		cy.get('.toggle').click();

		// Delete the todo
		cy.get('.delete').click();

		// Go back to home page
		cy.get('.home').click();

		// Delete the folder
		cy.get('.delete').click();
	});
});
