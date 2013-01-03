const Main = imports.ui.main;

function init() {
}

let item = null;

function enable() {
    item = Main.panel._statusArea.network.menu.addSettingsAction("Connection Editor", 'nm-connection-editor.desktop');
}

function disable() {
    item.destroy();
    item = null;
}
