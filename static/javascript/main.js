require([ 'jquery', 'app', 'main-nav-bar', 'main-view'], function($, app) {
  var $mainNavBar = $('.main-nav-bar');
  $mainNavBar.main_nav_bar();
  app.ui.mainNavBar = $mainNavBar;
  
  var $mainView = $('.main-view');
  $mainView.main_view();
  app.ui.mainView = $mainView;
  
  $mainView.main_view('createView', 'welcome', $('<div style="margin-left: 100px; margin-right:100px"><h1 style="align:center;">QbiQe Project!</h1>This is page is welcoming page!<br><br>Please click on Flowchart at the left bar panel.</div>'));
  $mainView.main_view('showView', 'welcome');
  
  $mainNavBar.main_nav_bar('addButton', 'welcome', 'Main Panel', '', 0, function() {
    $mainView.main_view('showView', 'welcome');
    $mainNavBar.main_nav_bar('activateButton', 'welcome');
  });
  $mainNavBar.main_nav_bar('activateButton', 'welcome');
  
  
  app.start(function() {    
    app.sendRequest(
      'get_js',
      {},
      function(data) {
        require.config({
          'paths': data.require_paths
        });
        
        require(data.main_js);
      }
    );
  });
});
