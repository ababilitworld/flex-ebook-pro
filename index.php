<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ebook Tree Viewer</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> -->
    <link rel="stylesheet" href="Asset/Appearence/Theme/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Animation/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Header/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Sidebar/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Sidebar/Component/H2/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Sidebar/Component/Accordion/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Sidebar/Component/Search/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Main/Css/Style.css">    
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Main/Component/Toggle/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Main/Component/Content/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Main/Component/Content/Code/Css/Style.css">
    <link rel="stylesheet" href="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Footer/Css/Style.css">
    <!-- <link rel="stylesheet" href="asset/style/style.css"> -->
    <!-- <link rel="stylesheet" href="asset/search/search.css"> -->
</head>
<body>
    <div class="ababilithub">
        <?php 
            $ebook_title = "Mastering CSS3: From Zero to Hero";
            $colorSchemeLibrary = array('forest-green','ocean-blue','royal-purple','sunset-orange','deep-pink','midnight-dark','gold-luxury');
            $colorScheme = $colorSchemeLibrary[rand(0,count($colorSchemeLibrary)-1)];
        ?>
        <div class="theme <?php echo $colorScheme;?>">            
            <div class="template page">
                <div class="layout ebook">
                    <div class="header">
                        <h1 class="title"><?php echo $ebook_title;?></h1>
                    </div>
                    
                    <div class="sidebar">
                        
                        <h2>Table of Contents</h2>
                        <input type="text" id="searchInput" placeholder="Search Topic or subtopic..." />
                        <div id="topicList"></div>
                    </div>
                    <div class="main">
                        <button class="sidebar-toggle" id="sidebarToggle">☰</button>
                        <div class="sidebar-overlay" id="sidebarOverlay"></div>
                    
                        <div class="content" id="content">
                            <h3>Select a Chapter, Topic, or Subtopic to view details.</h3>
                        </div>
                    </div>
                    <div class="footer"></div>
                </div>
            </div>
        </div>
    </div>
    <script type="module">
        import App from './src/assets/js/app/App.js';
        const app = new App();
        app.run('topicList');
    </script>
    <script src="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Main/Component/Toggle/Js/Script.js"></script>
    <script src="Asset/Appearence/Template/Page/Layout/Ebook/LayoutItem/Sidebar/Component/Search/Js/Script.js"></script>
</body>
</html>