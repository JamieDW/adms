(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/lang/en.json":
/*!***********************************!*\
  !*** ./resources/js/lang/en.json ***!
  \***********************************/
/*! exports provided: more_details, view, share, print, new, ok, cancel, error_alert_title, error_alert_text, token_expired_alert_title, token_expired_alert_text, login, register, page_not_found, go_home, logout, email, remember_me, password, forgot_password, confirm_password, name, toggle_navigation, home, you_are_logged_in, reset_password, send_password_reset_link, settings, profile, your_info, info_updated, update, your_password, password_updated, new_password, login_with, register_with, verify_email, send_verification_link, resend_verification_link, failed_to_verify_email, verify_email_address, auth, pagination, passwords, validation, verification, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"more_details\\\":\\\"More Details\\\",\\\"view\\\":\\\"View {name}\\\",\\\"share\\\":\\\"Share {name}\\\",\\\"print\\\":\\\"Print {name}\\\",\\\"new\\\":\\\"New\\\",\\\"ok\\\":\\\"Ok\\\",\\\"cancel\\\":\\\"Cancel\\\",\\\"error_alert_title\\\":\\\"Oops...\\\",\\\"error_alert_text\\\":\\\"Something went wrong! Please try again.\\\",\\\"token_expired_alert_title\\\":\\\"Session Expired!\\\",\\\"token_expired_alert_text\\\":\\\"Please log in again to continue.\\\",\\\"login\\\":\\\"Log In\\\",\\\"register\\\":\\\"Register\\\",\\\"page_not_found\\\":\\\"Page Not Found\\\",\\\"go_home\\\":\\\"Go Home\\\",\\\"logout\\\":\\\"Logout\\\",\\\"email\\\":\\\"Email\\\",\\\"remember_me\\\":\\\"Remember Me\\\",\\\"password\\\":\\\"Password\\\",\\\"forgot_password\\\":\\\"Forgot Your Password?\\\",\\\"confirm_password\\\":\\\"Confirm Password\\\",\\\"name\\\":\\\"Name\\\",\\\"toggle_navigation\\\":\\\"Toggle navigation\\\",\\\"home\\\":\\\"Home\\\",\\\"you_are_logged_in\\\":\\\"You are logged in!\\\",\\\"reset_password\\\":\\\"Reset Password\\\",\\\"send_password_reset_link\\\":\\\"Send Password Reset Link\\\",\\\"settings\\\":\\\"Settings\\\",\\\"profile\\\":\\\"Profile\\\",\\\"your_info\\\":\\\"Your Info\\\",\\\"info_updated\\\":\\\"Your info has been updated!\\\",\\\"update\\\":\\\"Update\\\",\\\"your_password\\\":\\\"Your Password\\\",\\\"password_updated\\\":\\\"Your password has been updated!\\\",\\\"new_password\\\":\\\"New Password\\\",\\\"login_with\\\":\\\"Login with\\\",\\\"register_with\\\":\\\"Register with\\\",\\\"verify_email\\\":\\\"Verify Email\\\",\\\"send_verification_link\\\":\\\"Send Verification Link\\\",\\\"resend_verification_link\\\":\\\"Resend Verification Link ?\\\",\\\"failed_to_verify_email\\\":\\\"Failed to verify email.\\\",\\\"verify_email_address\\\":\\\"We sent you an email with an the verification link.\\\",\\\"auth\\\":{\\\"failed\\\":\\\"These credentials do not match our records.\\\",\\\"throttle\\\":\\\"Too many login attempts. Please try again in {seconds} seconds.\\\"},\\\"pagination\\\":{\\\"previous\\\":\\\"Previous\\\",\\\"next\\\":\\\"Next\\\"},\\\"passwords\\\":{\\\"password\\\":\\\"Passwords must be at least eight characters and match the confirmation.\\\",\\\"reset\\\":\\\"Your password has been reset!\\\",\\\"sent\\\":\\\"We have e-mailed your password reset link!\\\",\\\"token\\\":\\\"This password reset token is invalid.\\\",\\\"user\\\":\\\"We can't find a user with that e-mail address.\\\"},\\\"validation\\\":{\\\"accepted\\\":\\\"The {attribute} must be accepted.\\\",\\\"active_url\\\":\\\"The {attribute} is not a valid URL.\\\",\\\"after\\\":\\\"The {attribute} must be a date after {date}.\\\",\\\"after_or_equal\\\":\\\"The {attribute} must be a date after or equal to {date}.\\\",\\\"alpha\\\":\\\"The {attribute} may only contain letters.\\\",\\\"alpha_dash\\\":\\\"The {attribute} may only contain letters, numbers, dashes and underscores.\\\",\\\"alpha_num\\\":\\\"The {attribute} may only contain letters and numbers.\\\",\\\"array\\\":\\\"The {attribute} must be an array.\\\",\\\"before\\\":\\\"The {attribute} must be a date before {date}.\\\",\\\"before_or_equal\\\":\\\"The {attribute} must be a date before or equal to {date}.\\\",\\\"between\\\":{\\\"numeric\\\":\\\"The {attribute} must be between {min} and {max}.\\\",\\\"file\\\":\\\"The {attribute} must be between {min} and {max} kilobytes.\\\",\\\"string\\\":\\\"The {attribute} must be between {min} and {max} characters.\\\",\\\"array\\\":\\\"The {attribute} must have between {min} and {max} items.\\\"},\\\"boolean\\\":\\\"The {attribute} field must be true or false.\\\",\\\"confirmed\\\":\\\"The {attribute} confirmation does not match.\\\",\\\"date\\\":\\\"The {attribute} is not a valid date.\\\",\\\"date_equals\\\":\\\"The {attribute} must be a date equal to {date}.\\\",\\\"date_format\\\":\\\"The {attribute} does not match the format {format}.\\\",\\\"different\\\":\\\"The {attribute} and {other} must be different.\\\",\\\"digits\\\":\\\"The {attribute} must be {digits} digits.\\\",\\\"digits_between\\\":\\\"The {attribute} must be between {min} and {max} digits.\\\",\\\"dimensions\\\":\\\"The {attribute} has invalid image dimensions.\\\",\\\"distinct\\\":\\\"The {attribute} field has a duplicate value.\\\",\\\"email\\\":\\\"The {attribute} must be a valid email address.\\\",\\\"exists\\\":\\\"The selected {attribute} is invalid.\\\",\\\"file\\\":\\\"The {attribute} must be a file.\\\",\\\"filled\\\":\\\"The {attribute} field must have a value.\\\",\\\"gt\\\":{\\\"numeric\\\":\\\"The {attribute} must be greater than {value}.\\\",\\\"file\\\":\\\"The {attribute} must be greater than {value} kilobytes.\\\",\\\"string\\\":\\\"The {attribute} must be greater than {value} characters.\\\",\\\"array\\\":\\\"The {attribute} must have more than {value} items.\\\"},\\\"gte\\\":{\\\"numeric\\\":\\\"The {attribute} must be greater than or equal {value}.\\\",\\\"file\\\":\\\"The {attribute} must be greater than or equal {value} kilobytes.\\\",\\\"string\\\":\\\"The {attribute} must be greater than or equal {value} characters.\\\",\\\"array\\\":\\\"The {attribute} must have {value} items or more.\\\"},\\\"image\\\":\\\"The {attribute} must be an image.\\\",\\\"in\\\":\\\"The selected {attribute} is invalid.\\\",\\\"in_array\\\":\\\"The {attribute} field does not exist in {other}.\\\",\\\"integer\\\":\\\"The {attribute} must be an integer.\\\",\\\"ip\\\":\\\"The {attribute} must be a valid IP address.\\\",\\\"ipv4\\\":\\\"The {attribute} must be a valid IPv4 address.\\\",\\\"ipv6\\\":\\\"The {attribute} must be a valid IPv6 address.\\\",\\\"json\\\":\\\"The {attribute} must be a valid JSON string.\\\",\\\"lt\\\":{\\\"numeric\\\":\\\"The {attribute} must be less than {value}.\\\",\\\"file\\\":\\\"The {attribute} must be less than {value} kilobytes.\\\",\\\"string\\\":\\\"The {attribute} must be less than {value} characters.\\\",\\\"array\\\":\\\"The {attribute} must have less than {value} items.\\\"},\\\"lte\\\":{\\\"numeric\\\":\\\"The {attribute} must be less than or equal {value}.\\\",\\\"file\\\":\\\"The {attribute} must be less than or equal {value} kilobytes.\\\",\\\"string\\\":\\\"The {attribute} must be less than or equal {value} characters.\\\",\\\"array\\\":\\\"The {attribute} must not have more than {value} items.\\\"},\\\"max\\\":{\\\"numeric\\\":\\\"The {attribute} may not be greater than {max}.\\\",\\\"file\\\":\\\"The {attribute} may not be greater than {max} kilobytes.\\\",\\\"string\\\":\\\"The {attribute} may not be greater than {max} characters.\\\",\\\"array\\\":\\\"The {attribute} may not have more than {max} items.\\\"},\\\"mimes\\\":\\\"The {attribute} must be a file of type: {values}.\\\",\\\"mimetypes\\\":\\\"The {attribute} must be a file of type: {values}.\\\",\\\"min\\\":{\\\"numeric\\\":\\\"The {attribute} must be at least {min}.\\\",\\\"file\\\":\\\"The {attribute} must be at least {min} kilobytes.\\\",\\\"string\\\":\\\"The {attribute} must be at least {min} characters.\\\",\\\"array\\\":\\\"The {attribute} must have at least {min} items.\\\"},\\\"not_in\\\":\\\"The selected {attribute} is invalid.\\\",\\\"not_regex\\\":\\\"The {attribute} format is invalid.\\\",\\\"numeric\\\":\\\"The {attribute} must be a number.\\\",\\\"present\\\":\\\"The {attribute} field must be present.\\\",\\\"regex\\\":\\\"The {attribute} format is invalid.\\\",\\\"required\\\":\\\"The {attribute} field is required.\\\",\\\"required_if\\\":\\\"The {attribute} field is required when {other} is {value}.\\\",\\\"required_unless\\\":\\\"The {attribute} field is required unless {other} is in {values}.\\\",\\\"required_with\\\":\\\"The {attribute} field is required when {values} is present.\\\",\\\"required_with_all\\\":\\\"The {attribute} field is required when {values} are present.\\\",\\\"required_without\\\":\\\"The {attribute} field is required when {values} is not present.\\\",\\\"required_without_all\\\":\\\"The {attribute} field is required when none of {values} are present.\\\",\\\"same\\\":\\\"The {attribute} and {other} must match.\\\",\\\"size\\\":{\\\"numeric\\\":\\\"The {attribute} must be {size}.\\\",\\\"file\\\":\\\"The {attribute} must be {size} kilobytes.\\\",\\\"string\\\":\\\"The {attribute} must be {size} characters.\\\",\\\"array\\\":\\\"The {attribute} must contain {size} items.\\\"},\\\"starts_with\\\":\\\"The {attribute} must start with one of the following: {values}\\\",\\\"string\\\":\\\"The {attribute} must be a string.\\\",\\\"timezone\\\":\\\"The {attribute} must be a valid zone.\\\",\\\"unique\\\":\\\"The {attribute} has already been taken.\\\",\\\"uploaded\\\":\\\"The {attribute} failed to upload.\\\",\\\"url\\\":\\\"The {attribute} format is invalid.\\\",\\\"uuid\\\":\\\"The {attribute} must be a valid UUID.\\\",\\\"custom\\\":{\\\"attribute-name\\\":{\\\"rule-name\\\":\\\"custom-message\\\"}},\\\"attributes\\\":[]},\\\"verification\\\":{\\\"verified\\\":\\\"Your email has been verified!\\\",\\\"invalid\\\":\\\"The verification link is invalid.\\\",\\\"already_verified\\\":\\\"The email is already verified.\\\",\\\"user\\\":\\\"We can't find a user with that e-mail address.\\\",\\\"sent\\\":\\\"We have e-mailed your verification link!\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9sYW5nL2VuLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/lang/en.json\n");

/***/ })

}]);