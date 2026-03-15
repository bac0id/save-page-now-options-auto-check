// ==UserScript==
// @name        Save Page Now Options Auto-Check
// @namespace   https://github.com/bac0id/
// @version     0.1.1
// @description Automatically checks 'Save outlinks', 'Save error pages', and 'Save screenshot' on the Save Page Now page of Internet Archive.
// @author      bacx
// @homepage    https://github.com/bac0id/save-page-now-options-auto-check
// @match       https://web.archive.org/save
// @match       https://web.archivep75mbjunhxc6x4j5mwjmomyxb573v42baldlqu56ruil2oiad.onion/save
// @run-at      document-idle
// @grant       none
// @downloadURL https://raw.githubusercontent.com/bac0id/save-page-now-options-auto-check/refs/heads/main/main.js
// @updateURL   https://raw.githubusercontent.com/bac0id/save-page-now-options-auto-check/refs/heads/main/main.js
// ==/UserScript==

(function () {
    'use strict';

    const CHECKBOX_IDS = [
        'capture_outlinks',
        'capture_all',
        'capture_screenshot'
    ];

    const autoCheck = () => {
        CHECKBOX_IDS.forEach(id => {
            const el = document.getElementById(id);
            if (el && !el.checked) {
                el.checked = true;
                el.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
    };

    // Run immediately
    autoCheck();

    // Use a MutationObserver to catch elements if they are rendered late
    const observer = new MutationObserver(() => {
        autoCheck();
        // Disconnect if all are found to save resources
        if (CHECKBOX_IDS.every(id => document.getElementById(id))) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
