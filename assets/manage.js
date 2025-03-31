 const ACCOUNT_ID = 'b1c963f2-c3b0-4ec8-9d2a-19e6504e64d7';
const LICENSE_KEY = '8445FC-1020F4-055C53-BE5AC4-629EBA-V3';

function validateLicenseKey(licenseKey) {
  console.log('Attempting to validate license key:', licenseKeyT);
  console.log('Using account ID:', ACCOUNT_ID);

  fetch(`https://api.keygen.sh/v1/accounts/${ACCOUNT_ID}/licenses/${licenseKey}/actions/validate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json',
      'Authorization': `License ${licenseKey}`
    },
    body: JSON.stringify({
      meta: {
        scope: {}
      }
    })
  })
  .then(response => {
    console.log('Response status:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Full API response:', data);
    const statusElement = document.querySelector('#TrialOverPopup .active-text');
    if (data.meta && data.meta.valid) {
      console.log('License is valid');
      if (statusElement) {
        statusElement.textContent = 'THEME ACTIVATED';
        statusElement.style.color = 'green';
      }
    } else {
      console.log('License is invalid');
      console.log('Validation details:', data.meta);
      if (statusElement) {
        statusElement.textContent = 'THEME NOT ACTIVATED';
        statusElement.style.color = 'red';
      }
    }
  })
  .catch(error => {
    console.error('Error during validation:', error);
    const statusElement = document.querySelector('#TrialOverPopup .active-text');
    if (statusElement) {
      statusElement.textContent = 'THEME ACTIVATION ERROR';
      statusElement.style.color = 'orange';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  validateLicenseKey(LICENSE_KEY);
});
