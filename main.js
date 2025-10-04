// ==UserScript==
// @name        Save Page Now Options Auto-Check
// @description AutoXmatically checks the 'Save outlinks', 'Save error pages', and 'Save screenshot' options on the Internet Archive's "Save Page Now" page.
// @version     0.1.0
// @author      bacx
// @namespace   https://github.com/bac0id/
// @homepage    https://github.com/bac0id/save-page-now-options-auto-check
// @match       https://web.archive.org/save
// @match       https://web.archivep75mbjunhxc6x4j5mwjmomyxb573v42baldlqu56ruil2oiad.onion/save
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    function checkById(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.checked = true;
        } else {
            console.log(`Tampermonkey script: Element with ID "${elementId}" not found.`);
        }
    }

    function checkBoxes() {
        checkById('capture_outlinks');
        checkById('capture_all');
        checkById('capture_screenshot');
    }

    window.addEventListener('DOMContentLoaded', checkBoxes);
    window.addEventListener('load', checkBoxes);
})();
