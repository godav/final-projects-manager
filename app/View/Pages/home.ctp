<!-- Header -->
<header class="main-header">
    <div class="container" style='height: 100%'>
        <div class="header-content" style='height: 100%'> 
            <div class="pull-left" style='height: 100%'>
                <img src="img/projects-logo.png" style='height: 100%' alt="projects"/>
            </div>        

            <nav class="site-nav">


                <ul class="clean-list site-links">


                    <li ng-if="logedIn">
                        <a href="#/dashboard">פאנל ניהול</a>
                    </li>
                    <li>
                        <a href="#/projects">פרויקטים</a>
                    </li>
                    <li>
                        <a href="#/search">חיפוש</a>
                    </li>
                </ul>
                <button class="btn btn-outlined" ng-if="!logedIn" ng-click="toggleLoginModal()">התחבר</button>
                <button class="btn btn-outlined" ng-if="logedIn" ng-click="logOut()">התנתק</button>
                <!--  <a href="#" class="btn btn-outlined" data-toggle="modal" data-target="#login-modal">התחבר</a> -->
            </nav>
        </div>
    </div>
</header>

<!-- Main Content -->
<div class="content-box">

    <modall visible="{{showLogin}}" ></modall>
    <modalr visible="{{showRegister}}"></modalr>
    <addp visible="{{showAddPhoto}}"></addp>
    <updatep visible="{{showUpdatePhoto}}"></updatep>
    <div ng-view>

    </div>
</div>

<!-- Footer -->
<footer class="footer-main">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="widget widget_social">
                    <hgroup style="float:right; text-align: right;">
                        <h5 class="widget-title">נבנה על ידי: אינוז אבנר</h5>
                        <a href="https://godav@github.com/godav/final-projects-manager.git" target="_blank" ><h5 class="widget-title">GIT ספריית </h5> </a>
                    </hgroup> 
                    <ul class="clean-list social-block" style="float:left">
                        <li>
                            <a href="http://appleseeds.org.il/"  target="_blank">
                                <img class="logo-mini" src="img/tapuah-logo.png" alt="לוגו עמותת תפוח"/>
                            </a>     
                        </li>
                        <li>
                            <a href="http://www.intel.co.il/content/www/il/he/education/community-v1.html"  target="_blank">
                                <img class="logo-mini" src="img/intel.png" alt="לוגו אינטל"/>
                            </a>  
                        </li>
                        <li>
                            <a href="http://enoshi-tcarmel.org/"  target="_blank">
                                <img class="logo-mini" src="img/hon.jpg" alt="לוגו הון אנושי"/>
                            </a>     
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>