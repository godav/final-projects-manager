      <!-- Header -->
      <header class="main-header">
         <div class="container">
            <div class="header-content">
               <a class="pull-left" href="http://appleseeds.org.il/"  target="_blank">
                       <img src="img/tapuah-logo.png" alt="לוגו עמותת תפוח"/>
               </a>             

               <nav class="site-nav">

                   
                  <ul class="clean-list site-links">
                     <li>
                        <a href="#/courses">קורסים</a>
                     </li>
                     <li>
                        <a href="#/projects">פרויקטים</a>
                     </li>
                     <li ng-if="logedIn">
                        <a href="#">פאנל ניהול</a>
                     </li>
                  </ul>
                     <button class="btn btn-outlined" ng-click="toggleLoginModal()">התחבר</button>
                <!--  <a href="#" class="btn btn-outlined" data-toggle="modal" data-target="#login-modal">התחבר</a> -->
               </nav>
            </div>
         </div>
      </header>

      <!-- Main Content -->
      <div class="content-box">
        
          <modall visible="{{showLogin}}" ></modall>
          <modalr visible="{{showRegister}}"></modalr>
         <div ng-view>
   
        </div>
	<div ng-controller = "ManageUploadCtrl">
				<input type = "file" file-Upload = "myFile"/>
				<button ng-click = "uploadFile()">
					Upload Image
	</div>
      </div>

      <!-- Footer -->
      <footer class="main-footer">
         <div class="container">
            <div class="row">
               <div class="col-md-5">
                  <div class="widget widget_links">
                     <h5 class="widget-title">Top Locations</h5>
                     <ul>
                        <li><a href="#">Lorem impsum dolor</a></li>
                        <li><a href="#">Sit amet consectetur</a></li>
                        <li><a href="#">Adipisicing elit</a></li>
                        <li><a href="#">Eiusmod tempor</a></li>
                        <li><a href="#">incididunt ut labore</a></li>
                     </ul>
                  </div>
               </div>

               <div class="col-md-5">
                  <div class="widget widget_links">
                     <h5 class="widget-title">Featured Boats</h5>
                     <ul>
                        <li><a href="#">Lorem impsum dolor</a></li>
                        <li><a href="#">Sit amet consectetur</a></li>
                        <li><a href="#">Adipisicing elit</a></li>
                        <li><a href="#">Eiusmod tempor</a></li>
                     </ul>
                  </div>
               </div>

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

               <div class="col-md-5">
                  <div class="widget widget_links">
                     <h5 class="widget-title">Contact us</h5>
                     <ul>
                        <li><a href="#">Lorem impsum dolor</a></li>
                        <li><a href="#">Sit amet consectetur</a></li>
                        <li><a href="#">Adipisicing elit</a></li>
                        <li><a href="#">Eiusmod tempor</a></li>
                        <li><a href="#">incididunt ut labore</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>