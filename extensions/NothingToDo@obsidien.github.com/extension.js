const Config = imports.misc.config
const Main   = imports.ui.main

let age
let planning, separator, popup

function init(metadata) {
    let current_version = Config.PACKAGE_VERSION.split('.')
    if (current_version.length != 3 || current_version[0] != 3) throw new Error("Strange version number (extension.js:9).")
    
    switch (current_version[1]) {
        case"3": global.log("Warning of extension [" + metadata.uuid + "]:\n              Old development release detected (" + Config.PACKAGE_VERSION + "). You should upgrade!\n")   //eak
        case"4": age = "old"
            break
        case"5": global.log("Warning of extension [" + metadata.uuid + "]:\n              Development release detected (" + Config.PACKAGE_VERSION + "). Loading as a 3.6 release.\n") //eak
        case"6": age = "new"
            break
        default: throw new Error("Strange version number (extension.js:18).")
    }
}
function enable() {
    let thing
    if (age=="old") thing = Main.panel._dateMenu
    else            thing = Main.panel.statusArea.dateMenu
    
    popup = thing.menu
    planning = thing._eventList.actor.get_parent()
    let items = planning.get_parent().get_children()
    let index = items.indexOf(planning)
    separator = items[(index == 0) ? index+1 : index-1]
    
    planning.hide()
    separator.hide()
    if (popup._arrowAlignment == 0.25) popup._arrowAlignment = 0.50
}
function disable() {
    planning.show()
    separator.show()
    if (popup._arrowAlignment == 0.50) popup._arrowAlignment = 0.25
}
