const readLine = require('readLine');
const fs = require('fs');

let data = JSON.parse(fs.readFileSync("todo.json", "utf8"));
let input = process.argv

switch (process.argv[2]) {
 case undefined:
    console.log(
        ">>> JS TODO <<<"+
        "\n node todo.js <command"+
        "\n node todo.js list"+
        "\n node todo.js task <task_id"+
        "\n node todo.js add <task_content"+
        "\n node todo.js delete <task_id"+
        "\n node todo.js complete <task_id"+
        "\n node todo.js uncomplete <task_id"+
        "\n node todo.js list: outstanding asc|desc"+
        "\n node todo.js list: completed asc|desc"+
        "\n node todo.js tag <task_id> <task_name_1 <tag_name_2> ... <tag_name_N>"+
        "\n node todo.js filter:<tag_name"
    );
    process.exit(0);

}