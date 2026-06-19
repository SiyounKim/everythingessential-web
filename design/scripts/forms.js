// Submits Web3Forms-backed forms via AJAX so the page shows an inline
// confirmation instead of navigating to the API response. A form opts in
// with action="https://api.web3forms.com/submit"; success reveals .sent,
// failure reveals .form-error.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form[action*="web3forms"]').forEach(function (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var sent = form.querySelector('.sent');
      var err = form.querySelector('.form-error');
      var btn = form.querySelector('button[type="submit"]');
      if (sent) sent.hidden = true;
      if (err) err.hidden = true;
      if (btn) btn.disabled = true;
      try {
        var res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        var data = await res.json();
        if (res.ok && data.success) {
          if (sent) sent.hidden = false;
          form.reset();
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (_) {
        if (err) err.hidden = false;
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  });
});
