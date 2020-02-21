var assert = require('assert');

//Joint account applicants Journey
describe('i&mbank Needs Analysis screen, ', function() {
  browser.timeouts('scripts', 15000);
it('should be available via browser', function () {
  //Copy link address to the 2nd Applicant Inivite
  browser.url('http://customer-onboarding-onboarding-uat.apps&inviteid=2796');
});
});
describe('Accept Invitation',function(){
  it('Accept a Joint Account Invite',function() {
    browser.waitForEnabled('#inm__accept-invitation-btn');
    browser.pause(5000);
    browser.click('#inm__accept-invitation-btn');
});
// it('Decline a Joint Account Invite',function(){
//     browser.waitForEnabled('#inm__decline-invitation-btn');
//     browser.pause(5000);
//     browser.click('#inm__decline-invitation-btn');
// });
});
describe('Enter Joint Applicant details',function(){
  browser.pause(2000)
it('should submit sucessfully if all fields are correctly populated', function(){
  //Randomize ID Number
  var random_id_number = Math.random().toString().slice(3,11);
  //Randomize email_adress
  //var chars = 'abcdefghijklmnopqrstuvwxyz';
  //return chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@gmail.com';
  var email = 'testing'+ Math.random().toString(6).substring(4,12) + '@kenya.co.ke';
  browser.setValue('#inm__basic-info-identity', random_id_number);
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
  browser.click('#inm__select-year .item:nth-of-type(25)');
  browser.click('.checkbox');
  browser.pause(2000)
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
  browser.pause(2000);
  
  });
  });

    describe('i&mbank Customer place of residence screen', function() {
      //browser.timeouts('scripts', 10000);
    it('Verify that user is taken into address information page', function() {
      var address_tittle = $('.title');
      address_tittle.waitForExist(5000);
      var text = browser.getText('.title');
      console.log();
    
      });
      it('Verify that Kenyan Customer is able to select town from the list', function() {
        browser.pause(2000)
        browser.waitForExist('#physical_address_town .menu .item:nth-of-type(4)');
        browser.waitForEnabled('#physical_address_town .menu .item:nth-of-type(4)');
        browser.pause(2000);
        browser.click('#physical_address_town .dropdown');
        browser.click('#physical_address_town .menu .item:nth-of-type(120');
    
      });
      it('Verify that user is able to input Estate / Building Name', function(){
        browser.waitForExist('#physical_address_building');
        browser.setValue('#physical_address_building','Kitale');
    
      });
        it('Verify user is able to input Street Name', function (){
          browser.setValue('#physical_address_street','Kitale-Eldoret Road');
    
      });
        it('Verify the radio buttons in address page are clickable', function() {
          browser.click('label[for="no_mail_button"]');
          browser.click('label[for="yes_mail_button"]');
          browser.click('label[for="no_mail_button"]');
          browser.click('label[for="yes_mail_button"]');
    
    
    });
        it('Verify User is able to provide P.O BOX', function() {
          browser.waitForExist('#yes_mail_button');
          browser.click('label[for="no_mail_button"]');
          // browser.setValue('#po_box_number','2883');
          // browser.setValue('#postal_code','80100');
          browser.waitForExist('#next_button');
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
  browser.click('#inm__basic-income-range .item:nth-of-type(2)');
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
  browser.click('label[for="yes_obligation_button"]'); //getting label element
  var fatca=browser.getText('.fatca-info');
  assert.equal(fatca, 'Once your application is complete we’ll send you some forms to fill out.');

//inm__basic-income-source
});
it('Verify that Customer can declare the PEP status', function() {
  browser.click('label[for="yes_isPEP"]');
  browser.click('#next_button');

    });
  }); 
  describe('i&mbank account configuration screen', function() {
    browser.timeouts('scripts', 5000);
    it('Verify user is at Acccount Features', function(){
      browser.waitForExist('.enclosed-account-features');
    });
    it('Select Either or Survivor',function(){
      browser.click('label[for="Either or Survivor0"]');
      browser.waitForExist('.account-features-mandate');
      browser.click('label[for="visa-card0"]');
      browser.pause(2000);
    });
  });
      describe('Select Cheque book for Either or Survivor',function(){
        browser.pause(2000);
      it('Select Cheque book',function(){
        browser.waitForEnabled('label[for="free-cheque-book0"]');
        browser.click('label[for="free-cheque-book0"]');

      });
    });
    describe('Select Jointly Mandate',function(){
    it('Select Jointly Mandate',function(){
      // browser.click('label[for="Jointly0"]');
      // browser.waitForExist('#inm__account-jointly-option');
      // browser.click('#inm__account-jointly-option');
      // browser.getText('#inm__account-jointly-option','option:checked');
      // //Select Chequebook for Jointly Mandate
      // browser.doubleClick('label[for="free-cheque-book0"]');
    });
  }); 
    describe('i&mbank Debit card Confirmation', function() {
    it('verify that user can choose to say yes and proceed', function(){
      // browser.waitForEnabled('.delete-acc-no');
      // browser.click('.delete-acc-no');
    });
    });
    describe('Joint Applicant Must accept mandate',function(){
      it('Verify Joint applicant must accept mandate',function(){
        browser.waitForEnabled('.checkbox');
        browser.click('.checkbox');
        browser.click('#inm__account-config-next-button');
      });
    });
    describe('Confirm that you require a debit Card',function(){
      it('Verify pop up to confirm user requires debit Card',function(){
        // browser.waitForExist('.content');
        // var debitText = $('.content');
        // var text = browser.getText(debitText);
        // console.log('.content');
        // browser.click('.ui.button.delete-acc-yes.debit-selection')
      });
    });
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
      var to_upload_front = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\ID3.jpg";
      browser.chooseFile('#idFront',to_upload_front);
      browser.pause(3000)
    
    });
    it('should verify customer is able to upload back images of Kenyan ID,jpg', async function(){
      var to_upload_back = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\ID4.jpg";
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
    assert.equal(review_header,'Summary and submission\nYoure all done! Confirm all the details you have provided are accurate and submit.');
  });
  it('Confirm that the names provided are correct', function() {
    browser.waitForEnabled('#next_button');
    browser.pause(5000);
    browser.click('#next_button');
  });
  });
  describe('Completed Joint Account opening',function(){
    it('Verify user can exit application',function(){
      browser.waitForEnabled('#inm__accept-invitation-btn')
      browser.waitForEnabled('.content');
      browser.pause(3000);
      browser.click('#inm__accept-invitation-btn');
    });
  });