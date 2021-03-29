'use strict';

function EnableForEdit(e) {
    e.preventDefault()
    $('#ParimaryEmailAddress').prop('disabled', false);
    $('#AlternateEmailAddress').prop('disabled', false);
    $('#FirstName').prop('disabled', false);
    $('#LastName').prop('disabled', false);
    $('#PrimaryPhone').prop('disabled', false);
    $('#AlternatePhone').prop('disabled', false);

    $('#saveEdit').removeClass('d-none');
    $("#cancelEdit").removeClass('d-none');
    $("#Edit").hide();
}

function DisableForEdit(e) {
    e.preventDefault()
    $('#ParimaryEmailAddress').prop('disabled', true);
    $('#AlternateEmailAddress').prop('disabled', true);
    $('#FirstName').prop('disabled', true);
    $('#LastName').prop('disabled', true);
    $('#PrimaryPhone').prop('disabled', true);
    $('#AlternatePhone').prop('disabled', true);

    $('#saveEdit').addClass('d-none');
    $("#cancelEdit").addClass('d-none');
    $("#Edit").show();
}

function SaveChanges(e) {
    e.preventDefault();
    $('.loader').show();
    var profileViewModel = {
        Id: $('#Id').val(),
        ParimaryEmailAddress: $('#ParimaryEmailAddress').val(),
        AlternateEmailAddress: $('#AlternateEmailAddress').val(),
        FirstName: $('#FirstName').val(),
        LastName: $('#LastName').val(),
        PrimaryPhone: $('#PrimaryPhone').val(),
        AlternatePhone: $('#AlternatePhone').val()
    };
    $.ajax({
        type: 'POST',
        url: '/Home/UpdateProfile',
        data: { model: profileViewModel },
        success: function (resp) {
            $('.loader').hide();
            alert(resp);
        },
        error: function (resp) {
            $('.loader').hide();
            alert(resp);
        }
    });
}
var userProfile = JSON.parse(localStorage.getItem('userInfo'));
$('#ParimaryEmailAddress').val(userProfile.primaryEmail);
$('#AlternateEmailAddress').val(userProfile.altEmail);
$('#FirstName').val(userProfile.firstName);
$('#LastName').val(userProfile.lastName);
$('#PrimaryPhone').val(userProfile.phoneNum);
$('#AlternatePhone').val(userProfile.altNum);