      <!-- Header -->
      <header class="main-header">
         <div class="container">
            <div class="header-content">
               <a class="pull-left" href="http://appleseeds.org.il/"  target="_blank">
                       <img src="img/tapuah-logo.png" alt="לוגו עמותת תפוח"/>
               </a>             

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
               <div class="col-md-9">
                  <div class="widget widget_social">
                     <h5 class="widget-title">Subscribe to our newsletter</h5>
                     <form class="subscribe-form">
                        <div class="input-line">
                           <input type="text" name="subscribe-email" value="" placeholder="Your email address" />
                        </div>
                        <button type="button" name="subscribe-submit" class="btn btn-special no-icon">Subscribe</button>
                     </form>

                     <ul class="clean-list social-block">
                        <li>
                           <a href="#"><i class="icon-facebook"></i></a>
                        </li>
                        <li>
                           <a href="#"><i class="icon-twitter"></i></a>
                        </li>
                        <li>
                           <a href="#"><i class="icon-google-plus"></i></a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>