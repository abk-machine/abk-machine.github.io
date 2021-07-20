<template>
  <div class="content">
    <!--contact -->
    <section class="contact py-lg-4 py-md-3 py-sm-3 py-3">
      <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
        <div class="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
          <h3>Contact Us</h3>
        </div>
        <div class="agile-info-para">
          <!--contact-map -->
          <form action="#" method="post">
            <div class="row agile-wls-contact-mid">
              <div class="col-md-6 form-group contact-forms">
                <input id="contact-input-name" type="text" class="form-control" placeholder="Name" required>
              </div>
              <div class="col-md-6 form-group contact-forms">
                <input id="contact-input-email" type="email" class="form-control" placeholder="Email" required>
              </div>
            </div>
            <div class="form-group contact-forms">
              <input id="contact-input-subject" type="text" class="form-control" placeholder="Subject" required>
            </div>
            <div class="form-group contact-forms">
              <textarea id="contact-input-message" class="form-control" rows="3" placeholder="Message.." required></textarea>
            </div>
            <div class="text-left click-subscribe">
              <button id="contact-form-submit" type="submit" class="btn click-me">Send</button>
            </div>
          </form>
        </div>
        <!--//contact-map -->
        <!--contact-form-->
        <div class="row contact-right mt-lg-5 mt-md-4 mt-3">
          <div class="col-lg-4 col-md-5 footer_grid_left text-center">
            <div class="contact_footer_grid_left text-center mb-3">
              <span class="fas fa-map-marker-alt"></span>
            </div>
            <p>Taoyuan Village, Yangshan Town, <br>Wuxi City 90210.</p>
          </div>
          <div class="col-lg-4 col-md-3 footer_grid_left text-center">
            <div class="contact_footer_grid_left text-center mb-3">
              <span class="fas fa-phone-volume"></span>
            </div>
            <p>Mobile: +86 15852538958<br>Tel: +86 510 83555592</p>
          </div>
          <div class="col-lg-4 col-md-4 footer_grid_left text-center">
            <div class="contact_footer_grid_left text-center mb-3">
              <span class="fas fa-at"></span>
            </div>
            <p><a href="mailto:info@weldc.com">info@weldc.com</a> 
              <br><a href="mailto:jan@weldc.com">jan@weldc.com</a>
            </p>
          </div>
        </div>
        <!--//contact-map -->
      </div>
    </section>
    <!--//contact  -->
    <div class="contact-form ">
      <div class="address_mail_footer_grids">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.3132768439127!2d120.14438131547679!3d31.597874550471687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b477ce3aea9ced%3A0x1cb1d7f985461cc3!2s20%20Yang%20Nan%20Lu%2C%20Huishan%20Qu%2C%20Wuxi%20Shi%2C%20Jiangsu%20Sheng%2C%20China%2C%20214156!5e0!3m2!1sen!2s!4v1578389632968!5m2!1sen!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$nextTick(() => {
      if (process.browser) {
        document.getElementById('contact-form-submit').addEventListener('click', function(event) {
          var inputName = document.getElementById('contact-input-name').value;
          var inputEmail = document.getElementById('contact-input-email').value;
          var inputSubject = document.getElementById('contact-input-subject').value;
          var inputMessage = document.getElementById('contact-input-message').value;
          if(inputName != '' && inputEmail != '' && inputSubject != '' && inputMessage != ''){
            var http = new XMLHttpRequest();
            var url = 'https://abkmachine.alwaysdata.net/sendmail.php';
            var params = 'name=' + inputName + '&email=' + inputEmail + '&subject=' + inputSubject + '&message=' + inputMessage;
            http.open('POST', url, true);

            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function() {
                if(http.readyState == 4 && http.status == 200) {
                    alert('Thank you for your message, we will get in touch shortly.');
                    document.getElementById('contact-input-name').value = '';
                    document.getElementById('contact-input-email').value = '';
                    document.getElementById('contact-input-subject').value = '';
                    document.getElementById('contact-input-message').value = '';
                }
            }
            http.send(params);
          }
          event.preventDefault();
          return false;
        });
      }
    })
  },
};
</script>