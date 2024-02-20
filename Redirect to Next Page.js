// ==UserScript==
// @name         Redirect to Next Page
// @match        http://acm.awingconnect.vn/Success
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Đường link của trang tiếp theo
    var nextPageURL = 'http://25.25.0.1/';

    // Thời gian chờ trước khi chuyển trang (milliseconds)
    var delayTime = 500; // Ví dụ: 3000 milliseconds = 3 giây

    // Hàm để chuyển trang
    function redirectToNextPage() {
        window.location.href = nextPageURL;
    }

    // Gọi hàm redirectToNextPage() sau khi thời gian chờ đã kết thúc
    setTimeout(redirectToNextPage, delayTime);
})();
