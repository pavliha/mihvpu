@extends("layouts.main")
@section("head")

@stop

@section("js")

@stop

@section("content")
    <paper-material class="news" elevation="1">
        <img src="images/noimage.svg">
        <section>
            <h2>Реформування галузі освіти</h2>

            <p>
                Виступ директора Департаменту освіти і науки облдержадміністрації Т.Я.
                Озерової Тема. Реформування галузі освіти - це цивілізований вибір суспільства
                Реформування країни та її інтеграція з європейськими державами - це першочергове
                завдання Президента, Верховної Ради, Уряду України та усього суспільства. Перш за все
                - це цивілізаційний вибір. Чи стане Україна постіндустріальною, розвиненою…
            </p>

            <p><a href="#">Читати далi...</a></p>
        </section>
    </paper-material>

    <paper-material class="news" elevation="1">
        <img src="images/tb.jpg">
        <section>

            <h2>Тиждень біології та хімії в училищі</h2>

            <p>
                24.11 – вівторок - Олімпіада з біології, запрошуються учні І-ІІ курсу
                (20 кабінет. 6 урок) 25.11 – середа - Олімпіада з хімії, запрошуються учні І-ІІ курсу
                (20 кабінет. 2 урок) - Інтелектуальна гра «Я люблю Україну (біологія)».
                Участь беруть учні 22 ок та 3 опр (конференційна зала) 26.11 – четвер - «Цікава хімія»
                (7 урок гр. 31 кп) 27.11 – п’ятниця - Відкритий урок з…
            </p>

            <p><a href="#">Читати далi...</a></p>
        </section>
    </paper-material>

    <paper-material class="news" elevation="1">
        <img src="images/tb (1).jpg">
        <section>
            <h2>Як же смачно ви готуєте...</h2>

            <p>Укотре дивуєшся з майстерності наших пекарів, які з такою щирою любов'ю годують усе училище
                смачненьким. Цього вівторка ви нас теж порадували такою чудовою ярмаркою виробів із дріжджового
                тіста. Наталя Миколаївна разом зі своїми підопічними підготували не лише виставку, а вчинили справжнє
                театральне дійство. Розпочалося воно із привітання та запрошення до частування директора училища
                Удовіченка…
            </p>

            <p><a href="#">Читати далi...</a></p>
        </section>
    </paper-material>
    <section class="video-section">
        <paper-material class="video-gallery">
            <google-youtube
                    video-id="FH9l2KxMrMs"
                    height="300px"
                    width="530px"
                    rel="0"
                    start="5"
                    autoplay="0">
            </google-youtube>
            <paper-menu>
                <paper-item>Шляхами Соломіїної пісні<img src="images/tb%20(1).jpg"></paper-item>
                <paper-item>Благодійний проект «СКРИНЬКА ДОБРИХ СПРАВ»<img src="images/tb%20(1).jpg"></paper-item>
                <paper-item>Фільм про професію ОПР<img src="images/tb%20(1).jpg"></paper-item>
                <paper-item>Історія училища<img src="images/tb%20(1).jpg"></paper-item>
                <paper-item>Мультик про професії училища<img src="images/tb%20(1).jpg"></paper-item>
                <paper-item>День пам'яті і примирення<img src="images/tb%20(1).jpg"></paper-item>
                <paper-item>Міфи про училище<img src="images/tb%20(1).jpg"></paper-item>
            </paper-menu>

        </paper-material>
    </section>

    <section class="contacts-section">
        <paper-material class="contacts">

            <div>
                <h1>Контакти:</h1>

                <p>Тел/факс: +38-06132-2-02-68</p>

                <p>Тел. приймальної комісії:</p>

                <p>2-09-16</p>

                <h1>Адреса навчального закладу:</h1>

                <p>72002 вул. Леніна, 2</p>

                <p>смт Михайлівка</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.21719492064!2d35.22004831574672!3d47.27100861909285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dd238a387beebd%3A0x8a1a142e6c57de31!2z0JTQndCXICLQnNC40YXQsNC50LvRltCy0YHRjNC60LUg0JLQn9CjIg!5e0!3m2!1sen!2sus!4v1450015572802"
                    width="600"
                    height="350"
                    frameborder="0"
                    style="border:0"
                    allowfullscreen></iframe>
        </paper-material>
    </section>
    <div>
        <h2>Корисні посилання:</h2>
        <p><a href="http://nmc-pto.zp.ua/">
                Науково методичний центр професійно-технічної освіти у Запорізькій області
            </a></p>

        <p><a href="http://proftekhosvita.org.ua/uk/">
                Департамент професійно-технічної освіти МОН України
            </a></p>

        <p><a href="http://testportal.gov.ua/">
                Міністерство освіти і науки України
            </a></p>

        <p><a href="http://www.mon.gov.ua/">
                Український центр оцінювання якості освіти
            </a></p>

        <p><a href="http://www.mon.gov.ua/">
                Дніпропетровський регіональний центр оцінювання якості освіти
            </a></p>

        <p><a href="http://super-vpu.blogspot.com/">
                Блог заступників директора ДНЗ "Михайлівське ВПУ"
            </a></p>
    </div>
@stop