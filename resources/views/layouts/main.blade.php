<!doctype html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="generator" content="Polymer Starter Kit"/>
    <title>Михайловское Училище</title>
    <!--Chrome for Android theme color -->
    <meta name="theme-color" content="#2E3AA1">
    <!--Web Application Manifest -->
    <link rel="manifest" href="manifest.json">
    <!--Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="PSK">
    <link rel="icon" sizes="192x192" href="images/touch/chrome-touch-icon-192x192.png">
    <!--Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Polymer Starter Kit">
    <link rel="apple-touch-icon" href="images/touch/apple-touch-icon.png">
    <!--Tile icon for Win8 (144x144) -->
    <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png">
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>

    <link rel="import" href="/elements/vulcanized/elements.html">

    <link rel="import" href="/styles/custom-styles.html">

    <link rel="stylesheet" href="styles/main.css">

    {{--<link rel="import" href="/elements/elements.html">--}}
    @yield("head")
</head>
<body>

<paper-toolbar class="tall">
    <div>
        <img src="/images/Tractor.svg">

        <h1>ДНЗ "Михайлівське ВПУ"</h1>
    </div>
</paper-toolbar>
<paper-material class="nav" elevation="1">
    <paper-tabs no-slide>
        <paper-tab><a href="/" class="nav-link">Головна</a></paper-tab>
        <paper-tab><a href="/news" class="nav-link">Новини</a></paper-tab>
        <paper-tab><a href="/about" class="nav-link">Про училище</a></paper-tab>
        <paper-tab><a href="/applicants" class="nav-link">Абітурієнтам</a></paper-tab>
        <paper-tab><a href="/gallery" class="nav-link">Фотогалерея</a></paper-tab>
        <paper-tab><a href="/blogs" class="nav-link">Блоги викладачів</a></paper-tab>
        <paper-tab><a href="/schedule" class="nav-link">Розклад</a></paper-tab>
    </paper-tabs>
</paper-material>

@yield("content")


<script src="scripts/app.js"></script>
@yield("js")
</body>

</html>
