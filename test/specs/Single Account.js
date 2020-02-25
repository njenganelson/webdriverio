var assert = require('assert');

describe('i&mbank Needs Analysis screen, ', function() {
  browser.timeouts('scripts', 15000);
  it('Open browser',function(){
    browser.url('http://customer-onboarding-onboarding-uat.apps');
    browser.maximizeWindow();
    //browser.url('http://10.5.51.245:3000/needs-analysis');
  })
    
  it('Verify the description on the landing page',function() {
    browser.waitForExist('.title');
    var need_title = $('.title');
    var text = browser.getText('.title');
    assert.equal(text,'THE EASIEST WAY\nTO START BANKING WITH I&M');

  });
  it('Verify the Information on the Need Analysis Landing page', function() {
   browser.waitForExist('.description')
    var need_description = $('.description');
    var text = browser.getText('.description');
    console.log(text);

  });
/*it('Verify user is able to see all products', function() {
  browser.click('#inm__show-accounts');


});*/
  it('Click on Individual accounts',function(){
    browser.click('.option-title');
  });
describe('Confirm Whether Customer is existing or New',function(){
  it('Customer is New',function(){
    browser.waitForExist('.existing-customer__title')
    browser.click('#new_customer');
  })
});
describe('View all Accounts',function(){
  
  it('Click on Individual accounts',function(){
    browser.click('#inm__account-config-back-button');
  })
  it('Customer should see all accounts offered at I&M bank', function () {
    var accounts_title = $('.title');
    var text = browser.getText('.title');
    console.log(text);
})
});
// it('Verify that customer is able to open Premium select account', function() {
//   browser.click('#inm__btn-premium-esteem');

// });
describe('Verify that customer is able to open their preferred Account Type',function(){

  it('Select Customer required account Type',function(){
    //browser.click('#inm__btn-young-professionals');
    //browser.click('#inm__btn-sapphire-foreign-currency');
    //browser.click('#inm__btn-premium-select');
    browser.click('#inm__btn-personal-sapphire');
    //browser.click('#inm__btn-personal-bahati')
    //browser.click('#inm__btn-personal-malaika')
    //browser.click('#inm__btn-personal-tayari')
  })
  it('select the account to open', function() {
    browser.click('.open-acc-btn');
  });
  it('Review account feature',function(){
    browser.click('.ui.button');
  });
})

});

/*describe('i&mbank More than one account, ', function() {
  browser.timeouts('scripts', 1000);
it('Verify user can select no', function () {
  browser.click('.ui.button.prompt-btn-no');

});

  it('User should see the information of the account selected', function() {
    var selected_account = $('.title');
    selected_account.waitForExist(5000);
    var text = browser.getText('.title');
    console.log(text);

  });

  it('select the account to open', function() {
    browser.click('#ui button open-acc-btn');

  });
  });
*/
describe('i&mbank Documents Requirements', function() {
  it('Verifies User is shown the Documents Required in the process', function() {
    browser.waitForEnabled('.inm__documents-required-modal');
    //browser.click('label[for="residency-type-non-resident"]');
    browser.click('label[for="residency-type-resident"]');
    browser.click('.confirm-btn');
  });
  it('should submit sucessfully if all fields are correctly populated', function(){
    //Randomize phone numbers
    var phone_number = Math.random().toString().slice(2,10);
    console.log(phone_number);
    var random_phone = '7'+phone_number;
    //Randomize ID Number
    var random_id_number = Math.random().toString().slice(4,12);
    //Randomize email_adress
    //var chars = 'abcdefghijklmnopqrstuvwxyz';
    //return chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@gmail.com';
    var email = 'testing'+ Math.random().toString(8).substring(2,8) + '@gmail.com';
    browser.setValue('#inm__basic-info-first-name', 'JACKTON');
    browser.setValue('#inm__basic-info-last-name', 'MWANIKI');
    browser.setValue('#inm__basic-info-middle-name','Jnr.');
    browser.setValue('#inm__basic-info-identity', random_id_number);
    browser.setValue('.react-tel-input input','');
    var gender =$('#inm__basic-info-gender');
    gender.click();
    browser.getText('#inm__basic-info-gender','option:checked');
    var day =$('#inm__select-day');
    browser.click('#inm__select-day');
    browser.click('#inm__select-day .item:nth-of-type(12)')
    var month =$('#inm__select-month');
    browser.click('#inm__select-month');
    var year =$('#inm__select-year');
    browser.click('#inm__select-year');
    browser.click('#inm__select-year .item:nth-of-type(20)');
    //browser.click();
    browser.setValue('.react-tel-input input', random_phone);
    browser.setValue('#inm__basic-info-email', email);
    browser.setValue('#inm__basic-info-referralCode','1622');
    browser.click('.checkbox');
    var status = browser.isExisting('.inm__checkbox-error');
    browser.pause(4000)
    browser.click('#inm__basic-info-next-button');
  });

});
describe('i&mbank OTP screen', function() {
  it('Verifies OTP input accepts only numerals', function(){
    browser.waitForEnabled('.inm__otp-verification-form');
    browser.waitForEnabled('#inm__otp-verification-code');
    browser.setValue('#inm__otp-verification-code','abcdef');
    var value = browser.getValue('#inm__otp-verification-code');
    assert.equal(value,'');
});

 it('Verifies OTP input accepts default values of 555555', function(){
    browser.setValue('#inm__otp-verification-code','555555');
  });
  
});

describe('i&mbank Customer place of residence screen', function() {
    //browser.timeouts('scripts', 10000);
  it('Wait Until Address page loads',function(){
      browser.waitForVisible('.inm__basic-header',{timeout: 20000})
  })
  it('Verify that user is taken into address information page', function() {
    browser.waitForExist('.inm__basic-header');
    var address_title = $('.inm__basic-header');
    var text = browser.getText('.inm__basic-header');
    console.log();

  });
  it('Verify that Kenyan Customer is able to select town from the list', function() {
    browser.waitForExist('#physical_address_town .menu .item:nth-of-type(4)');
    browser.waitForEnabled('#physical_address_town .menu .item:nth-of-type(4)');
    browser.pause(2000);
    browser.click('#physical_address_town .dropdown');
    browser.click('#physical_address_town .menu .item:nth-of-type(120');

  });
  it('Verify that user is able to input Estate / Building Name', function(){
    browser.waitForExist('#physical_address_building');
    browser.setValue('#physical_address_building','Kasarani');

  });
    it('Verify user is able to input Street Name', function (){
      browser.setValue('#physical_address_street','Mwiki Road');

  });
    it('Verify the radio buttons in address page are clickable', function() {
      browser.click('label[for="no_mail_button"]');
      browser.click('label[for="yes_mail_button"]');
      browser.click('label[for="no_mail_button"]');
      browser.click('label[for="yes_mail_button"]');

});
    it('Verify User is able to provide P.O BOX', function() {
      browser.waitForExist('#yes_mail_button');
      browser.click('label[for="yes_mail_button"]');
      browser.setValue('#po_box_number','2883');
      browser.setValue('#postal_code','80100');
      browser.waitForExist('#next_button');
      browser.pause(3000)
      browser.click('#next_button');
  });
});

describe('i&mbank Next of KIN information', function() {
  it('Verify that the customer is taken to the KINS screen', function() {
    browser.waitForVisible('.title.kin',{timeout: 20000})
    browser.setValue('#inm__kin-first-name', 'Martin');
    browser.setValue('#inm__kin-last-name', 'Onyango');
    browser.setValue('#inm__kin-identity', '30352113');
    browser.clearElement('.form-control');
    browser.setValue('.form-control','706776683');
    browser.setValue('#inm__kin-email', 'martin@reg.com');
    browser.click('#inm__kin-relationship.dropdown');
    browser.click('#inm__kin-relationship.dropdown');
    browser.setValue('#inm__kin-address', 'Sea View Apartments');
    browser.setValue('#inm__kin-address2', 'Ngong Road');
    browser.click('#kin_physical_address_country.dropdown');
    browser.setValue('#kin_physical_address_town', 'Eldoret');
    browser.pause(3000)
    browser.click('#next_button');
  });
});
describe('I&mbank income information screen', function(){
    browser.pause(2000)
  it('Verify that the reason for providing income information is given', function() {
    var income_reason = $('.detail');
    var text = browser.getText('.detail');
    console.log();
    //assert.equal(text, 'This is to make sure that your account is compliant with local and international banking regulations');
  })
  it('Verify customer can select Income Range',function(){
    browser.waitForExist('#inm__basic-income-range');
    var income_range = $('#inm__basic-income-range');
    browser.click('#inm__basic-income-range');
    browser.click('#inm__basic-income-range .item:nth-of-type(4)');
  })
  it('should verify that income form is submittable', function(){
    var income_range = $('#inm__basic-income-source');
    browser.click('#inm__basic-income-source');
    browser.click('#inm__basic-income-source .item:nth-of-type(3)');
  })
  it('Enter KRA PIN',function(){
    browser.setValue('#inm__kra-pin','A546464744T');
    browser.pause(3000)
  });
  it('Should verify that when a user selects yes on the US obligation options, they should be given further information', function(){
    browser.waitForExist('#yes_obligation_button');
    browser.click('label[for="no_obligation_button"]'); //getting label element
    var fatca=browser.getText('label[for="no_obligation_button"]');
    assert.equal(fatca, 'No');
    //assert.equal(fatca, 'Once your application is complete we’ll send you some forms to fill out.');

    //inm__basic-income-source
});
  it('Verify that Customer can declare the PEP status', function() {
    browser.click('label[for="no_notPEP"]');
    browser.click('#next_button');

  });
});
describe('i&mbank account configuration screen', function() {
  it('Verifies account feature is selectable', function(){
    browser.waitForExist('.account-feature');
    browser.click('label[for="visa-card0"]');
  //  browser.waitForExist('#inm__account-config-next-button"');
  });
});
describe('Select Cards Names',function(){
  it('Select Preffered First and Last Name',function(){
    browser.waitForExist('.banner-div');
    browser.waitForExist('.selection-modal__title');
    browser.waitForExist('.selection-modal__firstname-text')
    var firstName = $('selection-modal__firstname-editbox');
    var text = browser.getText('.selection-modal__firstname-editbox');
    console.log(text);
    browser.click('#new_customer');
  })
  it('Navigate to Branch Screen',function(){
    browser.waitForExist('#inm__account-config-next-button');
    browser.click('#inm__account-config-next-button');
  })
});
// describe('i&mbank Debit card Confirmation', function() {
// it('verify that user can choose to say yes and proceed', function(){
//   browser.waitForEnabled('.delete-acc-no');
//   browser.click('.delete-acc-no');
  
// });
// });
describe('i&mbank branch selection screen', function() {

  it('User should be able to see that he/she is on the branch selection screen', function() {
    browser.waitForExist('#branch_address');
    var branch_page = $('.ui.header.title');
    var text = browser.getText('.ui.header.title');
    console.log(text);
});
  it('should verify that user is able to select and submit branch', function(){
    browser.waitForExist('.text');
    //Selecting from a dropdown
    browser.click('#branch_address .dropdown');
    browser.click('#branch_address .menu .item:nth-of-type(8');
    browser.waitForEnabled('#next_button');
    browser.click('#next_button');
  });
});

describe('i&mbank ID upload page', function(){
  it('User seeks help on how to upload ID images', function() {
  //browser.click('.faq-link');
  // browser.click('.inm__faq-button');

});
  it('Customer should be notified to only upload clear images', function() {
    var id_clarity = $('.inm__upload-documents-header');
    browser.waitForExist('.inm__upload-documents-header');
    var text = browser.getText('.inm__upload-documents-header');
    console.log(text);
  //assert.equal(text, 'Upload images of your Kenyan ID.\nMake sure the images are bright and clear enough for your face to show.');
  });
  it('should verify customer is able to upload front images of Kenyan ID, jpg file', async function(){
  var to_upload_front = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\ID1.jpg";
  browser.chooseFile('#idFront',to_upload_front);
  browser.pause(3000)

  });
  it('should verify customer is able to upload back images of Kenyan ID,jpg', async function(){
    var to_upload_back = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\ID2.jpg";
    browser.chooseFile('#idBack',to_upload_back);
    browser.pause(3000)
    browser.waitForEnabled('#next_button');
    browser.click('#next_button');
  });
});

describe('i&mbank Photo upload page', function(){
  browser.pause(3000)
  it('User seeks help on how to upload Photo images', function() {
  // browser.click('.faq-link');
  // browser.click('.inm__faq-button');

  });
  it('Customer should be notified to only upload clear photo image', function() {
  //browser.waitForEnabled('.inm__upload-documents-header');
  // var photo_clarity = $('.inm__upload-documents-header');
  // var text = browser.getText('.inm__upload-documents-header');
  // assert.equal(text, 'Upload a passport photo of yourself.\nMake sure the image is bright and clear enough for your face to show.');

  });
  it('should verify customer is able to upload Photo, jpg file', function(){
    browser.waitForExist('.uploadButton');
    var to_upload_photo = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\Pic.jpg";
    browser.chooseFile('#portraitPhoto',to_upload_photo);
    browser.waitForEnabled('#next_button');
    browser.click('#next_button');

  });
});
describe('i&mbank Signature upload page', function(){
  it('User seeks help on how to upload Signature images', function() {
  // browser.click('.faq-link');
  // browser.click('.inm__faq-button');

  });
  it('Customer should be notified to only upload clear signature image', function() {
    var signature_clarity = $('.inm__upload-documents-header');
    var text = browser.getText('.inm__upload-documents-header');
    //assert.equal(text, 'Upload a photo of your signature.\nYour signature should be signed on a plain white sheet of paper.');
    console.log(text);
  });
  it('should verify customer is able to upload Signature, jpg', function(){
    browser.waitForExist('.uploadButton');
    var to_upload_Signature = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\signature.jpg";
    browser.chooseFile('#signature',to_upload_Signature);
    browser.waitForEnabled('#next_button');
    browser.click('#next_button');
  });
});
describe('Account Application Review Page',function(){
  browser.timeouts('scripts', 5000);
  it('should verify that user is able to verify the Data before submiting', function(){
    browser.waitForExist('.inm__review-header');
    var review_header = browser.getText('.inm__review-header');
    console.log(review_header)
  //assert.equal(review_header,'Summary and submission\nYou"re all done! Confirm all the details you have provided are accurate and submit.');
  })
  it('Verify Customer Info',function(){
    var reviewPage = $('.personal-details');
    var accountDetails = $('.account-details');
    var branchDetails = $('.branch-details');
    var documentDetails = $('.document-details');
    var navigationButtons = $('.inm__navigation-buttons');
    browser.waitForExist('.personal-details');
    browser.waitForExist('.account-details');
    browser.waitForExist('.branch-details');
    browser.waitForExist('.document-details');
    browser.waitForExist('.inm__navigation-buttons')
    browser.click('#next_button')
    });
  })
describe('Wait for Document verification',function(){
  it('Verify view account Screen',function(){
    browser.waitForExist('.inm__view-account',{timeout:20000})
      var text = browser.getText('.inm__view-account');
      console.log(text);
    })
  })

