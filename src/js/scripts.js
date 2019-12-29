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


//Handling weather features
var cloudy = '<i class="fas fa-cloud"></i><p class="mdc-typography mdc-typography--subtitle2">Cloudy</p>';
var sunny = '<i class="fas fa-sun"></i><p class="mdc-typography mdc-typography--subtitle2">Sunny</p>';
var partlyCloudy = '<i class="fas fa-cloud-sun"></i><p class="mdc-typography mdc-typography--subtitle2">Partly cloudy</p>';
var rainy = '<i class="fas fa-cloud-rain"></i><p class="mdc-typography mdc-typography--subtitle2">Rainy</p>';
var showers = '<i class="fas fa-cloud-showers-heavy"></i><p class="mdc-typography mdc-typography--subtitle2">Showers</p>';
var thunderstorm = '<i class="fas fa-bolt"></i><p class="mdc-typography mdc-typography--subtitle2">Thunderstorm</p>';

//settings the weather section
$(document).ready(function () {
  $('#descriptive-weather').append(thunderstorm);
});