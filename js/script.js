document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  const showMessageButton = document.getElementById('showMessageButton');
  showMessageButton.addEventListener('click', () => {
    alert('Como mola la astronomia');
  });

  const showImgButton = document.getElementById('showImgButton');
  showImgButton.addEventListener('click', () => {
    window.open("img/khat.gif", "_blank", "width=600,height=400");
  });

  const toastButton = document.getElementById('toastButton');
  toastButton.addEventListener('click', function () {
    var toastEl = document.getElementById('galaxiasToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  });
});
