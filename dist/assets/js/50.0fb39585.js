(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{411:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"others"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" OTHERS")]),t._v(" "),s("h2",{attrs:{id:"email-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#email-verification"}},[t._v("#")]),t._v(" # EMAIL VERIFICATION")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Introduction")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("Model preparation")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("App\\User")]),t._v(" must implement "),s("code",[t._v("Illuminate\\Contracts\\Auth\\MustVerifyEmail")])])])])])]),t._v(" "),s("li",[s("strong",[t._v("Database Considerations")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("users")]),t._v(" table must have "),s("code",[t._v("email_verified_at")])])])]),t._v(" "),s("li",[s("strong",[t._v("Route")]),t._v(" "),s("ul",[s("li",[t._v("Logic for sending emails - "),s("code",[t._v("Auth\\VerificationController")])]),t._v(" "),s("li",[t._v("Add - "),s("code",[t._v("Auth::routes ([‘verify’ => true])")])]),t._v(" "),s("li",[t._v("Use "),s("code",[t._v("verified")]),t._v(" middleware which is "),s("code",[t._v("Illuminate\\Auth\\Middleware\\EnsureEmailIsVerified")])])])]),t._v(" "),s("li",[s("strong",[t._v("Views")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("resources/views/auth/verify.blade.php")])])])]),t._v(" "),s("li",[s("strong",[t._v("After verifying emails")]),t._v(" "),s("ul",[s("li",[t._v("In "),s("em",[t._v("VerificationController")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("protected $redirectTo = “/dashboard”")])])])])])]),t._v(" "),s("li",[s("strong",[t._v("Events")]),t._v(" "),s("ul",[s("li",[t._v("see docs")])])])]),t._v(" "),s("h2",{attrs:{id:"encryption"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[t._v("#")]),t._v(" # ENCRYPTION")]),t._v(" "),s("ul",[s("li",[s("p",[s("em",[t._v("OpenSSL")]),t._v(" provides AES-256 / AES-128")])]),t._v(" "),s("li",[s("p",[t._v("All encrypted values are signed with "),s("em",[t._v("MAC")]),t._v(" (Message Authentication code) to avoid authentication")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("php artisan key:generate")]),t._v(" // Gives key in .env")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Using the encrypter")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("encrypt($request->secretmsg)")])]),t._v(" "),s("li",[t._v("Uses "),s("strong",[t._v("serialize")]),t._v(" during encryption for "),s("em",[t._v("objects & arrays")]),t._v(" to string")]),t._v(" "),s("li",[t._v("So js needs to "),s("strong",[t._v("unserialize")]),t._v(" the string")]),t._v(" "),s("li",[t._v("If serialize is not needed then use")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Crypt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encryptString ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘hello’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decryptString ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$encryptedKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"hashing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashing"}},[t._v("#")]),t._v(" # HASHING")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Bcrypt & Argon2")]),t._v(" algorithms are available for passwords. Bcrypt is default for laravel")])]),t._v(" "),s("li",[s("p",[t._v("Config - "),s("code",[t._v("config/hashing.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Hash")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("check ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“plainText”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hashedPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("needsRehash ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hashedPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# true / false")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"reset-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset-password"}},[t._v("#")]),t._v(" # RESET PASSWORD")]),t._v(" "),s("ul",[s("li",[t._v("User must use trait "),s("code",[t._v("Illuminate\\Notifications\\Notifiable")])]),t._v(" "),s("li",[t._v("Reset tokens expires after 1 hour. See expire option in "),s("code",[t._v("config/auth.php")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Database")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("App\\User")]),t._v(" must implements "),s("code",[t._v("Illuminate\\Contracts\\Auth\\CanResetPassword")])]),t._v(" "),s("li",[t._v("DB table is already added in migration.")])])]),t._v(" "),s("li",[s("strong",[t._v("Route")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Auth\\ForgetPasswordController")]),t._v(" & "),s("code",[t._v("Auth\\ResetPasswordController")])])])]),t._v(" "),s("li",[s("strong",[t._v("Views")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("resources/views/auth/passwords")])])])]),t._v(" "),s("li",[s("strong",[t._v("After Reset")]),t._v(" "),s("ul",[s("li",[t._v("Visit - "),s("em",[t._v("“/password/reset”")])]),t._v(" "),s("li",[s("code",[t._v("$redirectTo")]),t._v(" property in "),s("em",[t._v("ResetPasswordController")])])])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);