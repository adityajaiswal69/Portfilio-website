var typed = new Typed('#element', {
    strings: ['Frontend Web developer.', '&amp; Web Designer.'],
    typeSpeed: 50,
    loop:true,
  });
console.log("welcome! to My portfolio");

const scriptURL = 'https://script.google.com/macros/s/AKfycbwVNjjsSMshjQIugxiZvp09l79Fe4l2YR9mfCd70YnyTgvwUFnEAGjdxGFQvezmJEzVog/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })