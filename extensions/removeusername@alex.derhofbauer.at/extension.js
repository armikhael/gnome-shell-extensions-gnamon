const Main = imports.ui.main;

function init() {
}

function disable() {
    if (typeof Main.panel.statusArea !== 'undefined') {
        Main.panel.statusArea['userMenu']._name.show();
    } else {
        Main.panel._statusArea['userMenu']._name.show();
    }
}

function enable() {
    if (typeof Main.panel.statusArea !== 'undefined') {
        Main.panel.statusArea['userMenu']._name.hide();
    } else {
        Main.panel._statusArea['userMenu']._name.hide();
    }
}

