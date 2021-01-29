/// <reference types="Cypress" />



describe("CDN", function() {

    it('CDN-login', () =>
    {

        
        cy.get('#hs-eu-confirmation-button').click()
        cy.get(':nth-child(4) > .btn').click()
        
        //cy.url().should('include', './app')
      
       // cy.get('button[type="submit"]').click()
     

       
        
        //cy.get('.ss_text_large_1').contains('Dashboard')
   
       //cy.visit('https://customer-ui.qa.streamspace.me/app/projects')
       //cy.wait(10000)

       cy.location('pathname',this.timeout(10000)).should('include','/app/dashboard')
        cy.contains('Projects').should('be.visible').click()

        cy.wait(10000)
        
        cy.get('.project_name').should('be.visible').contains('Hive').click()

        //cy.contains('+ Create Bucket').click()
        cy.get('.btn').contains('+ Create Bucket').should('be.visible').click({force: true})
        
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
        cy.get('.ss_input').type(testname)
        //cy.contains('Create').click()
        cy.get('.btn').click()
        cy.contains(testname).click()

        //cy.get('.btn').click()
        //cy.get(':nth-child(7) > :nth-child(1) > .ss-hyperlink').click()
        //cy.get('.dropzone-text-content').click()
        ///cy.get('tbody > :nth-child(1) > :nth-child(1) > .ss-hyperlink').click()
        //cy.get('.dropzone-content').click()
   

   
        const filePath = "Screenshot1.png"
        //cy.get('.icon-outbox').attachFile(filePath)
      
        cy.get(':nth-child(2) > .ss-secondary-btn').contains('Add File').click()

        //attachFile(filePath)
        cy.wait(2000)
        const fileName='sample.pdf';
        cy.fixture('sample.pdf').then(fileContent =>{
            cy.get('input[type=file]').attachFile({fileContent, fileName, mimeType: 'application/pdf'})
       
          cy.wait(60000)

          cy.get('.mt-2 > .ss-hyperlink').contains(testname).click()
          
          cy.wait(3000)

          /* var link=cy.get('.icon-copy').click()
           cy.log(link)
           cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Copy to clipboard');
         })*/
         
         if
         (cy.get('.ss-ellipsis').contains('fzhn'))
         {
         cy.log('Link Generated')
         }
         else{
           cy.log('Generating Link')
         }


        })

          //console.log(x)

          //click close button
          
    
        //cy.get('.dropzone-content').attachFile(filePath)
        


    })


})
