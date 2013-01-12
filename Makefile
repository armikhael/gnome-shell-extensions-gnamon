# Makefile

SHELL := sh -e

all: test build

test:

build:

install:

	@mkdir -p $(DESTDIR)/usr/share/gnome-shell/extensions/
	@mkdir -p $(DESTDIR)/usr/share/glib-2.0/schemas/
	@cp -r extensions/* $(DESTDIR)/usr/share/gnome-shell/extensions/
	@cp -r schemas/* $(DESTDIR)/usr/share/glib-2.0/schemas/

uninstall:

	#@rm -rf $(DESTDIR)/usr/share/icons/Gnamon
	#@rm -rf $(DESTDIR)/usr/share/themes/Gnamon

clean:

distclean:

reinstall: uninstall install
