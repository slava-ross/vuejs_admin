//let Vue = require("vue");

//import Vue from 'vue'
//import vmApp from './app.vue'
//new Vue(vmApp).$mount('#app')

let axios = require("axios");

new Vue({
    el: "#app",
    data: {
        "pageList": [],
        "newPageName": ""
    },
    methods: {
        createPage() {
            axios
                .post("./api/createNewHtmlPage.php", { "name": this.newPageName })
                .then(() => this.updatePageList())
        },
        updatePageList() {
            axios
                .get("./api/")
                .then((response) => {
                    this.pageList = response.data
                })
        },
        deletePage(page) {
            axios
                .post("./api/deleteHtmlPage.php", { "name": page })
                .then(() => this.updatePageList())
        }
    },
    created() {
        axios
            .get("./api/")
            .then((response) => {
                this.pageList = response.data
            })
    }
});

/*
const $ = require("jquery");

function getPagesList() {
    $("h1").remove();
    $("button.del").remove();
    $.get("./api", (data) => {
        data.forEach((file) => {
            $("#container").append("<h1>" + file + "</h1>").append('<button class="del" data-filename="' + file + '">Удалить страницу</button>');
        });
    }, "JSON");
}

getPagesList();

$("button.add").on("click", () => {
    $.post("./api/createNewHtmlPage.php", {
        "name": $("input").val()
    }, (data) => {
        getPagesList();
    })
    .fail(() => {
        alert("Такая страница уже существует!");
    })
});

$("#container").on("click", ".del", (e) => {
    let filename = $(e.target).data('filename').replace(/\.[^.$]+$/, '');
    console.log(filename);
    $.post("./api/deleteHtmlPage.php", {
        "name": filename
    }, (data) => {
        getPagesList();
    })
    .fail(() => {
        alert("Такой страницы не существует!");
    })
});
*/