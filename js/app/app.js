// using localstorage to register and login and display data
// principalUser cookie name authUser
//check login status

var path = window.location.pathname.toString();
var pageName = path.substr(path.lastIndexOf('/')+1);
var cleanName = pageName.substr(0, pageName.indexOf('.'));
if(localStorage.getItem('authUser') === null){
    if(cleanName !== 'login')
        window.location.href = 'login.html';
}
//data for user Profile
var userProfile = {
    primaryEmail:'admin@gmail.com',
    altEmail: 'shahjahan.cseku11@gmail.com',
    firstName: 'Md',
    lastName: 'Shahjahan',
    phoneNum: '01616505040',
    altNum: '01910944844'
}
if(localStorage.getItem('userInfo') === null)
    localStorage.setItem('userInfo', JSON.stringify(userProfile));
//END Checking


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
        $('.nav-label').removeClass('d-none');
    }
    else{
        $('.main-content').addClass('main-content-max');
        $('.sidebar').addClass('sidebar-min');
        $('.nav-label').addClass('d-none');
    }
}

function login(){
    var userName = document.getElementById('emailAddress').value;
    var password = document.getElementById('password').value;
    var authUser = {
        userName: userName,
        password: password
    };
    localStorage.setItem('authUser', authUser);
    window.location.href = 'dashboard.html';
}

function logout(){
    localStorage.clear();
    window.location.href='login.html';
}