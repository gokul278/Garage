import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'de' | 'en';

export interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    de: {
        // Navigation Header
        'nav.home': 'Home',
        'nav.doItYourself': 'Do-it-yourself',
        'nav.yourWorkplace': 'Dein Arbeitsplatz',
        'nav.ourOffers': 'Unsere Angebote',
        'nav.aboutUs': 'Über uns',
        'nav.contactNow': 'Kontakt',

        // Footer
        'footer.addressTitle': 'Adresse',
        'footer.companyName': 'Do-it-yourself Garage',
        'footer.companySub': 'Santoro & Wiederkehr AG',
        'footer.addressStreet': 'Kaiserstuhlstrasse 79',
        'footer.addressCity': 'CH-8154 Oberglatt',
        'footer.hoursTitle': 'Öffnungszeiten',
        'footer.monFri': 'Montag – Freitag:',
        'footer.sat': 'Samstag:',
        'footer.sun': 'Sonntag:',
        'footer.closed': 'Geschlossen',
        'footer.appointmentOnly': '* Nur nach Vereinbarung',
        'footer.contactTitle': 'Kontakt',
        'footer.imprint': 'Impressum',
        'footer.privacy': 'Datenschutz',
        'footer.rights': 'Alle Rechte vorbehalten.',

        // Common Opening Hours Section
        'hours.title': 'Öffnungszeiten',
        'hours.notice': 'Bitte beachten: Letzte Check-in Zeit um 18:00 Uhr, da wir mindestens eine Stunde Servicezeit einplanen.',
        'hours.monFriTime': '08:00 - 18:30 Uhr',
        'hours.satTime': 'Nach Vereinbarung',
        'hours.sunTime': 'Geschlossen',
        'hours.sunShort': 'So',

        // Hero Carousel
        'hero.slide1Title': 'Räderwechsel\nim Handumdrehen.',
        'hero.slide1Sub': 'Lagere deine Pneus oder Räder bei uns ein,\nkomm vorbei und sie sind im Nu gewechselt.',
        'hero.slide2Title': 'Es gibt kaum ein Ersatzteil, das\nwir nicht beschaffen können.',
        'hero.slide2Sub': 'Welche Teile du auch brauchst, wir sind dein\nAnsprechpartner. Zu uns bestellt und schnell\nmontiert.',
        'hero.slide3Title': 'Lust auf mehr Leistung?\nWir sind deine Tuning-Experten.',
        'hero.slide3Sub': 'Es geht nicht immer "nur" ums Reparieren oder\nRestaurieren. Willst du den Wolf im Schafspelz?\nAlles ist möglich.',
        'hero.slide4Title': 'Wir können fast alles.\nAuch Sattlerarbeiten.',
        'hero.slide4Sub': 'Mit unseren Partnern decken wir den gesamten Bereich der\nFahrzeugrestaurierung und -reparatur ab. Wir beraten dich gerne.',

        // Home Page
        'home.introQuestion': 'Was ist eine Do-It-Yourself Garage?',
        'home.introHeadlinePart1': 'Es ist ganz einfach: Du willst an deinem Fahrzeug arbeiten. Wir haben das ',
        'home.introHeadlineRed': 'professionelle Equipment.',
        'home.introP1': 'Du hast ein altes Auto. Ein richtig altes. Einen Oldtimer. Oder ein neues. Egal. Fakt ist: Du magst dein Auto so sehr, dass du niemanden daran lassen willst. Und mit niemandem meinst du: niemanden ausser dich selbst.',
        'home.introP2': 'Wir können dich gut verstehen. Denn wir verstehen Autos. Genau darum haben wir von der Santoro & Wiederkehr AG die Do-it-yourself Garage ins Leben gerufen. Hier kannst du alles selber machen: Dein Auto bis zur letzten Einspritzdüse auseinandernehmen, Pneus wechseln, Bremsen kontrollieren, Klima-Service machen, Abgastest machen, für die MFK bereitstellen ... Kurz: Du kannst mit deinem Liebling auf vier Rädern tun, was dir gerade in den Sinn kommt. Es ist dein Auto. Und natürlich deine Verantwortung, dass nach getaner Arbeit auch wirklich alles gesetzskonform* funktioniert. Aber keine Sorge: Wenn du Unterstützung brauchst, sind wir da. Sag uns einfach Bescheid, und wir schauen dir beim Selbermachen über die Schulter.',

        // Implementation Section
        'impl.subtitle': 'Umsetzung',
        'impl.headlinePart1': 'Komm vorbei und mache dein Auto zum ',
        'impl.headlineRed': 'Meisterwerk.',
        'impl.p1': 'In der Do-it-yourself Garage steht dir die gesamte Infrastruktur zur Verfügung, vom Werkzeug bis zu den Geräten. Und wenn mal was nicht klappt, rufst du einfach Gino. Genau, das ist der Mann, den du aus dem Schweizer Fernsehen kennst. Genau dort, in der Sendung "Pimp it or kick it", zeigt Gino Laien regelmässig, wie sie ihre Autos selber reparieren können. Aber wenn wir richtig verstehen, bist du als ehrgeiziger Do-it-yourselfer definitiv kein Laie. Und jetzt: Ab auf die Hebebühne mit dir. Entschuldigung, mit deinem Auto.',
        'impl.p2': 'Und so sieht es aus, wenn die "Do-it-yourselfer" selbst Hand anlegen und die Aktentasche gegen Werkzeug tauschen.',

        // Questions Contact Section
        'questions.subtitle': 'Nur keine Hemmungen',
        'questions.headline': 'Hast du Fragen? Wir kennen die Antworten.',
        'questions.phone': '+41 79 766 99 60',

        // Do It Yourself Page
        'diy.subtitle': 'Du kannst es. Ganz alleine. Do it yourself.',
        'diy.headline': 'Garagenplatz mit Hebebühne mieten – Auto selber reparieren.',
        'diy.introP1': 'Die Do-it-yourself Garage ist bestens organisiert. Damit die Verwaltung der Arbeitsplätze, die Bereitstellung von Werkzeugen und Geräten sowie die Disposition allfällig benötigter Ersatzteile reibungslos ablaufen, solltest du deinen Arbeitsplatz mindestens 5 Arbeitstage im Voraus reservieren.',
        'diy.introP2': 'So einfach bringst du deinen Oldtimer – oder jedes aktuelle Fahrzeugmodell – in vier Schritten auf Vordermann:',
        'diy.step1Title': 'Du meldest dich bei der Do-it-yourself Garage',
        'diy.step1Content': 'Gemeinsam besprechen wir deine Wünsche und wählen den Arbeitsplatz aus, der am besten zu deinem Projekt passt.',
        'diy.step2Title': 'Du fährst bei uns vor',
        'diy.step2Content': 'Am grossen Tag des Selbermachens und Selberreparierens parkst du dein Auto auf dem Parkplatz an der Siewerdtstrasse 5 und meldest dich am Empfang. Du wirst von unserem Personal an deinem Arbeitsplatz eingewiesen und erhältst das Werkzeug sowie die bestellten Ersatzteile oder Zubehör.',
        'diy.step3Title': 'Du arbeitest an deinem Fahrzeug',
        'diy.step3Content': 'Erfrischungen kannst du dir während der Arbeit jederzeit holen. Schliesslich bist du jetzt dein eigener Chef und kannst Pausen machen, wann immer du willst. Und wenn du Fragen oder Probleme hast, wende dich einfach an unser Personal, das dir gerne mit Rat und Tat zur Seite steht.',
        'diy.step4Title': 'Du checkst aus',
        'diy.step4Content1': 'Wenn du deine Arbeit beendet hast, bereitest du den Arbeitsplatz und die Werkzeuge für die Rückgabe vor, reinigst sie und legst sie an ihren Platz zurück – Ordnung muss sein.',
        'diy.step4Content2': 'Am Empfang erhältst du die Abrechnung, die du prüfen und begleichen kannst. Und dann heisst es: Losfahren mit deinem sozusagen nagelneuen, auf jeden Fall aber selbst gepimpten Auto!',
        'diy.calloutTitle': 'Das ist doch alles super einfach, oder?',
        'diy.calloutP1': 'Wenn also an deinem Auto eine Schraube locker ist, kontaktierst du uns am besten gleich. Du kannst es wieder.',
        'diy.calloutP2': 'Kontaktiere uns und sichere dir rechtzeitig deinen Montageplatz für dein nächstes Fahrzeugprojekt!',
        'diy.reservationTitle': 'RESERVATION',
        'diy.reservationSub': 'Kontaktformular, E-Mail oder Anruf',

        // Your Workplace Page
        'workplace.subtitle': 'Unsere Garage – dein Arbeitsplatz',
        'workplace.headline': 'In der Werkstatt bist du dein eigener Chef.',
        'workplace.p1': 'Die Do-it-yourself Garage bietet perfekte Arbeitsbedingungen für dich und dein Auto. Jeder der fünf Plätze ist mit einer Hebebühne ausgestattet, sauber, gut beleuchtet und gut belüftet. Ein gut sortierter und ordentlicher Werkzeugschrank steht dir ebenfalls zur Verfügung. Dazu kommt alles an Equipment, was das Herz des selbstgemachten Automechanikers begehrt: Waschplatz, Diagnosegeräte für fast alle Marken, Bremsenprüfstand, Klimaservice-Gerät, Abgastestgeräte für Diesel und Benzin und vieles mehr...',
        'workplace.p2': 'Wenn du bei uns einen Platz reservierst, besprechen wir im Voraus genau, ob und welches Zubehör oder Ersatzteile du benötigst. Diese erhältst du bei uns zu Vorzugskonditionen, und wenn du bei uns einfährst, stehen sie für dich bereit. Selbstverständlich haben wir gängige, nicht markenspezifische Verbrauchsmaterialien wie Motoröl, Riemen, Schrauben etc. stets ausreichend an Lager.',
        'workplace.breakHeadline': 'Mache Pausen nach Bedarf!',
        'workplace.breakHighlight': 'Auch der grösste Kämpfer muss sich zwischendurch erholen. Nein, nicht in einer Höhle. Heutzutage machst du das am besten an unserer Kaffeemaschine – von unserem Kaffeepartner "Espressa".',
        'workplace.breakP1': 'Bester italienischer Kaffee mit köstlichem Aroma wartet auf dich. Marke? Lavazza – mehr als nur Geschmack. Und für den kleinen Hunger zwischendurch steht ein Snackautomat für dich bereit. Sinke in unsere gemütliche Lounge und gönne dir eine kurze Pause. Du hast es dir verdient. Nach der kleinen Pause geht es wieder an die Arbeit. Du bist schliesslich nicht gekommen, um feinsten italienischen Kaffee zu geniessen, sondern um an deinem Fahrzeug zu arbeiten. Also los, hop-hop, zurück in die Werkstatt.',
        'workplace.breakPS': 'PS: Willst du den südlichen Kaffeegenuss für zu Hause oder fürs Büro? Dann können wir dir unseren Partner "Espressa" wärmstens empfehlen. Das Leben ist bekanntlich zu kurz, um schlechten Kaffee zu trinken.',
        'workplace.safetyHeadline': 'Sicherheit geht vor',
        'workplace.safetyHighlight': 'Deine Sicherheit steht an erster Stelle. Ohne den Teufel an die Wand malen zu wollen, ist vorbeugende Sicherheit ein Muss. Für dich, die anderen Kunden und uns.',
        'workplace.accidentTitle': 'Unfallrisiko',
        'workplace.accidentDesc': 'Wer bei uns im Betrieb einen Schaden an uns, einem Kunden oder dessen Fahrzeug verursacht, haftet dafür. Um die Schadensbeweisführung zu erleichtern, zeichnen wir die Vorkommnisse in unserem Betrieb kontinuierlich auf. Der Aufenthalt in unserem Betrieb und das Arbeiten mit unseren Geräten erfolgt auf eigene Gefahr. Dieser wichtige Hinweis befindet sich auch an allen Eingangstüren.',
        'workplace.theftTitle': 'Diebstahlrisiko',
        'workplace.theftDesc': 'Bitte schliesse deine Wertsachen weg. Wo? Zum Beispiel im Handschuhfach. Kleinere Gegenstände wie Schlüssel, Portemonnaies oder Uhren kannst du auch an unserem Schalter abgeben. Wir schliessen sie für dich weg. Die Do-it-yourself Garage haftet nicht für Diebstahl.',

        // Our Offers Page
        'offers.subtitle': 'Wir besorgen es dir',
        'offers.headline': 'Bringe dein Auto. Wir kümmern uns um den Rest.',
        'offers.p1': 'Du hast ein altes Auto. Ein richtig altes. Einen Oldtimer. Oder ein neues. Egal. Fakt ist: Du magst dein Auto so sehr, dass du niemanden daran lassen willst. Und mit niemandem meinst du: niemanden ausser dich selbst.',
        'offers.checklistSubtitle': 'Noch günstiger:',
        'offers.checklistHeadline': 'Ab sofort keine Grundtaxe mehr!',
        'offers.checklistIntro': 'Das kannst du alles in der Do-it-yourself Garage tun:',
        'offers.check1': 'Garagenarbeitsplatz stundenweise mit Hebebühne mieten und alles, was dazugehört, um dein Auto selber zu reparieren',
        'offers.check2': 'Waschplatz oder Grossplatz stundenweise mieten',
        'offers.check3': 'Als Mieter Ersatzteile und Zubehör zu günstigen Konditionen beziehen',
        'offers.check4': 'Hilfe von einem unserer Mechaniker holen, der dir zeigt, wie du dein Auto selber reparieren und warten kannst',
        'offers.check5': 'Eigene Zubehör- und Ersatzteile mitbringen oder bei uns im Voraus bestellen',
        'offers.check6': 'Ersetzte Flüssigkeiten und Materialien aller Art entsorgen',
        'offers.check7': 'Eigene Werkzeuge mitbringen oder unser professionell ausgestattetes Werkzeugsortiment nutzen',
        'offers.rentSubtitle': 'Mieten statt selber kaufen',
        'offers.rentHeadline': 'Was kostet dich das alles?',
        'offers.rentP1': 'Überraschend wenig. Nun, vielleicht ist es nicht so überraschend, wenn man bedenkt, dass du alles selber machen musst. Aber keine Sorge: Wir sind für dich da, wenn du uns brauchst.',
        'offers.rentP2': 'Sogar unsere Automechaniker unterstützen dich sozusagen für ein Sandwich. Überzeuge dich selbst bei einem Blick auf die Preisliste: Bei uns kannst du viel Geld sparen. Miete eine Garage, statt alles selber zu kaufen.',
        'offers.rentP3': 'Wohlgemerkt: Wenn du gar nichts selber machen willst, bist du bei uns genau richtig. Schliesslich wird die Do-it-yourself Garage von der Garage Santoro & Wiederkehr AG betrieben. Und die versteht was von Autos. Egal welche Marke oder welches Baujahr. Wenn dein Auto also eine Reparatur oder einen Service braucht, solltest du sowieso zu uns kommen.',
        'offers.rentP4': 'Übrigens: Als Mieter eines Arbeitsplatzes kannst du Serviceteile zu günstigen Konditionen kaufen. Konkrete Anfragen beantworten wir gerne.',
        'offers.priceHeadline': 'Preisliste',
        'offers.priceNotice': 'Preise in Schweizer Franken exkl. MWST. Stand 07.2022 | Änderungen vorbehalten',
        'offers.tableHeaderOffers': 'Angebote',
        'offers.tableHeaderPrices': 'Preise',
        'offers.dispensingNotice': 'Alle Spezialwerkzeuge sind am Ausgabeschalter erhältlich',
        'offers.price1': 'Pauschale für Entsorgung und Reinigung',
        'offers.price2': 'Arbeitsbühne und Werkzeugmiete pro Stunde',
        'offers.price3': 'Motor und Fahrgestell auf dem Waschplatz abdampfen',
        'offers.price4': 'Waschplatz in Verbindung mit Arbeitsplatz',
        'offers.price5': 'Diagnose am Fahrzeug ohne Werkzeug',
        'offers.price6': 'Diagnosegerät für alle Fahrzeuge',
        'offers.price7': 'Reifen montieren ( 4 x ) auf Felge inkl. Auswuchtgewichte | Voraussetzung: Erfahrung mit Arbeitsgeräten',
        'offers.price8': 'Bremsentest auf Bremsenprüfstand',
        'offers.price9': 'Öl- und Ölfilterwechsel inkl. Altölentsorgung',
        'offers.price10': 'Übernachtung | Einstellung deines Fahrzeugs pro Nacht',
        'offers.price11': 'Mit Hilfe eines Profis pro Stunde | Die Abrechnung erfolgt zu CHF 2 pro Minute',
        'offers.price12': '1 Liter Motoröl 10W40',
        'offers.price13': '1 Liter Motoröl 5W30',
        'offers.price14': '1 Dose Bremsenreiniger',
        'offers.paymentTitle': 'Zahlungsmittel',
        'offers.paymentDesc': 'Wir akzeptieren die folgenden Karten und natürlich Bargeld. Aber keine Bitcoins und kein WIR.',

        // About Us Page
        'about.subtitle': 'Wer sind wir?',
        'about.headlinePart1': 'Wir sind S&W. Und wir sind die Auto',
        'about.headlineRed': 'schmeichler.',
        'about.highlightP': 'Wir lassen nicht nur unsere eigenen Fahrzeuge in unserer Garage tüfteln, sondern reparieren, pflegen, warten, tunen, veredeln und verschönern deinen Neuwagen oder Oldtimer auch selber.',
        'about.p1': 'Gino Santoro, der Automechaniker, den sie auch den Autoflüsterer nennen, macht am liebsten (fast) alles selber.',
        'about.p2': 'Irgendwann hatte er die schlaue Idee, dass es anderen ganz genauso gehen könnte. Also hat der Chefmechaniker und Mitinhaber der Garage Santoro & Wiederkehr AG ein Konzept auf die Beine gestellt, um seine Garage Menschen mit geschickten Händen zur Verfügung zu stellen, die ihre Autos selber reparieren und warten wollen.',
        'about.p3': 'Wer kann sich noch an die Sendung "Pimp it or kick it" auf SRF 2 erinnern? In dieser regelmässig ausgestrahlten Sendung hat Gino Santoro genau das getan: Seine Garage Laien zur Verfügung gestellt, die dort ihre Autos selber warten und für die MFK bereitstellen konnten. Natürlich unter seinem wachsamen Auge, das den TV-Mechanikern mal streng, mal verschmitzt über die Schulter schaute. Komm einfach mal vorbei.',
        'about.expHeadline': 'Über 85 Jahre ',
        'about.expRed': 'Erfahrung',
        'about.expHighlight': 'Mit Gino Santoro und seinem Team findest du langjährige Erfahrung.',
        'about.expBody': 'Sein eingespieltes Team – alles gelernte Automechaniker – freut sich, wenn es ums Tuning und Veredelungen geht. Komm vorbei.',
        'about.heartHeadline': 'Mit Freude und ',
        'about.heartRed': 'Herz',
        'about.heartHighlight': 'Oldtimer-Liebhaber und Automechaniker mit Leib und Seele mit einer riesigen Portion Erfahrung.',
        'about.heartBody1': 'Nicht zuletzt hat Gino die Idee einer Do-it-yourself Garage nicht losgelassen, weil er selber ein unverbesserlicher Oldtimer-Liebhaber ist. Und diese Jungs machen verdammt viel selber – oft aus der Not heraus, weil sonst niemand mehr ihr Auto versteht.',
        'about.heartBody2': 'Also, Oldtimer-Fans: Genau hier könnt ihr das tun. Übrigens pflegt und wartet Gino in dieser Garage zusammen mit seinem Team eine Flotte von über 30 Oldtimern, die sich alle in Privatbesitz befinden.',

        // Imprint Page
        'imprint.title': 'Impressum',
        'imprint.providerTitle': 'Anbieter dieser Website',
        'imprint.managingDirector': 'Geschäftsführer: Luigi Santoro',
        'imprint.conceptionTitle': 'Konzeption und Realisierung',
        'imprint.legalNoticesTitle': 'Rechtliche Hinweise',
        'imprint.legalNotices1': 'Wir weisen darauf hin, dass Informationen auf dieser Website technische Ungenauigkeiten oder typografische Fehler enthalten können. Wir behalten uns das Recht vor, die Informationen auf dieser Website jederzeit und ohne vorherige Ankündigung zu ändern oder zu aktualisieren.',
        'imprint.legalNotices2': 'Alle auf unserer Website veröffentlichten Werke oder Werkteile, wie Texte, Dateien, Kompositionen und Bilder, sind urheberrechtlich geschützt. Jede weitere Veröffentlichung, Vervielfältigung, Verbreitung oder sonstige Nutzung – auch auszugsweise – bedarf der schriftlichen Genehmigung der Apple & Lime GmbH.',
        'imprint.copyrightTitle': 'Urheberrecht',
        'imprint.copyrightText': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',

        // Privacy Policy Page
        'privacy.title': 'Datenschutzerklärung',
        'privacy.intro': 'Datenschutz ist für uns, die Do-it-yourself-Garage und die Santoro & Wiederkehr AG als Betreiberin der Seite, ein zentrales Anliegen. Wir möchten jederzeit sicherstellen, dass Ihre Privatsphäre bei der Nutzung unserer Website geschützt ist und bleibt.',
        'privacy.sec1Title': 'ALLGEMEINES',
        'privacy.sec1Text': 'Wir erheben, verarbeiten oder nutzen Ihre Daten nur, wenn Sie uns Ihre Einwilligung erteilt haben oder eine gesetzliche Vorschrift uns die Verarbeitung oder Nutzung gestattet. Dabei halten wir uns an die geltenden gesetzlichen Bestimmungen zum Datenschutz, insbesondere an die Bestimmungen des Bundesgesetzes über den Datenschutz ("DSG"), des Bundesdatenschutzgesetzes ("BDSG") und der Europäischen Datenschutz-Grundverordnung ("DSGVO").',
        'privacy.sec2Title': 'WAS SIND PERSONENBEZOGENE DATEN?',
        'privacy.sec2Text': 'Das Bundesgesetz über den Datenschutz beschreibt personenbezogene Daten als Einzelangaben über persönliche und sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person. Dazu gehören unter anderem Daten wie Name, Adresse, Geburtsdatum/Alter, Geschlecht, Telefonnummer und E-Mail-Adresse.',
        'privacy.sec3Title': 'ZU WELCHEM ZWECK ERHEBEN, VERARBEITEN UND NUTZEN WIR PERSONENBEZOGENE DATEN?',
        'privacy.sec3Item1': 'Zur Abwicklung Ihrer Bestellungen, einschliesslich Lieferung und produktbezogener Dienstleistungen',
        'privacy.sec3Item2': 'Für die Abwicklung des Zahlungsverkehrs',
        'privacy.sec3Item3': 'Zur Beantwortung Ihrer Anfragen',
        'privacy.sec3Item4': 'Zum Versand unseres Newsletters, sofern Sie uns hierzu Ihre Einwilligung erteilt haben',
        'privacy.sec4Title': 'WELCHE INFORMATIONEN ERHEBEN WIR DABEI?',
        'privacy.sec4Text': 'Es werden nur Informationen erhoben, gespeichert und verarbeitet, die Sie in unserem Online-Shop eingeben oder uns in sonstiger Weise übermitteln. Es steht Ihnen frei, bestimmte Angaben nicht zu machen – dies kann jedoch dazu führen, dass Ihnen manche unserer Angebote, Dienste oder Funktionen nicht zur Verfügung stehen.',
        'privacy.sec5Title': 'EINWILLIGUNG UND WIDERRUF',
        'privacy.sec5Text1': 'Mit der Reservationsanfrage werden Ihr Vorname, Nachname und Ihre E-Mail-Adresse mit Ihrer Einwilligung für eigene Werbezwecke genutzt. Wenn Sie uns eine Einwilligung zur Nutzung, Verarbeitung und Übermittlung Ihrer personenbezogenen Daten zum Zweck des Newsletter-Versands oder für sonstige Marketingzwecke erteilt haben, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft ohne Einhaltung einer bestimmten Form oder Frist widerrufen. Zudem können Sie dieser Nutzung widersprechen – soweit wir Ihre Daten im gesetzlich zulässigen Rahmen, etwa für postalische Marketingmassnahmen, nutzen. In beiden Fällen können Sie uns eine formlose Mitteilung per Post an folgende Adresse senden:',
        'privacy.sec5Text2': 'Nach Eingang Ihres Widerrufs oder Widerspruchs werden wir die betreffenden Daten nicht mehr für andere Zwecke als die Abwicklung Ihrer Bestellung nutzen, verarbeiten und übermitteln und die Zusendung von Werbemitteln einstellen.',
        'privacy.sec6Title': 'GEBEN WIR PERSONENBEZOGENE DATEN AN DRITTE WEITER?',
        'privacy.sec6Text': 'Wir versichern Ihnen, dass wir Ihre personenbezogenen Daten nicht an Dritte weitergeben, es sei denn, wir sind gesetzlich dazu verpflichtet oder Sie haben uns zuvor Ihre Einwilligung erteilt. Die an Dritte weitergegebenen Daten werden von diesen ausschliesslich zur Erfüllung der ihnen obliegenden Pflichten oder Aufgaben verwendet.',
        'privacy.sec7Title': 'WIE LANGE WERDEN DIE DATEN GESPEICHERT?',
        'privacy.sec7Text': 'Nur so lange, wie es für die Abwicklung unserer Dienstleistungen erforderlich ist oder gesetzliche Aufbewahrungspflichten dies verlangen, maximal jedoch fünf Jahre.',
        'privacy.sec8Title': 'WIE SICHERN WIR IHRE DATEN?',
        'privacy.sec8Text': 'Wir treffen technische und organisatorische Sicherheitsmassnahmen, um Ihre Daten gegen Verlust, Manipulation oder unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmassnahmen passen wir der fortlaufenden technischen Entwicklung regelmässig an.',
        'privacy.sec9Title': 'DATENERHEBUNG DURCH COOKIES',
        'privacy.sec9Text1': 'Wir verwenden Cookies (kleine Textdateien, die auf der Festplatte Ihres Computers abgelegt werden), um Ihnen das Navigieren zu erleichtern. Nur durch diese Session-Cookies können Sie die seitenübergreifende Warenkorbanzeige nutzen – und bequem ablesen, wie viele Artikel sich aktuell in Ihrem Warenkorb befinden und wie hoch der aktuelle Einkaufswert ist.',
        'privacy.sec9Text2': 'Beim Besuch unserer Website werden durch das Setzen von Cookies automatisch auch technische und statistische Daten über die Nutzung von Cookies erhoben. Dies betrifft folgende Daten:',
        'privacy.sec9Text3': 'Diese Daten dienen der kontinuierlichen Verbesserung unserer Website und werden ausschliesslich statistisch und anonym ausgewertet.',
        'privacy.sec9Text4': 'Wenn Sie die Verwendung von Cookies nicht wünschen, bitten wir Sie, von der Möglichkeit Ihres Browsers zum Blockieren von Cookies Gebrauch zu machen. Wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen unseres Online-Shops vollumfänglich nutzen können.',
        'privacy.sec10Title': 'DATENERHEBUNG DURCH DIE NUTZUNG VON GOOGLE ANALYTICS',
        'privacy.sec10Text': 'Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. ("Google"). Google Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren (http://tools.google.com/dlpage/gaoptout?hl=de).',
        'privacy.sec11Title': 'LINKS ZU EXTERNEN WEBSITES',
        'privacy.sec11Text': 'Die Website der Do-it-yourself-Garage der Santoro & Wiederkehr AG und diese Datenschutzerklärung enthalten Links zu externen Websites, auf deren Inhalte die Santoro & Wiederkehr AG keinen Einfluss hat. Deshalb kann die Santoro & Wiederkehr AG für diese fremden Inhalte auch keine Gewähr, Haftung oder Garantie übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        'privacy.sec12Title': 'WO ERHALTEN SIE AUSKUNFT ÜBER IHRE BEI UNS GESPEICHERTEN DATEN?',
        'privacy.sec12Text': 'Sie haben das Recht, jederzeit unentgeltlich Auskunft über Ihre bei uns gespeicherten Daten zu verlangen. Sollten Ihre Daten unrichtig oder fälschlicherweise gespeichert sein, werden wir diese gerne korrigieren, sperren oder löschen. Bitte richten Sie Ihre Auskunftsbegehren oder datenschutzrechtlichen Anfragen an:',
        'privacy.sec13Title': 'ÄNDERUNGEN DIESER DATENSCHUTZERKLÄRUNG',
        'privacy.sec13Text': 'Wir behalten uns das Recht vor, die Datenschutzerklärung erforderlichenfalls zu ändern oder anzupassen. Wir werden die Änderung an dieser Stelle veröffentlichen. Daher sollten Sie diese Website regelmässig besuchen, um sich über den aktuellen Stand der Datenschutzerklärung zu informieren.',

        // Contact Us Page
        'contact.callUs': 'Ruf uns an',
        'contact.reserveTitle': 'Reserviere deinen Platz',
        'contact.reserveNotice': 'Bitte sende uns deine Reservationen und Anfragen telefonisch. Du erreichst uns Montag bis Freitag von 08:00 - 19:00 Uhr. Samstags sind wir nur nach Vereinbarung geöffnet.',
        'contact.writeTitle': 'Schreibe uns',
        'contact.writeP1': 'Per E-Mail oder mit dem Reservationsformular geht\'s natürlich rund um die Uhr. Eine solche Reservation ist erst dann gültig, wenn sie von uns schriftlich oder telefonisch bestätigt wurde.',
        'contact.writeP2': 'Bitte beachte: Wenn du Ersatzteile benötigst, musst du deinen Garagenplatz mindestens 10 Tage im Voraus reservieren. Um Ersatzteile zu bestellen, brauchen wir die technischen Angaben deines Fahrzeugs, inklusive Typenschein-Nummer, die du im Fahrzeugausweis findest.',
        'contact.formName': 'Vorname und Name (Pflichtfeld)',
        'contact.formPhone': 'Mobile Nummer (Pflichtfeld)',
        'contact.formEmail': 'Deine E-Mail (Pflichtfeld)',
        'contact.formDate': 'Gewünschtes Check-in Datum',
        'contact.formSpecs': 'Typenschein-Nummer (zu finden im Fahrzeugausweis), Marke, Modell, Jahrgang',
        'contact.formMsg': 'Deine Mitteilung an uns. Bitte beachte, bei Ersatzteilen frühzeitig den Garagenplatz zu reservieren.',
        'contact.formSubmit': 'RESERVATIONSANFRAGE ABSCHICKEN',
    },
    en: {
        // Navigation Header
        'nav.home': 'Home',
        'nav.doItYourself': 'Do-it-yourself',
        'nav.yourWorkplace': 'Your workplace',
        'nav.ourOffers': 'Our offers',
        'nav.aboutUs': 'About us',
        'nav.contactNow': 'Contact Now',

        // Footer
        'footer.addressTitle': 'Address',
        'footer.companyName': 'Do-it-yourself garage',
        'footer.companySub': 'Santoro & Wiederkehr AG',
        'footer.addressStreet': 'Kaiserstuhlstrasse 79',
        'footer.addressCity': 'CH-8154 Oberglatt',
        'footer.hoursTitle': 'Opening hours',
        'footer.monFri': 'Monday – Friday:',
        'footer.sat': 'Saturday:',
        'footer.sun': 'Sunday:',
        'footer.closed': 'Closed',
        'footer.appointmentOnly': '* By appointment only',
        'footer.contactTitle': 'Contact Now',
        'footer.imprint': 'Imprint',
        'footer.privacy': 'Privacy Policy',
        'footer.rights': 'All Rights Reserved.',

        // Common Opening Hours Section
        'hours.title': 'Opening hours',
        'hours.notice': 'Please note: Last check-in time at 6:00 p.m., as we expect a minimum of one hour of service time.',
        'hours.monFriTime': '08:00 am - 06:30 pm',
        'hours.satTime': 'By appointment',
        'hours.sunTime': 'Closed',
        'hours.sunShort': 'Sun',

        // Hero Carousel
        'hero.slide1Title': 'Wheel Change\nin the blink of an eye.',
        'hero.slide1Sub': 'Store your tires or wheels with us,\n come by and they will be changed in no time.',
        'hero.slide2Title': 'There is hardly a spare part that\nwe cannot procure.',
        'hero.slide2Sub': 'Whatever parts you need, we are your\ncontact. Ordered to us and quickly\nassembled.',
        'hero.slide3Title': 'Fancy more power?\nWe are your tuning experts.',
        'hero.slide3Sub': 'It\'s not always "just" about repairing or\nrestoring. Do you want the wolf in sheep\'s\nclothing? Everything is possible.',
        'hero.slide4Title': 'We can do almost anything.\nAlso saddlery work.',
        'hero.slide4Sub': 'With our partners, we cover the entire area of\nvehicle restoration and repair. We will be\nhappy to advise you.',

        // Home Page
        'home.introQuestion': 'What is a do-it-yourself garage?',
        'home.introHeadlinePart1': 'It\'s simple: You want to work on your vehicle. We have the ',
        'home.introHeadlineRed': 'professional equipment.',
        'home.introP1': 'You have an old car. A really old one. A classic car. Or a new one. It doesn\'t matter. The fact is that you like your car so much that you don\'t want to let anyone do it. And by no one do you mean: no one but yourself.',
        'home.introP2': 'We can understand you well. Because we understand cars. That\'s exactly why we at Santoro & Wiederkehr AG have created the do-it-yourself garage. Here you can do everything yourself: take your car apart down to the last fuel injector, change the tires, check the brakes, carry out air conditioning service, do an emissions test, prepare for the MFK ... In short: You can do whatever comes to mind with your darling on four wheels. It\'s your car. And of course your responsibility to ensure that everything really works in accordance with the law* after the work is done. But don\'t worry: If you need support, we\'re here for you. Just tell us, and we\'ll look over your shoulder as you do it yourself.',

        // Implementation Section
        'impl.subtitle': 'Implementation',
        'impl.headlinePart1': 'Come by and turn your car into a ',
        'impl.headlineRed': 'masterpiece.',
        'impl.p1': 'In the do-it-yourself garage, all the infrastructure is at your disposal, from the tools to the appliances. And if something doesn\'t work out, you just call Gino. Exactly, this is the man you know from Swiss television. It is precisely there, in the programme "Pimp it or kick it", that Gino regularly shows amateurs how they can repair their cars themselves. But if we understand correctly, as an ambitious do-it-yourself mechanic, you are definitely not a layman. And now: Off to the lift with you. Sorry, with your car.',
        'impl.p2': 'And this is what it looks like when the "do-it-yourselfers" lend a hand themselves and swap briefcases for tools.',

        // Questions Contact Section
        'questions.subtitle': 'Just no inhibitions',
        'questions.headline': 'Do you have any questions? We know the answers.',
        'questions.phone': '+41 79 766 99 60',

        // Do It Yourself Page
        'diy.subtitle': 'You can do it. All by yourself. Do it yourself.',
        'diy.headline': 'Rent a garage space with a car lift - repair the car yourself.',
        'diy.introP1': 'The do-it-yourself garage is well organized. To ensure that the management of the workstations, the provision of tools and equipment and the disposition of any spare parts that may be required run smoothly, you should reserve your workstation at least 5 working days in advance.',
        'diy.introP2': 'This is how easy it is to get your classic car - or any current vehicle model - in shape in four steps:',
        'diy.step1Title': 'You register with the Do-it-yourself-Garage',
        'diy.step1Content': 'Together we will discuss your needs and select the workplace that is best suited to your project.',
        'diy.step2Title': 'You\'ll be driving in with us',
        'diy.step2Content': 'On the big day of DIY and self-medying, you park your car in a parking lot at Siewerdtstrasse 5 and report to the reception. You will be instructed in your workplace by our staff and will receive the tools as well as the ordered spare parts or accessories.',
        'diy.step3Title': 'You work on your vehicle',
        'diy.step3Content': 'You can get refreshments at any time during your work. After all, you are now your own boss and can take breaks whenever you want. And if you have any questions or problems, just contact our staff, who will be happy to help and advise you.',
        'diy.step4Title': 'You check out',
        'diy.step4Content1': 'When you\'ve finished your work, prepare the workstation and tools for return, clean them and put them back in their place - order is a must.',
        'diy.step4Content2': 'At the reception you will receive the bill, which you can check and pay. And then it\'s time to drive off with your brand-new, so to speak, but definitely self-pimped car!',
        'diy.calloutTitle': 'It\'s all super simple, right?',
        'diy.calloutP1': 'So, if a screw is loose on your car, it\'s best to contact us right away. You can do it again.',
        'diy.calloutP2': 'Contact us and secure your assembly space for your next vehicle project in good time!',
        'diy.reservationTitle': 'RESERVATION',
        'diy.reservationSub': 'Contact form, e-mail or call',

        // Your Workplace Page
        'workplace.subtitle': 'Our garage - your workplace',
        'workplace.headline': 'In the workshop, you are your own boss.',
        'workplace.p1': 'The do-it-yourself garage offers perfect working conditions for you and your car. Each of the five sites is equipped with a car lift, clean, well lit and well ventilated. A well-stocked and tidy tool cabinet is also available. In addition, there is all the equipment that the self-made car mechanic\'s heart desires: washing pit, diagnostic devices for almost all brands, brake test bench, air conditioning service unit, exhaust gas test devices for diesel and gasoline and much more...',
        'workplace.p2': 'When you reserve a place with us, we will discuss in advance exactly whether you need any accessories or spare parts - and which ones. You can get them from us at preferential conditions, and when you drive in with us, they are ready for you. Of course, we always have enough common, non-brand-specific consumables such as engine oil, straps, screws, etc. in stock.',
        'workplace.breakHeadline': 'Take breaks as needed!',
        'workplace.breakHighlight': 'Even the greatest fighter has to recover in between. No, not in a cave. Nowadays, the best way to do this is at our coffee machine – from our coffee partner "Espressa".',
        'workplace.breakP1': 'The best Italian coffee with a delicious aroma is waiting for you. Brand? Lavazza – more than just taste. And for the small hunger in between, a snack machine is ready for you. Sink into our comfortable lounge and treat yourself to a short break. You\'ve certainly earned it. So, after the little break, it\'s back to work. You didn\'t come to enjoy the finest Italian coffee, but to work on your vehicle. So let\'s go, hop-hop, back to the workshop.',
        'workplace.breakPS': 'PS: Do you want the southern coffee enjoyment for your home or office? Then we can warmly recommend our partner "Espressa". As we all know, life is too short to drink bad coffee.',
        'workplace.safetyHeadline': 'Safety first',
        'workplace.safetyHighlight': 'Your safety comes first. Without wanting to paint the devil on the wall, but preventive safety is a must. For you, the other customers and us.',
        'workplace.accidentTitle': 'Risk of accident',
        'workplace.accidentDesc': 'Anyone who causes damage to us, or to a customer or his vehicle in our company is liable for this. To make it easier to prove damage, we continuously record the incidents in our company. Staying in our company and working with our equipment is at your own risk. This important notice can also be found on all entrance doors.',
        'workplace.theftTitle': 'Risk of theft',
        'workplace.theftDesc': 'Please lock away your valuables. Where? For example, in the glove compartment. You can also drop off smaller items such as keys, wallets or watches at our counter. We\'ll lock them away for you. The do-it-yourself garage is not liable for theft.',

        // Our Offers Page
        'offers.subtitle': 'We\'ll get it for you',
        'offers.headline': 'Bring your car. We\'ll take care of the rest for you.',
        'offers.p1': 'You have an old car. A really old one. A classic car. Or a new one.. It doesn\'t matter. The fact is that you like your car so much that you don\'t want to let anyone do it. And by no one do you mean: no one but yourself.',
        'offers.checklistSubtitle': 'Even cheaper:',
        'offers.checklistHeadline': 'No more basic tax with immediate effect!',
        'offers.checklistIntro': 'You can do all this in the do-it-yourself garage:',
        'offers.check1': 'Rent a garage workstation by the hour with a car lift and everything that goes with it to repair your car yourself',
        'offers.check2': 'Rent a washing pit or a large space by the hour',
        'offers.check3': 'As a renter, you can obtain spare parts and accessories at favourable conditions',
        'offers.check4': 'Get help from one of our mechanics and show you how to repair and maintain your car yourself',
        'offers.check5': 'Bring your own accessories and spare parts or order them from us in advance',
        'offers.check6': 'Dispose of replaced liquids and materials of all kinds',
        'offers.check7': 'Bring your own tools or use our professionally equipped tool range',
        'offers.rentSubtitle': 'Rent instead of buying yourself',
        'offers.rentHeadline': 'What does it all cost you?',
        'offers.rentP1': 'Surprisingly little. Well, maybe it\'s not that surprising when you consider that you have to do everything yourself. But don\'t worry. We are here for you if you need us.',
        'offers.rentP2': 'Even our car mechanics will support you for a sandwich, so to speak. See for yourself by taking a look at the price list: You can save a lot of money with us. Rent a garage instead of buying everything yourself.',
        'offers.rentP3': 'Mind you: If you don\'t want to do anything yourself, then you\'ve come to the right place. After all, the do-it-yourself garage is run by Garage Santoro & Wiederkehr AG. And they understand cars. No matter what brand or year of manufacture. So if your car needs a repair or service, you should come to us anyway.',
        'offers.rentP4': 'By the way: As a tenant of a workplace, you can buy service parts at favorable conditions. We are happy to answer any specific requests.',
        'offers.priceHeadline': 'Price list',
        'offers.priceNotice': 'Prices are in Swiss francs excl. VAT. As of 07.2022 | Subject to change',
        'offers.tableHeaderOffers': 'Offers',
        'offers.tableHeaderPrices': 'Prices',
        'offers.dispensingNotice': 'All special tools are available at the dispensing counter',
        'offers.price1': 'Flat rate for disposal and cleaning',
        'offers.price2': 'Work lift and tool rental per hour',
        'offers.price3': 'Evaporate the engine and chassis on the washing pit',
        'offers.price4': 'Washing pit in connection with workstation',
        'offers.price5': 'Diagnostics on the vehicle without tools',
        'offers.price6': 'Diagnostic tool for all vehicles',
        'offers.price7': 'Mounting tires ( 4 x ) on rim incl. balancing weights | Prerequisite: Experience with work equipment',
        'offers.price8': 'Brake test on brake test bench',
        'offers.price9': 'Oil and oil filter replacement incl. Altoel disposal',
        'offers.price10': 'Overnight stay | Storage of your vehicle per night',
        'offers.price11': 'With the help of a professional per hour | You will be charged at CHF 2 per minute',
        'offers.price12': '1 litre engine oil 10W40',
        'offers.price13': '1 litre engine oil 5W30',
        'offers.price14': '1 can of brake cleaner',
        'offers.paymentTitle': 'Means of payment',
        'offers.paymentDesc': 'We accept the following cards and of course cash. But no Bitcoins and no WE.',

        // About Us Page
        'about.subtitle': 'Who are we?',
        'about.headlinePart1': 'We are S&W. And we are the car ',
        'about.headlineRed': 'whisperers.',
        'about.highlightP': 'We not only have our own vehicles tinkered with in our garage, but we also repair, maintain, maintain, tune, refine and beautify your new car or classic car ourselves.',
        'about.p1': 'Gino Santoro, the car mechanic, whom they also call the car whisperer, prefers to do (almost) everything himself.',
        'about.p2': 'At some point, he had the clever idea that others could feel exactly the same. So the chief mechanic and co-owner of Garage Santoro & Wiederkehr AG set up a concept to make his garage available to people with skilled hands who want to repair and maintain their cars themselves.',
        'about.p3': 'Who can still remember the show "Pimp it or kick it" on SRF 2? In this regularly broadcast program, Gino Santoro did just that: make his garage available to laymen who could maintain their cars there themselves and prepare them for motor vehicle inspections. Of course, under his watchful eye, which looked over the shoulders of the TV mechanics, sometimes sternly, sometimes mischievously. Just come by for a jump.',
        'about.expHeadline': 'Over 85 years of ',
        'about.expRed': 'experience',
        'about.expHighlight': 'With Gino Santoro and his team, you will find many years of experience.',
        'about.expBody': 'His well-rehearsed team – all trained car mechanics – are happy when it comes to tuning and refinements. Come by.',
        'about.heartHeadline': 'With joy and ',
        'about.heartRed': 'heart',
        'about.heartHighlight': 'Classic car lovers and car mechanics with heart and soul with a huge amount of experience.',
        'about.heartBody1': 'Last but not least, Gino did not let go of the idea of a do-it-yourself garage because he himself is an incorrigible classic car lover. And these guys do a lot of things themselves – often out of necessity, because no one else understands their car anymore.',
        'about.heartBody2': 'So, classic car fans, this is exactly where you can do it. By the way, Gino himself maintains and maintains a fleet of over 30 classic cars in this garage together with his team, all of which are privately owned.',

        // Imprint Page
        'imprint.title': 'Imprint',
        'imprint.providerTitle': 'Provider of this website',
        'imprint.managingDirector': 'Managing Director: Luigi Santoro',
        'imprint.conceptionTitle': 'Conception and implementation',
        'imprint.legalNoticesTitle': 'Legal Notices',
        'imprint.legalNotices1': 'Please note that information on this site may contain technical inaccuracies or typographical errors. We reserve the right to change or update the information on this website at any time and without prior notice.',
        'imprint.legalNotices2': 'All works or parts of works published on our website, such as texts, files, compositions and images, are protected by copyright. Any further publication, duplication, distribution or other use – even in excerpts – requires the written permission of Apple & Lime GmbH.',
        'imprint.copyrightTitle': 'Copyright',
        'imprint.copyrightText': 'The content and works on these pages created by the site operators are subject to Swiss copyright law. Duplication, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this page was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is marked as such. If you nevertheless become aware of a copyright infringement, we ask you to notify us accordingly. If we become aware of any infringements, we will remove such content immediately.',

        // Privacy Policy Page
        'privacy.title': 'Privacy Policy',
        'privacy.intro': 'Data protection is a fundamental concern for us, the Do-it-yourself-Garage and Santoro & Wiederkehr AG as the operator of the site. We want to ensure at all times that your privacy is and remains protected when using our website.',
        'privacy.sec1Title': 'GENERAL',
        'privacy.sec1Text': 'We will only collect, process or use your data if you give us your consent or if a legal provision allows us to process or use it. In doing so, we comply with the applicable legal requirements on data protection, in particular the provisions of the Federal Data Protection Act, the Federal Data Protection Act ("BDSG") and the European Data Protection Act Regulation ("GDPR").',
        'privacy.sec2Title': 'WHAT IS PERSONAL DATA?',
        'privacy.sec2Text': 'The Federal Data Protection Act describes personal data as individual information about the personal and factual circumstances of a specific or identifiable natural person. This includes, but is not limited to, data such as your name, address, date of birth/age, gender, telephone number and email address.',
        'privacy.sec3Title': 'FOR WHAT PURPOSE DO WE COLLECT, PROCESS AND USE PERSONAL DATA?',
        'privacy.sec3Item1': 'To process your orders, including delivery and services related to the order',
        'privacy.sec3Item2': 'For the processing of the payment process',
        'privacy.sec3Item3': 'To answer your questions',
        'privacy.sec3Item4': 'To send us our newsletter, insofar as you have given us your consent to do so',
        'privacy.sec4Title': 'WHAT INFORMATION DO WE COLLECT IN THE PROCESS?',
        'privacy.sec4Text': 'Only information that you enter on our online shop or transmit to us in any other way is collected, stored and processed. You have the freedom not to provide certain information – but this may mean that some of our offers, services or features are not available to you.',
        'privacy.sec5Title': 'CONSENT AND REVOCATION',
        'privacy.sec5Text1': 'With the reservation request, your first name, last name and e-mail address will be used for your own advertising purposes with your consent. If you have given us your consent to the use, processing and transmission of your personal data for the purpose of sending the newsletter or for other marketing purposes, you can revoke this consent at any time with effect for the future without observing a specific form or deadline. In addition, you can object to this use – insofar as we use your data within the legally permissible framework, for example for postal marketing measures. In both cases, you can send us an informal message by post to the following address:',
        'privacy.sec5Text2': 'After receipt of your revocation or objection, we will no longer use, process and transmit the data concerned for purposes other than the processing of your order and will cease to send you advertising material, including our catalogues.',
        'privacy.sec6Title': 'DO WE SHARE PERSONAL INFORMATION WITH THIRD PARTIES?',
        'privacy.sec6Text': 'We assure you that we will not pass on your personal data to third parties unless we are legally obliged to do so or you have given us your prior consent. The data disclosed to third parties will be used by them exclusively for the fulfilment of the obligations or tasks incumbent on them.',
        'privacy.sec7Title': 'HOW LONG WILL THE DATA BE RETAINED?',
        'privacy.sec7Text': 'Only for as long as it is necessary for the processing of our services, or as required by legal obligations, but for a maximum of five years.',
        'privacy.sec8Title': 'HOW DO WE SECURE YOUR DATA?',
        'privacy.sec8Text': 'We have technical and organizational measures in place to protect your data against loss, manipulation or unauthorized access by third parties. We regularly adapt our security measures to ongoing technical developments.',
        'privacy.sec9Title': 'DATA COLLECTION THROUGH COOKIES',
        'privacy.sec9Text1': 'We use cookies (small text files that are stored on your computer\'s hard drive) to make it easier for you to navigate. Only through these session cookies can you use the cross-site shopping cart display – and conveniently read how many items are currently in your shopping cart and how high the current purchase value is.',
        'privacy.sec9Text2': 'When you visit our website, technical and statistical data about the use of cookies are also automatically collected by setting cookies. This concerns the following data:',
        'privacy.sec9Text3': 'This data serves the continuous improvement of our website and is evaluated exclusively statistically and anonymously.',
        'privacy.sec9Text4': 'If you do not wish the use of cookies, we ask you to make use of the option of your browser to block cookies. However we would like to point out that in this case you may not be able to use all the functions of our online shop to their full extent.',
        'privacy.sec10Title': 'COLLECTION OF DATA THROUGH THE USE OF GOOGLE ANALYTICS',
        'privacy.sec10Text': 'This website uses Google Analytics, a web analysis service provided by Google Inc. ("Google"). Google Analytics uses so-called "cookies", text files that are stored on your computer and enable an analysis of your use of the website. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. However, in the event that IP anonymization is activated on this website, your IP address will be shortened by Google beforehand within member states of the European Union or in other contracting states of the Agreement on the European Economic Area. Only in exceptional cases is the full IP address transmitted to a Google server in the USA and shortened there. On behalf of the operator of this website, Google will use this information to evaluate your use of the website, to compile reports on website activity and to provide other services related to website activity and internet use to the website operator. The IP address transmitted by your browser as part of Google Analytics will not be merged with other data held by Google. You can prevent the storage of cookies by setting your browser software accordingly; however, we would like to point out that in this case you may not be able to use all the functions of this website to their full extent. You can also prevent the collection of the data generated by the cookie and related to your use of the website (including your IP address) by Google and the processing of this data by Google by downloading and installing the browser plug-in available under the following link (http://tools.google.com/dlpage/gaoptout?hl=de).',
        'privacy.sec11Title': 'LINKS TO EXTERNAL WEBSITES',
        'privacy.sec11Text': 'The Do-it-yourself-Garage website of Santoro & Wiederkehr AG and this privacy policy contain links to external websites, the content of which Santoro & Wiederkehr AG has no influence on. Therefore, Santoro & Wiederkehr AG cannot assume any liability for the content, quality, nature or reliability of these external websites. The setting of a link does not imply any endorsement or approval of the information or services offered on the respective pages. The respective provider or operator of the pages is solely responsible for the content of the linked pages.',
        'privacy.sec12Title': 'WHERE CAN YOU GET INFORMATION ABOUT YOUR DATA STORED BY US?',
        'privacy.sec12Text': 'You have the right to request information about your data stored by us at any time, free of charge. If your data is inaccurate or wrongly stored, we will be happy to correct, block or delete it. We ask you to inform us if there have been any changes to your personal data. Please direct your requests for information or data protection inquiries to:',
        'privacy.sec13Title': 'CHANGES TO THIS PRIVACY POLICY',
        'privacy.sec13Text': 'We reserve the right to change or amend the Privacy Policy as necessary. We will publish the change here. Therefore, you should visit this website regularly to inform yourself about the current status of the privacy policy.',

        // Contact Us Page
        'contact.callUs': 'Call us',
        'contact.reserveTitle': 'Reserve your place',
        'contact.reserveNotice': 'Please send your reservations and inquiries to us by phone. You can reach us Monday to Friday, from 08:00 - 19:00. On Saturdays we are open by appointment only.',
        'contact.writeTitle': 'Write to us',
        'contact.writeP1': 'By e-mail or with the reservation form, it is of course possible around the clock. Such a reservation is only valid if it has been confirmed by us in writing or by telephone.',
        'contact.writeP2': 'Please note: If you need spare parts, you must reserve your garage space at least 10 days in advance. To order spare parts, we need the technical specifications of your vehicle, including the type certificate number, which you can find in the vehicle registration document.',
        'contact.formName': 'First name and surname (required)',
        'contact.formPhone': 'Mobile number (required)',
        'contact.formEmail': 'Your e-mail (required)',
        'contact.formDate': 'Desired check-in date',
        'contact.formSpecs': 'Type certificate number (to be found in the vehicle registration document), make, model, year',
        'contact.formMsg': 'Your message to us. Please make sure to reserve the garage space early for spare parts.',
        'contact.formSubmit': 'SEND RESERVATION REQUEST',
    },
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'de',
    setLanguage: () => { },
    t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Default language is 'de' (German)
    const [language, setLanguageState] = useState<Language>(() => {
        const savedLang = localStorage.getItem('app_lang');
        return savedLang === 'en' || savedLang === 'de' ? savedLang : 'de';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('app_lang', lang);
    };

    const t = (key: string): string => {
        return translations[language][key] || translations['de'][key] || key;
    };

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
