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
