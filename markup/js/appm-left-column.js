/**
 * @licence
 * Copyright (c) WSO2 Inc. (http://wso2.com) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file contains left column related JS stuff.
 */

$(document).ready(function () {
    // show/hide left column
    var leftColumn = $('.left-column');
    $('#left-column-toggle-btn').on('click', function (event) {
        console.log(leftColumn.css("max-width"));
        if (leftColumn.css("max-width") == '0px') {
            leftColumn.css("max-width", 200);
        } else {
            leftColumn.css("max-width", 0)
        }
    });

    // show/hide sub-navigations
    $('.navigation-sub-items-toggle').on('click', function (event) {
        var $this = $(this);
        if ($this.parent().closest('li').find('.navigation-sub-items').toggle("fast", "linear").is(':visible')) {
            $this.removeClass("fw-up").addClass("fw-down");
        } else {
            $this.removeClass("fw-down").addClass("fw-up");
        }
    });
});