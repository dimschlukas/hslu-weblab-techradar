# Fazit & Reflexion

## Was ist gut gelaufen?

Mehrere Aspekte des Projekts wurden erfolgreich umgesetzt. Die initiale Einrichtung von Frontend und Backend sowie die Organisation des GitHub-Repositories haben eine stabile Grundlage geschaffen. Die Implementierung der Authentifizierung mit JWT, bcrypt und passendem Session-Handling verlief effizient. Die Integration von MongoDB über Docker funktionierte problemlos.

Die Frontend-Entwicklung mit Angular, Material UI und TailwindCSS machte gute Fortschritte. Der Technologie-Viewer und das Admin-Panel wurden mit solider Funktionalität entwickelt, einschliesslich rollenbasierter Zugriffskontrolle. Die Implementierung von CRUD-Operationen und die Möglichkeit für Admins, Klassifikationen sowie unveröffentlichte Technologien zu verwalten, haben die Flexibilität erhöht.

Zusätzlich haben Playwright-End-to-End-Tests, C4-Modelle und die Arc42-Dokumentation die Qualität und Wartbarkeit des Projekts verbessert.

## Wo lagen die Herausforderungen?

Einige Herausforderungen traten während des Projekts auf. Die Datenbankstruktur war anfangs zu detailliert, was das Filtern und Verwalten von Technologien erschwerte. Ein einfacherer Ansatz nach dem „Keep It Simple, Stupid“ (KISS)-Prinzip wäre von Anfang an besser gewesen.

Es gab zudem Probleme mit der Weitergabe von Fehlermeldungen vom Backend an den Client, was Debugging viel debugging erforderte.

Die Umsetzung der Zugriffskontrolle und die korrekte Anzeige von Admin- und Nicht-Admin-Funktionen erforderten ebenfalls präzise Anpassungen.

Am meisten forderte mich jedoch die UI gestaltung. Dass die Web App auf Mobile, wie auch Desktop gut aussieht, und responisve ist.

## Was würde ich das nächste Mal anders bzw. besser machen?

Beim nächsten Mal würde ich von Beginn an mit einer einfacheren Datenbankstruktur arbeiten, um unnötige Komplexität zu vermeiden. Auch eine frühere Definition der Anforderungen für rollenbasierten Zugriff und Technologie-Klassifikationen wäre hilfreich gewesen.

Automatisierte Tests und die Playwright-Integration hätten früher eingeführt werden sollen, um Fehler schneller zu erkennen. Zudem hätte eine bessere initiale Fehlerbehandlung Zeit gespart, insbesondere bei der Kommunikation zwischen Backend und Client.

Insgesamt war das Projekt gut strukturiert und hat die gewünschten Funktionalitäten geliefert. Zukünftig könnte eine optimierte Planung in der Anfangsphase sowie ein früherer Fokus auf Testing und Fehlerbehandlung die Effizienz und Entwicklungsgeschwindigkeit weiter verbessern.
