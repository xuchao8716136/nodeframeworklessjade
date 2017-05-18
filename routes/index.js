var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/about', function (req, res, next) {
    res.render('about', {title: 'Express'});
});
router.get('/accordion', function (req, res, next) {
    res.render('accordion', {title: 'Express'});
});
router.get('/animation', function (req, res, next) {
    res.render('animation', {title: 'Express'});
});
router.get('/autocomplete', function (req, res, next) {
    res.render('autocomplete', {title: 'Express'});
});
router.get('/bars', function (req, res, next) {
    res.render('bars', {title: 'Express'});
});
router.get('/bars-deep-navbar', function (req, res, next) {
    res.render('bars-deep-navbar', {title: 'Express'});
});
router.get('/bars-deep-navbar-2', function (req, res, next) {
    res.render('bars-deep-navbar-2', {title: 'Express'});
});
router.get('/bars-deep-navbar-3', function (req, res, next) {
    res.render('bars-deep-navbar-3', {title: 'Express'});
});
router.get('/bars-hide', function (req, res, next) {
    res.render('bars-hide', {title: 'Express'});
});
router.get('/bars-hide-on-scroll', function (req, res, next) {
    res.render('bars-hide-on-scroll', {title: 'Express'});
});
router.get('/bars-no-navbar', function (req, res, next) {
    res.render('bars-no-navbar', {title: 'Express'});
});
router.get('/bars-no-navbar-toolbar', function (req, res, next) {
    res.render('bars-no-navbar-toolbar', {title: 'Express'});
});
router.get('/bars-no-toolbar', function (req, res, next) {
    res.render('bars-no-toolbar', {title: 'Express'});
});
router.get('/bars-sub-navbar', function (req, res, next) {
    res.render('bars-sub-navbar', {title: 'Express'});
});
router.get('/bars-tabbar', function (req, res, next) {
    res.render('bars-tabbar', {title: 'Express'});
});
router.get('/bars-tabbar-labels', function (req, res, next) {
    res.render('bars-tabbar-labels', {title: 'Express'});
});
router.get('/calendar', function (req, res, next) {
    res.render('calendar', {title: 'Express'});
});
router.get('/cards', function (req, res, next) {
    res.render('cards', {title: 'Express'});
});
router.get('/chips', function (req, res, next) {
    res.render('chips', {title: 'Express'});
});
router.get('/color-themes', function (req, res, next) {
    res.render('color-themes', {title: 'Express'});
});
router.get('/contacts', function (req, res, next) {
    res.render('contacts', {title: 'Express'});
});
router.get('/core-features', function (req, res, next) {
    res.render('core-features', {title: 'Express'});
});
router.get('/data-table', function (req, res, next) {
    res.render('data-table', {title: 'Express'});
});
router.get('/error', function (req, res, next) {
    res.render('error', {title: 'Express'});
});
router.get('/floating-button', function (req, res, next) {
    res.render('floating-button', {title: 'Express'});
});
router.get('/floating-button-dial', function (req, res, next) {
    res.render('floating-button-dial', {title: 'Express'});
});
router.get('/floating-button-static', function (req, res, next) {
    res.render('floating-button-static', {title: 'Express'});
});
router.get('/forms', function (req, res, next) {
    res.render('forms', {title: 'Express'});
});
router.get('/forms-buttons', function (req, res, next) {
    res.render('forms-buttons', {title: 'Express'});
});
router.get('/forms-checkboxes', function (req, res, next) {
    res.render('forms-checkboxes', {title: 'Express'});
});
router.get('/forms-elements', function (req, res, next) {
    res.render('forms-elements', {title: 'Express'});
});
router.get('/forms-selects', function (req, res, next) {
    res.render('forms-selects', {title: 'Express'});
});
router.get('/forms-storage', function (req, res, next) {
    res.render('forms-storage', {title: 'Express'});
});
router.get('/grid', function (req, res, next) {
    res.render('grid', {title: 'Express'});
});
router.get('/icons', function (req, res, next) {
    res.render('icons', {title: 'Express'});
});
router.get('/infinite-scroll', function (req, res, next) {
    res.render('infinite-scroll', {title: 'Express'});
});
router.get('/layout', function (req, res, next) {
    res.render('layout', {title: 'Express'});
});
router.get('/lazy-load', function (req, res, next) {
    res.render('lazy-load', {title: 'Express'});
});
router.get('/list-view', function (req, res, next) {
    res.render('list-view', {title: 'Express'});
});
router.get('/login-screen', function (req, res, next) {
    res.render('login-screen', {title: 'Express'});
});
router.get('/login-screen-embedded', function (req, res, next) {
    res.render('login-screen-embedded', {title: 'Express'});
});
router.get('/media-lists', function (req, res, next) {
    res.render('media-lists', {title: 'Express'});
});
router.get('/messages', function (req, res, next) {
    res.render('messages', {title: 'Express'});
});
router.get('/modals', function (req, res, next) {
    res.render('modals', {title: 'Express'});
});
router.get('/notifications', function (req, res, next) {
    res.render('notifications', {title: 'Express'});
});
router.get('/panels', function (req, res, next) {
    res.render('panels', {title: 'Express'});
});
router.get('/photo-browser', function (req, res, next) {
    res.render('photo-browser', {title: 'Express'});
});
router.get('/picker', function (req, res, next) {
    res.render('picker', {title: 'Express'});
});
router.get('/popover', function (req, res, next) {
    res.render('popover', {title: 'Express'});
});
router.get('/preloader', function (req, res, next) {
    res.render('preloader', {title: 'Express'});
});
router.get('/progressbar', function (req, res, next) {
    res.render('progressbar', {title: 'Express'});
});
router.get('/pull-to-refresh', function (req, res, next) {
    res.render('pull-to-refresh', {title: 'Express'});
});
router.get('/searchbar', function (req, res, next) {
    res.render('searchbar', {title: 'Express'});
});
router.get('/sortable-list', function (req, res, next) {
    res.render('sortable-list', {title: 'Express'});
});
router.get('/swipe-delete', function (req, res, next) {
    res.render('swipe-delete', {title: 'Express'});
});
router.get('/swiper', function (req, res, next) {
    res.render('swiper', {title: 'Express'});
});
router.get('/swiper-3d-coverflow', function (req, res, next) {
    res.render('swiper-3d-coverflow', {title: 'Express'});
});
router.get('/swiper-3d-cube', function (req, res, next) {
    res.render('swiper-3d-cube', {title: 'Express'});
});
router.get('/swiper-3d-flip', function (req, res, next) {
    res.render('swiper-3d-flip', {title: 'Express'});
});
router.get('/swiper-custom', function (req, res, next) {
    res.render('swiper-custom', {title: 'Express'});
});
router.get('/swiper-fade', function (req, res, next) {
    res.render('swiper-fade', {title: 'Express'});
});
router.get('/swiper-gallery', function (req, res, next) {
    res.render('swiper-gallery', {title: 'Express'});
});
router.get('/swiper-horizontal', function (req, res, next) {
    res.render('swiper-horizontal', {title: 'Express'});
});
router.get('/swiper-lazy', function (req, res, next) {
    res.render('swiper-lazy', {title: 'Express'});
});
router.get('/swiper-loop', function (req, res, next) {
    res.render('swiper-loop', {title: 'Express'});
});
router.get('/swiper-multiple', function (req, res, next) {
    res.render('swiper-multiple', {title: 'Express'});
});
router.get('/swiper-nested', function (req, res, next) {
    res.render('swiper-nested', {title: 'Express'});
});
router.get('/swiper-pagination-fraction', function (req, res, next) {
    res.render('swiper-pagination-fraction', {title: 'Express'});
});
router.get('/swiper-pagination-progress', function (req, res, next) {
    res.render('swiper-pagination-progress', {title: 'Express'});
});
router.get('/swiper-parallax', function (req, res, next) {
    res.render('swiper-parallax', {title: 'Express'});
});
router.get('/swiper-scrollbar', function (req, res, next) {
    res.render('swiper-scrollbar', {title: 'Express'});
});
router.get('/swiper-space-between', function (req, res, next) {
    res.render('swiper-space-between', {title: 'Express'});
});
router.get('/swiper-vertical', function (req, res, next) {
    res.render('swiper-vertical', {title: 'Express'});
});
router.get('/swiper-zoom', function (req, res, next) {
    res.render('swiper-zoom', {title: 'Express'});
});
router.get('/tabs', function (req, res, next) {
    res.render('tabs', {title: 'Express'});
});
router.get('/tabs-animated', function (req, res, next) {
    res.render('tabs-animated', {title: 'Express'});
});
router.get('/tabs-static', function (req, res, next) {
    res.render('tabs-static', {title: 'Express'});
});
router.get('/tabs-swipeable', function (req, res, next) {
    res.render('tabs-swipeable', {title: 'Express'});
});
router.get('/timeline', function (req, res, next) {
    res.render('timeline', {title: 'Express'});
});
router.get('/timeline-horizontal', function (req, res, next) {
    res.render('timeline-horizontal', {title: 'Express'});
});
router.get('/timeline-horizontal-calendar', function (req, res, next) {
    res.render('timeline-horizontal-calendar', {title: 'Express'});
});
router.get('/timeline-vertical', function (req, res, next) {
    res.render('timeline-vertical', {title: 'Express'});
});
router.get('/transitions', function (req, res, next) {
    res.render('transitions', {title: 'Express'});
});
router.get('/virtual-list', function (req, res, next) {
    res.render('virtual-list', {title: 'Express'});
});


module.exports = router;
