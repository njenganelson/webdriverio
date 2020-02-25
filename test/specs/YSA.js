var assert = require('assert');

describe('i&mbank Needs Analysis screen, ', function() {
  browser.timeouts('scripts', 15000);
it('should be available via browser', function () {
  //browser.url('http://localhost:3000/needs-analysis');
  browser.url('http://customer-onboarding-onboarding-uat');

});
it('Verify the description on the landing page',function() {
  var need_title = $('.title');
  var text = browser.getText('.title');
  assert.equal(text,'THE EASIEST WAY\nTO START BANKING WITH I&M');

});
it('Verify the Information on the Need Analysis Landing page', function() {
  var need_description = $('.description');
  var text = browser.getText('.description');
  console.log(text);
});
it('Click on Young Savers icon',function(){
  browser.click('label[for="YOUNG_SAVERS_ACCOUNT"]');
});
});
describe('Confirm Whether Customer is existing or New',function(){
  
  it('Customer is New',function(){
    browser.waitForExist('.existing-customer__title')
    browser.click('#new_customer');
  })
})
describe('Open a Young Savers Account',function(){
  browser.pause(2000);
  it('Verify you can view Young Savers Account features', function() {
      var accountFeatures = $('.title.bg_youngsavers');
      var text = browser.getText('.title.bg_youngsavers');
      console.log(text);
  });
  it('View Account feature',function(){
    browser.pause(2000);
   browser.click('.ui.button')
  });
});
describe('i&mbank Documents Requirements', function() {

  it('Verifies User is shown the Documents Required in the process', function() {
    browser.waitForEnabled('.inm__documents-required-modal');
    browser.click('label[for="residency-type-resident"]');
    browser.click('.confirm-btn');
  })
});
describe('Enter Primary Applicant',function(){

  browser.pause(2000)
  it('should submit sucessfully if all fields are correctly populated', function(){
    //Randomize phone numbers
    var phone_number = Math.random().toString().slice(2,10);
    console.log(phone_number);
    var random_phone = '7'+phone_number;
    //Randomize ID Number
    var random_id_number = Math.random().toString().slice(5,12);
    //Randomize email_adress
    //var chars = 'abcdefghijklmnopqrstuvwxyz';
    //return chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@gmail.com';
    var email = 'testing'+ Math.random().toString(6).substring(4,12) + '@kenya.co.ke';
    browser.setValue('#inm__basic-info-first-name', 'MAGGY');
    browser.setValue('#inm__basic-info-last-name', 'ZAWADI');
    browser.setValue('#inm__basic-info-middle-name','');
    browser.setValue('#inm__basic-info-identity','BC'+random_id_number);
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
    browser.click('#inm__select-year .item:nth-of-type(8)');
    //browser.click();
    //Enter First Parent Details
    var random_id_number = Math.random().toString().slice(3,11);
    browser.setValue('#inm__basic-info-identity-parent',random_id_number);
    browser.setValue('.react-tel-input input', random_phone);
    browser.setValue('#inm__basic-info-email', email);
    browser.click('label[for="legalParent"]');
    browser.setValue('#inm__basic-info-referralCode','1622');
    browser.click('.checkbox');
    var status = browser.isExisting('.inm__checkbox-error');
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
    browser.pause(5000);
  });
});
describe('Childs place of residence screen', function() {
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
      browser.click('#next_button');
  });
});
describe('Enter First Parent Information',function(){
  
  it('Enter First Parent Basic Info',function(){
    browser.waitForExist('.parents-info-header');
    browser.setValue('#youngSaversParentFirstName_0', 'MAMA');
    browser.setValue('#youngSaversParentLastName_0', 'MAGGY');
    var gender =$('#youngSaversParentGender_0');
    gender.click();
    browser.getText('#youngSaversParentGender_0','option:checked');
    var day =$('#inm__select-day');
    browser.click('#inm__select-day');
    browser.click('#inm__select-day .item:nth-of-type(10)')
    var month =$('#inm__select-month');
    browser.click('#inm__select-month');
    var year =$('#inm__select-year');
    browser.click('#inm__select-year');
    browser.click('#inm__select-year .item:nth-of-type(30)');
    var relationship=$('#youngSaversParentRelationship_0');
    browser.click('#youngSaversParentRelationship_0')
    browser.click('#youngSaversParentRelationship_0 .item:nth-of-type(2)')
    browser.pause(2000);
    browser.click('#inm__basic-info-next-button');
  })
  describe('Enter Parents Income Information',function(){
    
    it('Verify customer can select Income Range',function(){
      browser.waitForExist('#accordion');
      browser.waitForExist('#inm__basic-income-range');
      var income_range = $('#inm__basic-income-range');
      browser.click('#inm__basic-income-range');
      browser.click('#inm__basic-income-range .item:nth-of-type(3)');
    })
    it('should verify that income form is submittable', function(){
      var income_range = $('#inm__basic-income-source');
      browser.click('#inm__basic-income-source');
      browser.click('#inm__basic-income-source .item:nth-of-type(3)');
    })
    it('Enter KRA PIN',function(){
      browser.setValue('#inm__kra-pin','A123451212W');
      browser.pause(3000)
    });
    it('Select Parent Address',function(){
      browser.click('#expand-collapse-icon-1');
      browser.waitForExist('label[for="sameAddressCheckBox"]');
      browser.click('label[for="sameAddressCheckBox"]');
      browser.pause(3000)
      browser.click('#next_button');
    })
  describe('Select Branch',function(){

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
      browser.click('#branch_address .menu .item:nth-of-type(29');
      browser.waitForEnabled('#next_button');
      browser.click('#next_button');
      });
    })
  describe('Upload Child Documents',function(){
    it('Customer should be notified to only upload clear images', function() {
      var id_clarity = $('.minor-uploads__wrapper__header');
      browser.waitForExist('.minor-uploads__wrapper__header');
      var text = browser.getText('.minor-uploads__wrapper__header');
        console.log(text);
    });
    it('Upload Child Birth Certificate, jpg file', async function(){
      var to_upload_front = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\birthCertificate.jpg";
      browser.chooseFile('#birthCertificate',to_upload_front);
      browser.pause(5000);
      });
    it('Upload Child Birth Photo, jpg file', async function(){
      browser.click('#expand-collapse-icon-1');
      var to_upload_Photo = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\Child.jpg";
      browser.chooseFile('#minorPhoto',to_upload_Photo);
      browser.pause(5000);
      browser.click('#inm__basic-info-next-button');
      });
    })
  describe('Upload Parents Documents',function(){
    it('Customer should be notified to only upload clear images', function() {
      var parentsInfo = $('.parent-uploads__wrapper__header');
      browser.waitForExist('.parent-uploads__wrapper__header');
      var text = browser.getText('.parent-uploads__wrapper__header');
      console.log(text);
      });
    it('Upload Parents Front ID, jpg file', async function(){
      var to_upload_front = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\ID4.jpg";
      browser.chooseFile('#firstParentIdFront',to_upload_front);
      browser.pause(3000);
      });
    it('Upload Parents Back ID, jpg file', async function(){
      var to_upload_Photo = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\ID4.jpg";
      browser.chooseFile('#firstParentIdBack',to_upload_Photo);
      browser.pause(3000);
    });
    it('Upload Parents Photo',function(){
      browser.click('#expand-collapse-icon-1')
      var to_upload_Photo = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\wPhoto.png";
      browser.chooseFile('#firstParentPhoto',to_upload_Photo);
      browser.pause(3000);
    })
    it('Upload Parents Photo',function(){
      browser.click('#expand-collapse-icon-2')
      var to_upload_Photo = "C:\\Users\\nelson.njenga\\Documents\\COB_DOCS\\signature2.png";
      browser.chooseFile('#firstParentSignature',to_upload_Photo);
      browser.pause(3000);
      browser.click('#inm__basic-info-next-button')
    })
  describe('Review Page',function(){
      it('Verify Customer Info',function(){
        var reviewPage = $('.inm__review-header');
        browser.waitForExist('.inm__review-header');
        var text = browser.getText('.inm__review-header');
        console.log(text);
      })
      it('Verify Customer Info',function(){
        var reviewPage = $('.personal-details');
        var reviewPage = $('.account-details');
        var reviewPage = $('.branch-details');
        var reviewPage = $('.document-details');
        var reviewPage = $('.inm__navigation-buttons');
        browser.waitForExist('.personal-details');
        browser.waitForExist('.account-details');
        browser.waitForExist('.branch-details');
        browser.waitForExist('.document-details');
        browser.waitForExist('.inm__navigation-buttons')
        browser.click('#next_button')
      });
    })
  describe('Wait for Document verification',function(){
      it('Verify Smile ID Error',function(){
        var smileIDError =$('.api-errors');
        browser.waitForExist('.api-errors')
        var text = browser.getText('.api-errors');
        console.log(text);
      })
    })
  })
  })
})
