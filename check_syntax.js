var fso = new ActiveXObject("Scripting.FileSystemObject");
var f = fso.OpenTextFile(WScript.Arguments(0), 1);
var html = f.ReadAll();
f.Close();

var scriptBlocks = [];
var start = 0;
while (true) {
    var sIdx = html.indexOf("<script>", start);
    if (sIdx == -1) break;
    var eIdx = html.indexOf("</script>", sIdx);
    if (eIdx == -1) break;
    scriptBlocks.push(html.substring(sIdx + 8, eIdx));
    start = eIdx + 9;
}

for (var i = 0; i < scriptBlocks.length; i++) {
    try {
        new Function(scriptBlocks[i]);
    } catch (e) {
        WScript.Echo("Syntax Error in script block " + i + ": " + e.message);
    }
}