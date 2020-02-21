describe('Open SFE login page',function(){

        beforeEach(function() {
            cy.fixture('login').then((login)=>{
                this.login=login;
            })
            cy.fixture('cust_details').then((cust_details)=>{
                this.cust_details=cust_details;
            })
    })
    it('Confirm User is navigated to the login page',function(){
        cy.visit('http://frontend.icube.ga/auth/login')
        cy.get('.login-form-title')
        .should('contain','Sign in to I&M Bank Portal.')

        cy.get('.login-form-subtitle').should('contain','Enter your details below.')

        cy.wait(2000)
    })
it ('Allow successful login given valid credentials', function(){
    cy.get('[name="username"]').type(this.login.username)
    cy.get('[name="password"]').type(this.login.password);
    cy.get('[type="submit"]').click();
    cy.get('.headerTitle').should('contain','Add New Call');

})

// this space is for checking customer Identity
it ('Add a new call for a new customer', function(){

    cy.get('[placeholder="First Name"]').type(this.cust_details.Fname);
    cy.get('[placeholder="Last Name"]').type(this.cust_details.Lname);
    cy.get('[placeholder="Email Address"]').type(this.cust_details.Email);
     cy.get('[placeholder="+255712890256"]').type(this.cust_details.Pnumber);
    //Select Branch
    cy.get('.form-group').eq(7).within(()=>{
        cy.get('.css-2b097c-container',{timeout:10000}).first().click()
        cy.get('.css-26l3qy-menu',{timeout:10000})
        .contains('Maktaba')
        //.contains(this.cust_details.branchname)
        .trigger('mouseover')
        .click();
    })
    //Select Customer Sector
    cy.get('.form-group').eq(8).within(()=>{
        cy.get('.css-2b097c-container',{timeout:10000}).click()
        cy.get('.css-26l3qy-menu',{timeout:10000})
        .contains('Automobile Dealers')
        //.contains(this.cust_details.branchname)
        .trigger('mouseover')
        .click();
    })
    //Select Customer Segment
    cy.get('.form-group').eq(9).within(()=>{
        cy.get('.css-2b097c-container',{timeout:10000}).click()
        cy.get('.css-26l3qy-menu',{timeout:10000})
        .contains('Premium Banking')
        //.contains(this.cust_details.branchname)
        .trigger('mouseover')
        .click();
    })
    //Select Customer Type
    cy.get('.form-group').eq(10).within(()=>{
        cy.get('.css-2b097c-container',{timeout:10000}).click()
        cy.get('.css-26l3qy-menu',{timeout:10000})
        .contains('New')
        //.contains(this.cust_details.branchname)
        .trigger('mouseover')
        .click();
    })

  //cy.get('button[type="submit"]').click();


})

  })
