'use strict'

$('.page').hide()
$(document).ready(onInit)

function onInit() {
    $(`.home-page`).show()
    $('.home-link').on('click', () => onPage('home'))
    $('.profile-link').on('click', () => onPage('profile'))
    $('.mission-link').on('click', () => onPage('mission'))
    $('.milano-link').on('click', () => onPage('milano'))
    $('.design-link').on('click', () => onPage('design'))
    $('.maintenance-link').on('click', () => onPage('maintenance'))
    $('.art-case-link').on('click', () => onPage('art-case'))
    $('.black-and-white-link').on('click', () => onPage('black-and-white'))
    $('.gold-link').on('click', () => onPage('gold'))
    $('.references-link').on('click', () => onPage('references'))
    $('.hall-link').on('click', () => onPage('hall'))
    $('.on-season-link').on('click', () => onPage('on-season'))
    $('.off-season-link').on('click', () => onPage('off-season'))
}

function onPage(name) {
    $('.page').hide()
    $(`.${name}-page`).show()
}