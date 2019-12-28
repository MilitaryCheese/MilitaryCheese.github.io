/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
'use strict';

//-------------------------------*
// JS Features for UI Commpoents
//-------------------------------*

//MDC Tabs
var tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
var contentEls = document.querySelectorAll('.content');

tabBar.listen('MDCTabBar:activated', function (event) {
  // Hide currently-active content
  document.querySelector('.content--active').classList.remove('content--active');
  // Show content for newly-activated tab
  contentEls[event.detail.index].classList.add('content--active');
});

//MDC Input Fields
var textFieldLocation = new mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field-location'));
var textFieldDate = new mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field-date'));