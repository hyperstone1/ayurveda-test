<link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/page-contacts.css">
    <div id="wrapper">
        <div id="tmenu-space"></div>
        <!-- Контент -->
        <!-- Блок-1 -->
        <section class="container-fluid" id="block-1">
            <div class="container content-block">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="block-ttl">Контакты</div>
                    </div>
                </div>
                <form action="" class="Email-form">
                    <!--<div class="row">
                        <div class="select">
                            <select>
                                <option>Россия, Новосибирск</option>
                                <option>Индия, Ришикеш</option>
                                <option>Индия, Ришикеш</option>
                                <option>Россия, Москва</option>
                                <option>Россия, Новосибирск</option>
                            </select>
                        </div>
                    </div>-->
					    <div class="row">
                        <div class="contacts-block">
                            <p>Our address: Ganga Vatika-II</p>
                            <p>House C-30-31, Muni-Ki-Reti Rishikesh - 249192 (Uttarakhand) </p>
                       </div>
                    </div> 
                    <div class="row">
                        <div class="contacts-block">
                            <p>Rishikesh, India</p>
                            <p>Manager in Rishikesh – Madhav Anand</p>
                            <p>Тел: <a href="tel: +‎‎‎‎‎918979810333">+‎‎‎‎‎91 897 981 03 33</a> </p>
                            <p>E-mail: booking@ayurveda-bhavan.com</p>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="contacts-block">
                            <p>Москва, Россия</p>
                            <p>Менеджер в Москве – Анастасия</p>
                            <p>Тел:<a href="tel: +‎‎‎‎‎79099118556"> ‎‎‎‎‎+7 909 911 85 56</a> (WhatsApp, Viber)</p>
                            <p>Эл.почта: anastasia@ayurveda-bhavan.com</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="contacts-block">
                            <p>Madrid, Spain</p>
                            <p>Gestor de España - Juan Tafur</p>
                            <p>Teléfono: <a href="tel: +‎‎‎‎‎34636202516">‎‎‎‎+34 636 20 25 16</a> (WhatsApp)</p>
                            <p>E-mail: juantafur@hotmail.com</p>
                        </div>
                    </div>
                    <div class="row feedback-block">
                        <div class="col-xs-12">
                            <div class="ttl">Задайте вопрос</div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <input type="text" class="fb-input fb1" placeholder="Введите имя">
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <input type="text" class="fb-input fb2" placeholder="Введите email">
                        </div>
                        <div class="col-xs-12">
                            <textarea class="fb-textarea " placeholder="Введите сообщение..."></textarea>
                        </div>
                        <div class="col-xs-12">
                            <button class="fb-btn pull-right">Отправить</button>
                        </div>
                        <span class="fb3"></span>
                    </div>
                </form>
            </div>


              <script>
            window.onload = function(){
                $('.Email-form').submit(function(){
                var name = $('.fb1').val();
                var mail = $('.fb2').val();
                var text = $('.fb-textarea').val();
                var data = $(this).serialize();


                        $.ajax({
                       type: 'post',
                       url: 'mail.php',
                       data: data+'&name='+name+'&mail='+mail+'&text='+text+'&dateTo=',
                       success: function(res){
                           $('.fb3').html('<strong class="thanks">Спасибо, ваш вопрос отправлен!</strong>');
                       }   
                        })
                  return false;
               })
            }
        </script>


        </section>