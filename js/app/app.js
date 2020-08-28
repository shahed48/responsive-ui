
// function UpdateSelect(e, selection) {
//     $(".nav-anchor").each(function (index, e) {
//         if ($(this).hasClass('active')) {
//             $(this).removeClass('active').removeClass('arrow');
//         }
//     });
//     $(e.target).addClass('active').addClass('arrow');

//     var action_name = 'Dashboard';
//     if (selection === 'profile') { action_name = 'UserProfile'; }
//     else if (selection === 'works') { action_name = 'Works'; }
//     else if (selection === 'dashboard') { action_name = 'Dashboard' }
//     else {
//         $('#SiteContent').empty().html('<div class="base-view"<h2>UNDER CONSTRUCTION</h2></div>');
//         return;
//     }
// }

// $("ul#asideNav li:first-child a").click();

// function Logout() {
//     document.getElementById('logoutForm').submit();
// }

function ToggleNavigation(e){
    if($('.main-content').hasClass('main-content-max')){
        $('.main-content').removeClass('main-content-max');
        $('.sidebar').removeClass('sidebar-min');
    }
    else{
        $('.main-content').addClass('main-content-max');
        $('.sidebar').addClass('sidebar-min');
    }
}