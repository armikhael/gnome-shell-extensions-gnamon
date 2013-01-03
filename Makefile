# Makefile

SHELL := sh -e

all: test build

test:

build:

install:

	@mkdir -p $(DESTDIR)/usr/share/gnome-shell/extensions/
	@cp -r extensions/* $(DESTDIR)/usr/share/gnome-shell/extensions/

uninstall:

	#@rm -rf $(DESTDIR)/usr/share/icons/Gnamon
	#@rm -rf $(DESTDIR)/usr/share/themes/Gnamon

clean:

distclean:

reinstall: uninstall install
